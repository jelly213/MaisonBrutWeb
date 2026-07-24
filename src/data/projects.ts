import type { Localized } from '../i18n/config';
import type { Service } from './services';

export interface Project {
  id: string;
  title: Localized;
  service: Service['id'];
  /** Omit until the client confirms it — never guess a neighbourhood. */
  location?: string;
  year?: number;
  image: string;
  alt: Localized;
  /** Shown on the home page rail. Keep this to three or four projects. */
  featured?: boolean;
}

/**
 * Adding a project means adding one object to this array.
 * Drop the photo in src/assets/work/ and point `image` at it — paths under
 * src/assets are optimised at build time (AVIF/WebP + srcset).
 */
export const projects: Project[] = [
  // --- Real client photos. Location and year still to be confirmed. ---
  {
    id: 'stone-wall-bench',
    title: { en: 'Floating bench, stone wall', fr: 'Banc suspendu, mur de pierre' },
    service: 'furniture',
    image: '/src/assets/work/stone-wall-bench.jpg',
    alt: {
      en: 'Custom floating bench in microcement running along a reclaimed stone wall.',
      fr: 'Banc suspendu sur mesure en béton ciré longeant un mur de pierre récupérée.',
    },
    featured: true,
  },
  {
    id: 'microcement-kitchen',
    title: { en: 'Microcement kitchen', fr: 'Cuisine en béton ciré' },
    service: 'microcement',
    image: '/src/assets/work/microcement-kitchen.jpg',
    alt: {
      en: 'Kitchen with a seamless microcement floor and walls, oak cabinetry and a stone island.',
      fr: 'Cuisine au sol et aux murs en béton ciré continu, armoires en chêne et îlot en pierre.',
    },
    featured: true,
  },
  {
    id: 'sculpted-stairwell',
    title: { en: 'Sculpted stairwell', fr: "Cage d'escalier sculptée" },
    service: 'microcement',
    image: '/src/assets/work/sculpted-stairwell.jpg',
    alt: {
      en: 'Stairwell wrapped in seamless microcement, with a rounded sculpted handrail.',
      fr: "Cage d'escalier enveloppée de béton ciré continu, avec main courante arrondie sculptée.",
    },
    featured: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectsByService = (id: Service['id']) =>
  projects.filter((project) => project.service === id);
