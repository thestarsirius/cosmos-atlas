"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { allEntries, categoryLabelKey } from "@/data";
import { getDailyDiscovery, getRandomDiscovery } from "@/lib/random";
import { hrefFor } from "./ObjectCard";
import { useLanguage } from "@/lib/LanguageContext";

export default function DiscoveryCard() {
  const { lang, t } = useLanguage();
  // Start from a fixed entry so server/client first paint match exactly
  // (statically exported page); the real "today" pick applies client-side
  // right after mount.
  const [entry, setEntry] = useState(allEntries[0]!);

  useEffect(() => {
    setEntry(getDailyDiscovery());
  }, []);

  return (
    <div className="rounded-xl border border-white/10 bg-navy/40 p-6 sm:p-8 overflow-hidden relative">
      <div
        className="absolute -top-16 h-56 w-56 rounded-full opacity-20 blur-3xl rtl:start-auto rtl:-end-16 -end-16"
        style={{ background: entry.colorHex }}
        aria-hidden="true"
      />
      <p className="text-xs font-mono uppercase tracking-wide text-faint relative">{t("discoveryEyebrow")}</p>
      <AnimatePresence mode="wait">
        <motion.div
          key={entry.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="relative mt-3"
        >
          <span className="text-xs font-mono uppercase tracking-wide text-mute">{t(categoryLabelKey[entry.category])}</span>
          <h3 className="font-display text-2xl sm:text-3xl text-starlight mt-1">{entry.name[lang]}</h3>
          <p className="mt-2 text-mute leading-7 max-w-prose">{entry.summary[lang]}</p>
          {entry.facts[0] && (
            <p className="mt-3 text-sm text-starlight bg-purple/10 border border-purple/30 rounded-lg p-3">
              {entry.facts[0][lang]}
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="relative mt-6 flex flex-wrap gap-3">
        <Link href={hrefFor(entry)} className="rounded-lg bg-purple px-4 py-2.5 text-sm font-medium text-starlight hover:bg-purple-soft transition-colors">
          {t("viewDetails")}
        </Link>
        <button
          type="button"
          onClick={() => setEntry((current) => getRandomDiscovery(current.slug))}
          className="rounded-lg border border-white/15 px-4 py-2.5 text-sm text-starlight hover:border-white/30 transition-colors"
        >
          {t("discoverAnother")}
        </button>
      </div>
    </div>
  );
}
