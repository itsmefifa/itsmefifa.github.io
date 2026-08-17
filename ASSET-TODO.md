# Asset TODO List

Tracks every visual placeholder on the site and the real file that should replace it.
Each placeholder in `index.html` is marked with a `<!-- REPLACE-ASSET: ... -->` comment
carrying the same path and ratio as the table below.

## How to replace a placeholder

1. Create the asset at the exact path below (WebP preferred).
2. In `index.html`, replace the `<figure class="ph" ...>...</figure>` block with an
   `<img>` (same `alt` intent, real `width`/`height` attributes).
3. Layouts use CSS `aspect-ratio`, so a correctly-ratioed image drops in with no
   design changes. Keep the surrounding `<figure>`/wrapper and any `<figcaption>`.

Placeholders are designed editorial components (dashed hairline, `#F8F9FA`, blue tick,
yellow marker). They never pretend to be real assets.

## Missing assets

| Section | Asset | Path | Ratio |
|---------|-------|------|-------|
| Cocoa | Cocoa seed sample image | `assets/projects/cocoa/sample.webp` | 4:3 |
| Cocoa | YOLOv5/v8 detection output | `assets/projects/cocoa/detection.webp` | 16:9 |
| Cocoa | Model results visualization | `assets/projects/cocoa/results.webp` | 4:3 |
| Gemini | Application screenshot | `assets/projects/gemini/app.webp` | 16:10 |
| Gemini | Use Case diagram | `assets/projects/gemini/use-case.webp` | 4:3 |
| Gemini | Sequence diagram | `assets/projects/gemini/sequence.webp` | 4:3 |
| Gemini | Class diagram | `assets/projects/gemini/class.webp` | 4:3 |
| Jelly Translator | Application UI screenshot | `assets/projects/jelly/ui.webp` | 16:9 |
| Jelly Translator | Requirements Traceability Matrix excerpt | `assets/projects/jelly/rtm.webp` | 4:3 |
| Jelly Translator | Robot Framework test execution output | `assets/projects/jelly/test-execution.webp` | 4:3 |
| Jelly Translator | GitHub Actions CI result | `assets/projects/jelly/ci-result.webp` | 4:3 |
| Moments | Professional event photo (Bitkub / Data Wow) | `assets/moments/professional.webp` | 4:3 |
| Archive | APIsec Certified Practitioner (ACP) scan | `assets/credentials/acp.webp` | 4:3 |
| Archive | Generative AI Overview for Project Managers scan | `assets/credentials/generative-ai-pm.webp` | 4:3 |
| Archive | Postman API Fundamentals Student Expert scan | `assets/credentials/postman.webp` | 4:3 |
| Archive | Certified Professional Data Analyst scan | `assets/credentials/data-analyst.webp` | 4:3 |

## Guidelines for new assets

- WebP (or high-quality JPG/PNG) optimized for the web; keep diagrams legible at
  ~600px wide.
- Redact client-specific or internal information (system names, URLs, data) before
  publishing — everything in this repository is public.
- Preserve the ratios above so layouts stay intact.

## Generated derivatives (committed, safe to regenerate)

- `assets/credentials/thumbs/*.jpg` — small JPEG previews of the certificate scans,
  used by the Archive index. Regenerate with `sips -Z <width> --setProperty format jpeg`.
- `assets/og/og-image.png` — 1200×630 branded Open Graph image.
- `favicon.svg` — site mark (blue field, white bridge line, yellow endpoint).
