# Fractional AI Advisor

A greenfield Next.js marketing site for the **Fractional AI Advisor** offer.

## Stack

- Next.js 15
- TypeScript
- Tailwind CSS

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Optional: add a booking URL for the call handoff:

```bash
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

- `src/app` holds the four-page routed site: Home, Engagements, Patrick, and Book.
- `src/content/site-content.ts` centralises the copy and structured content.
- `src/components` holds the reusable layout, motion, CTA, FAQ, booking, and artefact components.
- `public/hero-scene.svg` is the full-bleed hero illustration.

## Deployment notes

- The site is static-friendly and can be deployed on Vercel or any modern Next.js host.
- Set `NEXT_PUBLIC_CLARITY_CALL_URL` in your hosting environment to enable the live booking handoff on `/book`.
- The site is intentionally small and product-page-led: one strong homepage plus three supporting pages.

## GitHub Pages

- The project is configured for GitHub Pages static export via [`.github/workflows/deploy-pages.yml`](/Users/patrickhussey/Desktop/Fractional%20AI%20champion%20site%20/.github/workflows/deploy-pages.yml).
- On GitHub Actions, the Next.js config detects the repository name and applies the correct `basePath` and `assetPrefix` automatically for project pages.
- Push to `main`, then enable **Settings → Pages → Build and deployment → Source: GitHub Actions** in the repository if GitHub does not switch it automatically on first deploy.
