export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** A value that exists in every site language. */
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
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Read the active language from an Astro URL. */
export function langFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first in languages && first !== defaultLang ? (first as Lang) : defaultLang;
}

/** Every language other than the given one, in display order. */
export const otherLangs = (lang: Lang): Lang[] =>
  (Object.keys(languages) as Lang[]).filter((key) => key !== lang);
