/**
 * Dual-submit bridge for legacy WordPress Ninja Forms ? Nexrena CRM.
 * Safe no-op on the Astro site (no nfForms / admin-ajax submit).
 */
(function () {
  var ENDPOINT = 'https://api.nexrena.com/api/forms/submit';
  var SITE_KEY = 'adames';
  var sent = Object.create(null);

  function readFields(scope) {
    var root = scope || document;
    var nameEl =
      root.querySelector('#nf-field-12') ||
      root.querySelector('input[name="fname"]') ||
      root.querySelector('input[name="name"]');
    var emailEl =
      root.querySelector('#nf-field-15') || root.querySelector('input[type="email"]');
    var phoneEl =
      root.querySelector('#nf-field-18') || root.querySelector('input[type="tel"]');
    var msgEl =
      root.querySelector('#nf-field-21') || root.querySelector('textarea');

    return {
      name: (nameEl && nameEl.value ? nameEl.value : '').trim(),
      email: (emailEl && emailEl.value ? emailEl.value : '').trim().toLowerCase(),
      phone: (phoneEl && phoneEl.value ? phoneEl.value : '').trim(),
      message: (msgEl && msgEl.value ? msgEl.value : '').trim(),
    };
  }

  function forward(fields) {
    if (!fields.name || !fields.email || !fields.message) return;
    var dedupe = fields.email + '|' + fields.message.slice(0, 80);
    if (sent[dedupe]) return;
    sent[dedupe] = true;

    var body = {
      siteKey: SITE_KEY,
      formName: 'contact',
      name: fields.name,
      email: fields.email,
      phone: fields.phone || undefined,
      message: fields.message,
      pageUrl: window.location.href,
    };

    try {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Site-Key': SITE_KEY,
        },
        body: JSON.stringify(body),
        keepalive: true,
      }).catch(function () {});
    } catch (_) {}
  }

  function onSubmitClick(event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var btn = target.closest(
      '#nf-form-3-cont input[type="submit"], #nf-form-3-cont button[type="submit"], .nf-form-cont input[type="submit"]',
    );
    if (!btn) return;
    var cont = btn.closest('.nf-form-cont') || document;
    forward(readFields(cont));
  }

  document.addEventListener('click', onSubmitClick, true);

  // Ninja Forms success hook (when jQuery + NF are present)
  function bindNf() {
    if (!window.jQuery) return;
    window.jQuery(document).on('nfFormSubmitResponse', function (_e, response) {
      try {
        var data = response && response.response && response.response.data;
        var fields = (data && data.fields) || {};
        var name =
          (fields['12'] && fields['12'].value) ||
          (fields.name && fields.name.value) ||
          '';
        var email =
          (fields['15'] && fields['15'].value) ||
          (fields.email && fields.email.value) ||
          '';
        var phone =
          (fields['18'] && fields['18'].value) ||
          (fields.phone && fields.phone.value) ||
          '';
        var message =
          (fields['21'] && fields['21'].value) ||
          (fields.comments && fields.comments.value) ||
          '';
        forward({
          name: String(name || '').trim(),
          email: String(email || '')
            .trim()
            .toLowerCase(),
          phone: String(phone || '').trim(),
          message: String(message || '').trim(),
        });
      } catch (_) {}
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindNf);
  } else {
    bindNf();
  }
})();
