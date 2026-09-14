import { CosmicEntry } from "./types";

export const asteroids: CosmicEntry[] = [
  {
    id: "ceres", slug: "ceres", name: "Ceres", category: "asteroid",
    tagline: "The largest object in the asteroid belt",
    summary: "Ceres is both the largest body in the asteroid belt and classified as a dwarf planet — large enough that its own gravity has pulled it into a round shape.",
    deepDive: "NASA's Dawn mission orbited Ceres starting in 2015, finding bright salt deposits and evidence suggesting a subsurface reservoir of briny water.",
    stats: [
      { label: "Diameter", value: "≈ 940", unit: "km", approximate: true },
      { label: "Location", value: "Main asteroid belt", unit: "" }
    ],
    facts: ["Ceres was the first asteroid discovered, in 1801, and was originally classified as a planet."],
    colorHex: "#A8A296",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "bennu", slug: "bennu", name: "Bennu", category: "asteroid",
    tagline: "A near-Earth asteroid sampled by spacecraft",
    summary: "Bennu is a small, carbon-rich near-Earth asteroid that NASA's OSIRIS-REx mission visited and collected a sample from, returned to Earth in 2023.",
    deepDive: "Bennu's rubble-pile structure surprised mission scientists — it's loosely packed rock and dust rather than a solid body, and its surface proved rockier and rougher than expected from telescope observations.",
    stats: [
      { label: "Diameter", value: "≈ 490", unit: "meters", approximate: true }
    ],
    facts: ["The sample OSIRIS-REx returned from Bennu in 2023 was the largest asteroid sample ever brought to Earth."],
    colorHex: "#4A4640",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  }
];

export function getAsteroidBySlug(slug: string) {
  return asteroids.find((a) => a.slug === slug);
}
