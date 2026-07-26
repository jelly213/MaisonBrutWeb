import type { Lang, Localized } from './config';
import type { Service } from '../data/services';

/**
 * Every route, in both languages. French URLs use French segments so the
 * pages compete properly in French search results.
 */
export const routes = {
  home: { en: '/', fr: '/fr/', es: '/es/' },
  services: { en: '/services', fr: '/fr/services', es: '/es/servicios' },
  work: { en: '/work', fr: '/fr/realisations', es: '/es/proyectos' },
  studio: { en: '/studio', fr: '/fr/atelier', es: '/es/estudio' },
  faq: { en: '/faq', fr: '/fr/faq', es: '/es/preguntas-frecuentes' },
  contact: { en: '/contact', fr: '/fr/contact', es: '/es/contacto' },
} satisfies Record<string, Localized>;

export type RouteKey = keyof typeof routes;

export const route = (key: RouteKey, lang: Lang): string => routes[key][lang];

/** URL of a single service page. */
export const serviceRoute = (service: Service, lang: Lang): string =>
  `${routes.services[lang]}/${service.slug[lang]}`;

/** Main navigation, in display order. */
export const navigation: { key: RouteKey; label: string }[] = [
  { key: 'services', label: 'nav.services' },
  { key: 'work', label: 'nav.work' },
  { key: 'studio', label: 'nav.studio' },
  { key: 'faq', label: 'nav.faq' },
  { key: 'contact', label: 'nav.contact' },
];
