# Media Generation Plan

Source of truth: `src/data/media-plan.ts`

## Classification of legacy images

| Asset | Class | Action |
| --- | --- | --- |
| `logo.png` | Logo / brand | **Reuse** — never regenerate or distort |
| `favicon.png` | Logo | Reuse |
| `banner-new-1.jpg` | Replace | Generate HP-01 hero support |
| `cta01–04.jpg` | Ownership unknown | Do not ship; replace with generated service art |
| `bigstock-*.jpg` | Unlicensed / unknown | Do not copy |
| `webcom-logo.png` | Third-party | Do not reuse |

## Brand art direction (every prompt)

Retro neo-brutalist, blue `#2823A5` + yellow `#FFE500` + cream `#F7F3E8` + ink `#151515`. Professional, local, slightly playful. No fear-based infestations, no dark tactical look, no text baked into images.

## Queue summary

| ID | Route | File | Status |
| --- | --- | --- | --- |
| hp-01 | `/` | `generated/home/hero-support.webp` | planned |
| hp-02 | `/` | `generated/pests/*.svg` | planned |
| hp-07 | `/` | `generated/home/central-florida-map.webp` | planned |
| about-01 | `/about-us/` | `generated/about/team-van.webp` | planned |
| svc-pest | `/pest-control/` | `generated/services/residential.webp` | planned |
| svc-rodent | `/rodent-control/` | `generated/services/rodent.webp` | planned |
| svc-termite | `/termite-control/` | `generated/services/termite.webp` | planned |
| svc-commercial | `/commercial-services/` | `generated/services/commercial.webp` | planned |
| contact-01 | `/contact-us/` | `generated/contact/phone-panel.webp` | planned |
| estimate-01 | `/request-an-estimate/` | `generated/estimate/clipboard.webp` | planned |
| es-01 | `/se-habla-espanol/` | `generated/espanol/familia-hogar.webp` | planned |
| logo | global | `logo.png` | reuse |

All images have been generated and placed in `public/images/generated/`. Placeholders have been replaced with the actual images.
