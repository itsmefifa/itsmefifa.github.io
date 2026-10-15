# Chanisara Kotrachai — Business × Technology × Delivery

A static professional portfolio for technology project management, business
analysis, product delivery, software quality, and applied AI research.

Live site: https://itsmefifa.github.io

## Structure

```text
index.html                         Recruiter-facing portfolio
archive/index.html                 Full project and professional archive
work/gemini/index.html             Requirements and system design
work/jelly-translator/index.html   Traceability and quality validation
work/explainable-ai/index.html     Published applied ML research
work/cocoa-grading/index.html      Computer-vision final-year project
css/style.css                     Shared editorial design system
js/main.js                        Progressive navigation and native image dialog
assets/                           Source images and optimized previews
documents/                        Résumé and sanitized research poster
templates/case-study.html          Unpublished reusable case-study structure
docs/content-guide.md             Evidence, attribution, and publication rules
scripts/validate_site.py           Local links, fragments, HTML, metadata, images
scripts/prepare_site.py            Stage referenced public files in dist/
.github/workflows/pages.yml        Validation and GitHub Pages deployment
```

## Design

White editorial canvas, DM Sans typography, blue `#4285F4` accents, and sparse
yellow `#FBBC04` endpoint markers. Small text uses charcoal/gray for contrast;
blue remains in rules, underlines, borders, and focus indicators.

Navigation: Experience · Case studies · Research · About · Contact, with a résumé
utility link. Existing homepage section/project fragments remain as summaries or
archive shortcuts. Detailed archive entries and case studies have static URLs.

## Local development

Use Python 3.10 or newer and Node.js for the syntax check. The website itself has
no runtime dependencies, framework, backend, package installation, or bundler.

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ from this checkout.

```sh
python scripts/validate_site.py
node --check js/main.js
python -m unittest discover -s scripts -p 'test_*.py'
python scripts/prepare_site.py
```

The validator follows the published pages from the homepage and checks local
files, cross-page fragments, duplicate IDs, HTML nesting, title/description/
canonical metadata, one h1 per page, image dimensions, and new-tab link safety.
It does not replace browser accessibility or layout testing.

Optional external link checks are advisory because providers may block automated
requests. An HTTP 404/410 needs review; a timeout or access block is unverified.

```sh
python scripts/validate_site.py --check-external
```

## Deployment

Pull requests run validation and JavaScript syntax checks. Pushes to `main` and
manual workflow dispatches deploy through the existing GitHub Pages workflow,
after validation succeeds.

`prepare_site.py` creates `dist/` from referenced public files only. It includes
responsive image candidates and full-size zoom sources, but excludes templates,
maintenance scripts, source backups, unused asset exports, and documentation.
The script verifies the exact workspace staging path before replacing `dist/`.
Do not add a file to deployment by copying the entire repository.

## Content and assets

See [the content guide](docs/content-guide.md) before changing career claims or
publishing an employer/client case study. Use the [case-study template](templates/case-study.html)
for consistent structure, with verified content and explicit attribution.

See [the asset tracker](ASSET-TODO.md) for source/preview conventions and remaining
evidence opportunities. Original scans are loaded only when visitors enlarge a
credential. Academic and research work is labeled separately from employment.
Course completions are learning evidence, not production AI delivery claims.

Public-file sanitation in this version does not erase historical Git commits or
previously published copies. The upgrade does not rewrite repository history.

© Chanisara Kotrachai
