import { CosmicEntry, ObjectCategory } from "./types";
import { planets } from "./planets";
import { stars } from "./stars";
import { galaxies } from "./galaxies";
import { nebulae } from "./nebulae";
import { moons } from "./moons";
import { blackHoles } from "./blackholes";
import { asteroids } from "./asteroids";
import { comets } from "./comets";

// Single index every explore/search/filter/discovery feature reads from.
export const allEntries: CosmicEntry[] = [
  ...planets,
  ...stars,
  ...galaxies,
  ...nebulae,
  ...moons,
  ...blackHoles,
  ...asteroids,
  ...comets
];

// Maps each category to the UI dictionary key holding its bilingual label
// (see data/i18n.ts) — components call t(categoryLabelKey[cat]).
export const categoryLabelKey: Record<ObjectCategory, "catPlanet" | "catStar" | "catGalaxy" | "catNebula" | "catMoon" | "catBlackHole" | "catAsteroid" | "catComet"> = {
  planet: "catPlanet",
  star: "catStar",
  galaxy: "catGalaxy",
  nebula: "catNebula",
  moon: "catMoon",
  "black-hole": "catBlackHole",
  asteroid: "catAsteroid",
  comet: "catComet"
};

export const categoryRoute: Record<ObjectCategory, string> = {
  planet: "solar-system",
  star: "explore/star",
  galaxy: "explore/galaxy",
  nebula: "explore/nebula",
  moon: "explore/moon",
  "black-hole": "explore/black-hole",
  asteroid: "explore/asteroid",
  comet: "explore/comet"
};

export function findEntryBySlug(slug: string) {
  return allEntries.find((e) => e.slug === slug);
}
