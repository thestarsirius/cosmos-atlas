import { allEntries } from "@/data";
import { CosmicEntry } from "@/data/types";

// Simple deterministic hash so "today's" discovery is stable across a day
// (same for every visitor, changes daily) without needing a server.
function dayIndex(offset = 0): number {
  const start = new Date(2024, 0, 1).getTime();
  const now = Date.now() + offset * 86_400_000;
  const days = Math.floor((now - start) / 86_400_000);
  return days;
}

export function getDailyDiscovery(offset = 0): CosmicEntry {
  const idx = ((dayIndex(offset) % allEntries.length) + allEntries.length) % allEntries.length;
  return allEntries[idx]!;
}

export function getRandomDiscovery(exclude?: string): CosmicEntry {
  const pool = exclude ? allEntries.filter((e) => e.slug !== exclude) : allEntries;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  return pick ?? allEntries[0]!;
}
