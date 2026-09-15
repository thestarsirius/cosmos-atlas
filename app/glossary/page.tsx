"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/data/glossary";
import { Breadcrumbs } from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

export default function GlossaryPage() {
  const { lang, t } = useLanguage();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter((g) => g.term.en.toLowerCase().includes(q) || g.term.ar.includes(query.trim()));
  }, [query]);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navGlossary") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("glossaryTitle")}</h1>
      <p className="mt-3 text-mute leading-8">{t("glossarySub")}</p>

      <label htmlFor="glossary-search" className="sr-only">
        {t("glossarySearchPlaceholder")}
      </label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("glossarySearchPlaceholder")}
        className="mt-6 w-full rounded-lg border border-white/10 bg-navy/50 px-4 py-3 text-starlight placeholder:text-faint focus:border-stellar/50"
      />

      <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
        {filtered.length === 0 && <p className="py-8 text-sm text-mute">{t("glossaryNoResults")}</p>}
        {filtered.map((g) => (
          <div key={g.term.en} className="py-6">
            <dt className="font-display text-lg text-starlight">{g.term[lang]}</dt>
            <dd className="mt-2 space-y-2">
              <p className="text-sm text-mute leading-7">{g.simple[lang]}</p>
              <p className="text-sm text-faint leading-7">{g.deep[lang]}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
