/**
 * Photos reused from the live adamespestsolutions.com homepage (2018 WordPress assets).
 * Owned by the client site — not third-party stock we introduced.
 */

export const legacyImages = {
  bannerTechnician: {
    src: '/images/legacy/banner-technician.jpg',
    alt: 'Pest control technician treating a property',
    width: 1600,
    height: 700,
  },
  worker: {
    src: '/images/legacy/cta-worker.jpg',
    alt: 'Technician handling a residential pest treatment',
    width: 800,
    height: 600,
  },
  rodent: {
    src: '/images/legacy/cta-rodent.jpg',
    alt: 'Small rodent associated with rodent control service',
    width: 800,
    height: 600,
  },
  termite: {
    src: '/images/legacy/cta-termite.jpg',
    alt: 'Termites on wood illustrating termite control needs',
    width: 800,
    height: 600,
  },
  commercial: {
    src: '/images/legacy/cta-commercial.jpg',
    alt: 'Office setting representing commercial pest control',
    width: 800,
    height: 600,
  },
  waspNest: {
    src: '/images/legacy/wasp-nest.jpg',
    alt: 'Wasp nest under a roof overhang',
    width: 1024,
    height: 683,
  },
} as const;

/** Map service IDs to legacy homepage CTA photos */
export const serviceLegacyImage: Record<
  string,
  (typeof legacyImages)[keyof typeof legacyImages]
> = {
  'pest-control': legacyImages.worker,
  'rodent-control': legacyImages.rodent,
  'termite-control': legacyImages.termite,
  'commercial-services': legacyImages.commercial,
};
