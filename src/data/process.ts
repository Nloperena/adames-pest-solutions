export const processSteps = [
  {
    number: '01',
    title: 'Inspect',
    description:
      'We identify the pest, moisture and entry points, and what Florida conditions are feeding the problem.',
  },
  {
    number: '02',
    title: 'Treat',
    description:
      'We apply a targeted plan for the pest on your property — not a generic spray-and-hope visit.',
  },
  {
    number: '03',
    title: 'Protect',
    description:
      'We explain how to reduce re-infestation and talk through ongoing options for year-round Central Florida pressure.',
  },
] as const;

export type ProcessStep = (typeof processSteps)[number];
