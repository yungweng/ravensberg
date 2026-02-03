# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Website for KStV Ravensberg zu Münster — a Catholic, non-dueling, color-bearing student fraternity at the University of Münster, founded 1919. German-language single-page site with two legal sub-routes.

## Commands

- `bun run dev` — local dev server (http://localhost:3000)
- `bun run build` — static export to `/out` directory
- `bun run lint` — ESLint

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
8. **Instagram** — placeholder grid (Meta Graph API integration pending)
9. **Footer** — contact, tricolor stripe, legal links

Legal pages: `/impressum` and `/datenschutz` (separate routes, not part of the scroll page).

### Content data

All site content is in `src/data/`:

- `vorstand.ts` — board members (name, role, image, description). **This is the only file that changes regularly.**
- `prinzipien.ts` — the three principles
- `content.ts` — everything else: siteConfig, willkommen, unserHaus, ueberUns, navigation

To update Vorstand: replace portrait images in `public/images/vorstand/`, update `vorstand.ts`, push to main.

### Instagram integration

`src/lib/instagram.ts` is a stub. When the Meta Developer App is configured, set `INSTAGRAM_TOKEN` as a GitHub Actions secret. The `InstagramFeed` component currently renders placeholders.

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

## Key Patterns

### Static export constraints

- `output: "export"` in `next.config.ts` — no server-side features (no API routes, no middleware, no SSR)
- `images.unoptimized: true` — all `<Image>` components must include `unoptimized` prop
- All images are static in `public/images/`

### Component conventions

- **Server components by default.** Only add `"use client"` when the component needs hooks, event handlers, or browser APIs.
- Client components: Navigation, Hero, ScrollReveal, AnimatedHeading, AnimatedCounter, TiltCard, Footer
- Reusable wrappers:
  - `Section` — consistent padding/max-width, accepts `id` for scroll nav and `fullBleed` for edge-to-edge content, `bgClassName` for alternating backgrounds
  - `ScrollReveal` — Framer Motion fade-up on scroll, `delay` prop for stagger
  - `AnimatedHeading` — word-by-word reveal, `as` prop for element type
  - `TiltCard` — 3D perspective tilt on mouse hover
- **All animations must respect `prefers-reduced-motion`** via Framer Motion's `useReducedMotion()` hook.

### German text

- Site language is `de` (set on `<html>` in layout.tsx)
- German quotation marks use Unicode escapes in TS: `\u201E` (opening „) and `\u201C` (closing ")
- Umlauts can be used directly in strings (ä, ö, ü, ß)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to Hostinger via FTP on push to `main`. Required secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.


more information on KStV Ravensberg
https://vereins.fandom.com/wiki/KStV_Ravensberg
