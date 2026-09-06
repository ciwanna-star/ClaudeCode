# Nanaimo HVAC Website

A static marketing website for an HVAC company, built with plain HTML, CSS, and JavaScript — no build step or dependencies required. Includes a prominent product safety recall notice for select Daikin/Amana air conditioner and heat pump models.

## Project Structure

```
.
├── index.html      # Full multi-section site (services, about, contact)
├── landing.html    # Conversion-focused single-page landing page (quote form)
├── styles.css      # Shared styling (orange & blue theme, responsive layout)
├── script.js       # Shared mobile nav toggle and demo contact form handling
├── favicon.svg     # Browser tab icon
└── README.md
```

`index.html` and `landing.html` share the same `styles.css` and `script.js`, so both stay on-brand automatically. Use `landing.html` for ad campaigns or anywhere you want a single, focused call to action (free quote); use `index.html` as the full company site.

## Setup

No installation or build tools are needed. This is a static site — just open it in a browser or serve it locally.

### Option 1: Open directly

Open `index.html` in your browser:

```bash
open index.html        # macOS
xdg-open index.html    # Linux
start index.html        # Windows
```

### Option 2: Run a local server (recommended)

Serving over HTTP avoids browser restrictions on local files and is closer to production behavior.

Using Python:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

Using Node.js:

```bash
npx serve .
```

## Editing Content

- **Recall notice**: The affected models table and recall details live in the `#recall` section of both `index.html` and `landing.html`. Update the model numbers, recall date, or instructions in both files.
- **Branding colors**: Orange and blue theme colors are defined as CSS custom properties at the top of `styles.css` (`--blue-*` and `--orange-*` variables).
- **Contact form**: `script.js` currently handles the contact form on the client side only (no backend). Wire it up to a real endpoint or form service before using it in production.

## Deployment

Since this is a static site, it can be hosted on any static hosting provider (GitHub Pages, Netlify, Vercel, S3, etc.) by uploading all files as-is.
