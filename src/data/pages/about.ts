import { businessName, site } from '../site';

export const aboutPage = {
  seo: {
    title: `About Us | ${businessName()}`,
    description:
      'Learn about Adames Pest Solutions — Central Florida pest control for homes and businesses with clear inspections and practical treatments.',
  },
  h1: 'About Us',
  intro: [
    'We know what is bugging you. If you have a bug or pest problem at your home or business, depend on Adames Pest Solutions, Inc. for fast, effective, and affordable services.',
    `${businessName(true)} serves property owners across Central Florida with clear inspections and treatments matched to the pest on your property.`,
  ],
  sections: [
    {
      heading: 'An experienced pest exterminator',
      body: [
        'It takes more to eliminate bugs than over-the-counter products. They may knock down a few pests and still miss lasting protection or other critters on the property.',
        'We assess the infestation, choose a reliable approach for the pest you have, and work the plan through — whether the problem is small or widespread.',
        site.claims.satisfaction.value,
      ],
    },
  ],
  ctaNote:
    'Contact us to schedule a pest inspection at your home or business. We proudly serve customers throughout Central Florida.',
} as const;
