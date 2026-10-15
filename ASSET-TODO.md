# Public asset inventory and remaining evidence

## In use

| Asset group | Source | Web presentation |
| --- | --- | --- |
| Portrait | `assets/profile/Chanisara_Hero.jpg` | Prioritized, dimensioned hero |
| Case-study images | Existing Gemini, Jelly, fraud, and cocoa files | `assets/projects/previews/*.webp`; responsive candidates where useful |
| Credentials | Existing scans/badges and legacy thumbs | `assets/credentials/previews/*.webp`; source opened only in the image dialog |
| Research poster | `documents/posters/incit-2023.pdf` | Student identifier text objects removed; author names and research content preserved |
| Poster raster | `assets/research/incit-2023/poster.png` | Refreshed from sanitized PDF; currently unlinked and excluded from Pages artifact |
| Professional moments | `assets/moments/*` and cocoa collage | Preserved in the archive, with image dimensions |
| Social preview | `assets/og/og-image.png` | Existing branded 1200 × 630 image |
| Résumé | `documents/resume/Chanisara-Kotrachai-Resume.pdf` | Existing document unchanged |

## Sanitized or excluded

- The historical UI report screenshot was removed from the current checkout after
  preserving a local recovery copy outside the repository. Its useful result is
  transcribed as a dated text excerpt in the Jelly case study; no local path is shown.
- Legacy `.portfolio-backup/` source snapshots were moved outside the checkout.
- Finder `.DS_Store` files are removed and ignored.
- Deployment includes referenced files only. Unused original credential PDFs and
  intermediate exports remain source material but are not copied to GitHub Pages.
- Existing Git history and prior public copies are not erased by these changes.

## Evidence opportunities — do not display placeholders as completed work

| Opportunity | Required before publication |
| --- | --- |
| Professional delivery case | Confirmed problem, personal ownership, delivery status, outcome evidence, and publication clearance |
| Cocoa evaluation | Dataset/evaluation context and publishable measured results; current collage alone does not support an improvement metric |
| Gemini decisions | Author-confirmed responsibilities and tradeoffs beyond those already stated in the résumé |
| Jelly individual contribution | Confirmed allocation of team work before attributing specific artifacts to one person |
| AI-enabled professional delivery | Specific implemented workflow, contribution, validation, limitations, and permission to disclose |

## Adding assets

Keep source evidence separate from web previews. Export images at useful display
sizes, use WebP for previews, preserve diagram text, and add actual width/height,
descriptive alt text, and captions. Do not crop a diagram in a way that changes its
meaning. Use `data-full` for an optional larger image and `data-zoom` to opt a figure
into the native dialog. Never put an image zoom button inside another control.

For new documents, inspect both rendered pages and extractable text. Remove
unnecessary personal identifiers, local paths, internal URLs, credentials, and
company/customer data before publication. Label any reconstructed material.
