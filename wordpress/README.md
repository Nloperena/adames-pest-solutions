# WordPress ? Nexrena CRM bridge

The live domain `adamespestsolutions.com` still runs WordPress + Ninja Forms.
Those submissions do **not** reach the portal unless this bridge is installed
(or DNS is cut over to the Astro/Vercel site).

## Install (preferred)

1. Upload `wordpress/nexrena-forms-bridge/` to `wp-content/plugins/nexrena-forms-bridge/`.
2. Activate **Nexrena Forms Bridge (Adames)** in WP Admin ? Plugins.
3. Submit a test on `/contact-us/` and confirm the lead appears in
   `https://portal.nexrena.com/app/forms` for `adamespest@aol.com`.

The plugin:

- Forwards server-side on `ninja_forms_after_submission`
- Also loads `https://adames-pest-solutions.vercel.app/nexrena-nf-bridge.js`
  for a client-side dual-submit backup

## Alternative (no plugin UI)

Add this HTML in Appearance ? Theme File Editor ? `footer.php` before `</body>`,
or via a “Insert Headers and Footers” plugin:

```html
<script src="https://adames-pest-solutions.vercel.app/nexrena-nf-bridge.js" defer></script>
```

## Astro rebuild (long-term)

Point `adamespestsolutions.com` DNS at the Vercel project
`adames-pest-solutions`. Contact + estimate modals already post to
`https://api.nexrena.com/api/forms/submit` with `siteKey: adames` ? contact `mksfo2k3`.
