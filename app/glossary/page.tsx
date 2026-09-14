"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { glossary } from "@/data/glossary";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter((t) => t.term.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-28 pb-16">
      <nav aria-label="Breadcrumb" className="text-sm text-faint">
        <Link href="/" className="hover:text-mute">Home</Link> <span aria-hidden="true">→</span> <span className="text-mute">Glossary</span>
      </nav>
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Glossary</h1>
      <p className="mt-3 text-mute leading-8">Core astronomy terms, explained simply and in more depth.</p>

      <label htmlFor="glossary-search" className="sr-only">Search the glossary</label>
      <input
        id="glossary-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a term…"
        className="mt-6 w-full rounded-lg border border-white/10 bg-navy/50 px-4 py-3 text-starlight placeholder:text-faint focus:border-stellar/50"
      />

      <dl className="mt-8 divide-y divide-white/10 border-t border-white/10">
        {filtered.length === 0 && <p className="py-8 text-sm text-mute">No matching terms.</p>}
        {filtered.map((t) => (
          <div key={t.term} className="py-6">
            <dt className="font-display text-lg text-starlight">{t.term}</dt>
            <dd className="mt-2 space-y-2">
              <p className="text-sm text-mute leading-7">{t.simple}</p>
              <p className="text-sm text-faint leading-7">{t.deep}</p>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
