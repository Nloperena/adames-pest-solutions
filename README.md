# Adames Pest Solutions

Production Astro + React rebuild of the public Adames Pest Solutions website with a retro neo-brutalist visual system.

## Stack

- Astro 7 (SSG, pages, SEO)
- React 19 only for interactive header + lead forms
- TypeScript + npm

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Important docs

- `docs/site-inventory.md` — crawl inventory
- `docs/content-verification.md` — spelling/contact/claim conflicts
- `docs/redirect-map.csv` — URL changes
- `docs/media-generation-plan.md` — Gemini media queue
- `docs/nexrena-crm-integration.md` — CRM forms + AI chat (`siteKey: adames`)
- `src/data/site.ts` — single business config (use this for the name)

## Env

```bash
cp .env.example .env
# PUBLIC_API_URL=https://api.nexrena.com
```

After deploying the Nexrena API `adames` site entry, run:

```bash
heroku run "node nexrena-api/scripts/ensure-adames-contact.mjs" -a nexrena-api
```

## Routes preserved from live site

`/`, `/about-us/`, `/pest-control/`, `/rodent-control/`, `/termite-control/`, `/commercial-services/`, `/request-an-estimate/`, `/faqs/`, `/se-habla-espanol/`, `/contact-us/`, `/sitemap/`

Plus `/privacy/` and `/terms/` stubs. Redirects for prior redesign aliases live in `vercel.json`.
