# Maison Brut — Spécification du site

**Date :** 2026-07-24
**Client :** Maison Brut — finitions décoratives et mobilier sur mesure
**Marché :** Montréal / Laval, Québec

---

## 1. Contexte et objectif

Maison Brut applique des finitions décoratives haut de gamme (microciment, stuc vénitien, badigeon de chaux) et fabrique du mobilier sur mesure. Le métier se vend par l'image : la texture d'un mur, la lumière rasante sur une surface, la qualité d'une finition à la main.

Le site poursuit deux objectifs indissociables :

1. **Générer des demandes de devis** — chaque page conduit à un formulaire de contact qualifié.
2. **Établir la crédibilité premium** — le site doit donner l'impression d'un atelier qui travaille pour des projets sérieux.

**Aucun prix n'est affiché.** Toutes les prestations étant sur mesure, le prix se discute après compréhension du projet.

## 2. Contraintes

| Contrainte | Décision |
|---|---|
| Contenu | Logo et photos fournis par le client |
| Mise à jour | Aucun CMS — le développeur gère tout le contenu |
| Prix | Jamais affichés, nulle part |
| Langue | Bilingue anglais / français dès la v1 |
| Réception des demandes | Envoi réel par email vers `info.maisonbrut@gmail.com` |
| Mobile | Priorité absolue — voir section 6 |

### Réserve juridique — obligation linguistique au Québec

La Charte de la langue française (renforcée par la Loi 96, en vigueur depuis juin 2025) impose qu'une entreprise établie au Québec diffuse son contenu commercial en français, dans une version au moins équivalente aux autres langues. Un site exclusivement anglophone expose Maison Brut à une plainte auprès de l'OQLF.

**Décision retenue :** le site est livré bilingue dès la v1. L'anglais occupe la racine (`/`), le français vit sous `/fr/` avec des adresses françaises (`/fr/realisations`, `/fr/services/beton-cire`). Chaque page déclare son équivalent dans l'autre langue via `hreflang`, et le sélecteur de langue mène à la page correspondante plutôt qu'à l'accueil. L'obligation légale est donc satisfaite, et le référencement français est traité à parité.

**Reste à faire :** les textes français ont été rédigés par le développeur et doivent être relus par le client avant la mise en ligne.

## 3. Base technique

| Couche | Choix | Raison |
|---|---|---|
| Framework | **Astro 7** | Génère du HTML statique, zéro JavaScript par défaut, optimisation d'images intégrée |
| Styles | **Tailwind CSS 4** | Cohérence du design, pas de fichier CSS qui gonfle |
| Animation | **GSAP + ScrollTrigger** | Référence du scroll narratif ; gratuit depuis le rachat par Webflow |
| Scroll fluide | **Lenis** | Inertie douce, signature des sites premium — desktop uniquement |
| Transitions de page | **View Transitions API** | Native au navigateur, aucune bibliothèque supplémentaire |
| Formulaire | **Web3Forms** | Envoi réel par email, gratuit jusqu'à 250 demandes/mois, sans compte à gérer |
| Hébergement | **Netlify** ou **Cloudflare Pages** | Gratuit, HTTPS et domaine personnalisé inclus |

## 4. Structure des fichiers

```
src/
  components/
    layout/      Header, Footer
    home/        Hero, Intro, ServicesGrid, WorkRail, Matter, Process, FinalCta
    pages/       HomePage, ServicesIndex, ServicePage, WorkPage,
                 StudioPage, FaqPage, ContactPage
    ui/          Photo, ServiceCard, ProjectCard, Button
    forms/       QuoteForm
  layouts/
    BaseLayout.astro     head, méta, hreflang, JSON-LD, Header/Footer
  i18n/
    config.ts      langues, helpers de traduction
    ui.ts          chaînes d'interface, EN + FR
    routes.ts      toutes les routes dans les deux langues
  data/
    services.ts    les 4 prestations : slug localisé, textes, usages, arguments
    projects.ts    réalisations : titre, service, lieu, année, image, alt
    faq.ts         questions/réponses
    studio.ts      texte de la page atelier
    site.ts        coordonnées, réseaux sociaux, zone desservie
  scripts/
    motion.ts      toutes les animations GSAP + Lenis
  styles/
    global.css     jetons de design, styles de base
  pages/           fichiers de route uniquement, sans balisage
    index.astro · services/ · work.astro · studio.astro · faq.astro · contact.astro
    fr/index.astro · fr/services/ · fr/realisations.astro · fr/atelier.astro
    fr/faq.astro · fr/contact.astro
public/
  images/          photos du client
```

