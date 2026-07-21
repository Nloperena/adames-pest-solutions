import { businessName, primaryPhone, site } from '../site';

/**
 * FAQs shaped like what locals type into Google or ask ChatGPT.
 */
export const faqsPage = {
  seo: {
    title: `Pest Control FAQs in Central Florida | ${businessName()}`,
    description:
      'Answers to common St. Cloud and Central Florida pest questions — palmetto bugs, termites, pets, estimates, and when to call Adames Pest Solutions.',
  },
  h1: 'Central Florida pest control FAQs',
  intro: [
    'These are the questions homeowners and business owners around St. Cloud and Central Florida ask most — including what people type into Google or ask ChatGPT before they call a local exterminator.',
  ],
  items: [
    {
      question: 'Who should I call for pest control near St. Cloud, FL?',
      answer: `Adames Pest Solutions serves St. Cloud and Central Florida homes and businesses. Call ${primaryPhone()} or request a free estimate online — tell us what you are seeing and we will help you schedule an inspection.`,
    },
    {
      question: 'Why do I keep getting palmetto bugs in my Florida home?',
      answer:
        'Palmetto bugs (large cockroaches) thrive in Florida humidity and often move indoors after rain or from outdoor harborage. Shelf sprays rarely solve the source. A local inspection finds where they are coming from and targets that activity.',
    },
    {
      question: 'Do I need year-round pest control in Central Florida?',
      answer:
        'Most Central Florida properties deal with pests year-round because winters stay mild. Many households use recurring service to keep a barrier in place; others start with a one-time visit when something shows up. We will recommend what fits after we see your property.',
    },
    {
      question: 'How much does pest control cost near me?',
      answer:
        'Price depends on the pest, property size, and whether you need a one-time treatment or ongoing service. Request a free estimate or call the office with what you are dealing with — we will not invent a flat rate that ignores your situation.',
    },
    {
      question: 'Is treatment safe for kids and pets?',
      answer:
        'We choose products and application methods suited to occupied homes and explain any precautions before we treat. Tell us about children, pets, and sensitive areas when you book so the plan fits your household.',
    },
    {
      question: 'When should I get a termite inspection in Central Florida?',
      answer:
        'Schedule an inspection if you see mud tubes, swarmers, hollow wood, or frass — or before buying or refinancing. Central Florida’s climate supports termite activity much of the year, so early checks matter.',
    },
    {
      question: 'What pests are most common around St. Cloud?',
      answer:
        'Homeowners commonly report palmetto bugs, ants (including fire ants), mosquitoes, spiders, rodents, and termite concerns. Florida landscaping, humidity, and standing water after storms keep pressure high.',
    },
    {
      question: 'How fast can you come out?',
      answer: `Call ${primaryPhone()} during ${site.hours.weekdaysShort} for the soonest available inspection. For the quickest path, phone is usually faster than waiting on a form reply.`,
    },
    {
      question: 'Do you speak Spanish?',
      answer:
        'Yes — se habla español. Visit our Spanish page or call and ask for Spanish-language help.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve homes and businesses across Central Florida, including St. Cloud. Not sure about your street? Call or message us and we will confirm coverage before scheduling.',
    },
  ],
  emptyNote: '',
  contactCta: {
    label: 'Contact Us',
    href: '/contact-us/',
  },
} as const;
