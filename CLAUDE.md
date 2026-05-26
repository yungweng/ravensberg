# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for KStV Ravensberg zu Münster — a Catholic, non-dueling, color-bearing student fraternity at the University of Münster, founded 1919. German-language single-page site with sub-routes for history and legal pages.

## Dev Environment

Uses [Devbox](https://www.jetify.com/devbox) + [direnv](https://direnv.net/) for reproducible tooling. On `cd` into the repo (with direnv hooked into your shell), the environment auto-activates.

- `devbox install` — install pinned toolchain (node, bun, biome)
- Versions are locked in `devbox.lock` (committed)

## Commands

- `bun run dev` — local dev server (http://localhost:3000)
- `bun run build` — static export to `/out` directory
- `bun run lint` — Biome lint
- `bun run lint:fix` — Biome lint with auto-fix

No test framework is configured. Verify changes with `bun run build` (must produce `/out` with no errors).

## Architecture

**Static Next.js 16 site** with `output: "export"`. No server runtime, no CMS, no database. All content lives in TypeScript data files. Deployed as plain HTML/CSS/JS to Hostinger via GitHub Actions + FTP.

### Page structure

Single scrollable page (`src/app/page.tsx`) with sections in this order:

1. **Navigation** — sticky header, transparent over hero, solid on scroll
2. **Hero** — full-viewport with Ken Burns background, handwriting title animation
3. **Willkommen** — welcome text + group photo
4. **Prinzipien** — three cards: Religio, Scientia, Amicitia
5. **Vorstand** — board member grid (the only content that changes, ~2x/year)
6. **Unser Haus** — house exterior + room photo gallery
7. **Über uns** — history with Zirkel watermark
8. **Eindrücke & Aktuelles** — static photo gallery + live Instagram feed (blog-style cards)
9. **Footer** — contact, tricolor stripe, legal links

Sub-routes (separate pages, not part of the scroll page):
- `/geschichte` — full history of the Verbindung (indexed by Google, SEO content page)
- `/impressum` and `/datenschutz` — legal pages (noindex)

### Content data

All site content is in `src/data/`:

- `vorstand.ts` — board members (name, role, image, description). **This is the only file that changes regularly.**
- `prinzipien.ts` — the three principles
- `content.ts` — everything else: siteConfig, willkommen, unserHaus, ueberUns, navigation

To update Vorstand: replace portrait images in `public/images/vorstand/`, update `vorstand.ts`, push to main.

### Instagram integration

Live Instagram posts are fetched at build time via the Meta Graph API (Instagram Business account). The `InstagramFeed` component shows two sub-sections:

- **Eindrücke** — static photo gallery with lightbox (always visible)
- **Aktuelles** — blog-style cards with image, date, caption, and permalink (only when posts are available)

When no token is set or the API fails, only the Eindrücke gallery is shown.

**Meta Developer setup:**
- App: "Ravensberg Website" in [Meta Developer Dashboard](https://developers.facebook.com/apps/)
- Product: Instagram Graph API (Business account)
- Facebook Page connected to the Instagram Business account via Meta Business Suite
- Token type: long-lived user token (60-day expiry, auto-refreshed)

**GitHub Actions secrets (never commit these):**
- `INSTAGRAM_TOKEN` — long-lived Instagram Graph API token
- `GH_PAT` — fine-grained Personal Access Token (scoped to this repo, Secrets read/write permission), used by the token refresh workflow

**Workflows:**
- `deploy.yml` — builds with `INSTAGRAM_TOKEN` and deploys via rsync. Triggers: push to main, daily cron (5am UTC / 6am CET), manual dispatch
- `refresh-instagram-token.yml` — calls Meta's refresh endpoint weekly (Monday 4am UTC / 5am CET) to renew the 60-day token and update the `INSTAGRAM_TOKEN` secret via `gh secret set`. Manual dispatch available for testing

**Local dev with Instagram:** prefix the dev command with the token:
```
INSTAGRAM_TOKEN='<token>' bun run dev
```

**Key files:**
- `src/lib/instagram.ts` — API client, fetches latest 6 posts (IMAGE + CAROUSEL_ALBUM + VIDEO)
- `src/components/InstagramFeed.tsx` — renders both gallery and blog cards
- `next.config.ts` — `remotePatterns` includes `**.cdninstagram.com` for Instagram images

## Design System

### Colors

| Token | Hex | Tailwind class | Usage |
|-------|-----|----------------|-------|
| background | #FDF8F0 | `bg-background` | Page background (cream) |
| foreground | #2C1810 | `text-foreground` | Primary text (deep brown) |
| accent | #8B7324 | `text-accent` | Gold accent, headings, links |
| muted | #F5EDE0 | `bg-muted` | Card backgrounds, alternating sections |
| muted-fg | #6B5D4F | `text-muted-fg` | Secondary text |

Verbindung flag colors (**Grün, Gold, Rot**) appear only as the thin tricolor stripe in the Footer. Not used as UI colors.

### Typography

- **Headings:** Playfair Display (`font-serif`) — elegant serif
- **Body:** Inter (`font-sans`) — clean sans-serif
- **Hero title only:** Great Vibes (`font-script`) — script/signature font

Fonts loaded via `next/font/google` in `layout.tsx` as CSS variables. Tailwind maps them in `globals.css` via `@theme`.

### Tailwind v4

Uses CSS-based configuration, NOT `tailwind.config.ts`. All theme tokens are in `src/app/globals.css` inside the `@theme` block.

## Images

All images are **WebP** (converted 2026-02-03, commit `32165c4`). The only exception is `public/og-image.png` which stays PNG for social media crawler compatibility.

- Bildband images were resized from ~9921×7016 to ~2000px wide
- All 33 JPG/PNG images converted to WebP (61 MB → 8.3 MB, 87% reduction)
- Duplicate `public/images/hero/haus-exterior.jpg` removed; Hero references `haus/haus-exterior.webp`
- New Vorstand portraits should be added as `.webp` (convert before committing)

Favicon files (`favicon.ico`, `icon.png`, `apple-icon.png`) live in `src/app/` as Next.js file-based metadata — not in `public/`.

## Key Patterns

### Static export constraints

- `output: "export"` in `next.config.ts` — no server-side features (no API routes, no middleware, no SSR)
- `images.unoptimized: true` — all `<Image>` components must include `unoptimized` prop
- All images are static in `public/images/` (WebP format)

### Component conventions

- **Server components by default.** Only add `"use client"` when the component needs hooks, event handlers, or browser APIs.
- Client components: Navigation, Hero, ScrollReveal, AnimatedHeading, AnimatedCounter, TiltCard, ClickableImage, Footer
- Reusable wrappers:
  - `Section` — consistent padding/max-width, accepts `id` for scroll nav and `fullBleed` for edge-to-edge content, `bgClassName` for alternating backgrounds
  - `ScrollReveal` — Framer Motion fade-up on scroll, `delay` prop for stagger
  - `AnimatedHeading` — word-by-word reveal, `as` prop for element type
  - `TiltCard` — 3D perspective tilt on mouse hover
  - `ClickableImage` — image with lightbox on click, hover dimming + magnifying glass icon
  - `SectionDivider` — decorative gold diamond ornament between sections
- **All animations must respect `prefers-reduced-motion`** via Framer Motion's `useReducedMotion()` hook.

### German text

- Site language is `de` (set on `<html>` in layout.tsx)
- German quotation marks use Unicode escapes in TS: `\u201E` (opening „) and `\u201C` (closing ")
- Umlauts can be used directly in strings (ä, ö, ü, ß)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to Hostinger via rsync over SSH on push to `main`, daily at 5am UTC, or via manual dispatch. Required secrets: `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USERNAME`, `SSH_PORT`, `INSTAGRAM_TOKEN`.

Additional workflow: `.github/workflows/refresh-instagram-token.yml` auto-refreshes the Instagram token weekly. Requires: `INSTAGRAM_TOKEN`, `GH_PAT`.

Deploy target: `~/domains/kstvravensberg.de/public_html/` on the Hostinger server.

### Post-deploy: Hostinger CDN cache

After deploying new content, **Hostinger's CDN/LiteSpeed cache may serve stale content**. If the site looks broken after a deploy (missing styles, broken images), purge the cache:

1. **hPanel** → Websites → Dashboard → **CDN** → Flush cache
2. **hPanel** → Advanced → **Cache Manager** → Purge All

### Scheduled workflows get auto-disabled (recurring ~every 60 days)

GitHub disables scheduled (cron) workflows after **60 days with no commits**. Scheduled runs themselves do not count as activity — only commits do. Since the only regularly-changing content is the Vorstand (~2x/year), both `deploy.yml` and `refresh-instagram-token.yml` get auto-disabled roughly every 60 days. GitHub emails the repo admin when this happens.

**Symptom:** On the live site, the Instagram "Aktuelles" cards still show captions, dates, and links, but the **images are broken**. The static build bakes in Instagram CDN URLs (`scontent.cdninstagram.com`) that are signed and expire after a few days; once the daily deploy stops, those URLs go stale and 404. Don't chase the Instagram token first — it's usually fine. (A truly missing token would hide the whole Aktuelles block, not just the images.)

**Fix** — re-enable both workflows and trigger a fresh build:

```
gh workflow enable deploy.yml
gh workflow enable refresh-instagram-token.yml
gh workflow run deploy.yml
```

Then purge the Hostinger CDN cache (above) if the site still looks stale.

**Do not add an empty-commit "keepalive" workflow** to work around this — that pattern was disabled by GitHub Staff as a Terms of Service violation for circumventing the 60-day inactivity policy. Compliant alternatives, if ever needed: self-host the Instagram images at build time (so stale URLs stop breaking the site), or remove the `schedule:` trigger and dispatch the deploy from an external scheduler via the `workflow_dispatch` API.

### WordPress backup

A full WordPress backup (files + database) from 2026-02-03 is stored locally at `~/Desktop/ravensberg-wordpress-backup/` with a restore guide. Backups also remain on the server at `~/wordpress-backup-20260203.tar.gz` and `~/wordpress-db-backup-20260203.sql`.


more information on KStV Ravensberg
https://vereins.fandom.com/wiki/KStV_Ravensberg
