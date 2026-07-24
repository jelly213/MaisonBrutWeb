export interface Partner {
  name: string;
  logo: string;
  /** Add the partner's site when the client confirms it — none are guessed. */
  url?: string;
}

/**
 * Add a partner by dropping the logo in src/assets/partners/ and appending
 * one object here. Logos are shown desaturated and blended into the page, so
 * a white-background file works as well as a transparent one.
 */
export const partners: Partner[] = [
  { name: 'Venilux Québec', logo: '/src/assets/partners/venilux.png' },
  { name: 'Brut', logo: '/src/assets/partners/brut.png' },
  { name: 'Or Gueoula Construction', logo: '/src/assets/partners/or-gueoula.png' },
  { name: 'Playground', logo: '/src/assets/partners/playground.png' },
];
