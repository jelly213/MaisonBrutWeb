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
    },
    answer: {
      en: 'Properly applied and sealed, microcement lasts as long as the substrate under it — fifteen to twenty years is normal in a residential bathroom. The sealer is the wearing layer, and it can be refreshed on floors after roughly ten years of heavy use without redoing the finish itself.',
      fr: "Correctement appliqué et scellé, le béton ciré dure aussi longtemps que son support — quinze à vingt ans est la norme dans une salle de bain résidentielle. C'est le scellant qui s'use : sur un sol très sollicité, il se renouvelle après une dizaine d'années sans refaire la finition.",
    },
  },
  {
    question: {
      en: 'Can you apply over existing tile?',
      fr: 'Pouvez-vous appliquer sur de la céramique existante ?',
    },
    answer: {
      en: 'Yes, and it is one of the main reasons clients choose microcement. As long as the tile is sound and well bonded, we prepare the surface, bridge the grout lines and apply over it. No demolition, no dumpster, and a bathroom that stays usable far sooner.',
      fr: "Oui, et c'est l'une des principales raisons pour lesquelles nos clients choisissent le béton ciré. Tant que la céramique est saine et bien collée, nous préparons la surface, comblons les joints et appliquons par-dessus. Aucune démolition, aucun conteneur, et une salle de bain réutilisable bien plus vite.",
    },
  },
  {
    question: {
      en: 'How long does a project take?',
      fr: 'Combien de temps dure un chantier ?',
    },
    answer: {
      en: 'A single feature wall is usually two to three days. A full bathroom in microcement runs five to seven days including curing and sealing. Larger floors and commercial spaces are scheduled after the site visit, and we give you the timeline in writing before we start.',
      fr: "Un simple mur d'accent demande généralement deux à trois jours. Une salle de bain complète en béton ciré prend cinq à sept jours, séchage et scellement compris. Les grands sols et les espaces commerciaux sont planifiés après la visite, et l'échéancier vous est remis par écrit avant le début des travaux.",
    },
  },
  {
    question: {
      en: 'Is the surface waterproof?',
      fr: 'La surface est-elle imperméable ?',
    },
    answer: {
      en: 'Microcement sealed with our polyurethane system is waterproof and suitable for showers and wet rooms. Venetian plaster and limewash are water resistant but breathable, which is what you want on walls; we do not put them inside a shower enclosure.',
      fr: "Le béton ciré scellé avec notre système polyuréthane est imperméable et convient aux douches et pièces humides. Le stuc vénitien et le badigeon de chaux résistent à l'eau tout en restant perspirants, ce qui est souhaitable sur un mur ; nous ne les posons pas à l'intérieur d'une douche.",
    },
  },
  {
    question: {
      en: 'How do I clean and maintain it?',
      fr: 'Comment entretenir la surface ?',
    },
    answer: {
      en: 'Warm water and a pH-neutral soap. Avoid bleach, vinegar and abrasive powders — acids attack lime, and abrasives dull the sealer. That is the whole routine.',
      fr: "De l'eau tiède et un savon au pH neutre. Évitez l'eau de Javel, le vinaigre et les poudres abrasives : les acides attaquent la chaux et les abrasifs ternissent le scellant. C'est tout l'entretien.",
    },
  },
  {
    question: {
      en: 'Will the finish be perfectly uniform?',
      fr: 'La finition sera-t-elle parfaitement uniforme ?',
    },
    answer: {
      en: 'No, and that is the material working as intended. Hand-applied mineral finishes carry cloudy passages and faint trowel movement — that variation is what gives them depth. We show you samples beforehand so you know exactly how much movement to expect.',
      fr: "Non, et c'est le matériau qui fonctionne comme prévu. Les finitions minérales appliquées à la main présentent des nuages et de légers mouvements de truelle — cette variation fait leur profondeur. Nous vous montrons des échantillons au préalable pour que vous sachiez exactement à quoi vous attendre.",
    },
  },
  {
    question: {
      en: 'What preparation is needed before you arrive?',
      fr: 'Quelle préparation faut-il prévoir avant votre venue ?',
    },
    answer: {
      en: 'Clear the room of furniture and personal items where possible; we handle masking, protection and dust control. Plumbing and electrical work should be finished beforehand, since fixtures are reinstalled after the finish cures.',
      fr: "Videz la pièce des meubles et effets personnels dans la mesure du possible ; nous nous occupons du masquage, de la protection et de la poussière. La plomberie et l'électricité doivent être terminées, les appareils étant réinstallés après le durcissement de la finition.",
    },
  },
  {
    question: {
      en: 'Which areas do you serve?',
      fr: 'Quels secteurs desservez-vous ?',
    },
    answer: {
      en: 'Montreal, Laval, the North Shore and the South Shore. We take projects elsewhere in Quebec case by case — get in touch and tell us where you are.',
      fr: 'Montréal, Laval, la Rive-Nord et la Rive-Sud. Nous acceptons des projets ailleurs au Québec au cas par cas — écrivez-nous en précisant votre secteur.',
    },
  },
];
