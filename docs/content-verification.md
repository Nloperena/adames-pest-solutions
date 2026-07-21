# Content Verification Log

Last updated: 2026-07-21  
Source crawl: https://adamespestsolutions.com (HTML scrape in `/scrape`)

## Brand spelling discrepancy

| Source | Spelling |
| --- | --- |
| Public website title, logo alt context, legal footer, email domain | **Adames Pest Solutions, Inc.** |
| Design brief / prior agent notes | “Adamas Pest Solutions” |

**Decision (provisional):** Use `Adames Pest Solutions, Inc.` via `site.legalName` / `site.name` in `src/data/site.ts` until client assets or paperwork establish otherwise. Do not hard-code either spelling in components.

---

## Contact information conflicts

| Field | Values found | Provisional site config |
| --- | --- | --- |
| Primary phone (header/footer `tel:`) | `407-891-7757` | `site.phone.primary` |
| Contact page **display** phone | `877-650-1637` while `href` is `tel:407-891-7757` | Stored as `site.phone.alternateDisplay` — **UNVERIFIED / conflicting** |
| Primary email (sitewide) | `info@adamespestsolutions.com` | `site.email.primary` |
| Contact page **display** email | `adamepest@aol.com` | `site.email.legacyDisplay` — **UNVERIFIED** |
| Contact page **mailto** href | `adamepestaa@gmail.com` | `site.email.legacyMailto` — **UNVERIFIED** |
| Hours (footer) | Monday – Friday 8am to 5pm | `site.hours.weekdays` |
| Hours (contact body) | Mon-Fri 8am - 5pm | Same meaning; normalized |

**Do not silently pick a phone/email for marketing claims.** UI CTAs use primary values; contact page surfaces the conflict note until resolved.

---

## Business claims requiring verification

| Claim | Where found | Status |
| --- | --- | --- |
| “more than 20 years” experience | Home, About, Pest Control, Termite, Spanish | `UNVERIFIED` — migrated as labeled claim only |
| “100% satisfaction” strive language | About | `UNVERIFIED` — rewrite soft; do not present as guarantee |
| “Licensed + Insured” (homepage redesign trust strip) | New design, not proven on crawl | `UNVERIFIED` — do not publish as fact until confirmed |
| Google rating / review count | Not found on crawl; prior redesign placeholders | **REMOVED** — do not invent |
| Named customer testimonials | Not found on crawl; prior placeholders | **REMOVED** — do not invent |
| Exact cities served | “Central Florida”; Spanish page also “St. Cloud, FL” | Service area list limited to verified mentions + provisional Central Florida |
| Social profiles | Links to bare `facebook.com/` and `instagram.com/` | Placeholder URLs — not real profiles |
| Termite national damage stats ($2B / 600k homes) | Termite page | Third-party statistic — keep only if client confirms source |

---

## Forms

| Page | Observed behavior | Status |
| --- | --- | --- |
| `/contact-us/` | Ninja Forms “Contact Form” (JS-rendered). Fields: Name, Email, Phone, Comments, Submit. Posts via WP `admin-ajax.php`. | Backend **not migrated**. New form UI must mark integration pending. |
| `/request-an-estimate/` | No working estimate form in HTML — only search form + copy telling users to contact for inspection. | Build estimate form UI; mark submission pending. |
| Search form | Site search `/?s=` | Not rebuilt (WordPress-specific). |

Spam protection: honeypot field on forms + API rate limit.  
CRM: **Nexrena** (`siteKey: adames`) — see `docs/nexrena-crm-integration.md`.  
Requires API deploy + `ensure-adames-contact.mjs` before production leads land.

---

## Thin / missing content

| Page | Issue |
| --- | --- |
| `/faqs/` | Intro promises FAQs “below” but **no Q&A pairs** exist in HTML. |
| `/request-an-estimate/` | Thin page; form missing. |
| All pages | **No meta descriptions** in source HTML. |
| Structured data | No meaningful LocalBusiness JSON-LD found in crawl. |

---

## Indexability notes

- Canonicals present and self-referencing on crawled pages.
- No `noindex` robots meta found on main pages.
- WordPress feeds/comments URLs exist but are not content pages for rebuild.

---

## Open client questions

1. Confirm legal business name spelling for contracts and logo lockup.
2. Which phone number should be primary: 407-891-7757 or 877-650-1637?
3. Which email should receive leads: info@, AOL, or Gmail?
4. Physical street address for LocalBusiness schema?
5. License numbers / insurance certificate details?
6. Real Google Business Profile rating + review count?
7. Real social profile URLs?
8. Service-area city list (exact)?
9. Actual FAQ Q&A content?
10. Form destination (email, CRM, webhook)?
11. Years in business exact year founded?
