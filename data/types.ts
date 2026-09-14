// Shared shape for every explorable object (planets, stars, galaxies,
// nebulae, moons, black holes, asteroids, comets). Explore/search/filter,
// the Cosmic Discovery feature, and ObjectCard all operate on this type so
// adding a category later means adding a data file, not new UI.

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
  label: string;
  value: string;
  unit: string;
  approximate?: boolean;
}

export interface CosmicEntry {
  id: string;
  slug: string;
  name: string;
  category: ObjectCategory;
  tagline: string;
  summary: string;
  deepDive: string;
  stats: Stat[];
  facts: string[];
  colorHex: string; // used for canvas/CSS rendering (orbit dot, star map point, glow)
  sourceName: string;
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
