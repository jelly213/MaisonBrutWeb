import type { Localized } from '../i18n/config';

export interface Service {
  /** Stable identifier used across the codebase and in projects.ts. */
  id: 'microcement' | 'venetian-plaster' | 'limewash' | 'furniture';
  /** URL segment, localized for search visibility in each market. */
  slug: Localized;
  name: Localized;
  /** One line, used on cards and in the services grid. */
  short: Localized;
  /** Two or three paragraphs, used on the service page. */
  body: Localized<string[]>;
  /** Where the finish works — rooms, surfaces, settings. */
  uses: Localized<string[]>;
  /** Selling points, answered as objections. */
  why: Localized<string[]>;
  image: string;
}

export const services: Service[] = [
  {
    id: 'microcement',
    slug: { en: 'microcement', fr: 'beton-cire' },
    name: { en: 'Microcement', fr: 'Béton ciré' },
    short: {
      en: 'A seamless, modern surface finish that delivers a sleek, minimalist look with texture. Perfect for bathrooms and floors.',
      fr: "Une finition continue et contemporaine, sans joint, au rendu minimaliste et texturé. Idéale pour les salles de bain et les sols.",
    },
    body: {
      en: [
        'Microcement is a thin cement-based coating applied in successive layers over almost any sound substrate — tile, concrete, plaster or plywood. Two to three millimetres thick, it turns a room into a single continuous surface with no grout lines to interrupt the eye or collect grime.',
        'Because it is troweled by hand, the finish carries subtle movement: cloudy passages, faint trowel marks, a depth that printed surfaces cannot imitate. We seal it with a matte polyurethane that makes it waterproof and hard-wearing.',
        'It is the finish we recommend most often for bathrooms, shower walls and open-plan floors, where a seam would break the calm of the space.',
      ],
      fr: [
        "Le béton ciré est un enduit mince à base de ciment, appliqué en couches successives sur presque tout support sain — céramique, béton, plâtre ou contreplaqué. Épais de deux à trois millimètres, il transforme une pièce en une surface continue, sans joint pour couper le regard ni retenir la saleté.",
        "Parce qu'il est taloché à la main, le rendu conserve un léger mouvement : nuages, traces de truelle discrètes, une profondeur qu'aucune surface imprimée ne reproduit. Nous le scellons avec un polyuréthane mat qui le rend imperméable et résistant.",
        "C'est la finition que nous recommandons le plus souvent pour les salles de bain, les murs de douche et les aires ouvertes, là où un joint viendrait rompre le calme de l'espace.",
      ],
    },
    uses: {
      en: ['Bathrooms and showers', 'Floors and stairs', 'Kitchen backsplashes', 'Countertops and vanities', 'Commercial retail spaces'],
      fr: ['Salles de bain et douches', 'Sols et escaliers', 'Dosserets de cuisine', 'Comptoirs et vanités', 'Espaces commerciaux'],
    },
    why: {
      en: [
        'No grout lines to scrub or reseal',
        'Applies over existing tile — no demolition, no dust',
        'Waterproof once sealed, safe for wet rooms',
        'Adds only 2–3 mm, so door heights stay untouched',
      ],
      fr: [
        'Aucun joint à récurer ni à refaire',
        "S'applique sur la céramique existante — sans démolition ni poussière",
        'Imperméable une fois scellé, adapté aux pièces humides',
        "N'ajoute que 2 à 3 mm : la hauteur des portes reste intacte",
      ],
    },
    image: '', // TODO: /images/… once the client's photo is in place
  },

  {
    id: 'venetian-plaster',
    slug: { en: 'venetian-plaster', fr: 'stuc-venitien' },
    name: { en: 'Venetian Plaster', fr: 'Stuc vénitien' },
    short: {
      en: 'A lime-based product that offers a luxurious wall finish with natural depth and texture.',
      fr: "Un enduit à la chaux qui offre une finition murale luxueuse, avec une profondeur et une texture naturelles.",
    },
    body: {
      en: [
        'Venetian plaster is slaked lime and finely ground marble, burnished layer over layer until the wall reads like polished stone. The technique is centuries old and has never been improved upon, because nothing else produces that particular light.',
        'Depending on how far we burnish it, the finish ranges from a soft satin to a mirror-like polish. Pigment is mixed into the lime itself rather than painted on top, so the colour has depth instead of sitting flat on the surface.',
        'It belongs in the rooms you want people to notice: entryways, dining rooms, feature walls, hotel lobbies.',
      ],
      fr: [
        "Le stuc vénitien, c'est de la chaux éteinte et de la poudre de marbre, lustrées couche après couche jusqu'à ce que le mur ait l'aspect de la pierre polie. La technique a des siècles et n'a jamais été surpassée, parce que rien d'autre ne produit cette lumière-là.",
        "Selon le degré de lustrage, la finition va du satin doux au poli miroir. Le pigment est mélangé à la chaux elle-même plutôt qu'appliqué par-dessus : la couleur gagne en profondeur au lieu de rester en surface.",
        "Sa place est dans les pièces que l'on veut faire remarquer : entrées, salles à manger, murs d'accent, halls d'hôtel.",
      ],
    },
    uses: {
      en: ['Feature and accent walls', 'Entryways and stairwells', 'Dining and living rooms', 'Ceilings and coves', 'Hospitality interiors'],
      fr: ["Murs d'accent", 'Entrées et cages d\'escalier', 'Salles à manger et salons', 'Plafonds et corniches', 'Intérieurs hôteliers'],
    },
    why: {
      en: [
        'Genuine mineral depth — colour lives inside the material',
        'Naturally antibacterial and mould resistant',
        'Breathable: it lets wall assemblies release moisture',
        'Hardens with age instead of degrading',
      ],
      fr: [
        'Une profondeur minérale véritable — la couleur vit dans la matière',
        'Naturellement antibactérien et résistant aux moisissures',
        "Perspirant : il laisse les murs évacuer l'humidité",
        'Il durcit avec le temps au lieu de se dégrader',
      ],
    },
    image: '', // TODO: /images/… once the client's photo is in place
  },

  {
    id: 'limewash',
    slug: { en: 'limewash', fr: 'badigeon-de-chaux' },
    name: { en: 'Limewash', fr: 'Badigeon de chaux' },
    short: {
      en: 'A natural, breathable paint that creates a soft, matte finish with subtle movement. It adds warmth and character to any space.',
      fr: "Une peinture naturelle et perspirante au fini mat et velouté, animé de nuances. Elle apporte chaleur et caractère à toute pièce.",
    },
    body: {
      en: [
        'Limewash is the oldest wall finish we offer and the simplest: slaked lime, water, mineral pigment. Brushed on in loose crosshatched strokes, it dries to a chalky matte surface that shifts between cloudy and clear as the light moves through the room.',
        'It is a mineral, not a plastic film. It bonds chemically with masonry and plaster instead of sitting on top of them, and it lets the wall breathe — which matters in older Montreal buildings where trapped moisture does real damage.',
        'Choose it when you want warmth and age rather than perfection.',
      ],
      fr: [
        "Le badigeon de chaux est la plus ancienne de nos finitions, et la plus simple : chaux éteinte, eau, pigment minéral. Appliqué à la brosse en croisillons libres, il sèche en une surface mate et crayeuse qui passe du nuageux au limpide selon la course de la lumière.",
        "C'est un minéral, pas un film plastique. Il se lie chimiquement à la maçonnerie et au plâtre au lieu de reposer dessus, et il laisse le mur respirer — ce qui compte dans les bâtiments montréalais anciens, où l'humidité emprisonnée fait de réels dégâts.",
        "À choisir quand on cherche la chaleur et la patine plutôt que la perfection.",
      ],
    },
    uses: {
      en: ['Bedrooms and living spaces', 'Brick and masonry walls', 'Heritage and older buildings', 'Ceilings', 'Restaurants and cafés'],
      fr: ['Chambres et pièces de vie', 'Murs de brique et de maçonnerie', 'Bâtiments patrimoniaux et anciens', 'Plafonds', 'Restaurants et cafés'],
    },
    why: {
      en: [
        'Fully breathable — no trapped moisture behind a film',
        'Zero VOC, made of lime, water and pigment only',
        'Naturally resists mould and mildew',
        'Ages into the wall instead of peeling off it',
      ],
      fr: [
        "Entièrement perspirant — aucune humidité emprisonnée sous un film",
        'Zéro COV : chaux, eau et pigment, rien d\'autre',
        'Résiste naturellement aux moisissures',
        'Il patine avec le mur au lieu de s\'écailler',
      ],
    },
    image: '', // TODO: /images/… once the client's photo is in place
  },

  {
    id: 'furniture',
    slug: { en: 'custom-made-furniture', fr: 'mobilier-sur-mesure' },
    name: { en: 'Custom-Made Furniture', fr: 'Mobilier sur mesure' },
    short: {
      en: 'We design and build unique furniture on demand. Every item is handcrafted to match your space and personal style.',
      fr: "Nous concevons et fabriquons du mobilier unique sur demande. Chaque pièce est faite main, à la mesure de votre espace et de votre style.",
    },
    body: {
      en: [
        'Some rooms have a corner no catalogue will ever fit. We draw, build and finish furniture for those spaces — vanities, benches, consoles, dining tables, shelving — in solid wood, steel and our own mineral finishes.',
        'The process starts with the room rather than the object: we measure, sketch, and agree on materials before anything is cut. You see the piece in drawings and in material samples before it is built.',
        'Because we apply the finishes ourselves, a microcement vanity can match the floor it stands on exactly.',
      ],
      fr: [
        "Certaines pièces ont un recoin qu'aucun catalogue ne comblera jamais. Nous dessinons, fabriquons et finissons du mobilier pour ces espaces-là — vanités, bancs, consoles, tables, étagères — en bois massif, en acier et avec nos propres finitions minérales.",
        "Le travail commence par la pièce, pas par l'objet : nous mesurons, esquissons et arrêtons les matériaux avant la moindre découpe. Vous voyez le meuble en dessin et en échantillons avant qu'il soit construit.",
        "Parce que nous appliquons nous-mêmes les finitions, une vanité en béton ciré peut s'accorder exactement au sol sur lequel elle repose.",
      ],
    },
    uses: {
      en: ['Bathroom vanities', 'Dining and coffee tables', 'Built-in shelving', 'Benches and seating', 'Reception desks'],
      fr: ['Vanités de salle de bain', 'Tables à manger et tables basses', 'Étagères intégrées', 'Bancs et assises', 'Comptoirs d\'accueil'],
    },
    why: {
      en: [
        'Built to the exact dimensions of your room',
        'Finishes that match the surfaces around it',
        'Solid materials, made to be repaired rather than replaced',
        'Drawings and samples approved before we build',
      ],
      fr: [
        'Fabriqué aux dimensions exactes de votre pièce',
        "Des finitions accordées aux surfaces environnantes",
        'Des matériaux massifs, réparables plutôt que jetables',
        'Dessins et échantillons validés avant fabrication',
      ],
    },
    image: '', // TODO: /images/… once the client's photo is in place
  },
];

export const getService = (id: Service['id']): Service | undefined =>
  services.find((service) => service.id === id);
