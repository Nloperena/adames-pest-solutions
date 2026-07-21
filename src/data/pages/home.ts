import { businessName } from '../site';

export const homePage = {
  seo: {
    title: `Pest Control Services | Central FL - ${businessName(true)}`,
    description:
      'Residential and commercial pest control across Central Florida. Clear inspections, practical treatments, and free estimates from Adames Pest Solutions.',
  },
  hero: {
    label: 'Central Florida Pest Control',
    h1: 'Pests have met their match.',
    lead: 'Local pest control for homes and businesses. Call now or request a free estimate.',
  },
  welcome: {
    h2: 'Welcome',
    body: [
      'Nothing bugs property owners more than invasive insects and pests. For commercial and residential pest control in Central Florida, you can depend on Adames Pest Solutions, Inc.',
      'From roaches and termites to rodents and raccoons, we focus on removing the problem that is bothering you. Schedule an inspection at your home or business today.',
    ],
  },
  trusted: {
    h2: 'A trusted pest control company',
    body: [
      'Store-bought sprays and basic traps often provide only marginal results. When pests keep returning, you need a team that knows how to address the source.',
      'Our technicians bring years of field experience to homes and businesses across Central Florida — identifying the pest, choosing the right approach, and following through.',
      'We also aim to keep services affordable — high-quality work at competitive rates for homes and businesses in the area.',
    ],
  },
  mascot: {
    h2: 'The bad news for bugs.',
    body: [
      `${businessName()} combines local Central Florida service, responsive communication, and treatments matched to the property — not a one-spray-fits-all pitch.`,
    ],
  },
} as const;
