# Cosmos Atlas

An interactive atlas of the universe. Explore the universe — one world at a time.

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
