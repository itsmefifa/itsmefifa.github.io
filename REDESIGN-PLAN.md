# CHANISARA KOTRACHAI - PERSONAL DIGITAL EXHIBITION
# REDESIGN PLAN

## PHASE 1: CONTENT AUDIT & ASSET MAPPING

### AUTHENTIC ASSETS CURRENTLY AVAILABLE:
1. Profile: assets/profile/Chanisara_Hero.jpg
2. Research Presentation: assets/projects/InCIT2023_Present_Image.jpg
3. Fraud Detection Visualization: assets/projects/Explainable AI Fraud Detection.png
4. Research Poster: assets/projects/InCIT2023.png
5. NCU Research Team: assets/projects/NCU_Group_Photo_1.jpg
6. Team Collaboration: assets/projects/NCU_Group_Photo_2.jpg
7. Certificates: 4 certificate images in assets/certificates/

### MISSING ASSETS (TO BE PLACEHOLDERED):
1. Bitkub event/photo
2. Cocoa Seed project imagery (YOLO detection output)
3. Gemini Project artifacts (UML diagrams, app screenshots)
4. Jelly Translator artifacts (test reports, UI screenshots)
5. NYC Vehicle Collisions Explorer visuals

## PHASE 2: NEW INFORMATION ARCHITECTURE

### PROPOSED STRUCTURE:
01. INTRODUCTION (Hero)
02. WHAT I BRING (Bridge concept)
03. SELECTED WORK (4-5 projects)
04. RESEARCH FEATURE (IEEE publication)
05. CAREER STORY (Editorial chapters)
06. ARCHIVE / CREDENTIALS
07. SELECTED MOMENTS
08. EDUCATION
09. CONTACT

### NEW NAVIGATION:
Chanisara
Work
Story
Research
Archive
Contact

## PHASE 3: VISUAL SYSTEM & PLACEHOLDER SYSTEM

### COLOR PALETTE (PRESERVED):
--blue: #4285F4;    (4-7%)
--yellow: #FBBC04;  (1-3%)
--black: #202124;   (10-15%)
--gray: #5F6368;    (10-15%)
--border: #DADCE0;  (structural)
--surface: #F8F9FA; (background accents)
--white: #FFFFFF;   (80-85%)

### TYPOGRAPHY SCALE:
--display: clamp(2.5rem, 4vw, 4rem)
--h1: clamp(2rem, 3vw, 3rem)
--h2: clamp(1.75rem, 2.5vw, 2.5rem)
--h3: clamp(1.5rem, 2vw, 2rem)
--h4: clamp(1.25rem, 1.5vw, 1.5rem)
--body: clamp(1rem, 1.5vw, 1.125rem)
--caption: 0.875rem
--small: 0.75rem

### PLACEHOLDER SYSTEM:
.placeholder-box {
  background: var(--surface);
  border: 1px dashed var(--border);
  border-radius: 4px;
  padding: var(--space-4);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.placeholder-box::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--blue), var(--yellow));
}

.placeholder-title {
  font-weight: 600;
  color: var(--gray);
  margin-bottom: var(--space-2);
}

.placeholder-info {
  font-size: var(--caption);
  color: var(--gray);
  font-style: italic;
}

## PHASE 4: IMPLEMENTATION PLAN

### 01. INTRODUCTION (HERO)
Composition:
- Large editorial name
- Positioning statement
- Personal introduction paragraph
- Editorial portrait
- Primary CTA
- Subtle geometric accent

### 02. WHAT I BRING (BRIDGE CONCEPT)
Visual metaphor:
BUSINESS ───────────── TECHNOLOGY ───────────── DELIVERY
    \                       |                       /
     requirements        systems/API             execution
     process             data/AI                 coordination
     people              software                release

### 03. SELECTED WORK (PROJECTS)
Each project will have:
- Project number / category
- Strong project title
- Concise explanatory statement
- Visual (real or placeholder)
- Context / methods / contribution
- Small metadata tags

### 04. RESEARCH FEATURE
Magazine/editorial spread:
- Conference photo (large)
- Publication title
- Author/presenter info
- Conference details
- Paper/poster preview

### 05. CAREER STORY (EDITORIAL CHAPTERS)
01
BUILD
CP Match
Software Development

02
UNDERSTAND
National Central University
AI Research

03
VALIDATE
Social+
Quality Engineering

04
CONNECT & DELIVER
Bitkub → Data Wow
BA / Technical Project Management

### 06. ARCHIVE / CREDENTIALS
Clean horizontal rail or shelf:
[certificate]     Cloud Digital Leader
                  Google Cloud · 2025

### 07. SELECTED MOMENTS
Asymmetrical editorial layout:
                 [large InCIT photo]
      IEEE InCIT 2023
      Chiang Rai

[NCU photo]
Research program,
Taiwan

### 08. EDUCATION
Concise with connection to projects:
Mahidol University
B.Sc. Information and Communication Technology
International Program · 2020–2024

### 09. CONTACT
Personal ending:
LET'S CONNECT
Interested in building better digital experiences?
fifa.chanisara@outlook.com
[LinkedIn] [GitHub] [Resume]

## PHASE 5: RESPONSIVE DESIGN

### MOBILE STRATEGY:
- Intentional mobile composition
- Asymmetrical layouts adapted
- Visual hierarchy preserved
- Touch-friendly interactions
- Editorial rhythm maintained

## PHASE 6: ASSET-TODO.MD

| Section | Asset | Suggested Filename | Ratio | Status |
|---------|-------|-------------------|-------|--------|
| Bitkub | event photo | career/bitkub/event.webp | 4:3 | Missing |
| Cocoa | YOLO output | projects/cocoa/detection.webp | 16:9 | Missing |
| Gemini | app screenshot | projects/gemini/app.webp | 16:10 | Missing |
| Gemini | UML diagrams | projects/gemini/diagrams.webp | 4:3 | Missing |
| Jelly | application UI | projects/jelly/ui.webp | 16:9 | Missing |
| Jelly | test output | projects/jelly/test-report.webp | 4:3 | Missing |
| NYC | visualization | projects/nyc/visualization.webp | 16:9 | Missing |

## TECHNICAL APPROACH:
- Semantic HTML5
- CSS Grid/Flexbox
- Minimal vanilla JavaScript
- GitHub Pages compatible
- Accessible lightbox
- Responsive design
- No frameworks