**Principe de séparation :** les composants ne contiennent aucun texte ni aucune donnée, et les fichiers de `pages/` ne contiennent aucun balisage — ce sont des enveloppes de trois lignes qui passent la langue à un composant de page partagé. Une page existe donc en un seul exemplaire pour les deux langues.

Ajouter un projet = ajouter un objet dans `projects.ts`. Ajouter un service = ajouter un objet dans `services.ts` ; les pages anglaise et française se génèrent seules.

## 5. Pages

### 5.1 Accueil — déroulé validé

| # | Section | Contenu | Animation |
|---|---|---|---|
| 01 | Hero | Image plein écran, titre, CTA « Request a quote » | Titre monté mot par mot ; zoom arrière lent puis parallaxe |
| 02 | Accroche | 2–3 lignes de positionnement | Révélation ligne par ligne, opacité 30 % → 100 % |
| 03 | Services | Les 4 prestations, photo de détail + lien | Apparition en cascade ; au survol, image en couleur + zoom |
| 04 | Réalisations | 3–4 projets phares + lien galerie | **Défilement horizontal épinglé** (desktop) |
| 05 | Matière | Image plein écran en gros plan sur la texture | Image épinglée qui s'élargit du centre |
| 06 | Processus | Consultation → Échantillon → Pose | Ligne verticale tracée au scroll, étapes allumées une à une |
| 07 | Conversion | Bloc sombre plein écran, CTA vers contact | Le fond se creuse de la pierre vers l'encre à l'approche |

**Témoignages : écartés.** Le client n'a pas d'avis exploitables ; aucun composant n'a été écrit.

**Section 07 :** le bloc ne part jamais d'un fond clair. Le texte doit rester lisible à chaque instant de la transition, et sans JavaScript le bloc est simplement sombre.

### 5.2 Index des services (`/services`, `/fr/services`)

Ajoutée en cours de route : la navigation avait besoin d'une destination réelle pour « Services », et la page sert de point d'entrée au référencement sur le terme générique.

### 5.3 Pages service (× 4)

Gabarit unique alimenté par `services.ts` : image d'en-tête, description longue, cas d'usage (salles de bain, sols, murs…), galerie de réalisations filtrée sur ce service, section « pourquoi ce matériau », appel au devis.

Prestations : Microcement · Venetian Plaster · Limewash · Custom-Made Furniture.

### 5.4 Galerie (`/work`)

Grille en maçonnerie, filtrable par prestation. Ouverture des photos en plein écran (lightbox) plutôt qu'une page par projet : les photos sont le contenu, une page détail n'apporterait rien tant que le client n'a pas de textes de projet. À reconsidérer si le référencement l'exige plus tard.

### 5.5 Studio (`/studio`)

Histoire de la marque, savoir-faire, l'artisan au travail. Renforce la confiance.

### 5.6 FAQ (`/faq`)

Accordéon. Questions attendues : durabilité, entretien, délais, zones desservies, préparation du support, différence entre les finitions. **Aucune question sur les prix.** Balisage `FAQPage` pour le référencement.

### 5.7 Contact (`/contact`)

Formulaire de devis, coordonnées, zone desservie (Montréal, Laval et Rive-Nord), lien Instagram.

## 6. Stratégie mobile

Le mobile n'est pas une adaptation du desktop : c'est le cas d'usage principal, la majorité du trafic d'un artisan venant d'Instagram.

**Défilement horizontal (section 04).** Actif uniquement au-dessus de 1024 px. En dessous, le même balisage devient un carrousel à défilement natif avec accroche par élément (`overflow-x: auto` + `scroll-snap-type: x mandatory`). Le visiteur balaie du doigt et le système gère l'inertie — plus fluide que toute simulation. Le basculement passe par `gsap.matchMedia()`, sans duplication de code.

