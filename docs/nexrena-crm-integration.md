# Nexrena CRM + Chat Integration

## Site registration

| Field | Value |
| --- | --- |
| siteKey | `adames` |
| contactId | `mksfo2k3` (portal adamespest@aol.com) |
| Forms | `POST https://api.nexrena.com/api/forms/submit` |
| Chat | `POST https://api.nexrena.com/api/chat` + `GET /api/chat/config` |
| Ops inbox | Nexrena Ops → Site messages (`/ai-chats`) |

API registration lives in the Nexrena monorepo:

- `nexrena-api/src/lib/sites.ts`
- `nexrena-api/src/lib/sales-assistant/knowledge/adames.ts`
- `nexrena-api/scripts/ensure-adames-contact.mjs`

## Deploy checklist (API)

1. Deploy `nexrena-api` with the `adames` site entry.
2. Create CRM contact (monorepo path on the dyno):
   ```bash
   heroku run "node nexrena-api/scripts/ensure-adames-contact.mjs" -a nexrena-api
   ```
3. Optional hardening:
   ```bash
   heroku config:set ADAMES_FORM_SECRET=... -a nexrena-api
   ```
   Then set matching `PUBLIC_ADAMES_FORM_SECRET` on the Adames Vercel project.
4. Add production preview origins to `sites.ts` if using Vercel preview URLs.

## Client site (this repo)

- Forms: `src/lib/nexrenaFormSubmit.ts` → `LeadForm`
- Chat: `SiteChatWidget` mounted in `BaseLayout.astro`
- Env: copy `.env.example` → `.env`

## Local test

```bash
npm run dev
# Submit contact/estimate form
# Open chat FAB → send a message → submit intake
```

Until the API deploy + ensure-contact script run, form submits will return `Unknown siteKey`.
