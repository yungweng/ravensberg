# KStV Ravensberg Website Redesign

## Summary

Replace the current WordPress site with a static Next.js single-page application. All content lives in the repo. No CMS, no database, no server runtime. Deployed as plain HTML/CSS/JS to Hostinger via GitHub Actions.

## Architecture

```
GitHub Repo (Next.js + TypeScript + Tailwind)
  → GitHub Actions (build + FTP deploy)
  → Hostinger shared hosting (static files in public_html)
```

WordPress is removed entirely. The domain kstvravensberg.de points to the static files on Hostinger.

## Tech Stack

| Layer       | Choice                                   |
|-------------|------------------------------------------|
| Framework   | Next.js 15 (App Router, `output: export`) |
| Language    | TypeScript                               |
| Styling     | Tailwind CSS                             |
| Animations  | Framer Motion                            |
| Fonts       | Playfair Display (headings) + Inter (body), Great Vibes (hero signature) |
| Instagram   | Meta Graph API, fetched at build time    |
| Images      | Static in repo                           |
| Hosting     | Hostinger (static files)                 |
| CI/CD       | GitHub Actions → FTP deploy              |

## Page Structure

Single scrollable page with smooth-scroll navigation. Two additional routes for legal pages.

```
/                → Main single-page site
/impressum       → Legal: Impressum
/datenschutz     → Legal: Datenschutz
```

### Main Page Sections (scroll order)

1. **Hero** — Full-viewport background photo of the Ravensberg house. Title "KStV Ravensberg zu Münster" in Great Vibes script font. Subtle scroll indicator at bottom.

2. **Willkommen** — Welcome text introducing the Verbindung. Group photo alongside text. Founded 1919, Catholic, non-dueling, color-bearing at Uni Munster.

3. **Prinzipien** — Three cards side by side: Religio, Scientia, Amicitia. Each has a photo on top, principle name in gold accent, description below.

4. **Vorstand** — Board member cards in a grid (2-3 per row). Portrait photo, name, role, short description. This is the only section that changes regularly (2x/year).

5. **Unser Haus & Raume** — House exterior photo (full-bleed), description of the house on Raessfeldstrasse. Room photos below.

6. **Uber uns** — History section. Founding story, CV logo, historical photos. Timeline or editorial text layout.

7. **Instagram Feed** — Grid of recent Instagram posts (3-4 across), fetched from Meta Graph API at build time. Links to original posts. Link to Instagram profile.

8. **Footer** — Contact email, Instagram link, Verbindung tricolor stripe as subtle brand element. Links to Impressum and Datenschutz.

### Navigation

Sticky header. Starts transparent over the hero image, transitions to solid warm cream background on scroll. Nav items: Willkommen, Prinzipien, Vorstand, Unser Haus, Instagram. Click scrolls smoothly to section. Active section highlighted based on scroll position.

## Design Language

### Colors

| Token        | Value     | Usage                          |
|--------------|-----------|--------------------------------|
| background   | #FDF8F0   | Page background, cream         |
| foreground   | #2C1810   | Primary text, deep brown       |
| accent       | #8B7324   | Gold accent, headings, links   |
| muted        | #F5EDE0   | Card backgrounds, subtle fills |
| muted-fg     | #6B5D4F   | Secondary text                 |

Verbindung flag colors (green/yellow/red) appear only as a thin tricolor stripe in the footer or similar subtle reference. Not used as UI colors.

### Typography

- **Headings:** Playfair Display (serif) — elegant, warm, traditional
- **Body:** Inter (sans-serif) — clean, readable
- **Hero title only:** Great Vibes (script) — signature element for "KStV Ravensberg zu Munster"

### Spacing & Layout

- Max content width: 1200px, centered
- Generous whitespace between sections (~120-160px vertical padding)
- Full-bleed images break out of the content container
- Alternating left-aligned and centered layouts for rhythm

### Animations (tasteful, not distracting)

- Hero: Subtle parallax on background image
- Sections: Fade-up on scroll into viewport (trigger once)
- Vorstand cards: Slight stagger animation when appearing
- Nav: Smooth background-color transition on scroll
- All animations respect `prefers-reduced-motion`

### Photography

Real photos are the strongest asset (house exterior, group shots, DSC series). Gemini-generated placeholder images should be replaced with real photography over time.

## Data Architecture

