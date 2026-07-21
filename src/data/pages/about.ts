import { site } from '../site';

export const aboutPage = {
  seo: {
    title: `About Adames Pest Solutions | Local Central Florida Exterminators`,
    description:
      'Adames Pest Solutions is a local Central Florida pest control company serving St. Cloud and nearby homes and businesses with inspection-first service.',
  },
  h1: 'Your local Central Florida pest team',
  intro: [
    'When Florida humidity brings palmetto bugs, ants, or mosquitoes to your door, you want a real local team — not a national call center script. Adames Pest Solutions, Inc. helps homeowners and businesses across Central Florida, including St. Cloud.',
    'We inspect first, explain what we find, and treat the pest that is actually on your property.',
  ],
  sections: [
    {
      heading: 'Built for this climate',
      body: [
        'Central Florida does not get a long freeze that resets pest pressure. That is why “spray once and forget it” rarely works here.',
        'We look at entry points, moisture, landscaping edges, and the habits of the pests people search for most in this area — then we match the method to the problem.',
        site.claims.satisfaction.value,
      ],
    },
    {
      heading: 'How we work with you',
      body: [
        'Call or send an estimate request. Tell us what you are seeing. We schedule an inspection, walk the property, and give you a clear next step — including when a phone call is the fastest path.',
        'Se habla español. Ask for Spanish-language help when you reach the office.',
      ],
    },
  ],
  ctaNote:
    'Ready for a local inspection in St. Cloud or Central Florida? Call or request a free estimate.',
} as const;
