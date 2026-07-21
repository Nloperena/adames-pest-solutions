/**
 * Pest categories for the homepage grid.
 * Worded for how Central Florida locals search and describe problems.
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
    description: 'Fire ants in the yard and sugar ants in the kitchen after rain.',
  },
  {
    id: 'cockroaches',
    name: 'Palmetto Bugs',
    href: '/pest-control/#cockroaches',
    description: 'Florida’s big cockroaches — kitchens, baths, and garages.',
  },
  {
    id: 'termites',
    name: 'Termites',
    href: '/termite-control/',
    description: 'Year-round wood risk in Central Florida — inspect early.',
  },
  {
    id: 'rodents',
    name: 'Rodents',
    href: '/rodent-control/',
    description: 'Roof rats and mice in attics, garages, and walls.',
  },
  {
    id: 'spiders',
    name: 'Spiders',
    href: '/pest-control/#spiders',
    description: 'Corners, eaves, and Florida landscaping hideouts.',
  },
  {
    id: 'mosquitoes',
    name: 'Mosquitoes',
    href: '/pest-control/#mosquitoes',
    description: 'Yard biting after Florida rains and standing water.',
  },
  {
    id: 'wasps',
    name: 'Wasps',
    href: '/pest-control/#wasps',
    description: 'Nests under eaves, decks, and play areas.',
  },
  {
    id: 'bed-bugs',
    name: 'Bed Bugs',
    href: '/pest-control/#bed-bugs',
    description: 'Travel hitchhikers that need professional treatment.',
  },
];

/** Full residential list for the pest-control page. */
export const residentialPestList = [
  { id: 'ants', name: 'Ants / Fire Ants' },
  { id: 'bats', name: 'Bats' },
  { id: 'bed-bugs', name: 'Bed Bugs' },
  { id: 'beetles', name: 'Beetles' },
  { id: 'birds', name: 'Birds' },
  { id: 'cockroaches', name: 'Palmetto Bugs / Cockroaches' },
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
