import { CosmicEntry } from "./types";

export const blackHoles: CosmicEntry[] = [
  {
    id: "sagittarius-a-star", slug: "sagittarius-a-star", name: "Sagittarius A*", category: "black-hole",
    tagline: "The supermassive black hole at our galaxy's center",
    summary: "Sagittarius A* is the supermassive black hole at the center of the Milky Way, imaged directly for the first time by the Event Horizon Telescope in 2022.",
    deepDive: "Its presence was inferred for decades by tracking the orbits of stars whirling around an invisible, immensely massive object — before the Event Horizon Telescope collaboration produced a direct image of its shadow against surrounding glowing gas.",
    stats: [
      { label: "Mass", value: "≈ 4.3 million", unit: "solar masses", approximate: true },
      { label: "Distance", value: "≈ 26,000", unit: "light-years", approximate: true }
    ],
    facts: ["Astronomers inferred Sagittarius A* by tracking stars orbiting an invisible point for years before it was ever imaged."],
    colorHex: "#1A1030",
    sourceName: "Event Horizon Telescope Collaboration", sourceUrl: "https://eventhorizontelescope.org/"
  },
  {
    id: "m87-star", slug: "m87-star", name: "M87*", category: "black-hole",
    tagline: "The first black hole ever directly imaged",
    summary: "M87* is the supermassive black hole at the center of the galaxy Messier 87, and the subject of the first-ever direct image of a black hole, released in 2019.",
    deepDive: "The image, produced by the Event Horizon Telescope — a network of radio observatories acting as one Earth-sized instrument — showed a glowing ring of superheated gas around a dark central shadow, matching predictions from general relativity.",
    stats: [
      { label: "Mass", value: "≈ 6.5 billion", unit: "solar masses", approximate: true },
      { label: "Distance", value: "≈ 55 million", unit: "light-years", approximate: true }
    ],
    facts: ["The 2019 image of M87* was assembled from data collected by telescopes on multiple continents, linked to act as one giant radio dish."],
    colorHex: "#2A1840",
    sourceName: "Event Horizon Telescope Collaboration", sourceUrl: "https://eventhorizontelescope.org/"
  }
];

export function getBlackHoleBySlug(slug: string) {
  return blackHoles.find((b) => b.slug === slug);
}
