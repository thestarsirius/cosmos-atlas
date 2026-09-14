import { CosmicEntry } from "./types";

export const stars: CosmicEntry[] = [
  {
    id: "sirius", slug: "sirius", name: "Sirius", category: "star",
    tagline: "The brightest star in Earth's night sky",
    summary: "Sirius, in the constellation Canis Major, is the brightest star visible from Earth (excluding the Sun) — partly because it's genuinely luminous, and partly because it's relatively close.",
    deepDive: "Sirius is actually a binary system: Sirius A, a hot white main-sequence star, and Sirius B, a faint white dwarf — the collapsed remnant of a once-larger star.",
    stats: [
      { label: "Distance", value: "≈ 8.6", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "A1V", unit: "" },
      { label: "Apparent magnitude", value: "-1.46", unit: "" }
    ],
    facts: ["Sirius is a two-star system — the brighter Sirius A and a white dwarf companion, Sirius B."],
    colorHex: "#CFE3FF", mapX: 62, mapY: 38,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "vega", slug: "vega", name: "Vega", category: "star",
    tagline: "One of the most studied stars beyond the Sun",
    summary: "Vega, in the constellation Lyra, was one of the first stars ever photographed and one of the first to have its spectrum recorded.",
    deepDive: "Vega spins remarkably fast, which flattens it slightly at the poles. A surrounding disk of dust suggests a system possibly still forming planets.",
    stats: [
      { label: "Distance", value: "≈ 25", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "A0V", unit: "" },
      { label: "Apparent magnitude", value: "0.03", unit: "" }
    ],
    facts: ["Vega served as the zero point for the magnitude scale for much of the 20th century."],
    colorHex: "#E8F0FF", mapX: 22, mapY: 60,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "polaris", slug: "polaris", name: "Polaris", category: "star",
    tagline: "The North Star",
    summary: "Polaris sits almost directly above Earth's north celestial pole, which is why it appears nearly stationary while other stars wheel around it.",
    deepDive: "Polaris is actually a multiple star system, and its primary component is a type of pulsating star called a Cepheid variable — a class of star crucial to how astronomers measure cosmic distances.",
    stats: [
      { label: "Distance", value: "≈ 433", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "F7Ib", unit: "" },
      { label: "Apparent magnitude", value: "1.98", unit: "" }
    ],
    facts: ["Polaris isn't the brightest star in the sky — it's notable for its position, not its brilliance."],
    colorHex: "#FFF6E0", mapX: 50, mapY: 15,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "betelgeuse", slug: "betelgeuse", name: "Betelgeuse", category: "star",
    tagline: "A dying red supergiant nearing the end of its life",
    summary: "Betelgeuse, marking Orion's shoulder, is a red supergiant so large that if placed at the Sun's position, it would extend past the orbit of Jupiter.",
    deepDive: "Betelgeuse is expected to end its life in a supernova — though on an astronomical timescale, which could mean anywhere from now to hundreds of thousands of years from now. Its brightness noticeably dimmed in 2019–2020, likely due to an ejected dust cloud.",
    stats: [
      { label: "Distance", value: "≈ 640", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "M1-2Ia-Iab", unit: "" },
      { label: "Radius", value: "≈ 700×", unit: "the Sun's radius", approximate: true }
    ],
    facts: ["If Betelgeuse replaced the Sun, its surface would reach roughly to Jupiter's orbit."],
    colorHex: "#FF8A5C", mapX: 78, mapY: 55,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "rigel", slug: "rigel", name: "Rigel", category: "star",
    tagline: "A blue supergiant lighting up Orion",
    summary: "Rigel is one of the most luminous stars known, tens of thousands of times brighter than the Sun despite its relative distance.",
    deepDive: "As a blue supergiant, Rigel burns hot and fast; stars this massive live far shorter lives than the Sun and are expected to end in a supernova.",
    stats: [
      { label: "Distance", value: "≈ 860", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "B8Ia", unit: "" }
    ],
    facts: ["Rigel is tens of thousands of times more luminous than the Sun."],
    colorHex: "#B9D4FF", mapX: 85, mapY: 62,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "proxima-centauri", slug: "proxima-centauri", name: "Proxima Centauri", category: "star",
    tagline: "Our nearest stellar neighbor",
    summary: "Proxima Centauri is the closest known star to the Sun, part of the Alpha Centauri triple-star system, and hosts at least one known exoplanet.",
    deepDive: "It's a small, dim red dwarf — invisible to the naked eye despite its proximity. Red dwarfs like Proxima burn fuel so slowly they're expected to remain on the main sequence for trillions of years.",
    stats: [
      { label: "Distance", value: "≈ 4.25", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "M5.5Ve", unit: "" }
    ],
    facts: ["Proxima Centauri is too dim to see without a telescope, despite being the nearest star to us."],
    colorHex: "#FFB199", mapX: 10, mapY: 80,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  },
  {
    id: "arcturus", slug: "arcturus", name: "Arcturus", category: "star",
    tagline: "An aging orange giant in Boötes",
    summary: "Arcturus is one of the brightest stars in the northern night sky, a red giant that has exhausted the hydrogen in its core.",
    deepDive: "Having left the main sequence, Arcturus has swollen considerably and cooled, giving it its distinct orange hue — a preview of the kind of star the Sun will become billions of years from now.",
    stats: [
      { label: "Distance", value: "≈ 37", unit: "light-years", approximate: true },
      { label: "Spectral type", value: "K1.5III", unit: "" }
    ],
    facts: ["Arcturus offers a glimpse of what the Sun may look like in its own red-giant phase."],
    colorHex: "#FFC97A", mapX: 40, mapY: 30,
    sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/"
  }
];

export function getStarBySlug(slug: string) {
  return stars.find((s) => s.slug === slug);
}
