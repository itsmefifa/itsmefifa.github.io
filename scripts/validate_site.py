"""Validate the public static site with Python's standard library.

Run `python scripts/validate_site.py`; add --check-external for an advisory
network check. HTTP errors and blocked requests are reported separately.
"""
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
import argparse
import sys

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://itsmefifa.github.io'
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
        'meta', 'param', 'source', 'track', 'wbr'}


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids, self.refs, self.errors, self.stack = [], [], [], []
        self.h1 = 0
        self.has_title = self.has_description = self.has_main = False
        self.canonical = None

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        line = self.getpos()[0]
        if tag not in VOID:
            self.stack.append(tag)
        if 'id' in a:
            self.ids.append(a['id'])
        if tag == 'html' and not a.get('lang'):
            self.errors.append('missing document language')
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.has_title = True
        if tag == 'main':
            self.has_main = True
        if tag == 'meta' and a.get('name') == 'description' and a.get('content'):
            self.has_description = True
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a.get('href')
        if tag == 'a' and a.get('target') == '_blank' and 'noopener' not in a.get('rel', ''):
            self.errors.append(f'line {line}: new-tab link missing noopener')
        if tag == 'img':
            if 'alt' not in a:
                self.errors.append(f'line {line}: image missing alt')
            if not all(a.get(k, '').isdigit() and int(a[k]) > 0 for k in ('width', 'height')):
                self.errors.append(f'line {line}: image missing positive dimensions')
        for key in ('href', 'src', 'data-full'):
            if a.get(key):
                self.refs.append((a[key], line))
        if a.get('srcset'):
            for candidate in a['srcset'].split(','):
                self.refs.append((candidate.strip().rsplit(' ', 1)[0], line))

    def handle_endtag(self, tag):
        if not self.stack or self.stack[-1] != tag:
            self.errors.append(f'line {self.getpos()[0]}: unexpected closing {tag}')
        else:
            self.stack.pop()


def local_target(value, source):
    route = '/' + source.relative_to(ROOT).as_posix()
    target = urlsplit(urljoin(ORIGIN + route, value))
    if target.scheme not in ('http', 'https') or target.netloc != urlsplit(ORIGIN).netloc:
        return None
    path = (ROOT / unquote(target.path).lstrip('/')).resolve()
    if not path.is_relative_to(ROOT):
        raise ValueError(f'path escapes the site root: {value}')
    if path.is_dir():
        path = path / 'index.html'
    return path, unquote(target.fragment)


def collect_site():
    pending = [ROOT / 'index.html']
    pages, files, external, errors = {}, set(), set(), []
    while pending:
        path = pending.pop()
        if path in pages:
            continue
        if not path.is_file():
            errors.append(f'missing page: {path.relative_to(ROOT)}')
            continue
        page = Page(path)
        page.feed(path.read_text(encoding='utf-8'))
        pages[path] = page
        files.add(path)
        if page.stack:
            page.errors.append(f'unclosed tags: {page.stack}')
        page.errors += [f'duplicate id: {id}' for id, n in Counter(page.ids).items() if n > 1]
        if page.h1 != 1:
            page.errors.append(f'expected one h1, found {page.h1}')
        if not all((page.has_title, page.has_description, page.has_main)):
            page.errors.append('missing title, description, or main landmark')
        relative = path.relative_to(ROOT).as_posix()
        route = '/' + relative.removesuffix('index.html')
        if page.canonical != ORIGIN + route:
            page.errors.append(f'canonical should be {ORIGIN + route}')
        errors.extend(f'{relative}: {message}' for message in page.errors)
        for value, line in page.refs:
            target = local_target(value, path)
            if target:
                resource, _ = target
                if not resource.is_file():
                    errors.append(f'{relative}:{line}: missing local target {value}')
                else:
                    files.add(resource)
                    if resource.suffix == '.html':
                        pending.append(resource)
            elif value.startswith(('https://', 'http://')):
                external.add(value)
    for path, page in pages.items():
        for value, line in page.refs:
            target = local_target(value, path)
            if target and target[1] and target[0] in pages:
                if target[1] not in pages[target[0]].ids:
                    errors.append(f'{path.relative_to(ROOT)}:{line}: missing fragment {value}')
    # Social previews are metadata URLs rather than visible image elements.
    files.add(ROOT / 'assets/og/og-image.png')
    return pages, files, external, errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check-external', action='store_true')
    args = parser.parse_args()
    pages, files, external, errors = collect_site()
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print(f'PASS: {len(pages)} pages; local files, cross-page fragments, metadata, HTML nesting, and image dimensions.')
    print(f'{len(files)} public files; {len(external)} unique external URLs.')
    if args.check_external:
        from concurrent.futures import ThreadPoolExecutor
        from urllib.error import HTTPError
        from urllib.request import Request, urlopen

        def check(url):
            try:
                with urlopen(Request(url, headers={'User-Agent': 'Portfolio-Link-Check/1.0'}), timeout=12) as response:
                    return f'{response.status}: {url}'
            except HTTPError as error:
                label = 'REVIEW' if error.code in (404, 410) else 'UNVERIFIED'
                return f'{label} (HTTP {error.code}): {url}'
            except (OSError, ValueError) as error:
                return f'UNVERIFIED ({type(error).__name__}): {url}'
        with ThreadPoolExecutor(max_workers=6) as pool:
            for result in pool.map(check, sorted(external)):
                print(result)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
