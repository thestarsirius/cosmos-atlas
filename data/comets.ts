import { CosmicEntry } from "./types";

export const comets: CosmicEntry[] = [
  {
    id: "halley", slug: "halley", name: "Halley's Comet", category: "comet",
    tagline: "The most famous returning comet",
    summary: "Halley's Comet is the best-known periodic comet, visible from Earth roughly every 76 years — the first comet confirmed to be periodic.",
    deepDive: "Edmond Halley calculated in 1705 that comet sightings from 1531, 1607, and 1682 were the same object and correctly predicted its return in 1758, after his own death. It last appeared in 1986 and is expected back around 2061.",
    stats: [
      { label: "Orbital period", value: "≈ 76", unit: "years", approximate: true },
      { label: "Nucleus size", value: "≈ 15", unit: "km", approximate: true }
    ],
    facts: ["Halley's Comet's return was the first successful prediction of a comet's reappearance."],
    colorHex: "#CDEFFF",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  },
  {
    id: "neowise", slug: "neowise", name: "Comet NEOWISE", category: "comet",
    tagline: "A bright naked-eye comet from 2020",
    summary: "Comet NEOWISE became one of the brightest comets visible from the Northern Hemisphere in decades when it passed near Earth in July 2020.",
    deepDive: "Discovered by NASA's NEOWISE space telescope in March 2020, the comet survived its close pass by the Sun and became easily visible to the naked eye shortly after — a rare treat, since many comets don't survive solar heating intact.",
    stats: [
      { label: "Orbital period", value: "≈ 6,800", unit: "years", approximate: true }
    ],
    facts: ["Comet NEOWISE won't return to the inner solar system for about 6,800 years."],
    colorHex: "#FFE4B5",
    sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/"
  }
];

export function getCometBySlug(slug: string) {
  return comets.find((c) => c.slug === slug);
}
