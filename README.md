# Training Documentation Framework

A plug-and-play HTML/CSS/JS documentation template inspired by modern training course designs — featuring collapsible exercise cards, colour-coded numbered steps, copy-able prompt blocks, power-move callouts, and module headers with time estimates.

## Quick Start

1. Open `index.html` in a browser — it works with no build step.
2. Edit the HTML directly to plug in your own content.
3. Customise colours in `css/styles.css` via CSS custom properties at the top.

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
  <div class="module-icon purple">⚡</div>   <!-- colour: purple | green | orange | blue -->
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

| Class             | Colour  | Use for                  |
|--------------------|---------|--------------------------|
| `badge-exercise`   | Purple  | Exercises / labs         |
| `badge-agent`      | Green   | Agent Mode features      |
| `badge-tip`        | Orange  | Tips & best practices    |
| `badge-new`        | Blue    | New / updated content    |
| `badge-advanced`   | Red     | Advanced / expert topics |

### Numbered Steps

Colours rotate automatically (orange → blue → green → purple → red → teal).

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

## Customisation

### Colours

All colours live as CSS custom properties in `:root` at the top of `css/styles.css`. Change them once and the whole theme updates:

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
