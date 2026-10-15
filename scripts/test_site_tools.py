"""Regression checks for link validation and the deployment boundary."""
from pathlib import Path
import shutil
from uuid import uuid4
from unittest import TestCase, main
from unittest.mock import patch
import prepare_site
import validate_site


def document(body, route='/'):
    return ('<!DOCTYPE html><html lang="en"><head><title>Fixture</title>'
            '<meta name="description" content="Fixture page">'
            f'<link rel="canonical" href="https://itsmefifa.github.io{route}">'
            '</head><body><main id="main"><h1>Fixture</h1>' + body +
            '</main></body></html>')


class SiteToolsTests(TestCase):
    def setUp(self):
        # Ordinary inherited directory permissions also work in Windows sandboxes.
        self.root = Path(__file__).resolve().parent / ('.site-test-' + uuid4().hex)
        self.root.mkdir()
        self.addCleanup(self.remove_fixture)
        self.patch_root = patch.object(validate_site, 'ROOT', self.root)
        self.patch_root.start()
        self.addCleanup(self.patch_root.stop)
        self.write('assets/og/og-image.png', 'fixture')

    def remove_fixture(self):
        if self.root.parent != Path(__file__).resolve().parent or not self.root.name.startswith('.site-test-'):
            raise RuntimeError('Unexpected test fixture cleanup path')
        shutil.rmtree(self.root)

    def write(self, name, content):
        path = self.root / name
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content, encoding='utf-8')

    def test_valid_cross_page_fragment(self):
        self.write('index.html', document('<a href="/work/example/#result">Example</a>'))
        self.write('work/example/index.html', document('<p id="result">Result</p>', '/work/example/'))
        pages, _, _, errors = validate_site.collect_site()
        self.assertEqual(2, len(pages))
        self.assertEqual([], errors)

    def test_missing_cross_page_fragment_fails(self):
        self.write('index.html', document('<a href="/work/example/#missing">Example</a>'))
        self.write('work/example/index.html', document('', '/work/example/'))
        self.assertTrue(any('missing fragment' in e for e in validate_site.collect_site()[3]))

    def test_image_dimensions_and_zoom_source_are_checked(self):
        self.write('index.html', document('<img src="/image.png" alt="Evidence" data-full="/missing.png">'))
        self.write('image.png', 'fixture')
        errors = validate_site.collect_site()[3]
        self.assertTrue(any('dimensions' in e for e in errors))
        self.assertTrue(any('missing.png' in e for e in errors))

    def test_responsive_candidates_are_in_public_files(self):
        self.write('index.html', document('<img src="/image.png" srcset="/small.png 400w, /image.png 800w" alt="Evidence" width="800" height="600">'))
        self.write('image.png', 'fixture')
        self.write('small.png', 'fixture')
        _, files, _, errors = validate_site.collect_site()
        self.assertEqual([], errors)
        self.assertIn(self.root / 'small.png', files)

    def test_staging_excludes_unlinked_source_files(self):
        self.write('index.html', document('<a href="/public.pdf">Document</a>'))
        self.write('public.pdf', 'fixture')
        self.write('unused-private-notes.txt', 'fixture')
        self.write('templates/draft.html', 'fixture')
        with patch.object(prepare_site, 'ROOT', self.root):
            prepare_site.main()
        self.assertTrue((self.root / 'dist/public.pdf').is_file())
        self.assertFalse((self.root / 'dist/unused-private-notes.txt').exists())
        self.assertFalse((self.root / 'dist/templates').exists())


if __name__ == '__main__':
    main()
