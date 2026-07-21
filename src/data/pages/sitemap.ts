import { businessName } from '../site';
import { primaryNav, footerLegal } from '../navigation';

export const sitemapPage = {
  seo: {
    title: `Sitemap | ${businessName()}`,
    description: 'HTML sitemap of public pages for Adames Pest Solutions.',
  },
  h1: 'Sitemap',
  intro: ['Browse the main public pages on this site.'],
  links: [
    ...primaryNav,
    ...footerLegal.filter((item) => item.href !== '/sitemap/'),
  ],
} as const;
