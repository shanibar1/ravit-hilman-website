# Ravit Hilman — therapist website

A lightweight, static, single-page website for **רווית הילמן**, an emotional & art
therapist based in Haifa. Built with **Astro + TypeScript + CSS**. Hebrew, right-to-left.

- Single page with anchored sections: פתיחה · נעים להכיר · למי הטיפול מתאים ·
  איך נראה התהליך · שאלות נפוצות · יצירת קשר.
- Warm editorial design: ivory base, deep ink text, muted olive accent.
- Self-hosted Hebrew fonts (Frank Ruhl Libre + Heebo), optimized images, restrained
  motion that respects `prefers-reduced-motion`.
- Accessible: semantic landmarks, visible keyboard focus, AA contrast, large tap targets.

---

## Quick start

```bash
npm install          # install dependencies
npm run dev          # local dev server (hot reload) → http://localhost:4321/ravit-hilman-website
npm run build        # production build → ./dist
npm run preview      # serve the production build locally
```

> The site is configured for a GitHub Pages **project** path, so local URLs include
> the `/ravit-hilman-website` base (e.g. `http://localhost:4321/ravit-hilman-website/`).

---

## Editing content — one file

**All** text, contact details, and image references live in a single file:

```
src/content/site.ts
```

Change a value there and rebuild. You do not need to touch any other file for routine
edits. Items marked `// CONFIRM:` are taken from a public directory listing and should
be verified before the site goes public (see "Pending confirmation" below).

### Replacing images
See [`public/images/CREDITS.md`](public/images/CREDITS.md). Drop a new file into
`public/images/` with the same name (or update the path in `site.ts`), then rebuild.
To use a real portrait of Ravit, replace `public/images/hero.jpg`.

---

## Project structure

```
src/
  content/site.ts      ← edit everything here (copy, contact, image paths)
  layouts/Base.astro   ← <html lang="he" dir="rtl">, head meta, OG/Twitter, fonts
  components/           ← Nav, Hero, About, Audience, Process, Faq, Contact, Footer
  pages/index.astro    ← assembles the page + reveal-on-scroll script
  styles/global.css    ← design tokens, typography, layout, motion
  lib/asset.ts         ← base-aware public asset paths (for the Pages sub-path)
public/
  favicon.svg · images/ (hero, about, og-image + CREDITS.md)
astro.config.mjs       ← site + base ('/ravit-hilman-website')
.github/workflows/deploy.yml  ← Pages build (inactive until Pages is enabled)
```

---

## Deployment (GitHub Pages)

A workflow is included at `.github/workflows/deploy.yml` but **Pages is intentionally
not enabled** — the site is kept in private review until the content, contact details,
imagery, and release are approved.

To publish later:

1. **Repo → Settings → Pages → Build and deployment → Source: "GitHub Actions".**
2. Push to `main` (or run the workflow manually). The site builds and deploys to
   `https://<user>.github.io/ravit-hilman-website/`.
3. Set `site.seo.url` in `src/content/site.ts` to the final public URL.

> **Private repo note:** GitHub Pages cannot serve a **private** repository on the
> Free plan. Publishing requires **GitHub Pro/Team** (keeps it private) **or** making
> the repository **public**. Choose before enabling Pages.

### Custom domain (optional)
Set `site` to the domain and `base` to `'/'` in `astro.config.mjs`, update
`site.seo.url`, and add the domain under Settings → Pages.

---

## Pending confirmation (before public release)
- Name spelling — the site uses **רווית הילמן** (the source listing spelled it רוית).
- That the source listing (alhasapa.co.il) is genuinely hers.
- Phone **052-829-5533** and whether WhatsApp is active on it.
- Email / website / social links (none were found publicly).
- Exact Haifa clinic address (only the city is known).
- Session format, length, pricing, availability.
- An approved portrait photo.

## Tech notes
- Static output; no server required. Deploy the `dist/` folder to any static host.
- Fonts are bundled via `@fontsource` — no external font network requests.
- No analytics, no forms, no cookies, no third-party trackers.
