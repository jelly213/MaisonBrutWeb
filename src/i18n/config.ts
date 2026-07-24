export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** A value that exists in both site languages. */
export type Localized<T = string> = Record<Lang, T>;

/** Pick the current language out of a localized value, falling back to English. */
export function pick<T>(value: Localized<T>, lang: Lang): T {
  return value[lang] ?? value[defaultLang];
}

/**
 * Prefix an internal path with the language segment.
 * English is the default locale and stays at the root.
 */
export function localePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean === '/' ? '/' : clean;
  return clean === '/' ? '/fr/' : `/fr${clean}`;
}

/** Read the active language from an Astro URL. */
export function langFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'fr' ? 'fr' : 'en';
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fr' : 'en');
