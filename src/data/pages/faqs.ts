import { businessName, primaryPhone, site } from '../site';

/**
 * Practical FAQs based on verified site facts only — no invented treatment claims.
 */
export const faqsPage = {
  seo: {
    title: `FAQs | ${businessName()}`,
    description:
      'Common questions about pest control in Central Florida — service areas, estimates, and how to reach Adames Pest Solutions.',
  },
  h1: 'FAQs',
  intro: [
    'Here are answers to common questions about working with Adames Pest Solutions. For treatment details specific to your property, call or request an estimate so we can inspect first.',
  ],
  items: [
    {
      question: 'What areas do you serve?',
      answer:
        'We serve homes and businesses across Central Florida, including St. Cloud. Call or send a message if you want to confirm coverage for your address.',
    },
    {
      question: 'How do I get an estimate?',
      answer:
        'Use the request-an-estimate form, call the office, or email us. We typically start with an inspection so the plan matches the pest and the property.',
    },
    {
      question: 'What pests do you treat?',
      answer:
        'We handle common household and commercial pests including ants, cockroaches, bed bugs, spiders, wasps, termites, rodents, and other wildlife concerns. Tell us what you are seeing and we will advise next steps.',
    },
    {
      question: 'What are your office hours?',
      answer: `We are available ${site.hours.weekdays}. ${site.hours.weekend}.`,
    },
    {
      question: 'Do you speak Spanish?',
      answer:
        'Yes — se habla español. Visit our Spanish page or call the office and ask for Spanish-language assistance.',
    },
    {
      question: 'How can I reach you quickly?',
      answer: `Call ${primaryPhone()} or use the contact form. For fastest scheduling, a phone call during business hours is often best.`,
    },
  ],
  emptyNote: '',
  contactCta: {
    label: 'Contact Us',
    href: '/contact-us/',
  },
} as const;
