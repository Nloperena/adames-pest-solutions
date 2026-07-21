/**
 * Pest categories for the homepage grid and related UI.
 * Links go to existing service pages or /pest-control/#slug anchors — no individual pest routes.
 */

export type Pest = {
  id: string;
  name: string;
  href: string;
  description: string;
};

export const pests: Pest[] = [
  {
    id: 'ants',
    name: 'Ants',
    href: '/pest-control/#ants',
    description: 'Trail-following invaders in kitchens and yards.',
  },
  {
    id: 'cockroaches',
    name: 'Cockroaches',
    href: '/pest-control/#cockroaches',
    description: 'Tough household pests that need targeted treatment.',
  },
  {
    id: 'termites',
    name: 'Termites',
    href: '/termite-control/',
    description: 'Wood-destroying insects that call for inspection.',
  },
  {
    id: 'rodents',
    name: 'Rodents',
    href: '/rodent-control/',
    description: 'Mice and rats that chew, nest, and leave droppings.',
  },
  {
    id: 'spiders',
    name: 'Spiders',
    href: '/pest-control/#spiders',
    description: 'Web builders and wanderers around the home.',
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes',
    href: '/pest-control/#mosquitoes',
    description: 'Yard pests that ruin evenings outdoors.',
  },
  {
    id: 'wasps',
    name: 'Wasps',
    href: '/pest-control/#wasps',
    description: 'Stinging nests near eaves, decks, and play areas.',
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    href: '/pest-control/#bed-bugs',
    description: 'Nighttime hitchhikers that need expert treatment.',
  },
];

/** Full residential list migrated from /pest-control/ (no invented species). */
export const residentialPestList = [
  { id: 'ants', name: 'Ants' },
  { id: 'bats', name: 'Bats' },
  { id: 'bed-bugs', name: 'Bed Bugs' },
  { id: 'beetles', name: 'Beetles' },
  { id: 'birds', name: 'Birds' },
  { id: 'cockroaches', name: 'Cockroaches' },
  { id: 'fleas', name: 'Fleas' },
  { id: 'flies', name: 'Flies' },
  { id: 'moths', name: 'Moths' },
  { id: 'mosquitoes', name: 'Mosquitoes' },
  { id: 'rodents', name: 'Rodents' },
  { id: 'skunks', name: 'Skunks' },
  { id: 'spiders', name: 'Spiders' },
  { id: 'squirrels', name: 'Squirrels' },
  { id: 'termites', name: 'Termites' },
  { id: 'wasps', name: 'Wasps' },
] as const;
