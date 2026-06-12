# OurBrio — Web Design Landing Page

Marketing site for OurBrio's website design & development agency. Built with Next.js 16 (App Router) and TypeScript. Custom, conversion-focused websites built from scratch — no templates.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript**
- **framer-motion** for entrance/scroll animations
- **lucide-react** for icons
- **Resend** for lead-capture email delivery
- **@vercel/analytics** for traffic + conversion tracking
- Inline-styled components with CSS custom properties (editorial `--ink` / `--cream` / `--brass` theme)

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev                  # http://localhost:3000
```

## Environment variables

Set these in `.env.local` for local dev, and in your Vercel project for production. Leads still work without a Resend key (logged server-side), but won't be emailed until it's set.

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key ([resend.com](https://resend.com) → API Keys). Enables lead emails. |
| `LEAD_TO_EMAIL` | Inbox that receives leads. Defaults to `info@ourbrio.com`. |
| `LEAD_FROM_EMAIL` | Verified Resend sender, e.g. `OurBrio <leads@ourbrio.com>`. |
| `NEXT_PUBLIC_SITE_URL` | Production URL. Drives canonical, OG, robots, and sitemap. |

## How it works

- **Sections:** Hero (brass particle-field background) → services → work → process → pricing → FAQ → lead form → footer.
- **Lead capture:** the form POSTs to `app/api/lead/route.ts`, which validates input, drops bot submissions via a honeypot field, and emails the lead through Resend. A successful submit fires a `lead_submitted` analytics event.
- **SEO:** per-route metadata, dynamic OG image (`app/opengraph-image.tsx`), `ProfessionalService` + `FAQPage` JSON-LD, `robots.ts`, and `sitemap.ts`.
- **Performance:** the canvas animation respects `prefers-reduced-motion` and pauses via `IntersectionObserver` when scrolled offscreen.

## Deploy

Import the repo at [vercel.com/new](https://vercel.com/new) (auto-detects Next.js), add the environment variables above, and deploy.

## Scripts

```bash
npm run dev     # local dev server
npm run build   # production build
npm run start   # serve the production build
```
