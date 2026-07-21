/**
 * Primary navigation mirrors live-site labels and URLs.
 * Order matches the crawled header menu.
 */

export type NavItem = {
  label: string;
  href: string;
};

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Pest Control', href: '/pest-control/' },
  { label: 'Rodent Control', href: '/rodent-control/' },
  { label: 'Termite Control', href: '/termite-control/' },
  { label: 'Commercial Services', href: '/commercial-services/' },
  { label: 'Request an Estimate', href: '/request-an-estimate/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'SE HABLA ESPA\u00D1OL', href: '/se-habla-espanol/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

/** Compact header subset when full primary list is too long for desktop chrome */
export const headerNavCompact: NavItem[] = [
  { label: 'Services', href: '/pest-control/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'FAQs', href: '/faqs/' },
  { label: 'Español', href: '/se-habla-espanol/' },
  { label: 'Contact', href: '/contact-us/' },
];

export const footerNav: NavItem[] = [...primaryNav, { label: 'Sitemap', href: '/sitemap/' }];

export const footerServices: NavItem[] = [
  { label: 'Pest Control', href: '/pest-control/' },
  { label: 'Rodent Control', href: '/rodent-control/' },
  { label: 'Termite Control', href: '/termite-control/' },
  { label: 'Commercial Services', href: '/commercial-services/' },
];

export const footerLegal: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy/' },
  { label: 'Terms of Service', href: '/terms/' },
  { label: 'Sitemap', href: '/sitemap/' },
];
