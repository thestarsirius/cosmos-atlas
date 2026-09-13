"use client";

import { useMemo, useState } from "react";
import { glossary } from "@/data/glossary";
import { Breadcrumbs } from "@/components/Misc";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter(
      (t) => t.termAr.includes(query.trim()) || t.termEn.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Breadcrumbs items={[{ labelAr: "الرئيسية", href: "/" }, { labelAr: "قاموس الفلك" }]} />
      <h1 className="font-kufi text-3xl text-ink mt-4">قاموس الفلك</h1>
      <p className="mt-3 text-mute leading-8">مصطلحات علمية أساسية في الفلك، بالعربية والإنجليزية.</p>

      <label htmlFor="glossary-search" className="sr-only">
        ابحث في القاموس
      </label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="ابحث عن مصطلح…"
        className="mt-6 w-full rounded border border-line bg-panel px-4 py-3 text-ink placeholder:text-faint focus:border-ember/50"
      />

      <dl className="mt-8 divide-y divide-line border-t border-line">
        {filtered.length === 0 && <p className="py-8 text-sm text-mute">لم نجد نتائج مطابقة.</p>}
        {filtered.map((t) => (
          <div key={t.termEn} className="py-6">
            <dt className="flex items-baseline gap-2 flex-wrap">
              <span className="font-kufi text-lg text-ink">{t.termAr}</span>
              <span className="font-mono text-xs text-faint">{t.termEn}</span>
            </dt>
            <dd className="mt-2 space-y-2">
              <p className="text-sm text-mute leading-7">{t.simpleAr}</p>
              <p className="text-sm text-faint leading-7">{t.deepAr}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
