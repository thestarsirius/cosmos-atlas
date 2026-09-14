export const spaceFacts: string[] = [
  "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "A day on Venus is longer than its year.",
  "The footprints on the Moon will likely last millions of years — there's no wind or water to erode them.",
  "Neutron stars can spin hundreds of times per second.",
  "The Great Red Spot on Jupiter is a storm larger than the entire Earth.",
  "There are more stars in the observable universe than grains of sand on every beach on Earth, by most estimates.",
  "One teaspoon of a neutron star would weigh about as much as a mountain.",
  "The largest known volcano in the solar system, Olympus Mons on Mars, is nearly three times the height of Mount Everest.",
  "Space is completely silent — sound needs a medium like air to travel, and there isn't one in a vacuum.",
  "The Milky Way and Andromeda galaxies are on a slow collision course, expected in several billion years.",
  "Saturn is less dense than water; in theory it would float if you found an ocean big enough.",
  "Some stars are so massive that they live for only a few million years — a blink compared to the Sun's ~10-billion-year lifespan."
];

export function getDailyFact(seed: number = new Date().getDate()): string {
  const idx = seed % spaceFacts.length;
  return spaceFacts[idx] ?? spaceFacts[0]!;
}
