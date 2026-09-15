"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { allEntries, categoryLabelKey } from "@/data";
import { ObjectCategory } from "@/data/types";
import { useLanguage } from "@/lib/LanguageContext";
import ObjectCard from "./ObjectCard";

const categories: ObjectCategory[] = ["planet", "star", "galaxy", "nebula", "moon", "black-hole", "asteroid", "comet"];

export default function ExploreClient() {
  const { lang, t } = useLanguage();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as ObjectCategory | null;
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ObjectCategory | "all">(
    initialCategory && categories.includes(initialCategory) ? initialCategory : "all"
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allEntries.filter((e) => {
      const matchesCategory = activeCategory === "all" || e.category === activeCategory;
      const matchesQuery =
        !q ||
        e.name.en.toLowerCase().includes(q) ||
        e.name.ar.includes(query.trim()) ||
        e.tagline[lang].toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory, lang]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3">
        <label htmlFor="explore-search" className="sr-only">
          {t("exploreSearchPlaceholder")}
        </label>
        <input
          id="explore-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t("exploreSearchPlaceholder")}
          className="flex-1 rounded-lg border border-white/10 bg-navy/50 px-4 py-3 text-starlight placeholder:text-faint focus:border-stellar/50"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            activeCategory === "all"
              ? "border-stellar/60 bg-stellar/10 text-stellar"
              : "border-white/10 text-mute hover:text-starlight"
          }`}
        >
          {t("catAll")}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              activeCategory === cat
                ? "border-stellar/60 bg-stellar/10 text-stellar"
                : "border-white/10 text-mute hover:text-starlight"
            }`}
          >
            {t(categoryLabelKey[cat])}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-faint">
        {results.length} {results.length === 1 ? t("exploreResultsOne") : t("exploreResultsMany")}
      </p>

      {results.length === 0 ? (
        <p className="mt-4 text-mute">{t("exploreNoResults")}</p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((entry) => (
            <ObjectCard key={`${entry.category}-${entry.slug}`} entry={entry} lang={lang} categoryLabel={t(categoryLabelKey[entry.category])} />
          ))}
        </div>
      )}
    </div>
  );
}
