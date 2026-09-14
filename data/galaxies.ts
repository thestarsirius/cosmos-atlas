import { CosmicEntry } from "./types";

export const galaxies: CosmicEntry[] = [
  {
    id: "milky-way", slug: "milky-way", name: "Milky Way", category: "galaxy",
    tagline: "Our home galaxy",
    summary: "The Milky Way is a barred spiral galaxy containing our Sun and hundreds of billions of other stars.",
    deepDive: "We view the Milky Way from within it, which is why it appears as a hazy band across the night sky rather than a spiral shape we can see face-on. At its center lies Sagittarius A*, a supermassive black hole.",
    stats: [
      { label: "Type", value: "Barred spiral", unit: "" },
      { label: "Diameter", value: "≈ 100,000", unit: "light-years", approximate: true },
      { label: "Estimated stars", value: "100–400", unit: "billion", approximate: true }
    ],
    facts: ["The Milky Way and the Andromeda Galaxy are on a slow collision course, expected in several billion years."],
    colorHex: "#8B72E8",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "andromeda", slug: "andromeda", name: "Andromeda Galaxy", category: "galaxy",
    tagline: "Our nearest large galactic neighbor",
    summary: "Andromeda (M31) is the closest large spiral galaxy to the Milky Way and is visible to the naked eye under dark skies.",
    deepDive: "Andromeda is approaching the Milky Way at roughly 110 km/s, and the two galaxies are expected to merge in the distant future — an event sometimes nicknamed 'Milkomeda.'",
    stats: [
      { label: "Distance", value: "≈ 2.5 million", unit: "light-years", approximate: true },
      { label: "Type", value: "Spiral", unit: "" }
    ],
    facts: ["Andromeda is the most distant object easily visible to the naked eye."],
    colorHex: "#6FA8FF",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "whirlpool", slug: "whirlpool", name: "Whirlpool Galaxy", category: "galaxy",
    tagline: "A textbook spiral, seen face-on",
    summary: "The Whirlpool Galaxy (M51) is a classic grand-design spiral galaxy, famous for its clearly defined arms and a smaller companion galaxy interacting with it.",
    deepDive: "The gravitational interaction with its smaller companion, NGC 5195, is thought to have helped trigger the star formation visible along the Whirlpool's arms.",
    stats: [
      { label: "Distance", value: "≈ 23 million", unit: "light-years", approximate: true },
      { label: "Type", value: "Spiral", unit: "" }
    ],
    facts: ["Its well-defined spiral arms make it one of the most-imaged galaxies by amateur astronomers."],
    colorHex: "#B9A6FF",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  }
];

export function getGalaxyBySlug(slug: string) {
  return galaxies.find((g) => g.slug === slug);
}
