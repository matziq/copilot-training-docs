# Vantage Dairy Supplies

Modern, accessibility-focused marketing site built with semantic HTML5, vanilla CSS, and lightweight JavaScript. The layout mirrors the content hierarchy of [vantagedairysupplies.com](https://www.vantagedairysupplies.com) while introducing a refreshed visual system, animations, and responsive navigation.

## Tech stack

- HTML5 with semantic landmarks and skip links
- CSS custom properties, grid/flexbox layouts, and intersection-based reveal animations
- Vanilla JavaScript for navigation, stat counters, testimonial rotation, and utilities
- `lite-server` for local development plus HTMLHint and Stylelint for linting

## Getting started

```powershell
cd d:\aaaScripts\vantagedairysupplies
npm install
npm start
```

`lite-server` serves the site at `http://localhost:3000` (or the next available port) with live reload.

## Available scripts

| Script | Description |
| --- | --- |
| `npm start` | Launches `lite-server` for local preview. |
| `npm run lint:html` | Runs HTMLHint against `index.html`. |
| `npm run lint:css` | Runs Stylelint using the standard config on all CSS. |
| `npm run lint` | Executes both lint tasks. |

## Project structure

```
index.html            # Main page markup
assets/
  css/styles.css      # Global styles, layout, and component tokens
  js/main.js          # Navigation, scroll, and animation helpers
  images/             # Local hero, testimonial, and chart assets
package.json          # Scripts and dev dependencies
```

## Customization tips

- Update hero copy, product descriptions, or testimonial content directly in `index.html`.
- Adjust the color palette or spacing system by editing the CSS custom properties at the top of `assets/css/styles.css`.
- Drop additional media into `assets/images/` and reference them from the markup; images are loaded lazily where appropriate.
- Add more testimonial cards and the slider will automatically incorporate them.

## Deployment

Because the project is fully static, you can deploy the root directory to any static host (GitHub Pages, Netlify, Azure Static Web Apps, etc.). Ensure the `assets/` folder is included and that caching/CDN settings allow for updated CSS/JS to propagate.

## Accessibility & performance notes

- Includes skip navigation link, focus styles, and reduced-motion-friendly reveal animations.
- Intersection observers defer stat animations until they enter the viewport, preserving performance.
- Footer year updates automatically so there’s no manual maintenance task each January.
