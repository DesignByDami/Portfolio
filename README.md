# Design by Dami — Portfolio

Portfolio site for Damilola Olowo, built from the
[DamiDesign-Portfolio Figma file](https://www.figma.com/design/k8x9FQICrDC8gs7cEOgJzN/DamiDesign-Portfolio).

React 18 + React Router + Vite, styled with plain CSS (`src/styles.css`, design tokens at the top).

## Run

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the build
```

## Pages

| Route | Figma frame |
| --- | --- |
| `/` | Desktop / Home, Mobile / Home, Mobile / Menu |
| `/work/:slug` | Desktop + Mobile / Case study — folio, WorkSyncAfrica, Bombay, Novastrum, NexusCare, D.O Naija Cargo |
| `/cv` | Desktop / CV, Mobile / CV (prints as A4 via the print stylesheet) |
| `/start-a-project` | Start a project — Empty / Error / Filled / Sent |
| anything else | Desktop / 404 |

Breakpoints: desktop matches the 1440 frames, ≤1200px and ≤960px are tablet reflows, ≤720px matches the 390 mobile frames.

## Content

- Case-study copy and images: `src/data/projects.js`
- Contact details, socials, FAQ, WhatsApp number: `src/data/site.js`
- CV download: `public/Damilola-Olowo-CV.pdf`, exported from the "CV / A4 print" frames in Figma. Re-export both pages and replace the file when the CV changes.
- The device mockups are flattened 2× renders of the Figma frames in `public/assets/`. If a mockup changes in Figma, re-export that frame and replace the PNG.

The project form doesn't store anything. Submitting opens WhatsApp (`wa.me`) with the inquiry pre-filled.

## Before launch

- [ ] Add the Dribbble profile URL in `src/data/site.js` (it stays hidden until then).
- [ ] Review the FAQ answers. Only the first answer comes from the design; I wrote the other four.
- [ ] Hosting needs an SPA fallback so deep links like `/work/folio` serve `index.html`.
