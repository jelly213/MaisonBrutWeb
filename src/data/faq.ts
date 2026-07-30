import type { Localized } from '../i18n/config';

export interface FaqItem {
  question: Localized;
  answer: Localized;
}

/** No pricing questions — every project is quoted after a visit. */
export const faq: FaqItem[] = [
  {
    question: {
      en: 'How long does a microcement finish last?',
      fr: 'Quelle est la durée de vie du béton ciré ?',
      es: '¿Cuánto dura un acabado de microcemento?',
    },
    answer: {
      en: 'Properly applied and sealed, microcement lasts as long as the substrate under it: fifteen to twenty years is normal in a residential bathroom. The sealer is the wearing layer, and it can be refreshed on floors after roughly ten years of heavy use without redoing the finish itself.',
      fr: "Correctement appliqué et scellé, le béton ciré dure aussi longtemps que son support : quinze à vingt ans est la norme dans une salle de bain résidentielle. C'est le scellant qui s'use : sur un sol très sollicité, il se renouvelle après une dizaine d'années sans refaire la finition.",
      es: 'Bien aplicado y sellado, el microcemento dura tanto como el soporte que tiene debajo: entre quince y veinte años es normal en un baño residencial. El sellador es la capa de desgaste, y puede renovarse en los pisos tras unos diez años de uso intenso sin rehacer el acabado en sí.',
    },
  },
  {
    question: {
      en: 'Can you apply over existing tile?',
      fr: 'Pouvez-vous appliquer sur de la céramique existante ?',
      es: '¿Pueden aplicarlo sobre azulejo existente?',
    },
    answer: {
      en: 'Yes, and it is one of the main reasons clients choose microcement. As long as the tile is sound and well bonded, we prepare the surface, bridge the grout lines and apply over it. No demolition, no dumpster, and a bathroom that stays usable far sooner.',
      fr: "Oui, et c'est l'une des principales raisons pour lesquelles nos clients choisissent le béton ciré. Tant que la céramique est saine et bien collée, nous préparons la surface, comblons les joints et appliquons par-dessus. Aucune démolition, aucun conteneur, et une salle de bain réutilisable bien plus vite.",
      es: 'Sí, y es una de las principales razones por las que nuestros clientes eligen el microcemento. Mientras el azulejo esté sano y bien adherido, preparamos la superficie, cubrimos las juntas y aplicamos encima. Sin demolición, sin contenedor, y un baño utilizable mucho antes.',
    },
  },
  {
    question: {
      en: 'How long does a project take?',
      fr: 'Combien de temps dure un chantier ?',
      es: '¿Cuánto dura un proyecto?',
    },
    answer: {
      en: 'A single feature wall is usually two to three days. A full bathroom in microcement runs five to seven days including curing and sealing. Larger floors and commercial spaces are scheduled after the site visit, and we give you the timeline in writing before we start.',
      fr: "Un simple mur d'accent demande généralement deux à trois jours. Une salle de bain complète en béton ciré prend cinq à sept jours, séchage et scellement compris. Les grands sols et les espaces commerciaux sont planifiés après la visite, et l'échéancier vous est remis par écrit avant le début des travaux.",
      es: 'Un solo muro de acento suele tomar de dos a tres días. Un baño completo en microcemento lleva de cinco a siete días, incluyendo curado y sellado. Los pisos grandes y los espacios comerciales se programan tras la visita al sitio, y te entregamos el calendario por escrito antes de empezar.',
    },
  },
  {
    question: {
      en: 'Is the surface waterproof?',
      fr: 'La surface est-elle imperméable ?',
      es: '¿La superficie es impermeable?',
    },
    answer: {
      en: 'Microcement sealed with our polyurethane system is waterproof and suitable for showers and wet rooms. Venetian plaster and limewash are water resistant but breathable, which is what you want on walls; we do not put them inside a shower enclosure.',
      fr: "Le béton ciré scellé avec notre système polyuréthane est imperméable et convient aux douches et pièces humides. Le stuc vénitien et le badigeon de chaux résistent à l'eau tout en restant perspirants, ce qui est souhaitable sur un mur ; nous ne les posons pas à l'intérieur d'une douche.",
      es: 'El microcemento sellado con nuestro sistema de poliuretano es impermeable y apto para duchas y zonas húmedas. El estuco veneciano y el encalado resisten el agua pero son transpirables, que es lo que conviene en un muro; no los colocamos dentro de una ducha.',
    },
  },
  {
    question: {
      en: 'How do I clean and maintain it?',
      fr: 'Comment entretenir la surface ?',
      es: '¿Cómo se limpia y se mantiene?',
    },
    answer: {
      en: 'Warm water and a pH-neutral soap. Avoid bleach, vinegar and abrasive powders: acids attack lime, and abrasives dull the sealer. That is the whole routine.',
      fr: "De l'eau tiède et un savon au pH neutre. Évitez l'eau de Javel, le vinaigre et les poudres abrasives : les acides attaquent la chaux et les abrasifs ternissent le scellant. C'est tout l'entretien.",
      es: 'Agua tibia y un jabón de pH neutro. Evita la lejía, el vinagre y los polvos abrasivos: los ácidos atacan la cal y los abrasivos opacan el sellador. Eso es todo el mantenimiento.',
    },
  },
  {
    question: {
      en: 'Will the finish be perfectly uniform?',
      fr: 'La finition sera-t-elle parfaitement uniforme ?',
      es: '¿El acabado será perfectamente uniforme?',
    },
    answer: {
      en: 'No, and that is the material working as intended. Hand-applied mineral finishes carry cloudy passages and faint trowel movement: that variation is what gives them depth. We show you samples beforehand so you know exactly how much movement to expect.',
      fr: "Non, et c'est le matériau qui fonctionne comme prévu. Les finitions minérales appliquées à la main présentent des nuages et de légers mouvements de truelle : cette variation fait leur profondeur. Nous vous montrons des échantillons au préalable pour que vous sachiez exactement à quoi vous attendre.",
      es: 'No, y así es como el material funciona como debe. Los acabados minerales aplicados a mano presentan veladuras y ligeros movimientos de llana: esa variación es lo que les da profundidad. Te mostramos muestras de antemano para que sepas exactamente qué esperar.',
    },
  },
  {
    question: {
      en: 'What preparation is needed before you arrive?',
      fr: 'Quelle préparation faut-il prévoir avant votre venue ?',
      es: '¿Qué preparación se necesita antes de que lleguemos?',
    },
    answer: {
      en: 'Clear the room of furniture and personal items where possible; we handle masking, protection and dust control. Plumbing and electrical work should be finished beforehand, since fixtures are reinstalled after the finish cures.',
      fr: "Videz la pièce des meubles et effets personnels dans la mesure du possible ; nous nous occupons du masquage, de la protection et de la poussière. La plomberie et l'électricité doivent être terminées, les appareils étant réinstallés après le durcissement de la finition.",
      es: 'Despeja la habitación de muebles y objetos personales en la medida de lo posible; nosotros nos encargamos del enmascarado, la protección y el control del polvo. La plomería y la electricidad deben estar terminadas de antemano, ya que los accesorios se reinstalan después de que el acabado cura.',
    },
  },
  {
    question: {
      en: 'Which areas do you serve?',
      fr: 'Quels secteurs desservez-vous ?',
      es: '¿Qué zonas atienden?',
    },
    answer: {
      en: 'Montreal, Laval, the North Shore, the South Shore, Miami and Puerto Rico. We take projects elsewhere case by case: get in touch and tell us where you are.',
      fr: 'Montréal, Laval, la Rive-Nord, la Rive-Sud, Miami et Porto Rico. Nous acceptons des projets ailleurs au cas par cas : écrivez-nous en précisant votre secteur.',
      es: 'Montreal, Laval, la Rive-Nord, la Rive-Sud, Miami y Puerto Rico. Aceptamos proyectos en otras zonas caso por caso: escríbenos indicando dónde te encuentras.',
    },
  },
];
