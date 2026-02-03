# KStV Ravensberg Website — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a static Next.js single-page website for KStV Ravensberg, replacing the current WordPress site.

**Architecture:** Next.js 16 with `output: 'export'`, Tailwind CSS for styling, Framer Motion for animations. All content stored as TypeScript data files in the repo. Instagram posts fetched at build time via Meta Graph API. Deployed as static HTML/CSS/JS to Hostinger via GitHub Actions + FTP.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Google Fonts (Playfair Display, Inter, Great Vibes)

---

## Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`
- Create: `src/app/layout.tsx`, `src/app/page.tsx`
- Create: `.gitignore`

**Step 1: Initialize git repo**

```bash
cd /Users/yonnock/Developer/yungweng/ravensberg
git init
```

**Step 2: Create Next.js project**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

When prompted, accept defaults. This creates the full project scaffold with Next.js 16, Tailwind CSS 4, TypeScript, App Router, and src directory.

**Step 3: Install additional dependencies**

```bash
npm install framer-motion
```

**Step 4: Configure static export**

In `next.config.ts`, set:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Note: `images.unoptimized: true` is required for static export since there's no server to optimize images. We use pre-sized images instead.

**Step 5: Configure Google Fonts in layout**

In `src/app/layout.tsx`, import Playfair Display, Inter, and Great Vibes from `next/font/google`. Set Inter as the body font. Export the others for use in components.

```typescript
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
```

Apply all three as CSS variables on the `<html>` element via className.

**Step 6: Configure Tailwind theme colors and fonts**

