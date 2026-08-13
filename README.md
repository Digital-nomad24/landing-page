# Convyo — landing site

Vite + React marketing site for Convyo, deployable on Netlify.

```
.
├── index.html              # Vite entry
├── netlify.toml            # Build command, SPA redirects, security headers
├── public/
│   ├── assets/             # Logos, badges, favicons (served as-is)
│   ├── forms.html          # Hidden form for Netlify Forms detection
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── App.jsx             # React Router routes
    ├── main.jsx
    ├── components/         # Nav, Footer, Layout, Preloader, Logo
    ├── hooks/              # useSiteEffects (scroll, counters, nav)
    ├── pages/              # Home, Contact, Terms, Privacy, Thanks, 404
    ├── content/            # Legal page HTML bodies
    └── styles/site.css     # All styling
```

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy (Netlify)

Netlify reads `netlify.toml`:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

Or with the CLI:

```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

## Contact form

`ContactPage` uses **Netlify Forms** (`data-netlify="true"` + hidden `form-name` + honeypot). A static `public/forms.html` ensures Netlify detects the form at build time. Submissions appear under **Forms → contact** in the Netlify dashboard.

## Before you go live

| What | Where | Note |
|---|---|---|
| App Store / Play Store links | `src/pages/HomePage.jsx` → Roll out section | Both currently point at `#roll` |
| Email addresses | all pages | `support@`, `privacy@`, `legal@`, etc. at `@convyo.app` |
| Domain | `public/robots.txt`, `public/sitemap.xml`, `usePageMeta` | Currently `https://convyo.app` |
| Landing statistics | `HomePage.jsx` | Mockup figures — replace with real data or remove |
| Testimonials | `HomePage.jsx` | Mockup quotes |
| Privacy policy | `src/content/privacy-body.html` | Sections marked `[REVIEW]` need legal sign-off |

## Design system

Locked to the CONVYO Final Color System v1.0 — see CSS tokens in `src/styles/site.css`.
