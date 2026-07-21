/**
 * Only areas explicitly mentioned on the legacy site.
 * No invented city doorway pages or Orlando/Kissimmee lists.
 */

export type ServiceArea = {
  name: string;
  status: 'provisional' | 'unverified';
  source: string;
  /** No city landing routes in this migration */
  href?: never;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Central Florida',
    status: 'provisional',
    source: 'Sitewide legacy copy',
  },
  {
    name: 'St. Cloud, FL',
    status: 'provisional',
    source: 'Mentioned on /se-habla-espanol/',
  },
];

/**
 * Trust strip — softer wording that does not invent licenses, ratings, or guarantees.
 */
export const trustStrip = [
  'Local Central Florida Service',
  'Residential + Commercial',
  'Clear Inspection Plans',
  'Responsive Communication',
] as const;
