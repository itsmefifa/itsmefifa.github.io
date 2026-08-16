# Chanisara Kotrachai Portfolio

Personal portfolio website for Chanisara Kotrachai, a Business Analyst and Technical Project Manager specializing in AI & Automation.

## Live Site
https://itsmefifa.github.io

## Features
- **Design System**: Clean, minimalist Google-inspired visual language
- **Visual Concept**: "Bridge" metaphor connecting business, technology, and delivery
- **Responsive Layout**: Fully responsive for desktop, tablet, and mobile
- **Accessibility**: Semantic HTML5, proper heading hierarchy, keyboard navigation
- **Performance**: No frameworks, minimal JavaScript, optimized assets
- **Motion**: Subtle animations with reduced motion support

## Technical Stack
- HTML5 (semantic, accessible)
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (minimal interactions)
- DM Sans Google Font
- Static assets (no build system required)

## Project Structure
```
/
├── index.html                    # Main HTML document
├── css/
│   └── style.css                # Complete CSS with design system
├── js/
│   └── main.js                  # Minimal JavaScript for interactions
├── assets/
│   ├── profile/                 # Profile images
│   ├── projects/                # Project screenshots and images
│   └── certificates/            # Certificate badges
├── resume/
│   └── Chanisara-Kotrachai-Resume.pdf
└── README.md
```

## Design System
### Colors
- Primary: Blue (#4285F4)
- Secondary: Yellow (#FBBC04)
- Text: Near-black (#202124)
- Background: White (#FFFFFF)
- Borders: Light gray (#DADCE0)

### Typography
- Font: DM Sans (Google Font)
- Scale: Fluid typography with comfortable line heights
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Base unit: 8px modular scale
- Container: 1120px max-width with responsive padding
- Section rhythm: Consistent vertical spacing

### Components
- Navigation: Fixed header with mobile hamburger menu
- Hero: 90svh height with profile image and primary CTA
- Timeline: Visual career history with primary/secondary dots
- Projects: Featured project + standard projects with tags
- Research: Editorial layout with conference presentation
- Credentials: Clean list of certifications
- Contact: Confident closing with prominent links

## Development
1. Clone repository: `git clone https://github.com/itsmefifa/itsmefifa.github.io`
2. Open `index.html` directly in a browser
3. Or serve locally: `python3 -m http.server 8000`

## Deployment
The site is configured for GitHub Pages:
- Repository name: `itsmefifa.github.io`
- Branch: `main`
- Automatically deployed when pushed

## Customization
To update content:
1. Edit `index.html` for text content
2. Replace images in `assets/` directories
3. Update resume PDF in `resume/`
4. Modify `css/style.css` for styling changes

## License
Personal portfolio - all content © Chanisara Kotrachai