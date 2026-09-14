import { CosmicEntry } from "./types";

export const moons: CosmicEntry[] = [
  {
    id: "moon", slug: "moon", name: "The Moon", category: "moon",
    tagline: "Earth's only natural satellite",
    summary: "The Moon is the fifth-largest moon in the solar system and the only world beyond Earth that humans have physically visited.",
    deepDive: "The leading scientific model holds that the Moon formed from debris after a Mars-sized body collided with the early Earth. Its gravity drives most of Earth's ocean tides.",
    stats: [
      { label: "Diameter", value: "3,474", unit: "km", approximate: true },
      { label: "Distance from Earth", value: "≈ 384,400", unit: "km", approximate: true },
      { label: "Orbital period", value: "27.3", unit: "days" }
    ],
    facts: ["The same side of the Moon always faces Earth because its rotation is tidally locked to its orbit."],
    colorHex: "#D9D9D9",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "europa", slug: "europa", name: "Europa", category: "moon",
    tagline: "An icy moon with a hidden ocean",
    summary: "Europa, one of Jupiter's large moons, has a smooth icy crust that likely covers a liquid water ocean — making it a leading target in the search for life beyond Earth.",
    deepDive: "Tidal flexing from Jupiter's gravity is thought to keep Europa's subsurface ocean liquid despite the moon's distance from the Sun.",
    stats: [
      { label: "Diameter", value: "3,122", unit: "km", approximate: true },
      { label: "Orbits", value: "Jupiter", unit: "" }
    ],
    facts: ["Europa may hold more liquid water than all of Earth's oceans combined, beneath its icy shell."],
    colorHex: "#E8DCC8",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "titan", slug: "titan", name: "Titan", category: "moon",
    tagline: "Saturn's moon with lakes of liquid methane",
    summary: "Titan is Saturn's largest moon and the only moon in the solar system known to have a substantial atmosphere.",
    deepDive: "Titan's surface hosts lakes and rivers — not of water, but of liquid methane and ethane, given the extreme cold. It's one of the most Earth-like worlds in terms of active surface processes.",
    stats: [
      { label: "Diameter", value: "5,150", unit: "km", approximate: true },
      { label: "Orbits", value: "Saturn", unit: "" }
    ],
    facts: ["Titan is the only moon known to have a dense atmosphere and stable liquid on its surface."],
    colorHex: "#E8B563",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  }
];

export function getMoonBySlug(slug: string) {
  return moons.find((m) => m.slug === slug);
}
