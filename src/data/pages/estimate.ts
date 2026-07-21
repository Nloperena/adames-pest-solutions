import { businessName, site } from '../site';

export const estimatePage = {
  seo: {
    title: `Free Pest Control Estimate in Central Florida | ${businessName()}`,
    description:
      'Request a free pest control estimate in St. Cloud and Central Florida. Describe the pest problem and schedule an inspection with Adames Pest Solutions.',
  },
  h1: 'Get a free pest control estimate',
  intro: [
    'Tell us what you are seeing — palmetto bugs, ants, termites, rodents, mosquitoes, or something else — and where (home or business in Central Florida). We will follow up to schedule an inspection.',
  ],
  formNote: site.formIntegration.message,
  directContact: {
    phone: site.phone.primary,
    phoneHref: site.phone.primaryHref,
    email: site.email.primary,
    emailHref: site.email.primaryHref,
  },
} as const;
