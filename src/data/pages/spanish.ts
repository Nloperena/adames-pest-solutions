import { businessName } from '../site';

/**
 * Spanish landing page — meaning preserved from scrape with corrected orthography.
 * Legacy page used “errores” where the English mirror meant “bugs/pests”.
 */
export const spanishPage = {
  seo: {
    title: `Se Habla Español | ${businessName()}`,
    description:
      'Servicios de control de plagas residenciales y comerciales en Florida Central. Se habla español. Adames Pest Solutions.',
  },
  h1: 'Servicios de control de plagas residenciales y comerciales en Florida Central',
  intro: [
    'Nada molesta más a los dueños de propiedades que los insectos invasores y las plagas. Para servicios efectivos de control de plagas comerciales y residenciales en Florida Central — incluida St. Cloud — puede confiar en Adames Pest Solutions, Inc.',
    'Eliminaremos el problema que le molesta. Desde cucarachas y termitas hasta roedores y mapaches, estamos preparados para eliminar o controlar plagas dentro y alrededor de su propiedad. Programe una inspección en su hogar o negocio hoy.',
  ],
  sections: [
    {
      heading: 'Una empresa de control de plagas de confianza',
      body: [
        '¿Alguna vez ha tratado de deshacerse de las plagas, pero siguen volviendo? Los aerosoles comprados en la tienda e incluso las trampas para roedores no siempre son confiables; a menudo ofrecen resultados marginales.',
        'Cuando depende de nuestra compañía, confía en un equipo con experiencia en el campo. Identificamos la plaga, elegimos el enfoque correcto y damos seguimiento hasta resolver el problema.',
        'No solo somos una empresa confiable: también nos enfocamos en servicios asequibles. Sabemos que quiere ahorrar dinero y, al mismo tiempo, eliminar insectos y plagas. Permítanos atender ambas necesidades con trabajo de calidad a precios competitivos.',
      ],
    },
    {
      heading: 'Viva una vida libre de plagas',
      body: [
        'Desaloje a sus invitados no deseados confiando en nuestro equipo para la eliminación de insectos y plagas. No todas las infestaciones son iguales; por eso siempre empezamos con una inspección para abordar su situación.',
        'Entendemos el impacto que las plagas tienen en el hogar y el negocio. Por eso tomamos un enfoque completo para sus necesidades de control de plagas. Contáctenos si ha visto alguno de los siguientes en su propiedad:',
      ],
      list: [
        'Hormigas',
        'Cucarachas',
        'Chinches',
        'Arañas',
        'Abejas y avispas',
        'Termitas',
        'Pulgas',
        'Roedores',
        'Ardillas',
        'Zarigüeyas',
      ],
    },
  ],
  ctaNote:
    'Póngase en contacto con nosotros para comenzar cuando necesite controlar plagas en su propiedad. Estamos orgullosos de servir a nuestros clientes en St. Cloud y en Florida Central.',
} as const;