```
src/
  data/
    vorstand.ts          → Board member entries
    prinzipien.ts        → Three principles with text
    content.ts           → All other static text
  assets/
    images/
      hero/              → Hero background photo(s)
      vorstand/          → Board member portraits
      haus/              → House and room photos
      geschichte/        → Historical photos
      instagram/         → (cache, gitignored if using API)
      general/           → Group photos, misc
```

### vorstand.ts example

```typescript
export interface VorstandMember {
  name: string;
  role: string;        // e.g. "Senior", "Fuxmajor"
  image: string;       // path to portrait in assets
  description: string; // short text about responsibilities
}

export const vorstand: VorstandMember[] = [
  {
    name: "Tom Buchwald",
    role: "Senior (x)",
    image: "/images/vorstand/tom-buchwald.jpg",
    description: "Als amtierender Senior ist es...",
  },
  // ...
];
```

### Content update workflow

**Vorstand (2x/year):** Someone sends new photos + texts. Developer drops photos in `assets/images/vorstand/`, updates `vorstand.ts`, pushes to `main`. GitHub Actions builds and deploys.

**Everything else:** Developer edits the relevant `.ts` data file or React component directly and pushes.

## Instagram Integration

### Approach: Meta Graph API at build time

1. Create a Facebook/Meta Developer App
2. Connect the kstvravensberg Instagram Business/Creator account
3. Generate a long-lived access token (valid 60 days)
4. Store token as GitHub Actions secret (`INSTAGRAM_TOKEN`)
5. At build time, fetch recent posts from `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=...`
6. Render as a grid of images linking to original posts

### Token refresh

Scheduled GitHub Action runs every 50 days to refresh the long-lived token before expiry. The refresh endpoint returns a new token, which is stored back as a GitHub secret via the GitHub API.

### Fallback

If the Instagram API call fails at build time (token expired, API down), the build should not fail. Show a "Follow us on Instagram" link instead of the feed. Log a warning.

## Deployment

### GitHub Actions workflow

Trigger: push to `main` branch.

Steps:
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (`npm ci`)
4. Fetch Instagram posts (using stored token)
5. Build (`npm run build` → produces `/out`)
6. Deploy `/out` contents to Hostinger via FTP (using `SamKirkland/FTP-Deploy-Action`)

### Hostinger setup

- FTP credentials stored as GitHub Actions secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`)
- Static files deployed to `public_html/`
- SSL certificate via Hostinger (Let's Encrypt, already configured)

### DNS

Domain `kstvravensberg.de` stays pointed at Hostinger. No DNS changes needed since we deploy static files to the same server. WordPress is simply deleted from the hosting.

## Legal Requirements (German law)

- **Impressum** page: Required. Contains association details, responsible person (i.S.d. TMG), contact info.
- **Datenschutz** (Privacy Policy) page: Required. Covers hosting provider data processing, Instagram embed, analytics (if any), cookies (if any).
- Both are separate routes, not part of the single-page scroll.

## Project Structure

```
ravensberg/
  src/
    app/
      layout.tsx              → Root layout, fonts, metadata
      page.tsx                → Main single-page (all sections)
      impressum/page.tsx      → Legal page
      datenschutz/page.tsx    → Legal page
    components/
      Navigation.tsx          → Sticky nav with scroll spy
      Hero.tsx                → Full-viewport hero section
      Willkommen.tsx          → Welcome section
      Prinzipien.tsx          → Three principle cards
      Vorstand.tsx            → Board member grid
      UnserHaus.tsx           → House and rooms section
      UeberUns.tsx            → History/about section
      InstagramFeed.tsx       → Instagram post grid
      Footer.tsx              → Footer with contact, legal links
      ScrollReveal.tsx        → Reusable fade-in-on-scroll wrapper
    data/
      vorstand.ts
      prinzipien.ts
      content.ts
    lib/
      instagram.ts            → Meta Graph API fetch helper
    assets/
      images/                 → All static images
  public/
    favicon.ico
    og-image.jpg              → Social sharing preview image
  docs/
    plans/
      2026-02-03-website-redesign.md
  .github/
    workflows/
      deploy.yml              → Build + FTP deploy
      refresh-instagram.yml   → Scheduled token refresh
  tailwind.config.ts
  next.config.ts              → output: 'export'
  package.json
  tsconfig.json
```
