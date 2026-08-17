# Chanisara Kotrachai — Personal Digital Exhibition

A static personal website for Chanisara Kotrachai: an editorial portfolio and living
career archive built around one idea — **Business × Technology × Delivery**.

Live site: https://itsmefifa.github.io

## Structure

```
/
├── index.html          # Single-page exhibition (9 chapters)
├── css/style.css       # Complete design system, no frameworks
├── js/main.js          # Minimal vanilla JS (menu, scrollspy, year)
├── favicon.svg         # Site mark
├── assets/
│   ├── profile/        # Editorial portrait
│   ├── projects/       # Project visuals (fraud-detection title slide)
│   ├── research/       # InCIT 2023 poster PDF preview + certificate
│   ├── credentials/    # Certificate scans + generated thumbs/
│   ├── moments/        # Conference & research photography
│   └── og/             # Branded Open Graph image
├── documents/
│   ├── posters/        # InCIT 2023 research poster (PDF)
│   └── resume/         # Resume (PDF)
├── ASSET-TODO.md       # Placeholder → real asset tracker
└── .github/workflows/pages.yml  # GitHub Pages deploy from main
```

## Page flow

01 Introduction · 02 Business × Technology × Delivery · 03 Selected Work ·
04 Research · 05 Career Story · 06 Archive · 07 Selected Moments ·
08 Education · 09 Contact

Navigation stays short on purpose: Work · Story · Research · Archive · Contact.

## Design system

- Palette: white canvas (~85%), near-black/gray text, blue `#4285F4` accents,
  yellow `#FBBC04` only as rare endpoint markers.
- Typography: DM Sans with a strong editorial scale (display → caption).
- Bridge motif: numbered section headers with a hairline rule and yellow endpoint;
  the B×T×D axis; the career rail that starts blue and ends yellow.
- Placeholders: designed editorial components (see `ASSET-TODO.md`); replacing one
  with a real image requires no layout changes.

## Development

```
python3 -m http.server 8000   # then open http://localhost:8000
```

No build step, no frameworks. Keep it static, fast and accessible:
semantic HTML, focus-visible states, reduced-motion support, lazy images
with explicit dimensions.

## Deployment

GitHub Pages via `.github/workflows/pages.yml` — every push to `main` deploys
automatically to https://itsmefifa.github.io.

## Content integrity

Only verified facts are published (roles, dates, certifications and publication
details follow the resume and the certificates themselves). Missing visuals use
placeholders; nothing is invented.

© Chanisara Kotrachai
