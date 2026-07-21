import { businessName, site } from '../site';

export const contactPage = {
  seo: {
    title: `Contact Us | ${businessName()}`,
    description:
      'Contact Adames Pest Solutions for pest control in Central Florida. Call, email, or send a message to schedule an inspection.',
  },
  h1: 'Contact Us',
  intro: [
    'Reach the office during business hours or send a message with the form below. We respond to inspection and estimate requests across Central Florida.',
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
