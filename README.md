# Training Documentation Framework

## Published site

This repository is the canonical source for the training documentation site at
<https://copilotdocs.org/>. GitHub Pages publishes the `main` branch from the
repository root; no build step or Actions artifact deployment is used. The
`CNAME` file binds this site to `copilotdocs.org`.

The former project-site routes under `/copilot-training-docs/` are served using
GitHub Pages' native project-domain redirect. Keep customer-specific, unlisted
pages out of public navigation and indexes.

## Unlisted customer training menus

Customer-scoped menus live at `/inspire/`, `/elc/`, `/mcbc/`, `/dg/`, `/lids/`,
and `/rcg/`. Each contains only that customer's published training packages,
with companion editions grouped together. Guides and their dependencies live
in training subfolders, and each guide links back to its own customer menu.
Recorded class dates sort newest first; undated classes remain explicitly
undated. Preparation, verification, and fictional scenario dates are not
class dates.

Older HTML guide URLs redirect to fixed destinations while preserving query
strings and section hashes. Previously shared raw source and asset URLs remain
available unchanged. `/elc/` now opens its menu instead of the former duplicate
Fundamentals guide. The legacy custom-domain path
`/copilot-training-docs/6f0d9c72a4b1483ba793ab4a1d2e6f85/` is also supported.
Training-subfolder URLs from the earlier hub publication remain aliases too.
Some of those historical paths contain preparation or scenario dates; those
path names are retained for compatibility, not presented as class dates.

All menu, relocated guide, and redirect HTML includes both robots and
googlebot `noindex,nofollow,noarchive` metadata. Keep customer routes out of
public navigation and sitemaps. `.nojekyll` disables automatic Jekyll processing;
there is no sitemap generator. These are public Pages files, not private or
access-controlled resources: noindex is a request, not a guarantee, and raw
downloads may still be indexed. Do not add robots Disallow rules that prevent
crawlers from reading noindex metadata.

Training-subfolder files use `-text` in `.gitattributes` so Git does not change
the original bytes or line endings of published source files, including PDFs.

Run the focused checks with `python tests\customer_hubs_test.py` (uses an
existing Python Playwright installation and Microsoft Edge). For link and
indexing checks without a browser, add `--static-only`.

A plug-and-play HTML/CSS/JS documentation template inspired by modern training course designs — featuring collapsible exercise cards, color-coded numbered steps, copy-able prompt blocks, power-move callouts, and module headers with time estimates.

## Quick Start

1. Open `index.html` in a browser — it works with no build step.
2. Edit the HTML directly to plug in your own content.
3. Customize colors in `css/styles.css` via CSS custom properties at the top.

## File Structure

```
copilot_training_docs/
├── index.html          ← main template (edit this)
├── css/
│   └── styles.css      ← all styles + CSS variables
├── js/
│   └── main.js         ← expand/collapse + copy-prompt logic
└── README.md           ← you are here
```

## Components Reference

### Module Header

```html
<div class="module-header">
  <div class="module-icon purple">⚡</div>   <!-- color: purple | green | orange | blue -->
  <div class="module-meta">
    <div class="module-label">Module 1 · Fundamentals</div>
    <h2 class="module-title">Getting Started</h2>
  </div>
  <span class="module-time">~10 min</span>
</div>
```

### Exercise / Section Card

Cards are collapsible. Click the header to toggle.

```html
<article class="section-card">
  <div class="section-card-header">
    <span class="badge badge-exercise">Exercise 1.1</span>
    <span class="section-card-title">Title Here</span>
    <span class="collapse-arrow">▼</span>
  </div>
  <div class="section-card-body">
    <!-- steps, prompts, callouts go here -->
  </div>
</article>
```

### Badge Variants

| Class             | Color  | Use for                  |
|--------------------|---------|--------------------------|
| `badge-exercise`   | Purple  | Exercises / labs         |
| `badge-agent`      | Green   | Agent Mode features      |
| `badge-tip`        | Orange  | Tips & best practices    |
| `badge-new`        | Blue    | New / updated content    |
| `badge-advanced`   | Red     | Advanced / expert topics |

### Numbered Steps

Colors rotate automatically (orange → blue → green → purple → red → teal).

```html
<ol class="steps">
  <li class="step">
    <span class="step-number">1</span>
    <span class="step-text">Your instruction here. Use <strong>bold</strong> for emphasis.</span>
  </li>
  <!-- more steps... -->
</ol>
```

### Prompt Block (with Copy button)

```html
<div class="prompt-block">
  <div class="prompt-label">Try This Prompt</div>
  <div class="prompt-box">Your prompt text here...</div>
  <button class="copy-btn">📋 Copy Prompt</button>
</div>
```

### Power Move Callout

```html
<div class="power-move">
  <span class="pm-icon">🎉</span>
  <strong>Power Move:</strong> Your cross-app workflow tip here...
</div>
```

### Info Callouts (Tip / Note / Warning)

```html
<div class="callout callout-tip">
  <div class="callout-title">💡 Tip</div>
  Your tip text...
</div>

<div class="callout callout-note">
  <div class="callout-title">📝 Note</div>
  Your note text...
</div>

<div class="callout callout-warning">
  <div class="callout-title">⚠️ Warning</div>
  Your warning text...
</div>
```

### Expand / Collapse All

Place this bar above a group of cards:

```html
<div class="toggle-bar">
  <button data-action="expand-all">▼ Expand All</button>
  <button data-action="collapse-all">▲ Collapse All</button>
</div>
```

## Customization

### Student guide motion preferences

The ELC student guide's top-bar **Animations** button turns seasonal effects,
disclosure transitions, and smooth scrolling on or off. The preference is saved
in the browser and restored before rendering, including on reload. System
reduced-motion preferences always take priority. Keep both published ELC guide
copies identical when updating their controls.

### Colors

All colors live as CSS custom properties in `:root` at the top of `css/styles.css`. Change them once and the whole theme updates:

```css
--purple-deep:  #3a1d6e;   /* headings, deep accents */
--green-badge:  #1b9e5a;   /* Agent Mode badges     */
--prompt-bg:    #4a2545;   /* prompt block bg        */
--prompt-text:  #f0d8ec;   /* prompt block text      */
```

### Fonts

The template loads **Inter** from Google Fonts. To use your own font, update the `<link>` in `index.html` and set `--font-sans` in CSS.

### Adding a New Module

1. Copy the `<section id="module-2">` block.
2. Change the `id`, title, label, icon, and time estimate.
3. Add your exercise cards inside.
4. Add a TOC link in the `<nav class="toc">` block.

## Browser Support

Works in all modern browsers (Chrome, Edge, Firefox, Safari). No build tools or dependencies required.
