/**
 * Only areas explicitly mentioned on the legacy site.
 * Copy emphasizes St. Cloud + Central Florida (local niche) without inventing city doorways.
 */

export type ServiceArea = {
  name: string;
  status: 'provisional' | 'unverified';
  source: string;
  href?: never;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: 'St. Cloud, FL',
    status: 'provisional',
    source: 'Mentioned on /se-habla-espanol/',
  },
  {
    name: 'Central Florida',
    status: 'provisional',
    source: 'Sitewide legacy copy',
  },
];

export const trustStrip = [
  'St. Cloud & Central Florida',
  'Homes + Businesses',
  'Inspection-First Plans',
  'Call or Free Estimate',
] as const;
