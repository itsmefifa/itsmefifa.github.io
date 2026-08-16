# ASSET TODO LIST

This document tracks missing assets that need to be created or sourced to complete the website.

| Section | Asset | Suggested Filename | Ratio | Status |
|---------|-------|-------------------|-------|--------|
| Bitkub | event photo | assets/career/bitkub/event.webp | 4:3 | Missing |
| Cocoa | YOLO output | assets/projects/cocoa/detection.webp | 16:9 | Missing |
| Gemini | app screenshot | assets/projects/gemini/app.webp | 16:10 | Missing |
| Gemini | Use Case diagram | assets/projects/gemini/use-case.webp | 4:3 | Missing |
| Gemini | Activity diagram | assets/projects/gemini/activity.webp | 4:3 | Missing |
| Gemini | Sequence diagram | assets/projects/gemini/sequence.webp | 4:3 | Missing |
| Gemini | Class diagram | assets/projects/gemini/class.webp | 4:3 | Missing |
| Jelly | application UI | assets/projects/jelly/ui.webp | 16:9 | Missing |
| Jelly | test execution | assets/projects/jelly/test-execution.webp | 4:3 | Missing |
| Jelly | Requirements Traceability Matrix | assets/projects/jelly/rtm.webp | 4:3 | Missing |
| Jelly | CI result | assets/projects/jelly/ci-result.webp | 4:3 | Missing |
| NYC | visualization | assets/projects/nyc/visualization.webp | 16:9 | Missing |
| Credentials | Generative AI certificate | assets/credentials/generative-ai.webp | 4:3 | Missing |
| Credentials | Postman certificate | assets/credentials/postman.webp | 4:3 | Missing |
| Credentials | Data Analyst certificate | assets/credentials/data-analyst.webp | 4:3 | Missing |

## Notes for Asset Creation:

1. All images should be web-optimized WebP format when possible
2. Maintain consistent visual style across all assets
3. Use appropriate aspect ratios for each asset type
4. Include sufficient context in each image
5. Ensure readability of text in diagrams/documents
6. Maintain professional appearance
7. Follow color scheme consistency

## Placeholder Strategy:

All missing assets have been replaced with editorial placeholders that:
- Clearly indicate what content should be placed there
- Provide filename suggestions for easy replacement
- Maintain visual consistency with the design system
- Include aspect ratio guidance
- Are easily identifiable in the HTML source

To replace a placeholder:
1. Create the asset with the suggested filename
2. Place it in the specified directory
3. Update the HTML to reference the new asset
4. Remove the placeholder-commented section

Example replacement:
<!-- TODO-ASSET: projects/gemini/app.webp -->
<img src="assets/projects/gemini/app.webp" alt="Gemini application screenshot" class="project-media">

becomes:
<img src="assets/projects/gemini/app.webp" alt="Gemini application screenshot" class="project-media">