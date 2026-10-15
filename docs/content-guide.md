# Portfolio content and evidence

## Sources

Career titles, employers, dates, and professional contribution summaries follow
the existing portfolio and `documents/resume/Chanisara-Kotrachai-Resume.pdf`.
The expanded Data Wow and Bitkub summaries use the résumé's existing descriptions
of requirements, acceptance criteria, UAT, and delivery coordination.

The four case studies use the existing project descriptions and artifacts.
The research study also uses the publication citation and internship poster.
Jelly's 7 executed / 7 passed result is a transcription of the historical UI
test log dated 25 November 2023. It must never be presented as current CI status,
overall test coverage, or individual ownership of all team artifacts.

## Adding a professional case study

Start from `templates/case-study.html` and the shared styles. Copy a current
page's head, navigation, and footer so shared links and metadata stay consistent.
Publish under `work/<slug>/index.html`, then add a homepage preview and archive link.
An unlinked template is excluded from the deployment artifact.

Confirm before publishing:

- The problem, dates, delivery status, and your personal contribution.
- Which decisions you owned and which you supported; distinguish team results.
- Evidence for every outcome. A documented qualitative result is sufficient.
- Permission to publish employer/client material, even when anonymized.
- That screenshots, PDFs, links, metadata, and filenames contain no internal URLs,
  credentials, customer data, personal identifiers, or local filesystem paths.
- That any reconstructed diagram is explicitly labeled as a reconstruction.

When evidence is unavailable, omit the claim or leave the draft unpublished.
Do not turn a general responsibility into an invented project or outcome.
Learning completions do not establish production AI ownership.

## Structure

1. Overview: problem, context, period, team, contribution, delivery status.
2. Context and constraints: why the work mattered and what limited it.
3. Personal contribution: led, produced, coordinated, supported, validated.
4. Approach and decisions: actions, reasons, alternatives, tradeoffs.
5. Delivery and validation: requirements, dependencies, testing, UAT, release.
6. Selected evidence: a few legible artifacts with descriptive captions.
7. Outcome: result, source, timeframe, and limits of the evidence.
8. Reflection: the author's confirmed lessons; do not invent personal reflections.
9. Credits: collaborators, original application creator, and public sources.

Use only applicable sections. Existing cases use “Reading the evidence” for
editorial interpretation rather than inventing first-person decisions or lessons.

## Public asset changes

- Student identifier text objects were removed from the internship poster PDF;
  author names and research content were preserved. Its PNG export was refreshed.
- The UI test-log screenshot was replaced by an attributed historical text excerpt
  because the screenshot contains a contributor's local filesystem path.
- Original documents and legacy source backups were preserved outside the checkout
  during this upgrade. Current-file cleanup does not erase prior Git history or
  previously published copies. No history rewrite is part of this change.
- The deployment script stages only files referenced by published HTML, including
  responsive previews, full-size zoom sources, the résumé, and the sanitized poster.
- Full credential scans stay available for inspection; lightweight WebP previews
  are used in the archive. Certificate artwork and wording are unchanged.

## Review before release

Run the static validator and JavaScript syntax check described in the README.
Review desktop and small mobile layouts, keyboard navigation, modal focus and
Escape, reduced motion, and navigation with JavaScript unavailable. Check external
URLs separately; a blocked request is not proof of a broken link.
