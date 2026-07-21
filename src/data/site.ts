/**
 * Single source of truth for business identity.
 * Conflicts and unverified claims: docs/content-verification.md
 */

export type VerificationStatus =
  | 'verified'
  | 'unverified'
  | 'unverified_conflict'
  | 'placeholder'
  | 'pending';

export const site = {
  /** Provisional official spelling from public website + logo wordmark */
  legalName: 'Adames Pest Solutions, Inc.',
  /** Short display name for UI */
  name: 'Adames Pest Solutions',
  /**
   * Brief used “Adamas”; public site, titles, and logo use “Adames”.
   * Components must read names from this config only — never hard-code either spelling.
   */
  spellingNote:
    'Design brief used “Adamas Pest Solutions”; the live site and logo use “Adames Pest Solutions, Inc.” Provisional decision: use Adames until client paperwork confirms otherwise.',
  tagline: 'because we care',
  url: 'https://adamespestsolutions.com',
  locale: 'en_US',
  region: 'Central Florida',
  phone: {
    primary: '407-891-7757',
    primaryHref: 'tel:4078917757',
    /** Contact page displayed this while tel: pointed at primary */
    alternateDisplay: '877-650-1637',
    alternateStatus: 'unverified_conflict' as VerificationStatus,
  },
  email: {
    primary: 'info@adamespestsolutions.com',
    primaryHref: 'mailto:info@adamespestsolutions.com',
    /** Contact page display email — conflicts with primary */
    legacyDisplay: 'adamepest@aol.com',
    /** Contact page mailto href — conflicts with display and primary */
    legacyMailto: 'adamepestaa@gmail.com',
    legacyStatus: 'unverified_conflict' as VerificationStatus,
    notes:
      'Sitewide chrome uses info@; contact page showed AOL in text and Gmail in mailto. Do not silently pick one for lead routing.',
  },
  hours: {
    weekdays: 'Monday – Friday 8am to 5pm',
    weekdaysShort: 'Mon–Fri 8am – 5pm',
    weekend: 'Closed weekends',
  },
  address: {
    streetAddress: '',
    addressLocality: '',
    addressRegion: 'FL',
    postalCode: '',
    addressCountry: 'US',
    status: 'unverified' as VerificationStatus,
    notes: 'No street address found in crawl. Do not invent LocalBusiness street schema until confirmed.',
  },
  social: {
    facebook: {
      href: 'https://facebook.com/',
      status: 'placeholder' as VerificationStatus,
      notes: 'Legacy footer linked bare facebook.com/ — not a real business profile.',
    },
    instagram: {
      href: 'https://instagram.com/',
      status: 'placeholder' as VerificationStatus,
      notes: 'Legacy footer linked bare instagram.com/ — not a real business profile.',
    },
  },
  claims: {
    yearsExperience: {
      value: 'more than 20 years',
      status: 'unverified' as VerificationStatus,
      source: 'legacy site',
    },
    satisfaction: {
      value: 'We assess carefully and follow through on a clear plan.',
      status: 'unverified' as VerificationStatus,
      source:
        'rewritten from legacy “100% satisfaction” language — not a legal guarantee',
    },
  },
  logo: {
    src: '/images/logo.png',
    alt: 'Adames Pest Solutions Inc. logo with wasp mascot',
    width: 153,
    height: 101,
  },
  seoDefaults: {
    ogImage: '/images/og/default.png',
  },
  cta: {
    estimateLabel: 'Get a Free Estimate',
    estimateHref: '/request-an-estimate/',
    callLabel: 'Call Now',
    contactLabel: 'Contact Us',
    contactHref: '/contact-us/',
  },
  /** Deep links that open the sitewide contact modal */
  modalHashes: {
    estimate: '#estimate',
    contact: '#contact',
  },
  formIntegration: {
    status: 'verified' as VerificationStatus,
    provider: 'nexrena-crm',
    siteKey: 'adames',
    endpoint: 'https://api.nexrena.com/api/forms/submit',
    chatEndpoint: 'https://api.nexrena.com/api/chat',
    message:
      'Contact and estimate forms submit to the Nexrena CRM (siteKey: adames). AI chat intake uses the same CRM inbox.',
  },
} as const;

/** Short brand name from config */
export function displayName(): string {
  return site.name;
}

/** Short or legal business name from config */
export function businessName(legal = false): string {
  return legal ? site.legalName : site.name;
}

export function primaryPhone(): string {
  return site.phone.primary;
}

export function primaryPhoneHref(): string {
  return site.phone.primaryHref;
}

export function primaryEmail(): string {
  return site.email.primary;
}

export function primaryEmailHref(): string {
  return site.email.primaryHref;
}

export type SiteConfig = typeof site;
