import { CosmicEntry } from "./types";
import { planets } from "./planets";
import { stars } from "./stars";
import { galaxies } from "./galaxies";
import { nebulae } from "./nebulae";
import { moons } from "./moons";
import { blackHoles } from "./blackholes";
import { asteroids } from "./asteroids";
import { comets } from "./comets";

// Single index every explore/search/filter/discovery feature reads from.
// Adding a new category file and listing it here is the only wiring needed.
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

export const categoryLabels: Record<CosmicEntry["category"], string> = {
  planet: "Planet",
  star: "Star",
  galaxy: "Galaxy",
  nebula: "Nebula",
  moon: "Moon",
  "black-hole": "Black Hole",
  asteroid: "Asteroid",
  comet: "Comet"
};

export const categoryRoute: Record<CosmicEntry["category"], string> = {
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