Extend the Tailwind config (either in `tailwind.config.ts` or in the CSS file if using Tailwind v4's CSS-based config) with:

- Colors: background (#FDF8F0), foreground (#2C1810), accent (#8B7324), muted (#F5EDE0), muted-fg (#6B5D4F)
- Font families: `font-sans` → Inter, `font-serif` → Playfair Display, `font-script` → Great Vibes

**Step 7: Verify build works**

```bash
npm run build
```

Expected: Build succeeds, `/out` directory created with static files.

**Step 8: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js project with Tailwind and Framer Motion"
```

---

## Task 2: Download Assets from WordPress

**Files:**
- Create: `public/images/hero/`, `public/images/vorstand/`, `public/images/haus/`, `public/images/prinzipien/`, `public/images/general/`, `public/images/geschichte/`

**Step 1: Create image directories**

```bash
mkdir -p public/images/{hero,vorstand,haus,prinzipien,general,geschichte,raeume}
```

**Step 2: Download key images from WordPress**

Download the real photos (not Gemini-generated ones) from the current site. These are the essential ones:

Hero/house:
- `https://kstvravensberg.de/wp-content/uploads/2026/01/pexels-leonarddahmen-2967836-scaled.jpg` → Munster church (prinzipien)
- `https://kstvravensberg.de/wp-content/uploads/2026/01/DSC_0321-scaled.jpg` → Group photo (prinzipien)
- `https://kstvravensberg.de/wp-content/uploads/2026/02/DSC_0431-scaled.jpg` → Historical photo (geschichte)
- `https://kstvravensberg.de/wp-content/uploads/2026/02/DSC_0417-scaled.jpg` → Event photo

Vorstand portraits:
- `https://kstvravensberg.de/wp-content/uploads/2026/02/20260202_193437-scaled.jpg` → Tom Buchwalt
- `https://kstvravensberg.de/wp-content/uploads/2026/02/Screenshot-2026-02-02-152837.png` → Henri Kanani Cassimir
- `https://kstvravensberg.de/wp-content/uploads/2026/02/Screenshot-2026-02-02-152951.png` → Fuxmajor

Rooms:
- `https://kstvravensberg.de/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-12-at-11.07.59.jpeg`
- `https://kstvravensberg.de/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-12-at-10.36.27.jpeg`
- `https://kstvravensberg.de/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-12-at-11.16.11.jpeg`
- `https://kstvravensberg.de/wp-content/uploads/2026/02/WhatsApp-Image-2026-01-12-at-16.44.32-1.jpeg`

Logo/brand:
- `https://kstvravensberg.de/wp-content/uploads/2026/02/picture.webp` → CV Zirkel logo

Use `curl` to download each to the appropriate `public/images/` subfolder with clean filenames.

**Step 3: Commit**

```bash
git add public/images/
git commit -m "assets: download photos from existing WordPress site"
```

---

## Task 3: Data Files

**Files:**
- Create: `src/data/vorstand.ts`
- Create: `src/data/prinzipien.ts`
- Create: `src/data/content.ts`

**Step 1: Create Vorstand data**

`src/data/vorstand.ts`:

```typescript
export interface VorstandMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const vorstand: VorstandMember[] = [
  {
    name: "Tom Buchwalt",
    role: "Senior (x)",
    image: "/images/vorstand/tom-buchwalt.jpg",
    description:
      "In meinem nunmehr schon fünften Aktivensemester ist mir die Ehre zu Teil geworden den KStV Ravensberg als Senior anzuführen. Dabei bin ich nicht nur intern als höchstes Entscheidungsgremium, sondern auch extern als Außendarstellung und Repräsentation zuständig.",
  },
  {
    name: "Henri Kanani Cassimir",
    role: "Consenior (xx)",
    image: "/images/vorstand/henri-kanani-cassimir.png",
    description:
      "Der Consenior, der den Senior vertritt und ihm in allen Belangen zur Seite steht. Ich bin hauptsächlich für die Planung und Umsetzung von Veranstaltungen zuständig.",
  },
  {
    name: "Elias Sanders",
    role: "Fuxmajor (FM)",
    image: "/images/vorstand/elias-sanders.png",
    description:
      "In diesem Wintersemester bin ich als Fuxmajor für die Neuen Leute aus unseren Reihen zuständig. Meine persönliche Überzeugung, das Erfahrungen in die Gemeinschaft auf die ersten natürlich Hausforderungen und die Orientierung geben.",
  },
];
```

**Step 2: Create Prinzipien data**

`src/data/prinzipien.ts`:

```typescript
export interface Prinzip {
  name: string;
  image: string;
  description: string;
}

export const prinzipien: Prinzip[] = [
  {
    name: "Religio",
    image: "/images/prinzipien/kirche-muenster.jpg",
    description:
      "Wir leben und bewahren unseren katholischen Glauben, ohne streng gläubig zu sein. Religio bedeutet für uns, den Glauben im Alltag zu tragen und nach christlichen Werten zu handeln. Unser Glaube verbindet, schafft Orientierung und bietet Halt in Studium, Beruf und Leben.",
  },
  {
    name: "Scientia",
    image: "/images/prinzipien/scientia.png",
    description:
      "Bildung ist mehr als das Studium eines Fachs. Wir fördern den Austausch über Fachgrenzen hinweg, diskutieren aktiv weltoffene und gegenwärtige Themen in Diskussionsrunden. Streben nach Wissen und Wahrheit sind für Verantwortung gegenüber der Gesellschaft.",
  },
  {
    name: "Amicitia",
    image: "/images/prinzipien/amicitia.jpg",
    description:
      "Amicitia ist das Herz unseres Bundes. Sie steht für lebenslange Freundschaft, für gegenseitige Unterstützung und Vertrauen. Was im Studium als Gemeinschaft beginnt, wächst ein lebenslang Netzwerk fürs Leben.",
  },
];
```

**Step 3: Create content data**

`src/data/content.ts`: All static text for Willkommen, Unser Haus, Über uns, and site metadata. Extract from the WordPress content dump above.

**Step 4: Commit**

```bash
git add src/data/
git commit -m "content: add Vorstand, Prinzipien, and site content data"
```

---

## Task 4: Shared Components — ScrollReveal + Section Container

**Files:**
- Create: `src/components/ScrollReveal.tsx`
- Create: `src/components/Section.tsx`

**Step 1: Create ScrollReveal component**

A Framer Motion wrapper that fades elements up when they scroll into view. Uses `useInView` hook. Triggers once. Respects `prefers-reduced-motion`.

```typescript
"use client";
import { motion, useReducedMotion } from "framer-motion";

// Wraps children with fade-up-on-scroll animation
// Usage: <ScrollReveal><YourContent /></ScrollReveal>
```

**Step 2: Create Section container**

A layout component that provides consistent padding, max-width, and an `id` for scroll navigation.

```typescript
interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullBleed?: boolean; // if true, content goes edge-to-edge
}
```

**Step 3: Verify components render**

Add a test section to `page.tsx`, run `npm run dev`, check in browser.

**Step 4: Commit**

```bash
git add src/components/
git commit -m "feat: add ScrollReveal and Section layout components"
```

---

## Task 5: Navigation

**Files:**
- Create: `src/components/Navigation.tsx`

**Step 1: Build the Navigation component**

Sticky header with:
- Logo (text "KStV Ravensberg" or the Zirkel image) on the left
- Nav links on the right: Willkommen, Prinzipien, Vorstand, Unser Haus, Instagram
- Starts transparent (over hero), transitions to solid cream (#FDF8F0) with a subtle shadow on scroll
- Active section highlighted based on scroll position (use IntersectionObserver)
- Mobile: Hamburger menu that slides in
- Smooth scroll on click: `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })`

This is a `"use client"` component (needs scroll listeners and state).

**Step 2: Add to layout or page**

Place `<Navigation />` at the top of `page.tsx`.

**Step 3: Verify scroll behavior in browser**

```bash
npm run dev
```

Check: transparent on hero, solid on scroll, links scroll to sections (sections don't exist yet — just verify the scroll/style logic).

**Step 4: Commit**

```bash
git add src/components/Navigation.tsx src/app/page.tsx
git commit -m "feat: add sticky navigation with scroll spy"
```

---

## Task 6: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`

**Step 1: Build the Hero component**

Full viewport height (`h-screen`). Background image of the Ravensberg house with a warm overlay. Centered title "KStV Ravensberg" in Great Vibes font, subtitle "zu Münster" below. Subtle parallax effect on the background image (Framer Motion `useScroll` + `useTransform`). Scroll indicator (animated chevron or arrow) at the bottom.

**Step 2: Add to page.tsx**

```tsx
<Hero />
<Section id="willkommen">...</Section>
```

**Step 3: Verify in browser**

Check: full viewport, parallax scrolls, text is readable over image, scroll indicator visible.

**Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add hero section with parallax background"
```

---

## Task 7: Willkommen Section

**Files:**
- Create: `src/components/Willkommen.tsx`

**Step 1: Build the Willkommen component**

Two-column layout (text left, image right on desktop; stacked on mobile). Heading "Willkommen beim K.St.V. Ravensberg!" in Playfair Display. Body text from `content.ts`. Group photo on the right. Wrapped in `ScrollReveal` for fade-in.

**Step 2: Add to page.tsx and verify**

**Step 3: Commit**

```bash
git add src/components/Willkommen.tsx
git commit -m "feat: add Willkommen section"
```

---

## Task 8: Prinzipien Section

**Files:**
- Create: `src/components/Prinzipien.tsx`
- Create: `src/components/PrinzipCard.tsx`

**Step 1: Build PrinzipCard component**

Card with: image on top (with slight rounded corners), principle name in gold accent color below, description text. Subtle hover effect (slight lift/shadow).

**Step 2: Build Prinzipien section**

Heading "Unsere Prinzipien" centered. Three `PrinzipCard` components in a row (responsive: 1 column mobile, 3 columns desktop). Data from `prinzipien.ts`. Each card wrapped in `ScrollReveal` with stagger delay.

**Step 3: Add to page.tsx and verify**

**Step 4: Commit**

```bash
git add src/components/Prinzipien.tsx src/components/PrinzipCard.tsx
git commit -m "feat: add Prinzipien section with cards"
```

---

## Task 9: Vorstand Section

**Files:**
- Create: `src/components/Vorstand.tsx`
- Create: `src/components/VorstandCard.tsx`

**Step 1: Build VorstandCard component**

Portrait photo (square or 3:4 aspect ratio, rounded corners), name in Playfair Display, role in gold accent, description text below. Clean card layout.

**Step 2: Build Vorstand section**

Heading "Der Vorstand". Subtitle text. Grid of `VorstandCard` components (responsive: 1 col mobile, 2-3 cols desktop). Data from `vorstand.ts`. Staggered scroll reveal.

**Step 3: Add to page.tsx and verify**

**Step 4: Commit**

```bash
git add src/components/Vorstand.tsx src/components/VorstandCard.tsx
git commit -m "feat: add Vorstand section with member cards"
```

---

## Task 10: Unser Haus Section

**Files:**
- Create: `src/components/UnserHaus.tsx`

**Step 1: Build UnserHaus component**

Full-bleed hero image of the house exterior. Below: centered text block describing the house (from `content.ts`). Optional: grid of room photos from `public/images/raeume/`. Text from the WordPress content about the Offiziershaus, Raesfeldstrasse, etc.

**Step 2: Add to page.tsx and verify**

**Step 3: Commit**

```bash
git add src/components/UnserHaus.tsx
git commit -m "feat: add Unser Haus section"
```

---

## Task 11: Über uns Section

**Files:**
- Create: `src/components/UeberUns.tsx`

**Step 1: Build UeberUns component**

History/about section. Editorial layout: large text blocks alternating with historical photos. Include the CV Zirkel logo, founding story (1919), KV membership, Wahlspruch "Vorwarts! Aufwarts!". Data from `content.ts`.

**Step 2: Add to page.tsx and verify**

**Step 3: Commit**

```bash
git add src/components/UeberUns.tsx
git commit -m "feat: add Über uns history section"
```

---

## Task 12: Instagram Feed Section (Placeholder)

**Files:**
- Create: `src/components/InstagramFeed.tsx`
- Create: `src/lib/instagram.ts`

**Step 1: Build InstagramFeed component**

For now, create a placeholder grid with a "Follow us on Instagram" heading and a link to the Instagram profile. Use placeholder image boxes. The actual API integration (Task 15) will be done later once the Meta Developer App is set up.

```typescript
// Placeholder that shows a link to Instagram
// Will be replaced with live feed once Meta API token is available
```

**Step 2: Build instagram.ts helper**

Stub the fetch function with proper types:

```typescript
export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) {
    console.warn("No INSTAGRAM_TOKEN set, skipping Instagram feed");
    return [];
  }
  // TODO: implement once Meta API token is available
  return [];
}
```

**Step 3: Add to page.tsx and verify**

**Step 4: Commit**

```bash
git add src/components/InstagramFeed.tsx src/lib/instagram.ts
git commit -m "feat: add Instagram feed section placeholder"
```

---

## Task 13: Footer

**Files:**
- Create: `src/components/Footer.tsx`

**Step 1: Build Footer component**

Three-column layout (responsive):
- Left: "KStV Ravensberg zu Munster" + short tagline
- Center: Contact email, postal address (if available)
- Right: Social links (Instagram icon/link)

Below: thin tricolor stripe (green/yellow/red — Verbindung colors, just 3px high).

Bottom: "© 2026 KStV Ravensberg" + links to Impressum and Datenschutz.

**Step 2: Add to page.tsx and verify**

**Step 3: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: add footer with contact info and legal links"
```

---

## Task 14: Legal Pages

**Files:**
- Create: `src/app/impressum/page.tsx`
- Create: `src/app/datenschutz/page.tsx`

**Step 1: Create Impressum page**

Standard German Impressum template. Placeholder content — the user will fill in the actual legal details (Vereinsname, Vereinsregister, Ansprechpartner, Adresse, E-Mail).

**Step 2: Create Datenschutz page**

Standard German Datenschutzerklarung template. Cover: hosting (Hostinger), no cookies, no analytics (unless added), Instagram embed.

**Step 3: Verify navigation to /impressum and /datenschutz works**

```bash
npm run build && npx serve out
```

Check that `/impressum` and `/datenschutz` routes work as static HTML files.

**Step 4: Commit**

```bash
git add src/app/impressum/ src/app/datenschutz/
git commit -m "feat: add Impressum and Datenschutz legal pages"
```

---

## Task 15: Polish & Responsive Design

**Files:**
- Modify: All component files

**Step 1: Mobile responsive pass**

Test every section at 375px (iPhone SE), 768px (tablet), 1280px (desktop). Fix any layout issues:
- Nav: hamburger menu on mobile
- Hero: text sizing
- Prinzipien cards: single column on mobile
- Vorstand: single column on mobile
- Footer: stack columns on mobile

**Step 2: Typography polish**

Verify heading sizes, line heights, and spacing feel right at all breakpoints.

**Step 3: Animation polish**

Verify all scroll reveals trigger correctly. Ensure no janky animation behavior. Test `prefers-reduced-motion`.

**Step 4: Commit**

```bash
git add -A
git commit -m "polish: responsive design and animation refinements"
```

---

## Task 16: GitHub Actions Deploy Workflow

**Files:**
- Create: `.github/workflows/deploy.yml`

**Step 1: Create deploy workflow**

```yaml
name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "22"
      - run: npm ci
      - run: npm run build
      - name: Deploy to Hostinger
        uses: SamKirkland/FTP-Deploy-Action@v4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: out/
          server-dir: /public_html/
```

**Step 2: Commit**

```bash
git add .github/
git commit -m "ci: add GitHub Actions deploy workflow"
```

**Step 3: Set up GitHub repo and secrets**

- Create repo on GitHub (private or public)
- Add secrets: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD` (from Hostinger hPanel)
- Push to main to trigger first deploy

---

## Task 17: Instagram API Integration (Deferred)

This task is deferred until the Meta Developer App is set up. Steps:

1. Create Meta Developer App at developers.facebook.com
2. Add Instagram Graph API product
3. Connect kstvravensberg Instagram account
4. Generate long-lived access token
5. Store as `INSTAGRAM_TOKEN` in GitHub Actions secrets
6. Implement `fetchInstagramPosts()` in `src/lib/instagram.ts`
7. Update `InstagramFeed.tsx` to render real posts
8. Create `.github/workflows/refresh-instagram.yml` for scheduled token refresh

---

## Execution Order Summary

| Task | Description | Depends on |
|------|-------------|------------|
| 1 | Project scaffolding | — |
| 2 | Download assets | 1 |
| 3 | Data files | 1 |
| 4 | ScrollReveal + Section components | 1 |
| 5 | Navigation | 4 |
| 6 | Hero section | 4 |
| 7 | Willkommen section | 3, 4 |
| 8 | Prinzipien section | 3, 4 |
| 9 | Vorstand section | 3, 4 |
| 10 | Unser Haus section | 3, 4 |
| 11 | Über uns section | 3, 4 |
| 12 | Instagram placeholder | 4 |
| 13 | Footer | 1 |
| 14 | Legal pages | 1 |
| 15 | Polish & responsive | 5-14 |
| 16 | GitHub Actions deploy | 15 |
| 17 | Instagram API (deferred) | 16 |

Tasks 2, 3, 4 can run in parallel after Task 1.
Tasks 5-14 can run mostly in parallel after Task 4.