**Scroll fluide.** Lenis est désactivé sous 1024 px. Les navigateurs mobiles ont déjà leur propre inertie ; superposer les deux produit une sensation de flottement.

**Animations.** Conservées partout, mais distances et durées réduites sur petit écran. Aucune animation déclenchée au survol n'est essentielle à la compréhension.

**Accessibilité.** `prefers-reduced-motion` désactive toutes les révélations et le scroll fluide. Zones tactiles de 44 px minimum. Contraste conforme AA.

## 7. Performance

Principal risque : le poids des photos.

- Astro convertit chaque image placée dans `src/assets/` en WebP, génère cinq largeurs et sert la bonne selon l'écran. Mesuré sur les trois premières photos du client : 523 Ko à la source, 26 Ko servis sur mobile. Les emplacements encore vides affichent un bloc neutre portant leur texte alternatif.
- Seule l'image du hero est prioritaire ; le reste se charge à l'approche de l'écran
- GSAP et Lenis chargés uniquement là où ils servent
- Polices en `woff2`, auto-hébergées, préchargées

**Objectifs mesurés avant livraison :**

| Indicateur | Cible |
|---|---|
| LCP (4G, mobile) | < 2,5 s |
| CLS | < 0,1 |
| Lighthouse Performance (mobile) | ≥ 90 |
| Lighthouse Accessibilité | ≥ 95 |
| Fluidité des animations | 60 ips sur mobile milieu de gamme |

## 8. Formulaire de devis

**Champs :** nom · email · téléphone · prestation souhaitée (liste) · lieu du chantier · surface approximative · message.

**Envoi :** Web3Forms vers `info.maisonbrut@gmail.com`. Le visiteur reste sur la page ; une confirmation s'affiche en place.

**Anti-spam :** champ piège invisible + protection intégrée de Web3Forms.

**Validation :** côté client avant envoi, messages d'erreur explicites, état de chargement sur le bouton.

**Hors périmètre v1 :** envoi de photos par le visiteur (non couvert par les offres gratuites). Un bouton WhatsApp pourra couvrir ce besoin ultérieurement.

## 9. Référencement local

Le référencement local est le principal levier d'acquisition sur ce métier.

- Balisage `LocalBusiness` avec zone desservie Montréal / Laval
- Balisage `FAQPage` sur la page FAQ
- Titres et descriptions uniques par page, orientés « ville + prestation »
- `sitemap.xml` et `robots.txt` générés au build
- Images d'aperçu pour le partage sur les réseaux sociaux
- Texte alternatif descriptif sur chaque photo

## 10. Déploiement

Hébergement sur Netlify ou Cloudflare Pages, HTTPS automatique, domaine personnalisé à brancher.

## 11. Hors périmètre

- Vente en ligne du mobilier
- CMS ou espace d'administration
- Pages détail par projet
- Témoignages clients
- Blog
- Envoi de photos via le formulaire

## 12. Points ouverts

| Sujet | Statut |
|---|---|
| Nom de domaine | À confirmer |
| Photos du client | 3 intégrées (banc suspendu, cuisine, cage d'escalier) ; les autres emplacements attendent |
| Lieu et année des 3 projets réels | Non renseignés volontairement — à confirmer par le client |
| Logo du client | À intégrer — le nom est pour l'instant en texte |
| Clé Web3Forms | À créer pour `info.maisonbrut@gmail.com` |
| Textes français | Rédigés, validation client requise |
| Textes anglais (Studio, FAQ) | Rédigés, validation client requise |

---

## Critères d'acceptation

1. Les 20 pages (10 par langue) sont accessibles et sans lien mort
2. Le formulaire délivre réellement un email à `info.maisonbrut@gmail.com`
3. Aucun prix n'apparaît nulle part sur le site
4. Le défilement horizontal fonctionne sur desktop ; le carrousel tactile fonctionne sur mobile
5. Les seuils de performance et d'accessibilité du § 7 sont atteints et mesurés
6. `prefers-reduced-motion` neutralise les animations
7. Le site s'affiche correctement de 320 px à 2560 px de large
8. Ajouter un projet ne demande qu'une modification de `projects.ts`
