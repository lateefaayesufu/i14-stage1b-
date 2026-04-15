# HNG i14 — Frontend Stage 1B · Profile Card

A testable, accessible, and responsive Profile Card built for the HNG Internship Stage 1B frontend task.

---

## Live URL

> https://ccprofilecard.netlify.app/

---

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript
- Google Fonts — Special Elite, DM Mono, Bebas Neue

---

## Design Direction

Analog film photography — the entire card is structured as a 35mm film strip, complete with sprocket holes running down both sides and along the top and bottom edges. The avatar renders as a developed photo print with a sepia filter, grain overlay, vignette, and an amber date-stamp burnt into the corner. The epoch time display glows amber with a scanline overlay like old darkroom equipment. The card loads with an "expose" animation — starts overexposed and develops down to normal.

---

## Features

- All required `data-testid` attributes present and correct
- Avatar image with meaningful `alt` text and `data-testid="test-user-avatar"`
- Name, bio, and current epoch time in milliseconds rendered on load
- Epoch time updates every 500ms via `setInterval` for a live ticker feel
- Social links for Twitter, GitHub, and LinkedIn — open in new tab with `rel="noopener noreferrer"`
- Each social link individually testable via `data-testid="test-user-social-<network>"`
- Hobbies and dislikes as distinct, separately testable lists
- Film grain texture, vignette, and sepia filter on avatar for the analog aesthetic
- Sprocket holes rendered as real DOM elements — not background patterns
- Expose animation on card load
- WCAG AA compliant color contrast throughout
- Responsive from 320px to 1200px — sprocket strip and exposure data adapt cleanly on small screens
- Keyboard navigable — all social links focusable with visible focus styles

---

## Accessibility Notes

- Avatar `<img>` has a descriptive `alt` attribute identifying the subject and their role
- Social links all have `aria-label` attributes with the platform name included
- Epoch time element has `aria-live="polite"` and `aria-atomic="true"` for screen reader support
- Decorative elements (sprocket holes, grain overlays, ghost numbers) are marked `aria-hidden="true"`
- All interactive links are keyboard focusable with visible amber focus outlines
- Semantic HTML used throughout — `<article>`, `<figure>`, `<figcaption>`, `<nav>`, `<section>`, `<header>`, `<footer>`

---

## How to Run Locally

```bash
git clone <your-repo-url>
cd <your-repo-folder>
open index.html
```

No build step. No dependencies. Just open the file in a browser.

---

## Submission

HNG Internship i14 — Frontend Stage 1B
Deadline: April 17, 2026
