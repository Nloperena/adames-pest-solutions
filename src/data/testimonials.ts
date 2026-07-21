/**
 * Soft trust messaging for Central Florida — no invented ratings or licenses.
 */

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
};

export const testimonials: Testimonial[] = [];

export const reviewsStatus = {
  hasPublicReviews: false,
  note: 'No customer testimonials or Google rating/count were found in the crawl. Do not invent reviews.',
} as const;

export const trustBadges = [
  {
    id: 'local',
    title: 'Central Florida local',
    detail: 'St. Cloud and surrounding Central Florida homes and businesses.',
  },
  {
    id: 'climate',
    title: 'Built for this climate',
    detail: 'Year-round humidity means year-round pest pressure — we plan for that.',
  },
  {
    id: 'direct',
    title: 'Call or estimate fast',
    detail: 'Talk to the office or send a form — we respond during business hours.',
  },
] as const;
