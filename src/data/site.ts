import type { Localized } from '../i18n/config';

export const site = {
  name: 'Maison Brüt',
  email: 'info.maisonbrut@gmail.com',
  phone: '+1 450 775 5031',
  instagramHandle: 'maisonbrut_',
  instagram: 'https://www.instagram.com/maisonbrut_',

  /** Used for LocalBusiness structured data and local SEO. */
  areaServed: ['Montreal', 'Laval', 'Rive-Nord', 'Rive-Sud', 'Greater Montreal', 'Miami', 'Puerto Rico'],
  address: {
    locality: 'Montreal',
    region: 'QC',
    country: 'CA',
  },

} as const;

export const tagline: Localized = {
  en: 'Handmade mineral finishes and bespoke furniture.',
  fr: 'Finitions minérales faites main et mobilier sur mesure.',
  es: 'Acabados minerales hechos a mano y mobiliario a medida.',
};
