import type { Localized } from '../i18n/config';

export interface Reel {
  id: string;
  /** Served straight from public/ — video is not processed at build time. */
  video: string;
  /** Poster frame, optimised like any other image. */
  poster: string;
  title: Localized;
  /** Spoken description for people who cannot see the clip. */
  alt: Localized;
}

/**
 * Short vertical clips, the format the client already shoots for Instagram.
 * Add one by dropping the file in public/videos/, its poster frame in
 * src/assets/reels/, and one object here.
 */
export const reels: Reel[] = [
  {
    id: 'inset-niche',
    video: '/videos/reel-02.mp4',
    poster: '/src/assets/reels/reel-02.jpg',
    title: { en: 'Textured wall, inset niche', fr: 'Mur texturé, niche encastrée', es: 'Muro texturado, nicho empotrado' },
    alt: {
      en: 'A textured plaster wall with a recessed niche and a cove of hidden lighting above it.',
      fr: 'Mur en enduit texturé avec une niche encastrée et une gorge lumineuse dissimulée au-dessus.',
      es: 'Muro de estuco texturado con un nicho empotrado y una moldura de iluminación oculta encima.',
    },
  },
  {
    id: 'arched-shelving',
    video: '/videos/reel-03.mp4',
    poster: '/src/assets/reels/reel-03.jpg',
    title: { en: 'Arched shelving alcove', fr: 'Alcôve voûtée et tablettes', es: 'Nicho abovedado con estantes' },
    alt: {
      en: 'An arched alcove finished in plaster, with oak shelves lit by concealed strip lighting.',
      fr: 'Alcôve voûtée en enduit minéral, avec des tablettes en chêne éclairées par des rubans dissimulés.',
      es: 'Un nicho abovedado acabado en estuco mineral, con estantes de roble iluminados por tiras de luz ocultas.',
    },
  },
  {
    id: 'seamless-bathroom',
    video: '/videos/reel-04.mp4',
    poster: '/src/assets/reels/reel-04.jpg',
    title: { en: 'Seamless bathroom wall', fr: 'Mur de salle de bain sans joint', es: 'Muro de baño sin juntas' },
    alt: {
      en: 'Camera panning across a bathroom finished wall to wall in warm sand mineral coating, with no seam anywhere on the surface.',
      fr: "Panoramique sur une salle de bain finie de mur à mur en enduit minéral sable chaud, sans le moindre joint en surface.",
      es: 'Panorámica sobre un baño acabado de muro a muro en revoco mineral arena cálida, sin ninguna junta en la superficie.',
    },
  },
];
