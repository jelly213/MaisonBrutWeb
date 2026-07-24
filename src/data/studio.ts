import type { Localized } from '../i18n/config';

export const studio: {
  lead: Localized;
  statement: Localized;
  materials: Localized<string[]>;
  body: Localized<string[]>;
  facts: Localized<{ label: string; value: string }[]>;
} = {
  lead: {
    en: 'A small studio in Montreal, working in lime and cement.',
    fr: 'Un petit atelier montréalais, qui travaille la chaux et le ciment.',
  },

  /** Stands where a photograph would, until the client supplies one. */
  statement: {
    en: 'Materials that are what they appear to be.',
    fr: 'Des matériaux qui sont ce qu’ils paraissent.',
  },

  materials: {
    en: ['Lime', 'Marble dust', 'Cement', 'Pigment', 'Wood', 'Steel'],
    fr: ['Chaux', 'Poudre de marbre', 'Ciment', 'Pigment', 'Bois', 'Acier'],
  },

  body: {
    en: [
      'Maison Brut started from a simple frustration: almost every surface in a modern home is printed, laminated or moulded to look like something it is not. We wanted to work with materials that are what they appear to be — lime, marble dust, cement, pigment, wood.',
      'Everything we do is applied by hand, on site, one layer at a time. There is no machine that produces this and no shortcut that survives contact with a wall. It is slower than paint and it costs more, and it is the reason a Maison Brut surface still looks right ten years later.',
      'We work across Montreal, Laval and the North Shore, on private homes, restaurants and retail spaces. Most of our projects come from clients who saw a wall we finished for someone else.',
    ],
    fr: [
      "Maison Brut est née d'une frustration simple : dans une maison contemporaine, presque chaque surface est imprimée, laminée ou moulée pour ressembler à ce qu'elle n'est pas. Nous voulions travailler des matériaux qui sont ce qu'ils paraissent — chaux, poudre de marbre, ciment, pigment, bois.",
      "Tout ce que nous faisons est appliqué à la main, sur place, une couche à la fois. Aucune machine ne produit cela et aucun raccourci ne survit au contact du mur. C'est plus lent que la peinture et c'est plus cher, et c'est la raison pour laquelle une surface Maison Brut tient encore la route dix ans plus tard.",
      "Nous intervenons à Montréal, à Laval et sur la Rive-Nord, dans des résidences privées, des restaurants et des commerces. La plupart de nos projets viennent de clients qui ont vu un mur que nous avions fini pour quelqu'un d'autre.",
    ],
  },

  facts: {
    en: [
      { label: 'Based in', value: 'Montreal, QC' },
      { label: 'Serving', value: 'Montreal · Laval · North Shore' },
      { label: 'Applied', value: 'By hand, on site' },
      { label: 'Materials', value: 'Lime · Cement · Wood · Steel' },
    ],
    fr: [
      { label: 'Basé à', value: 'Montréal, QC' },
      { label: 'Secteurs', value: 'Montréal · Laval · Rive-Nord' },
      { label: 'Application', value: 'À la main, sur place' },
      { label: 'Matériaux', value: 'Chaux · Ciment · Bois · Acier' },
    ],
  },
};
