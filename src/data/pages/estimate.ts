import { businessName, site } from '../site';

export const estimatePage = {
  seo: {
    title: `Request an Estimate | ${businessName()}`,
    description:
      'Request a pest control estimate in Central Florida. Tell us what you are seeing and schedule an inspection with Adames Pest Solutions.',
  },
  h1: 'Request an Estimate',
  intro: [
    'Tell us what you are seeing at your home or business and we will follow up to schedule an inspection and estimate. We proudly serve customers throughout Central Florida.',
  ],
  formNote: site.formIntegration.message,
  directContact: {
    phone: site.phone.primary,
    phoneHref: site.phone.primaryHref,
    email: site.email.primary,
    emailHref: site.email.primaryHref,
  },
} as const;
