import { businessName, site } from '../site';

export const contactPage = {
  seo: {
    title: `Contact Pest Control in St. Cloud & Central Florida | ${businessName()}`,
    description:
      'Call or message Adames Pest Solutions for pest control in St. Cloud and Central Florida. Phone, email, and estimate requests during business hours.',
  },
  h1: 'Contact your local Central Florida pest team',
  intro: [
    'Ready for an inspection in St. Cloud or nearby Central Florida? Call during business hours or send a message — tell us what pests you are seeing and where.',
  ],
  primary: {
    phone: site.phone.primary,
    phoneHref: site.phone.primaryHref,
    email: site.email.primary,
    emailHref: site.email.primaryHref,
    hours: site.hours.weekdaysShort,
  },
  formNote: site.formIntegration.message,
} as const;
