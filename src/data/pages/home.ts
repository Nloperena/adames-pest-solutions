import { businessName } from '../site';

export const homePage = {
  seo: {
    title: `Pest Control in St. Cloud & Central Florida | ${businessName(true)}`,
    description:
      'Local pest control for St. Cloud and Central Florida homes. Palmetto bugs, ants, termites, rodents, and mosquitoes — call Adames Pest Solutions for an inspection.',
  },
  hero: {
    label: 'St. Cloud & Central Florida',
    h1: 'Florida pests. Local help.',
    lead: 'Palmetto bugs, fire ants, termites, and mosquitoes don’t take a season off here. Call for an inspection or request a free estimate.',
  },
  welcome: {
    h2: 'Pest control built for Central Florida living',
    body: [
      'Humidity, rain, and warm nights keep pests active year-round in St. Cloud and across Central Florida. When you see palmetto bugs in the kitchen, ants after a storm, or mosquitoes in the yard, you need a local team that knows this climate.',
      'Adames Pest Solutions, Inc. inspects first, treats the pest you actually have, and helps you keep them from walking right back in.',
    ],
  },
  trusted: {
    h2: 'Why Central Florida homeowners call us',
    body: [
      'Store sprays knock down a few bugs and miss the nest, the entry points, or the next wave after a rainy week.',
      'We start with a clear look at your property, explain what we find in plain language, and build a plan that fits Florida homes — not a one-spray-fits-all pitch.',
      'Need someone today? Call the office or send a quick estimate request. We serve homes and businesses throughout Central Florida, including St. Cloud.',
    ],
  },
  mascot: {
    h2: 'The bad news for Florida bugs.',
    body: [
      `${businessName()} is your local option for residential and commercial pest control in Central Florida — direct answers, practical treatments, and follow-through after the visit.`,
    ],
  },
} as const;
