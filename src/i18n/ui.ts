import type { Lang } from './config';

/**
 * Interface strings only. Editorial copy (services, projects, FAQ)
 * lives in src/data/ next to the content it describes.
 */
export const ui = {
  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.studio': 'Studio',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.skip': 'Skip to content',

    'cta.quote': 'Request a quote',
    'cta.viewAll': 'View all work',
    'cta.discover': 'Discover',
    'cta.back': 'Back',

    'home.heroTitle': 'Surfaces that breathe.',
    'home.heroSub': 'Microcement, Venetian plaster and limewash, applied by hand in Montreal and Laval.',
    'home.introEyebrow': 'The studio',
    'home.intro':
      'We finish walls, floors and furniture the slow way — mineral materials, laid by hand, layer over layer. No two surfaces come out alike, and that is the point.',
    'home.servicesEyebrow': 'Services',
    'home.servicesTitle': 'Four ways to change a room.',
    'home.servicesLead':
      'Discover our range of expert solutions designed to enhance your space with style and functionality.',
    'home.workEyebrow': 'Selected work',
    'home.workTitle': 'Recent projects.',
    'home.workHint': 'Scroll to explore',
    'home.reelsEyebrow': 'In motion',
    'home.reelsTitle': 'See the finish move.',
    'home.reelsLead':
      'Short clips from recent sites — light travelling across a surface says more than any photograph can.',
    'reel.sound': 'Sound on',
    'reel.muted': 'Sound off',
    'reel.play': 'Play',
    'reel.pause': 'Pause',

    'partners.eyebrow': 'Partners',
    'partners.title': 'Who we build with.',
    'partners.lead':
      'Contractors, designers and suppliers we share a site with — the people who see the work up close.',

    'home.matterEyebrow': 'Material',
    'home.matterTitle': 'Look closer.',
    'home.matterText': 'Depth you can read from across the room, and texture you only understand up close.',
    'home.processEyebrow': 'How it works',
    'home.processTitle': 'Three steps, no surprises.',
    'home.finalTitle': "Let's talk about your space.",
    'home.finalText': 'Tell us what you have in mind. We answer every request within two business days.',

    'process.1.title': 'Consultation',
    'process.1.text': 'We visit the space, take measurements and talk through the look you are after.',
    'process.2.title': 'Sample',
    'process.2.text': 'We prepare physical samples in your light, on your wall, until the finish is right.',
    'process.3.title': 'Application',
    'process.3.text': 'Our team preps, applies and seals — clean site, agreed timeline, no shortcuts.',

    'work.title': 'Work',
    'work.lead': 'A selection of finishes and furniture delivered across Greater Montreal.',
    'work.all': 'All',
    'work.empty': 'No projects in this category yet.',
    'work.close': 'Close image',
    'work.prev': 'Previous image',
    'work.next': 'Next image',

    'trust.eyebrow': 'Working with us',
    'trust.title': 'No surprises, by design.',
    'trust.lead':
      'A finish is a commitment you live with every day for years. Here is how we make sure you know exactly what you are getting before we start.',
    'trust.1.title': 'A sample before you commit',
    'trust.1.text':
      'We prepare the finish on your own wall, in your own light. You approve the real thing — not a photograph of someone else’s room.',
    'trust.2.title': 'The timeline in writing',
    'trust.2.text':
      'Start date, working days, curing time and the day you get the room back — agreed before the first coat goes on.',
    'trust.3.title': 'A site left clean',
    'trust.3.text':
      'Masking, dust control and protection are part of the job, not an extra line. We work in homes people are still living in.',
    'trust.4.title': 'An answer within two business days',
    'trust.4.text':
      'Every request gets a reply, whether the project turns out to be a fit for us or not.',

    'services.title': 'Services',
    'services.uses': 'Where it works',
    'services.why': 'Why choose it',
    'services.related': 'Related projects',
    'services.other': 'Other services',

    'studio.title': 'The studio',
    'faq.title': 'Frequently asked questions',
    'faq.lead': 'What clients ask us most often, before the first visit.',

    'contact.title': 'Request a quote',
    'contact.lead':
      'Tell us about your project — the room, the surface, the feeling you want. We answer within two business days.',
    'contact.serving': 'Serving Montreal, Laval and the North Shore',
    'contact.email': 'Email',
    'contact.instagram': 'Instagram',

    'form.name': 'Name',
    'form.email': 'Email',
    'form.phone': 'Phone',
    'form.service': 'Service',
    'form.servicePlaceholder': 'Select a service',
    'form.serviceOther': 'Not sure yet',
    'form.location': 'Project location',
    'form.locationPlaceholder': 'Montreal, Laval, …',
    'form.area': 'Approximate area',
    'form.areaPlaceholder': 'e.g. 200 sq ft',
    'form.message': 'Your project',
    'form.messagePlaceholder': 'Room, surface, timeline, anything else we should know.',
    'form.submit': 'Send request',
    'form.sending': 'Sending…',
    'form.successTitle': 'Your email app is opening.',
    'form.successText':
      'Your message is filled in and ready — press send in your mail app to deliver it.',
    'form.errorTitle': 'Nothing opened?',
    'form.errorText': 'Write to us directly at',
    'form.required': 'Required',
    'form.invalidEmail': 'Please enter a valid email address.',

    'footer.tagline': 'Handmade mineral finishes and bespoke furniture.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.lang': 'Français',

    'meta.home.title': 'Maison Brut — Microcement & Venetian Plaster, Montreal',
    'meta.home.description':
      'Handmade microcement, Venetian plaster, limewash and custom furniture for homes and businesses in Montreal and Laval.',
    'meta.work.description': 'Selected microcement, Venetian plaster and limewash projects across Greater Montreal.',
    'meta.studio.description': 'Meet the studio behind Maison Brut — mineral finishes applied by hand in Montreal.',
    'meta.faq.description': 'Durability, upkeep, timelines and preparation — answers to the questions we hear most.',
    'meta.contact.description': 'Request a quote for microcement, Venetian plaster, limewash or custom furniture in Montreal and Laval.',
  },

  fr: {
    'nav.services': 'Services',
    'nav.work': 'Réalisations',
    'nav.studio': 'Atelier',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',
    'nav.skip': 'Aller au contenu',

    'cta.quote': 'Demander une soumission',
    'cta.viewAll': 'Voir toutes les réalisations',
    'cta.discover': 'Découvrir',
    'cta.back': 'Retour',

    'home.heroTitle': 'Des surfaces qui respirent.',
    'home.heroSub': 'Béton ciré, stuc vénitien et badigeon de chaux, appliqués à la main à Montréal et Laval.',
    'home.introEyebrow': "L'atelier",
    'home.intro':
      "Nous finissons les murs, les sols et le mobilier à l'ancienne — des matériaux minéraux, posés à la main, couche après couche. Aucune surface ne ressemble à une autre, et c'est précisément le but.",
    'home.servicesEyebrow': 'Services',
    'home.servicesTitle': 'Quatre façons de transformer une pièce.',
    'home.servicesLead':
      'Découvrez nos finitions, pensées pour donner à votre espace du caractère et de la durabilité.',
    'home.workEyebrow': 'Sélection',
    'home.workTitle': 'Projets récents.',
    'home.workHint': 'Faites défiler',
    'home.reelsEyebrow': 'En mouvement',
    'home.reelsTitle': 'Voyez la finition vivre.',
    'home.reelsLead':
      'De courtes séquences tournées sur nos chantiers — la lumière qui glisse sur une surface en dit plus que n’importe quelle photo.',
    'reel.sound': 'Activer le son',
    'reel.muted': 'Couper le son',
    'reel.play': 'Lecture',
    'reel.pause': 'Pause',

    'partners.eyebrow': 'Partenaires',
    'partners.title': 'Avec qui nous bâtissons.',
    'partners.lead':
      'Entrepreneurs, designers et fournisseurs que nous retrouvons sur les chantiers — ceux qui voient le travail de près.',

    'home.matterEyebrow': 'Matière',
    'home.matterTitle': 'Regardez de plus près.',
    'home.matterText': "Une profondeur qui se lit à l'autre bout de la pièce, et une texture qui ne se comprend que de tout près.",
    'home.processEyebrow': 'Comment ça se passe',
    'home.processTitle': 'Trois étapes, aucune surprise.',
    'home.finalTitle': 'Parlons de votre espace.',
    'home.finalText': 'Dites-nous ce que vous avez en tête. Nous répondons à chaque demande sous deux jours ouvrables.',

    'process.1.title': 'Consultation',
    'process.1.text': "Nous visitons le lieu, prenons les mesures et discutons du rendu que vous recherchez.",
    'process.2.title': 'Échantillon',
    'process.2.text': "Nous préparons des échantillons réels, dans votre lumière, sur votre mur, jusqu'à la bonne finition.",
    'process.3.title': 'Application',
    'process.3.text': 'Notre équipe prépare, applique et scelle — chantier propre, délais convenus, aucun raccourci.',

    'work.title': 'Réalisations',
    'work.lead': 'Une sélection de finitions et de mobilier livrés dans le Grand Montréal.',
    'work.all': 'Tout',
    'work.empty': 'Aucun projet dans cette catégorie pour le moment.',
    'work.close': "Fermer l'image",
    'work.prev': 'Image précédente',
    'work.next': 'Image suivante',

    'trust.eyebrow': 'Travailler avec nous',
    'trust.title': 'Aucune surprise, par principe.',
    'trust.lead':
      'Une finition, c’est un choix avec lequel on vit tous les jours pendant des années. Voici comment nous nous assurons que vous savez exactement à quoi vous attendre avant de commencer.',
    'trust.1.title': 'Un échantillon avant de vous engager',
    'trust.1.text':
      'Nous préparons la finition sur votre mur, dans votre lumière. Vous approuvez le rendu réel, pas la photo du salon de quelqu’un d’autre.',
    'trust.2.title': 'L’échéancier par écrit',
    'trust.2.text':
      'Date de début, jours de travaux, temps de séchage et jour où vous récupérez la pièce — convenus avant la première couche.',
    'trust.3.title': 'Un chantier laissé propre',
    'trust.3.text':
      'Masquage, protection et gestion de la poussière font partie du travail, pas d’une ligne en supplément. Nous intervenons dans des logements occupés.',
    'trust.4.title': 'Une réponse sous deux jours ouvrables',
    'trust.4.text':
      'Chaque demande obtient une réponse, que le projet nous corresponde ou non.',

    'services.title': 'Services',
    'services.uses': 'Où ça fonctionne',
    'services.why': 'Pourquoi ce choix',
    'services.related': 'Projets liés',
    'services.other': 'Autres services',

    'studio.title': "L'atelier",
    'faq.title': 'Questions fréquentes',
    'faq.lead': 'Ce que les clients nous demandent le plus souvent, avant la première visite.',

    'contact.title': 'Demander une soumission',
    'contact.lead':
      "Parlez-nous de votre projet — la pièce, la surface, l'ambiance recherchée. Nous répondons sous deux jours ouvrables.",
    'contact.serving': 'Nous desservons Montréal, Laval et la Rive-Nord',
    'contact.email': 'Courriel',
    'contact.instagram': 'Instagram',

    'form.name': 'Nom',
    'form.email': 'Courriel',
    'form.phone': 'Téléphone',
    'form.service': 'Service',
    'form.servicePlaceholder': 'Choisissez un service',
    'form.serviceOther': 'Je ne sais pas encore',
    'form.location': 'Lieu du projet',
    'form.locationPlaceholder': 'Montréal, Laval, …',
    'form.area': 'Superficie approximative',
    'form.areaPlaceholder': 'ex. 200 pi²',
    'form.message': 'Votre projet',
    'form.messagePlaceholder': 'Pièce, surface, échéancier, tout ce qui peut nous aider.',
    'form.submit': 'Envoyer la demande',
    'form.sending': 'Envoi en cours…',
    'form.successTitle': 'Votre messagerie s’ouvre.',
    'form.successText':
      'Votre message est rédigé et prêt — appuyez sur Envoyer dans votre messagerie pour le transmettre.',
    'form.errorTitle': 'Rien ne s’est ouvert ?',
    'form.errorText': 'Écrivez-nous directement à',
    'form.required': 'Obligatoire',
    'form.invalidEmail': 'Veuillez saisir une adresse courriel valide.',

    'footer.tagline': 'Finitions minérales faites main et mobilier sur mesure.',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.lang': 'English',

    'meta.home.title': 'Maison Brut — Béton ciré et stuc vénitien, Montréal',
    'meta.home.description':
      'Béton ciré, stuc vénitien, badigeon de chaux et mobilier sur mesure, faits main, pour résidences et commerces à Montréal et Laval.',
    'meta.work.description': 'Projets de béton ciré, stuc vénitien et badigeon de chaux réalisés dans le Grand Montréal.',
    'meta.studio.description': "Découvrez l'atelier Maison Brut — des finitions minérales appliquées à la main à Montréal.",
    'meta.faq.description': 'Durabilité, entretien, délais et préparation — les réponses aux questions les plus fréquentes.',
    'meta.contact.description': 'Demandez une soumission pour du béton ciré, du stuc vénitien, un badigeon de chaux ou du mobilier sur mesure à Montréal et Laval.',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

/** Translate an interface key for the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.en as Record<string, string>)[key];
  };
}
