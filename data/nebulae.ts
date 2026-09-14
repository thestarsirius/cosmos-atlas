import { CosmicEntry } from "./types";

export const nebulae: CosmicEntry[] = [
  {
    id: "orion-nebula", slug: "orion-nebula", name: "Orion Nebula", category: "nebula",
    tagline: "A stellar nursery visible to the naked eye",
    summary: "The Orion Nebula (M42) is one of the brightest nebulae in the sky and a region of active star formation.",
    deepDive: "Within its glowing clouds of gas and dust, radiation from young, hot stars ionizes the surrounding hydrogen, making it glow — a visible snapshot of stars being born.",
    stats: [
      { label: "Distance", value: "≈ 1,344", unit: "light-years", approximate: true },
      { label: "Type", value: "Emission nebula", unit: "" }
    ],
    facts: ["The Orion Nebula is visible to the naked eye as a fuzzy patch in Orion's 'sword.'"],
    colorHex: "#FF7A9C",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "crab-nebula", slug: "crab-nebula", name: "Crab Nebula", category: "nebula",
    tagline: "The remnant of a supernova recorded by ancient astronomers",
    summary: "The Crab Nebula (M1) is the expanding remains of a massive star that exploded as a supernova, observed and recorded by Chinese astronomers in 1054 CE.",
    deepDive: "At its center lies the Crab Pulsar, a rapidly rotating neutron star left behind by the explosion, spinning roughly 30 times per second.",
    stats: [
      { label: "Distance", value: "≈ 6,500", unit: "light-years", approximate: true },
      { label: "Type", value: "Supernova remnant", unit: "" }
    ],
    facts: ["The supernova that created the Crab Nebula was recorded by astronomers in 1054 CE and was visible in daylight."],
    colorHex: "#7ADFFF",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "helix-nebula", slug: "helix-nebula", name: "Helix Nebula", category: "nebula",
    tagline: "A dying sun-like star's final glow",
    summary: "The Helix Nebula is a planetary nebula — the outer layers shed by a star like the Sun as it neared the end of its life.",
    deepDive: "Despite the name, planetary nebulae have nothing to do with planets; the term comes from their planet-like round appearance in early telescopes. The Helix offers a preview of what will eventually happen to the Sun.",
    stats: [
      { label: "Distance", value: "≈ 650", unit: "light-years", approximate: true },
      { label: "Type", value: "Planetary nebula", unit: "" }
    ],
    facts: ["The Helix Nebula shows roughly what our own Sun's remains may look like billions of years from now."],
    colorHex: "#A0E8D0",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  }
];

export function getNebulaBySlug(slug: string) {
  return nebulae.find((n) => n.slug === slug);
}
