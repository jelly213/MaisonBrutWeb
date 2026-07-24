# Maison Brut

Bilingual (EN/FR) static site for Maison Brut — microcement, Venetian plaster, limewash and custom furniture, Montreal & Laval.

Astro 7 · Tailwind 4 · GSAP (ScrollTrigger) · Lenis.

## Commands

```bash
npm run dev      # local dev server
npm run build    # static build into dist/
npm run preview  # serve the built site
npx astro check  # type check
```

## Where things live

| Path | What |
|---|---|
| `src/data/` | All content: services, projects, FAQ, studio, contact details |
| `src/i18n/ui.ts` | Interface strings, both languages |
| `src/i18n/routes.ts` | Every route in both languages |
| `src/components/pages/` | One component per page, shared by the EN and FR routes |
| `src/components/home/` | Home page sections, in scroll order |
| `src/scripts/motion.ts` | Every animation, in one file |
| `src/pages/` | Thin route files only — no markup |

## Routine tasks

**Add a project.** Append one object to `src/data/projects.ts`. Set `featured: true` to put it on the home page rail (keep that to four).

**Add a service.** Append to `src/data/services.ts`. Both `/services/<en-slug>` and `/fr/services/<fr-slug>` are generated automatically.

**Change a label or heading.** `src/i18n/ui.ts`, both languages.

## Photos

To place a photo:

1. Drop the file in `src/assets/work/…`
2. Point the matching `image:` field in `src/data/` at it, using the full path
   from the project root: `/src/assets/work/microcement-kitchen.jpg`

Anything under `src/assets` is optimised at build time — the build emits WebP at
five widths plus a `srcset`, so a phone downloads roughly 30 KB where the source
file is 500 KB. A path under `public/` still works but is served untouched.

Image slots with an empty `image:` render a plaster-toned block showing their alt
text, so unfilled positions stay visible. Alt text is already written, in both
languages, beside every image path.

Three real project photos are in place. The rest of `projects.ts` is waiting on
the client — and so are the `location` and `year` of the three real ones, which
are deliberately left out rather than guessed.

## Contact form

The form does not send anything by itself. On submit it validates the fields,
composes the message and opens it in the visitor's own mail app, addressed to
`info.maisonbrut@gmail.com` — the visitor presses send.

No form service, no API key, no server, nothing to renew or pay for. The
trade-off is that a visitor who abandons the mail app sends nothing, and the
studio has no record of the attempt. See `src/components/forms/QuoteForm.astro`.

To change the destination address, edit `email` in `src/data/site.ts` — the
form, the footer and the structured data all read from it.

## Deployment

Static output. Netlify or Cloudflare Pages:

- Build command: `npm run build`
- Publish directory: `dist`

Then update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`
to the real domain.

## Open items

- Real photos and logo
- Domain name
- Client review of the French copy
