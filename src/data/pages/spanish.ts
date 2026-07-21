import { businessName } from '../site';

/**
 * Spanish landing — same local intents as English (St. Cloud / Florida Central).
 */
export const spanishPage = {
  seo: {
    title: `Control de Plagas en St. Cloud y Florida Central | ${businessName()}`,
    description:
      'Control de plagas local en St. Cloud y Florida Central. Cucarachas, hormigas, termitas, roedores y mosquitos. Se habla español. Adames Pest Solutions.',
  },
  h1: 'Control de plagas local en St. Cloud y Florida Central',
  intro: [
    '¿Busca un exterminador cerca de St. Cloud o en Florida Central? La humedad de Florida mantiene activas las plagas todo el año: cucarachas (palmetto bugs), hormigas, termitas, roedores y mosquitos.',
    'Adames Pest Solutions, Inc. inspecciona primero, explica el problema con claridad y trata la plaga que realmente tiene en su propiedad. Se habla español.',
  ],
  sections: [
    {
      heading: 'Por qué las plagas vuelven en Florida',
      body: [
        'Los aerosoles de tienda suelen eliminar solo lo que usted ve. En Florida Central, la lluvia y el calor empujan nuevas olas de insectos hacia la casa.',
        'Nuestro equipo identifica el origen, los puntos de entrada y el tipo de plaga — y arma un plan práctico para su hogar o negocio.',
        'También nos enfocamos en precios competitivos: quiere resolver el problema sin pagar de más por un tratamiento genérico.',
      ],
    },
    {
      heading: 'Plagas comunes en esta zona',
      body: [
        'Contáctenos si ha visto alguno de estos problemas en su propiedad en St. Cloud o Florida Central:',
      ],
      list: [
        'Cucarachas / palmetto bugs',
        'Hormigas y hormigas de fuego',
        'Termitas',
        'Roedores',
        'Mosquitos',
        'Arañas',
        'Avispas',
        'Chinches',
        'Pulgas',
        'Ardillas y fauna',
      ],
    },
  ],
  ctaNote:
    'Llame o solicite una estimación gratuita. Estamos orgullosos de servir a clientes en St. Cloud y en Florida Central.',
} as const;
