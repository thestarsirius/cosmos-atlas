"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allEntries, categoryLabels } from "@/data";
import { getDailyDiscovery, getRandomDiscovery } from "@/lib/random";
import { hrefFor } from "./ObjectCard";

export default function DiscoveryCard() {
  // Start from a fixed, build-time-safe entry so server and client render the
  // same HTML on first paint (this page is statically exported). The real
  // "today" pick — based on the visitor's actual date — is applied client-side
  // right after mount, avoiding any hydration mismatch.
  const [entry, setEntry] = useState(allEntries[0]!);
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    setEntry(getDailyDiscovery());
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-navy/40 p-6 sm:p-8 overflow-hidden relative">
      <div
        className="absolute -top-16 -right-16 h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{ background: entry.colorHex }}
        aria-hidden="true"
      />
      <p className="text-xs font-mono uppercase tracking-wide text-faint relative">
        {isToday ? "Today's Cosmic Discovery" : "Cosmic Discovery"}
      </p>
      <AnimatePresence mode="wait">
        <motion.div
          key={entry.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative mt-3"
        >
          <span className="text-xs font-mono uppercase tracking-wide text-mute">{categoryLabels[entry.category]}</span>
          <h3 className="font-display text-2xl sm:text-3xl text-starlight mt-1">{entry.name}</h3>
          <p className="mt-2 text-mute leading-7 max-w-prose">{entry.summary}</p>
          {entry.facts[0] && (
            <p className="mt-3 text-sm text-starlight bg-purple/10 border border-purple/30 rounded-lg p-3">
              {entry.facts[0]}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative mt-6 flex flex-wrap gap-3">
        <Link href={hrefFor(entry)} className="rounded-lg bg-purple px-4 py-2.5 text-sm font-medium text-starlight hover:bg-purple-soft transition-colors">
          View details
        </Link>
        <button
          type="button"
          onClick={() => {
            setEntry((current) => getRandomDiscovery(current.slug));
            setIsToday(false);
          }}
          className="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-starlight hover:border-white/30 transition-colors"
        >
          Discover another
        </button>
      </div>
    </div>
  );
}
