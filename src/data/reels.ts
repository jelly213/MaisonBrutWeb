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
    id: 'terracotta-entry',
    video: '/videos/reel-01.mp4',
    poster: '/src/assets/reels/reel-01.jpg',
    title: { en: 'Terracotta entryway', fr: 'Entrée terracotta', es: 'Entrada terracota' },
    alt: {
      en: 'Camera moving through an entryway finished in terracotta lime, the colour wrapping the wall and the closet partition.',
      fr: "Travelling dans une entrée finie à la chaux terracotta, la couleur enveloppant le mur et la cloison du placard.",
      es: 'Cámara recorriendo una entrada acabada a la cal en terracota, el color envolviendo el muro y el tabique del clóset.',
    },
  },
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
];
