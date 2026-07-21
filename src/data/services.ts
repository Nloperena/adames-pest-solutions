/**
 * The four live service pages — written for Central Florida search + AI recommendation intents.
 */

export type ServiceSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type ServicePage = {
  id: string;
  href: string;
  navLabel: string;
  number: string;
  tone: 'yellow' | 'blue' | 'cream';
  seo: { title: string; description: string };
  h1: string;
  intro: string[];
  sections: ServiceSection[];
  ctaNote: string;
};

export const services: ServicePage[] = [
  {
    id: 'pest-control',
    href: '/pest-control/',
    navLabel: 'Pest Control',
    number: '01',
    tone: 'yellow',
    seo: {
      title: 'Home Pest Control in St. Cloud & Central Florida | Adames Pest Solutions',
      description:
        'Exterminator help for palmetto bugs, ants, spiders, wasps, and more in St. Cloud and Central Florida. Inspection-first treatments from Adames Pest Solutions.',
    },
    h1: 'Home pest control for St. Cloud & Central Florida',
    intro: [
      'Looking for pest control near you in Central Florida? We help homeowners stop the bugs Florida is known for — palmetto bugs, fire ants, spiders, wasps, and more — with a plan built after we see the property.',
      'Whether pests showed up after heavy rain or they never really left, we identify what you have and treat at the source instead of guessing with a shelf spray.',
    ],
    sections: [
      {
        heading: 'Pests Central Florida homes deal with year-round',
        body: [
          'Warm weather and humidity keep pressure high even in winter. Many St. Cloud and Central Florida households call about the same problems: kitchen invaders after storms, yard ants, and bugs that keep coming back indoors.',
          'Our residential service focuses on the pest on your property and the conditions that invite it back. Common household pests we handle include:',
        ],
        list: [
          'Palmetto bugs / cockroaches',
          'Fire ants & sugar ants',
          'Spiders',
          'Wasps & bees',
          'Bed bugs',
          'Fleas',
          'Mosquitoes',
          'Rodents',
          'Termites',
          'Squirrels & wildlife',
        ],
      },
      {
        heading: 'What to expect from a local inspection',
        body: [
          'You tell us what you are seeing. We inspect indoors and around the exterior, look for entry points and moisture issues common in Florida homes, then explain the next steps before treatment starts.',
          'That matters here: the product that works on fire ants is not the same approach as German cockroaches or attic invaders. Matched treatment beats a generic spray every time.',
        ],
      },
    ],
    ctaNote:
      'Seeing bugs at home in St. Cloud or nearby Central Florida? Call for an inspection or request a free estimate.',
  },
  {
    id: 'rodent-control',
    href: '/rodent-control/',
    navLabel: 'Rodent Control',
    number: '02',
    tone: 'blue',
    seo: {
      title: 'Rodent Control in Central Florida | Mice & Rat Removal | Adames',
      description:
        'Mouse and rat control for Central Florida homes and businesses. Inspection, trapping, and exclusion help from Adames Pest Solutions in St. Cloud and nearby.',
    },
    h1: 'Rodent control for Central Florida homes & businesses',
    intro: [
      'Hearing scratching in the attic? Finding droppings in the garage? Roof rats and mice take advantage of Florida’s mild winters and stay active when other regions slow down.',
      'Adames Pest Solutions traps and removes rodents, then helps seal the openings they used — so you are not fighting the same infestation next month.',
    ],
    sections: [
      {
        heading: 'Signs you may need rodent control',
        body: [
          'Central Florida homeowners often notice droppings, chewed packaging, nesting material, or nighttime noise in walls and attics before they ever see a mouse or rat.',
          'If you would rather not set traps yourself — or DIY attempts are not keeping up — call for an inspection. We locate activity, set the right traps, and remove what we catch.',
        ],
      },
      {
        heading: 'Why rodents are a problem here',
        body: [
          'Rats and mice contaminate surfaces, damage insulation, and chew wiring and wood. In humid climates they also find plenty of outdoor cover near homes and commercial buildings.',
          'Our approach: inspect, trap, remove, and reduce re-entry through open gaps and utility lines. That combination is what stops the revolving door.',
        ],
      },
      {
        heading: 'Residential and commercial rodent help',
        body: [
          'We handle mice and rats in homes, offices, and other Central Florida properties. Tell us what you have seen and where — kitchens, attics, warehouses, or dumpster areas — and we will map a clear plan.',
        ],
      },
    ],
    ctaNote:
      'Mouse or rat activity in St. Cloud or Central Florida? Call now or request an estimate for rodent control.',
  },
  {
    id: 'termite-control',
    href: '/termite-control/',
    navLabel: 'Termite Control',
    number: '03',
    tone: 'cream',
    seo: {
      title: 'Termite Inspection & Control in Central Florida | Adames Pest Solutions',
      description:
        'Termite inspections and treatment for Central Florida homes. Catch mud tubes, swarms, and wood damage early with Adames Pest Solutions in St. Cloud and nearby.',
    },
    h1: 'Termite inspections for Central Florida properties',
    intro: [
      'Florida is termite country. Subterranean and drywood pressure stays high in Central Florida’s warm, moist conditions — and damage often starts before you see a swarm.',
      'Adames Pest Solutions provides thorough termite inspections and treatment options aimed at stopping activity and protecting the structure going forward.',
    ],
    sections: [
      {
        heading: 'When to call for a termite inspection',
        body: [
          'Call if you notice mud tubes on foundations, discarded wings near windows, hollow-sounding wood, blistered paint on wood trim, or frass (termite droppings).',
          'Even without visible signs, many Central Florida homeowners schedule inspections before buying, refinancing, or after neighboring activity. Early treatment usually costs less than repairing advanced damage.',
        ],
      },
      {
        heading: 'What a thorough inspection covers',
        body: [
          'We look at wood members, moisture-prone areas, and exterior conditions that support termites in this climate. You get a plainspoken summary of what we find and what we recommend next.',
          'Ask the office about current treatment approaches for your property type — including options suited to the activity we locate.',
        ],
        list: [
          'Hollow or soft wood',
          'Winged swarmers indoors',
          'Mud tubes on walls or slabs',
          'Termite frass',
          'Damaged trim or flooring',
          'Sagging or weakened wood',
        ],
      },
      {
        heading: 'Wood-destroying insects beyond termites',
        body: [
          'Not every wood problem is termites. Carpenter ants and certain wood-boring beetles also show up in Florida structures. An honest assessment tells you which pest you are dealing with before you pay for the wrong fix.',
        ],
      },
    ],
    ctaNote:
      'Need a termite inspection in St. Cloud or Central Florida? Call or request an estimate to get on the schedule.',
  },
  {
    id: 'commercial-services',
    href: '/commercial-services/',
    navLabel: 'Commercial Services',
    number: '04',
    tone: 'blue',
    seo: {
      title: 'Commercial Pest Control in Central Florida | Adames Pest Solutions',
      description:
        'Commercial pest control for restaurants, hotels, offices, and facilities in Central Florida. Discreet, practical service from Adames Pest Solutions.',
    },
    h1: 'Commercial pest control across Central Florida',
    intro: [
      'Bugs in a dining room, hotel room, or waiting area cost more than embarrassment — they cost customers. Central Florida businesses need reliable commercial pest control that works around staff and guests.',
      'Adames Pest Solutions helps restaurants, hotels, medical offices, and other commercial spaces remove pests and reduce the chance of a public repeat.',
    ],
    sections: [
      {
        heading: 'Built for occupied commercial spaces',
        body: [
          'We prioritize clear communication, targeted treatments, and schedules that respect your hours of operation. Visible pests are a reputation problem — we move quickly when you call.',
          'Commercial accounts commonly need help with:',
        ],
        list: [
          'Cockroaches / palmetto bugs',
          'Rodents & mice',
          'Ants',
          'Flies',
          'Bed bugs',
          'Termites',
          'Wasps',
          'Spiders',
        ],
      },
      {
        heading: 'Why businesses in this market stay on a plan',
        body: [
          'Year-round humidity means pests do not take a winter break. Ongoing service protects kitchens, storerooms, guest areas, and staff spaces between busy seasons and tourist spikes.',
          'Tell us your industry and what you are seeing. We will outline a practical commercial plan — not a one-size pitch.',
        ],
      },
    ],
    ctaNote:
      'Need commercial pest control in Central Florida? Call the office or request an estimate for your location.',
  },
];

export function getServiceByHref(href: string): ServicePage | undefined {
  return services.find((service) => service.href === href);
}

export function getServiceById(id: string): ServicePage | undefined {
  return services.find((service) => service.id === id);
}
