# Good Transformer

Personal AI lessons and fractional AI advisory — [goodtransformer.ai](https://goodtransformer.ai)

## Stack

- Next.js 15 (static export)
- TypeScript
- Tailwind CSS

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and fill in your values:

```bash
NEXT_PUBLIC_FORMSPREE_PERSONAL_ENDPOINT=https://formspree.io/f/your-personal-form-id
NEXT_PUBLIC_FORMSPREE_BOOKING_ENDPOINT=https://formspree.io/f/your-booking-form-id
NEXT_PUBLIC_CLARITY_CALL_URL=https://your-calendar-link
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

## Project structure

- `src/app` — pages: Home, Services, Patrick, About, Book
- `src/content/site-content.ts` — all copy and structured content
- `src/components` — layout, motion, CTA, FAQ, booking, and artefact components
- `public/hero/hero-main.png` — home page hero illustration

## Deployment

Deploys automatically to GitHub Pages on push to `main` via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

Environment variables are injected at build time from GitHub Secrets (`NEXT_PUBLIC_FORMSPREE_PERSONAL_ENDPOINT`, `NEXT_PUBLIC_FORMSPREE_BOOKING_ENDPOINT`, `NEXT_PUBLIC_CLARITY_CALL_URL`). The `.env.production` file provides fallback values if secrets are not set.

The site uses a custom domain (`goodtransformer.ai`) — no `basePath` or `assetPrefix` is needed.
