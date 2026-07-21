/**
 * No public reviews were present on the crawled site.
 * Invented Maria/James-style quotes and Google ratings have been removed.
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

/**
 * Soft trust messaging — no license numbers or guarantee claims.
 */
export const trustBadges = [
  {
    id: 'local',
    title: 'Central Florida local',
    detail: 'Homes and businesses across the region we serve.',
  },
  {
    id: 'plan',
    title: 'Clear next steps',
    detail: 'Inspection first, then a plainspoken treatment plan.',
  },
  {
    id: 'responsive',
    title: 'Direct communication',
    detail: 'Call, email, or send a message — we respond during business hours.',
  },
] as const;
