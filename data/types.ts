import { Bilingual } from "./i18n";

// Shared shape for every explorable object (planets, stars, galaxies,
// nebulae, moons, black holes, asteroids, comets). Every visible string is
// bilingual so Explore/search/filter, Cosmic Discovery, and detail pages all
// render correctly in both languages from the same data.

export type ObjectCategory =
  | "planet"
  | "star"
  | "galaxy"
  | "nebula"
  | "moon"
  | "black-hole"
  | "asteroid"
  | "comet";

export interface Stat {
  label: Bilingual;
  value: string; // digits are shared across languages; only labels/units translate
  unit: Bilingual;
  approximate?: boolean;
}

export interface CosmicEntry {
  id: string;
  slug: string;
  name: Bilingual;
  category: ObjectCategory;
  tagline: Bilingual;
  summary: Bilingual;
  deepDive: Bilingual;
  stats: Stat[];
  facts: Bilingual[];
  colorHex: string; // used for canvas/CSS rendering (orbit dot, star map point, glow)
  sourceName: string; // organization names (NASA, SIMBAD...) are kept as-is in both languages
  sourceUrl: string;
  mapX?: number; // 0–100, illustrative position for the Star Map canvas
  mapY?: number; // 0–100, illustrative position for the Star Map canvas
}

// Extra fields only the Solar System orbit visualization needs.
export interface PlanetEntry extends CosmicEntry {
  category: "planet";
  orbitRadiusPx: number; // relative radius in the demo orbit view, not to scale
  orbitPeriodSec: number; // animation duration — relative, not physically scaled
  relativeSize: number; // px radius of the planet dot in the orbit view
}
