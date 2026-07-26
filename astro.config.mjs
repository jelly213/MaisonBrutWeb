// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real domain once it is registered.
  site: 'https://maisonbrut.ca',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es'],
    routing: {
      // English lives at "/", French at "/fr/", Spanish at "/es/".
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});