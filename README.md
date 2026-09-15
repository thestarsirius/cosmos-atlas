# Cosmos Atlas

An interactive, **bilingual (Arabic/English)** atlas of the universe. Explore the universe — one world at a time. / استكشف الكون، عالمًا تلو الآخر.

## Bilingual architecture

- **`data/i18n.ts`** — every static UI string (nav, buttons, labels, footer, empty states) lives in one `UI.en` / `UI.ar` dictionary. Components call `t('key')`.
- **`lib/LanguageContext.tsx`** — a client React context (`LanguageProvider` / `useLanguage()`) holding the active language, persisted to `localStorage`, and applying `lang`/`dir` to `<html>` after mount (so the statically-exported first paint is always English/LTR, then the visitor's saved or browser-detected language applies instantly — no flash of wrong layout, no hydration mismatch).
- **Data files** (`data/planets.ts`, `stars.ts`, `galaxies.ts`, `nebulae.ts`, `moons.ts`, `blackholes.ts`, `asteroids.ts`, `comets.ts`, `glossary.ts`, `facts.ts`) — every visible string (`name`, `tagline`, `summary`, `deepDive`, `stats[].label/unit`, `facts[]`) is a `{ en, ar }` pair (`Bilingual` type), not a plain string. Nothing is English-only.
- **RTL/LTR** — `<html dir="rtl">` for Arabic flips layout automatically via Tailwind's logical-property utilities (`ms-*`, `ps-*`, `start-*`, `end-*`, `border-s`) used throughout instead of hardcoded `left`/`right`/`ml`/`mr`. Arabic renders in Noto Kufi Arabic (headings) / IBM Plex Sans Arabic (body); English in Space Grotesk / Inter.
- **Language switcher** — `AR | EN` pill in the navbar (desktop and mobile), calls `setLang()`, which updates state, `localStorage`, and `<html lang/dir>` immediately.
- **Developer credit** — bottom of the footer, centered, small: "Developed by Shahad Ghazwani" (EN) / "تطوير: شهد غزواني" (AR), switching automatically with `t('devCredit')`.

### Next.js 15 + Client Components + bilingual data

Since the active language is a `localStorage`-backed client-only value, any page that renders translatable content is a Client Component (`"use client"`) using `useLanguage()`. This is incompatible with `generateStaticParams`/`generateMetadata`, which must run in a Server Component. Dynamic routes are therefore split in two:

```
app/solar-system/[slug]/page.tsx        ← Server Component: generateStaticParams, generateMetadata, awaits the params Promise (Next.js 15), renders...
app/solar-system/[slug]/PlanetClient.tsx ← Client Component: useLanguage(), renders the bilingual UI
```

The same split is used for `app/explore/[category]/[slug]/`. Both server `page.tsx` files type `params` as `Promise<{...}>` and `await` it — the Next.js 15 API this project was specifically built to satisfy.

## What's here

A from-scratch rebuild focused on the experience itself rather than a navbar-and-cards info site:

- **Cinematic hero** with a canvas starfield (three parallax layers, twinkle, occasional shooting stars,
  mouse-parallax) and a staged entrance animation.
- **Interactive Solar System** — the Sun and eight planets on real (CSS-animated) orbits, with drag-to-pan,
  zoom controls, and click-through to a detail page for each planet.
- **Star Map** — click through notable real stars (Sirius, Vega, Polaris, Betelgeuse...) for their stats.
- **Cosmic Scale** — a slider moving from a human being up to the observable universe.
- **Cosmic Timeline** — Big Bang to today, with each entry labeled as observed, modeled, or an open question.
- **Explore** — search and filter across every category (planets, stars, galaxies, nebulae, moons, black
  holes, asteroids, comets) from one index.
- **Cosmic Discovery** — a daily-changing featured object, plus a "Discover another" shuffle.
- **Did You Know** — a rotating pool of sourced space facts.
- **Glossary** — searchable core astronomy terms.
- No external images: all visuals are CSS/canvas-generated, per the brief, so there's nothing to license or
  break at build time.

## Tech stack

- **Next.js 15 (App Router) + React 19 + TypeScript**
- **Tailwind CSS** for the design system (tokens in `tailwind.config.ts`)
- **Framer Motion** for the hero entrance, discovery-card transitions, and cosmic-scale transitions
- **`output: "export"`** in `next.config.js` — the whole site builds to static HTML/CSS/JS with no server
  runtime required, which is what makes free Cloudflare Pages hosting a two-click process (see
  `DEPLOYMENT-CLOUDFLARE.md`)

## Project structure

```
/app
  page.tsx                        Homepage (hero, discovery, quick launch, did-you-know)
  layout.tsx, globals.css         Root shell, fonts, starfield mount
  /solar-system                   Orbit view hub
  /solar-system/[slug]            Planet detail (Next.js 15 async params)
  /explore                        Search + category filter hub
  /explore/[category]/[slug]      Generic detail page for every non-planet category
  /star-map, /cosmic-scale, /timeline, /glossary, /about, /discover
  sitemap.ts, robots.ts
/components                       Navbar, Footer, Starfield, ObjectCard, EntryDetail,
                                   AnimatedStat, SolarSystemOrbit, StarMap, CosmicScale,
                                   DiscoveryCard, DidYouKnow, ExploreClient
/data                             types.ts + one file per category + index.ts aggregator
/lib                               random.ts (daily/random discovery picks)
```

## Data model

Every explorable object — planet, star, galaxy, nebula, moon, black hole, asteroid, comet — implements the
same `CosmicEntry` interface (`data/types.ts`): name, tagline, summary, deep-dive, stats with units, facts,
a source, and a color used for its glow/dot everywhere it's rendered. `data/index.ts` merges every category
file into one `allEntries` array that Explore, Star Map, and Cosmic Discovery all read from — adding a new
object is adding one entry to a data file, not touching any component.

Planets carry a few extra fields (`orbitRadiusPx`, `orbitPeriodSec`, `relativeSize`) used only by the orbit
visualization; those are explicitly relative/illustrative, not physically scaled — the real, sourced numbers
live in each planet's `stats`.

## Next.js 15 correctness

This project targets Next.js 15's breaking change to dynamic route params. Both dynamic routes
(`/solar-system/[slug]` and `/explore/[category]/[slug]`) type `params` as a `Promise` and `await` it in both
the page component and `generateMetadata`:

```ts
export default async function PlanetPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // ...
}
```

`generateStaticParams` is unaffected by this change and returns plain objects as before.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

To produce the static site that gets deployed:

```bash
npm run build
# output lands in /out
```

See `DEPLOYMENT-CLOUDFLARE.md` for the full, beginner-friendly path from this folder to a live, free
Cloudflare Pages URL.

## Honest note on verification

This codebase was written and hand-checked (import consistency, brace balance, Next.js 15 API usage) in an
environment without internet access, so `npm install` / `npm run build` could not be executed here. Every
file was written to be syntactically and structurally correct, but your own `npm run build` is the real
first test. If it surfaces an error, share it and it'll get fixed.

## License

Code: MIT (see `LICENSE`). Scientific figures are sourced from NASA, SIMBAD, and the Event Horizon Telescope
Collaboration — check each source's own terms before reusing their text or imagery directly.

## Disclaimer

Cosmos Atlas is an independent project and is not affiliated with NASA, ESA, or any other space agency.
