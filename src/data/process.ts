export const processSteps = [
  {
    number: '01',
    title: 'Inspect',
    description: 'We identify the pest, entry points, and source of the problem.',
  },
  {
    number: '02',
    title: 'Treat',
    description: 'We apply a targeted solution based on the property and infestation.',
  },
  {
    number: '03',
    title: 'Protect',
    description: 'We help prevent future pest activity with ongoing protection options.',
  },
] as const;

export type ProcessStep = (typeof processSteps)[number];
