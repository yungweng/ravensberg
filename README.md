# KStV Ravensberg zu Münster

Website for KStV Ravensberg — a Catholic, non-dueling, color-bearing student fraternity at the University of Münster, founded 1919.

## Tech Stack

- [Next.js 16](https://nextjs.org) — static export (`output: "export"`)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) — scroll animations
- [Bun](https://bun.sh) — package manager

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Static export to `/out` |
| `bun run lint` | Run ESLint |

## Updating Content

All content lives in `src/data/`. The only file that changes regularly is `vorstand.ts` (board members). To update:

1. Add portrait images to `public/images/vorstand/`
2. Edit `src/data/vorstand.ts`
3. Push to `main` — deployment is automatic

## Deployment

GitHub Actions builds and deploys to Hostinger via FTP on every push to `main`. See `.github/workflows/deploy.yml`.
