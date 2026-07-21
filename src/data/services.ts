/**
 * The four live service pages — copy rewritten from scrape, claims kept soft.
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
      title: 'Home Pest Control in Central Florida | Adames Pest Solutions',
      description:
        'Residential pest control for ants, roaches, bed bugs, wasps, and more across Central Florida. Schedule an inspection with Adames Pest Solutions.',
    },
    h1: 'Dependable home pest control in Central Florida',
    intro: [
      'Eliminate pesky problems at home with methods matched to the pest — not a generic shelf spray and hope. Adames Pest Solutions, Inc. inspects first, then treats with products and techniques suited to what you actually have.',
      'Whether you are dealing with ants, bed bugs, or cockroaches, we focus on the right approach at a practical price so your household can get back to normal.',
    ],
    sections: [
      {
        heading: 'An exterminator that keeps your property free of pests',
        body: [
          'Take care of your family while we take care of the infestation. We determine the best way to address the issue and use reliable methods so you can have a pest-free home again.',
          'Our technicians bring years of field experience to residential jobs across Central Florida — identifying the pest and matching the method to what you actually have.',
          'We treat or remove a wide range of household pests, including:',
        ],
        list: [
          'Ants',
          'Bats',
          'Bed Bugs',
          'Beetles',
          'Birds',
          'Cockroaches',
          'Fleas',
          'Flies',
          'Moths',
          'Rodents',
          'Skunks',
          'Spiders',
          'Squirrels',
          'Termites',
          'Wasps',
        ],
      },
      {
        heading: 'Targeted pest control services',
        body: [
          'What knocks down fire ants will not solve German cockroaches. The same product that works on large roaches may fail on spiders or fleas in the lawn.',
          'Because products and methods are pest-specific, we choose the right tool after we identify what you are dealing with — then act so you can live pest-free again as soon as practical.',
        ],
      },
    ],
    ctaNote:
      'Noticed bugs crawling around the house? Contact us to schedule a residential inspection. We serve customers throughout Central Florida.',
  },
  {
    id: 'rodent-control',
    href: '/rodent-control/',
    navLabel: 'Rodent Control',
    number: '02',
    tone: 'blue',
    seo: {
      title: 'Rodent Control in Central Florida | Adames Pest Solutions',
      description:
        'Mouse and rat removal for homes and businesses in Central Florida. Inspection, trapping, and exclusion help from Adames Pest Solutions.',
    },
    h1: 'The right way to do rodent control',
    intro: [
      'Are rodents ransacking your home or business? Left unchecked, the problem multiplies quickly. Our Central Florida rodent control service traps and removes small animals and helps keep them from returning.',
      'If you would rather not set traps yourself, depend on Adames Pest Solutions, Inc. for clean, reliable removal.',
    ],
    sections: [
      {
        heading: 'How to catch a mouse or rat',
        body: [
          'A pet hamster is cute. A mouse living in your walls is a nuisance — and mice breed fast. Within one year, one female mouse can produce as many as 10 litters, and a single mouse can leave thousands of droppings in that same period.',
          'If you have mice in the house or need to get rid of rats, our team captures rodents of all sizes with methods built for real infestations.',
        ],
      },
      {
        heading: 'Why it is important to remove rodents',
        body: [
          'Rats and mice are noisy and destructive. They tear through insulation, chew wood, and contaminate surfaces with feces and urine.',
          'We inspect the property, trap the rodents, remove them, and seal open entry points so they are less likely to return.',
        ],
      },
      {
        heading: 'Rodent removal: humane and reliable',
        body: [
          'Rats often recognize and avoid ordinary traps. We use specialized traps and techniques that work on small mice through larger rats.',
          'Rodents also chew electrical wires and burrow into walls, which can weaken a structure over time. Proper rodent management protects comfort and the building itself.',
        ],
      },
    ],
    ctaNote:
      'Seen mouse or rat droppings? Contact us for an inspection. We proudly serve customers throughout Central Florida.',
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
        'Termite inspections, treatment, and prevention for Central Florida properties. Protect wood structures with Adames Pest Solutions.',
    },
    h1: 'Do you need a thorough termite inspection in Central Florida?',
    intro: [
      'Termites can quietly destroy the structural integrity of a building. Adames Pest Solutions, Inc. provides comprehensive termite inspections and treatments designed to stop activity and reduce the chance of return.',
      'When termites are detected, prompt and dependable solutions matter — acting early often costs less than repairing advanced damage.',
    ],
    sections: [
      {
        heading: 'Complete protection from termites',
        body: [
          'The right way to address a potential termite problem is to stop it from spreading. We use professional-grade products and proven techniques to eliminate termites at the source and help protect the structure afterward.',
          'Ask the office about current treatment options — including bait and liquid approaches — so the plan fits your property and the activity we find.',
        ],
      },
      {
        heading: 'What are the signs of termites?',
        body: [
          'Something may be eating away at wood in walls, under the home, or in the attic. Early detection often costs less than repairing advanced damage.',
          'Contact us for a termite inspection if you notice:',
        ],
        list: [
          'Hollow wood',
          'Presence of winged insects',
          'Cracked paint on wood surfaces',
          'Mud tubes on walls',
          'Termite droppings (frass)',
          'Wood floor damage',
          'Sagging wood sections',
        ],
      },
      {
        heading: 'Don’t live with wood-destroying bugs',
        body: [
          'Termites are not the only insects that feed on wood. Wood-boring bugs, certain beetles, and carpenter ants can damage structures as well.',
          'For termite prevention and wood-destroying insect evaluation, ask for a thorough, honest assessment of your property.',
        ],
      },
    ],
    ctaNote:
      'Contact us to get started with your termite inspection. We proudly serve customers throughout Central Florida.',
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
        'Commercial pest control for restaurants, hotels, medical facilities, and businesses across Central Florida.',
    },
    h1: 'Effective commercial pest control services in Central Florida',
    intro: [
      'Are bugs bothering your business? Whether you manage a medical facility, restaurant, hotel, or larger commercial building, you cannot afford pests in customer view.',
      'Adames Pest Solutions, Inc. provides commercial pest removal that is effective and practical for occupied spaces.',
    ],
    sections: [
      {
        heading: 'Affordable treatment options for businesses',
        body: [
          'A clean reputation matters. Visible bugs are enough to send clients elsewhere. We offer practical removal and preventative treatment so staff and guests are not sharing the building with pests.',
          'No bug or rodent is too elusive for a structured commercial plan. Pests we commonly address include:',
        ],
        list: [
          'Termites',
          'Cockroaches',
          'Bed Bugs',
          'Rodents',
          'Rats',
          'Bees & Wasps',
          'Ants',
          'Spiders',
          'Ticks & Fleas',
          'Mice',
        ],
      },
      {
        heading: 'Why you need a commercial pest exterminator',
        body: [
          'As a business owner, your time belongs with customers and operations. Let specialists handle the infestation so you can stay focused.',
          'Ignoring pests can lead to larger problems later — including wood-destroying insects that damage the property. We work to protect staff, clients, and the working environment with products chosen for occupied commercial spaces.',
        ],
      },
      {
        heading: 'Providing prompt pest control and extermination',
        body: [
          'A pest problem should not force you to shut the doors. We prioritize prompt service so you can keep operating while the property is brought back under control.',
        ],
      },
    ],
    ctaNote:
      'Roaches in a restaurant or bed bugs in a hotel? Contact us. We proudly serve customers throughout Central Florida.',
  },
];

export function getServiceByHref(href: string): ServicePage | undefined {
  return services.find((service) => service.href === href);
}

export function getServiceById(id: string): ServicePage | undefined {
  return services.find((service) => service.id === id);
}
