import type { Localized } from '../i18n/config';

export const studio: {
  lead: Localized;
  statement: Localized;
  materials: Localized<string[]>;
  body: Localized<string[]>;
  facts: Localized<{ label: string; value: string }[]>;
  photo: { src: string; alt: Localized };
  /** Optional clip shown in place of `photo`, which stays on as its poster. */
  video?: string;
} = {
  lead: {
    en: 'A small studio in Montreal, working in lime and cement.',
    fr: 'Un petit atelier montréalais, qui travaille la chaux et le ciment.',
    es: 'Un pequeño estudio en Montreal, que trabaja la cal y el cemento.',
  },

  /** Closing line of the page, set on its own dark panel. */
  statement: {
    en: 'Materials that are what they appear to be.',
    fr: 'Des matériaux qui sont ce qu’ils paraissent.',
    es: 'Materiales que son lo que aparentan ser.',
  },

  materials: {
    en: ['Lime', 'Marble dust', 'Cement', 'Pigment', 'Wood', 'Steel'],
    fr: ['Chaux', 'Poudre de marbre', 'Ciment', 'Pigment', 'Bois', 'Acier'],
    es: ['Cal', 'Polvo de mármol', 'Cemento', 'Pigmento', 'Madera', 'Acero'],
  },

  body: {
    en: [
      'Maison Brüt started from a simple frustration: almost every surface in a modern home is printed, laminated or moulded to look like something it is not. We wanted to work with materials that are what they appear to be: lime, marble dust, cement, pigment, wood.',
      'Everything we do is applied by hand, on site, one layer at a time. There is no machine that produces this and no shortcut that survives contact with a wall. It is slower than paint and it costs more, and it is the reason a Maison Brüt surface still looks right ten years later.',
      'We work across Montreal, Laval, the North Shore, the South Shore, Miami and Puerto Rico, on private homes, restaurants and retail spaces. Most of our projects come from clients who saw a wall we finished for someone else.',
    ],
    fr: [
      "Maison Brüt est née d'une frustration simple : dans une maison contemporaine, presque chaque surface est imprimée, laminée ou moulée pour ressembler à ce qu'elle n'est pas. Nous voulions travailler des matériaux qui sont ce qu'ils paraissent : chaux, poudre de marbre, ciment, pigment, bois.",
      "Tout ce que nous faisons est appliqué à la main, sur place, une couche à la fois. Aucune machine ne produit cela et aucun raccourci ne survit au contact du mur. C'est plus lent que la peinture et c'est plus cher, et c'est la raison pour laquelle une surface Maison Brüt tient encore la route dix ans plus tard.",
      "Nous intervenons à Montréal, à Laval, sur la Rive-Nord, la Rive-Sud, à Miami et à Porto Rico, dans des résidences privées, des restaurants et des commerces. La plupart de nos projets viennent de clients qui ont vu un mur que nous avions fini pour quelqu'un d'autre.",
    ],
    es: [
      'Maison Brüt nació de una frustración simple: casi cada superficie de una casa moderna está impresa, laminada o moldeada para parecer algo que no es. Queríamos trabajar con materiales que son lo que aparentan ser: cal, polvo de mármol, cemento, pigmento, madera.',
      'Todo lo que hacemos se aplica a mano, en el sitio, una capa a la vez. No existe máquina que produzca esto ni atajo que sobreviva al contacto con un muro. Es más lento que la pintura y cuesta más, y es la razón por la que una superficie Maison Brüt sigue viéndose bien diez años después.',
      'Trabajamos en Montreal, Laval, la Rive-Nord, la Rive-Sud, Miami y Puerto Rico, en residencias privadas, restaurantes y locales comerciales. La mayoría de nuestros proyectos vienen de clientes que vieron un muro que terminamos para alguien más.',
    ],
  },

  photo: {
    src: '/src/assets/studio/studio-wall.jpg',
    alt: {
      en: 'A plastered alcove in raking daylight, a pale vase on a built-in ledge and a cylindrical stool below, with the Maison Brüt wordmark set across the wall.',
      fr: "Une alcôve enduite sous une lumière rasante, un vase clair sur une tablette maçonnée et un tabouret cylindrique en contrebas, le mot-symbole Maison Brüt posé en travers du mur.",
      es: 'Una alcoba revocada bajo luz rasante, una vasija clara sobre una repisa de obra y un taburete cilíndrico debajo, con el logotipo Maison Brüt dispuesto sobre el muro.',
    },
  },

  video: '/videos/studio.mp4',

  facts: {
    en: [
      { label: 'Based in', value: 'Montreal, QC' },
      { label: 'Serving', value: 'Montreal · Laval · North & South Shore · Miami · Puerto Rico' },
      { label: 'Applied', value: 'By hand, on site' },
      { label: 'Materials', value: 'Lime · Cement · Wood · Steel' },
    ],
    fr: [
      { label: 'Basé à', value: 'Montréal, QC' },
      { label: 'Secteurs', value: 'Montréal · Laval · Rive-Nord & Rive-Sud · Miami · Porto Rico' },
      { label: 'Application', value: 'À la main, sur place' },
      { label: 'Matériaux', value: 'Chaux · Ciment · Bois · Acier' },
    ],
    es: [
      { label: 'Con sede en', value: 'Montreal, QC' },
      { label: 'Zonas atendidas', value: 'Montreal · Laval · Rive-Nord y Rive-Sud · Miami · Puerto Rico' },
      { label: 'Aplicación', value: 'A mano, en el sitio' },
      { label: 'Materiales', value: 'Cal · Cemento · Madera · Acero' },
    ],
  },
};
