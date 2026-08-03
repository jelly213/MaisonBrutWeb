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
  /**
   * Optional finished-work photo shown under the title on the service page.
   * `ratio` is a Tailwind aspect utility; leave it out for portrait sources.
   */
  photo?: { src: string; alt: Localized; ratio?: string };
}

export const services: Service[] = [
  {
    id: 'microcement',
    slug: { en: 'microcement', fr: 'beton-cire', es: 'microcemento' },
    name: { en: 'Microcement', fr: 'Microciment', es: 'Microcemento' },
    short: {
      en: 'A seamless, modern surface finish that delivers a sleek, minimalist look with texture. Perfect for bathrooms and floors.',
      fr: "Une finition continue et contemporaine, sans joint, au rendu minimaliste et texturé. Idéale pour les salles de bain et les sols.",
      es: 'Un revestimiento continuo y contemporáneo, sin juntas, de aspecto minimalista y texturado. Ideal para baños y pisos.',
    },
    body: {
      en: [
        'Microcement is a thin cement-based coating applied in successive layers over almost any sound substrate: tile, concrete, plaster or plywood. Two to three millimetres thick, it turns a room into a single continuous surface with no grout lines to interrupt the eye or collect grime.',
        'Because it is troweled by hand, the finish carries subtle movement: cloudy passages, faint trowel marks, a depth that printed surfaces cannot imitate. We seal it with a matte polyurethane that makes it waterproof and hard-wearing.',
        'It is the finish we recommend most often for bathrooms, shower walls and open-plan floors, where a seam would break the calm of the space.',
      ],
      fr: [
        "Le microciment est un enduit mince à base de ciment, appliqué en couches successives sur presque tout support sain : céramique, béton, plâtre ou contreplaqué. Épais de deux à trois millimètres, il transforme une pièce en une surface continue, sans joint pour couper le regard ni retenir la saleté.",
        "Parce qu'il est taloché à la main, le rendu conserve un léger mouvement : nuages, traces de truelle discrètes, une profondeur qu'aucune surface imprimée ne reproduit. Nous le scellons avec un polyuréthane mat qui le rend imperméable et résistant.",
        "C'est la finition que nous recommandons le plus souvent pour les salles de bain, les murs de douche et les aires ouvertes, là où un joint viendrait rompre le calme de l'espace.",
      ],
      es: [
        'El microcemento es un revestimiento fino a base de cemento, aplicado en capas sucesivas sobre casi cualquier soporte sano: cerámica, hormigón, yeso o contrachapado. Con un espesor de dos a tres milímetros, convierte una habitación en una superficie continua, sin juntas que corten la vista ni acumulen suciedad.',
        'Al aplicarse a mano con llana, el acabado conserva un movimiento sutil: veladuras, ligeras marcas de llana, una profundidad que ninguna superficie impresa puede imitar. Lo sellamos con un poliuretano mate que lo vuelve impermeable y resistente.',
        'Es el acabado que más recomendamos para baños, paredes de ducha y espacios abiertos, donde una junta rompería la calma del lugar.',
      ],
    },
    uses: {
      en: ['Bathrooms and showers', 'Floors and stairs', 'Kitchen backsplashes', 'Countertops and vanities', 'Commercial retail spaces'],
      fr: ['Salles de bain et douches', 'Sols et escaliers', 'Dosserets de cuisine', 'Comptoirs et vanités', 'Espaces commerciaux'],
      es: ['Baños y duchas', 'Pisos y escaleras', 'Salpicaderos de cocina', 'Encimeras y tocadores', 'Espacios comerciales'],
    },
    why: {
      en: [
        'No grout lines to scrub or reseal',
        'Applies over existing tile, no demolition, no dust',
        'Waterproof once sealed, safe for wet rooms',
        'Adds only 2–3 mm, so door heights stay untouched',
      ],
      fr: [
        'Aucun joint à récurer ni à refaire',
        "S'applique sur la céramique existante, sans démolition ni poussière",
        'Imperméable une fois scellé, adapté aux pièces humides',
        "N'ajoute que 2 à 3 mm : la hauteur des portes reste intacte",
      ],
      es: [
        'Sin juntas que restregar ni rehacer',
        'Se aplica sobre la cerámica existente, sin demolición ni polvo',
        'Impermeable una vez sellado, apto para zonas húmedas',
        'Solo añade 2–3 mm, así que la altura de las puertas no cambia',
      ],
    },
    image: '/src/assets/services/microcement.jpg',
    photo: {
      src: '/src/assets/services/microcement-bathroom.jpg',
      alt: {
        en: 'Bathroom in charcoal microcement: walls, sloped ceiling and floor run seamlessly around a freestanding tub, with brass fittings and a skylight.',
        fr: "Salle de bain en microciment anthracite : murs, plafond mansardé et sol filent sans joint autour d'une baignoire îlot, robinetterie en laiton et puits de lumière.",
        es: 'Baño en microcemento antracita: paredes, techo abuhardillado y piso corren sin juntas alrededor de una bañera exenta, con grifería de latón y un lucernario.',
      },
    },
  },

  {
    id: 'venetian-plaster',
    slug: { en: 'venetian-plaster', fr: 'stuc-venitien', es: 'estuco-veneciano' },
    name: { en: 'Venetian Plaster', fr: 'Plâtre vénitien', es: 'Estuco veneciano' },
    short: {
      en: 'A lime-based product that offers a luxurious wall finish with natural depth and texture.',
      fr: "Un enduit à la chaux qui offre une finition murale luxueuse, avec une profondeur et une texture naturelles.",
      es: 'Un revestimiento a base de cal que ofrece un acabado mural lujoso, con una profundidad y una textura naturales.',
    },
    body: {
      en: [
        'Venetian plaster is slaked lime and finely ground marble, burnished layer over layer until the wall reads like polished stone. The technique is centuries old and has never been improved upon, because nothing else produces that particular light.',
        'Depending on how far we burnish it, the finish ranges from a soft satin to a mirror-like polish. Pigment is mixed into the lime itself rather than painted on top, so the colour has depth instead of sitting flat on the surface.',
        'It belongs in the rooms you want people to notice: entryways, dining rooms, feature walls, hotel lobbies.',
      ],
      fr: [
        "Le plâtre vénitien, c'est de la chaux éteinte et de la poudre de marbre, lustrées couche après couche jusqu'à ce que le mur ait l'aspect de la pierre polie. La technique a des siècles et n'a jamais été surpassée, parce que rien d'autre ne produit cette lumière-là.",
        "Selon le degré de lustrage, la finition va du satin doux au poli miroir. Le pigment est mélangé à la chaux elle-même plutôt qu'appliqué par-dessus : la couleur gagne en profondeur au lieu de rester en surface.",
        "Sa place est dans les pièces que l'on veut faire remarquer : entrées, salles à manger, murs d'accent, halls d'hôtel.",
      ],
      es: [
        'El estuco veneciano es cal apagada y mármol finamente molido, bruñidos capa tras capa hasta que la pared adquiere el aspecto de la piedra pulida. La técnica tiene siglos de antigüedad y nunca se ha superado, porque nada más produce esa luz particular.',
        'Según el grado de bruñido, el acabado va de un satinado suave a un pulido similar a un espejo. El pigmento se mezcla en la propia cal en lugar de pintarse encima, así que el color gana profundidad en vez de quedar plano sobre la superficie.',
        'Tiene su lugar en las habitaciones que quieres que se noten: entradas, comedores, muros de acento, vestíbulos de hotel.',
      ],
    },
    uses: {
      en: ['Feature and accent walls', 'Entryways and stairwells', 'Dining and living rooms', 'Ceilings and coves', 'Hospitality interiors'],
      fr: ["Murs d'accent", 'Entrées et cages d\'escalier', 'Salles à manger et salons', 'Plafonds et corniches', 'Intérieurs hôteliers'],
      es: ['Muros de acento', 'Entradas y cajas de escalera', 'Comedores y salas', 'Techos y molduras', 'Interiores de hostelería'],
    },
    why: {
      en: [
        'Genuine mineral depth: colour lives inside the material',
        'Naturally antibacterial and mould resistant',
        'Breathable: it lets wall assemblies release moisture',
        'Hardens with age instead of degrading',
      ],
      fr: [
        'Une profondeur minérale véritable : la couleur vit dans la matière',
        'Naturellement antibactérien et résistant aux moisissures',
        "Perspirant : il laisse les murs évacuer l'humidité",
        'Il durcit avec le temps au lieu de se dégrader',
      ],
      es: [
        'Profundidad mineral auténtica: el color vive dentro del material',
        'Naturalmente antibacteriano y resistente al moho',
        'Transpirable: permite que los muros liberen la humedad',
        'Se endurece con el tiempo en lugar de degradarse',
      ],
    },
    image: '/src/assets/services/venetian-plaster.jpg',
    photo: {
      src: '/src/assets/services/venetian-plaster-powder-room.jpg',
      alt: {
        en: 'Powder room in charcoal Venetian plaster: walls with cloudy mineral depth, a black slab shelf, a round mirror and a white basin.',
        fr: "Salle d'eau en plâtre vénitien anthracite : murs à la profondeur minérale nuagée, tablette noire, miroir rond et vasque blanche.",
        es: 'Aseo en estuco veneciano antracita: paredes con profundidad mineral veladura, repisa negra, espejo redondo y lavabo blanco.',
      },
    },
  },

  {
    id: 'limewash',
    slug: { en: 'limewash', fr: 'badigeon-de-chaux', es: 'encalado' },
    name: { en: 'Limewash', fr: 'Peinture à la chaux', es: 'Encalado' },
    short: {
      en: 'A natural, breathable paint that creates a soft, matte finish with subtle movement. It adds warmth and character to any space.',
      fr: "Une peinture naturelle et perspirante au fini mat et velouté, animé de nuances. Elle apporte chaleur et caractère à toute pièce.",
      es: 'Una pintura natural y transpirable de acabado mate y aterciopelado, animada de matices. Aporta calidez y carácter a cualquier espacio.',
    },
    body: {
      en: [
        'Limewash is the oldest wall finish we offer and the simplest: slaked lime, water, mineral pigment. Brushed on in loose crosshatched strokes, it dries to a chalky matte surface that shifts between cloudy and clear as the light moves through the room.',
        'It is a mineral, not a plastic film. It bonds chemically with masonry and plaster instead of sitting on top of them, and it lets the wall breathe, which matters in older Montreal buildings where trapped moisture does real damage.',
        'Choose it when you want warmth and age rather than perfection.',
      ],
      fr: [
        "La peinture à la chaux est la plus ancienne de nos finitions, et la plus simple : chaux éteinte, eau, pigment minéral. Appliquée à la brosse en croisillons libres, elle sèche en une surface mate et crayeuse qui passe du nuageux au limpide selon la course de la lumière.",
        "C'est un minéral, pas un film plastique. Elle se lie chimiquement à la maçonnerie et au plâtre au lieu de reposer dessus, et elle laisse le mur respirer, ce qui compte dans les bâtiments montréalais anciens, où l'humidité emprisonnée fait de réels dégâts.",
        "À choisir quand on cherche la chaleur et la patine plutôt que la perfection.",
      ],
      es: [
        'El encalado es el acabado mural más antiguo que ofrecemos, y el más simple: cal apagada, agua, pigmento mineral. Aplicado a brocha en trazos cruzados sueltos, seca en una superficie mate y calcárea que pasa de nublado a límpido según se mueve la luz en la habitación.',
        'Es un mineral, no una película plástica. Se adhiere químicamente a la mampostería y al yeso en lugar de reposar encima, y deja que el muro respire, algo importante en los edificios antiguos de Montreal, donde la humedad atrapada causa daños reales.',
        'Elígelo cuando busques calidez y pátina en lugar de perfección.',
      ],
    },
    uses: {
      en: ['Bedrooms and living spaces', 'Brick and masonry walls', 'Heritage and older buildings', 'Ceilings', 'Restaurants and cafés'],
      fr: ['Chambres et pièces de vie', 'Murs de brique et de maçonnerie', 'Bâtiments patrimoniaux et anciens', 'Plafonds', 'Restaurants et cafés'],
      es: ['Dormitorios y espacios de estar', 'Muros de ladrillo y mampostería', 'Edificios patrimoniales y antiguos', 'Techos', 'Restaurantes y cafés'],
    },
    why: {
      en: [
        'Fully breathable, no trapped moisture behind a film',
        'Zero VOC, made of lime, water and pigment only',
        'Naturally resists mould and mildew',
        'Ages into the wall instead of peeling off it',
      ],
      fr: [
        "Entièrement perspirant, aucune humidité emprisonnée sous un film",
        'Zéro COV : chaux, eau et pigment, rien d\'autre',
        'Résiste naturellement aux moisissures',
        'Il patine avec le mur au lieu de s\'écailler',
      ],
      es: [
        'Totalmente transpirable, nada de humedad atrapada bajo una película',
        'Cero COV: solo cal, agua y pigmento',
        'Resiste naturalmente el moho y los hongos',
        'Envejece junto con el muro en lugar de descascararse',
      ],
    },
    image: '/src/assets/services/limewash.jpg',
    photo: {
      src: '/src/assets/services/limewash-interior.jpg',
      ratio: 'aspect-[3/4]',
      alt: {
        en: 'Limewashed wall in a soft sand tone, raking daylight revealing the cloudy brush movement, with an olive branch in an earthenware jar on a plastered ledge.',
        fr: "Mur peint à la chaux dans un sable doux, la lumière rasante révélant le mouvement de brosse nuagé, avec une branche d'olivier dans un vase de terre posé sur une tablette enduite.",
        es: 'Muro a la cal en un tono arena suave, la luz rasante revelando el movimiento de brocha veladura, con una rama de olivo en una vasija de barro sobre una repisa revocada.',
      },
    },
  },

  {
    id: 'furniture',
    slug: { en: 'custom-made-furniture', fr: 'mobilier-sur-mesure', es: 'mobiliario-a-medida' },
    name: { en: 'Custom-Made Furniture', fr: 'Mobilier sur mesure', es: 'Mobiliario a medida' },
    short: {
      en: 'We design and build unique furniture on demand. Every item is handcrafted to match your space and personal style.',
      fr: "Nous concevons et fabriquons du mobilier unique sur demande. Chaque pièce est faite main, à la mesure de votre espace et de votre style.",
      es: 'Diseñamos y fabricamos mobiliario único bajo pedido. Cada pieza está hecha a mano, a la medida de tu espacio y tu estilo.',
    },
    body: {
      en: [
        'Some rooms have a corner no catalogue will ever fit. We draw, build and finish furniture for those spaces: vanities, benches, consoles, dining tables, shelving, in solid wood, steel and our own mineral finishes.',
        'The process starts with the room rather than the object: we measure, sketch, and agree on materials before anything is cut. You see the piece in drawings and in material samples before it is built.',
        'Because we apply the finishes ourselves, a microcement vanity can match the floor it stands on exactly.',
      ],
      fr: [
        "Certaines pièces ont un recoin qu'aucun catalogue ne comblera jamais. Nous dessinons, fabriquons et finissons du mobilier pour ces espaces-là : vanités, bancs, consoles, tables, étagères, en bois massif, en acier et avec nos propres finitions minérales.",
        "Le travail commence par la pièce, pas par l'objet : nous mesurons, esquissons et arrêtons les matériaux avant la moindre découpe. Vous voyez le meuble en dessin et en échantillons avant qu'il soit construit.",
        "Parce que nous appliquons nous-mêmes les finitions, une vanité en microciment peut s'accorder exactement au sol sur lequel elle repose.",
      ],
      es: [
        'Algunas habitaciones tienen un rincón que ningún catálogo llenará jamás. Dibujamos, fabricamos y acabamos mobiliario para esos espacios: tocadores, bancos, consolas, mesas de comedor, estanterías, en madera maciza, acero y nuestros propios acabados minerales.',
        'El proceso empieza por la habitación, no por el objeto: medimos, esbozamos y acordamos los materiales antes de cortar nada. Ves la pieza en dibujos y en muestras de material antes de que se construya.',
        'Como aplicamos nosotros mismos los acabados, un tocador de microcemento puede combinar exactamente con el piso sobre el que se apoya.',
      ],
    },
    uses: {
      en: ['Bathroom vanities', 'Dining and coffee tables', 'Built-in shelving', 'Benches and seating', 'Reception desks'],
      fr: ['Vanités de salle de bain', 'Tables à manger et tables basses', 'Étagères intégrées', 'Bancs et assises', 'Comptoirs d\'accueil'],
      es: ['Tocadores de baño', 'Mesas de comedor y centro', 'Estanterías empotradas', 'Bancos y asientos', 'Mostradores de recepción'],
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
      es: [
        'Fabricado a las dimensiones exactas de tu habitación',
        'Acabados a juego con las superficies que lo rodean',
        'Materiales macizos, reparables en vez de desechables',
        'Dibujos y muestras aprobados antes de fabricar',
      ],
    },
    image: '/src/assets/services/furniture.jpg',
    photo: {
      src: '/src/assets/services/furniture-vanity.jpg',
      alt: {
        en: 'Bathroom built around a cast monolithic vanity and floating shelf in mineral plaster, with brass fittings and a skylight washing the walls.',
        fr: "Salle de bain organisée autour d'une vanité monolithique coulée et d'une tablette suspendue en enduit minéral, robinetterie en laiton et puits de lumière balayant les murs.",
        es: 'Baño construido en torno a un mueble de lavabo monolítico y una repisa flotante en revoco mineral, con grifería de latón y un lucernario que baña los muros.',
      },
    },
  },
];

export const getService = (id: Service['id']): Service | undefined =>
  services.find((service) => service.id === id);
