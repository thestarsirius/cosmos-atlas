import Link from "next/link";
import { CosmicEntry } from "@/data/types";
import { Lang } from "@/data/i18n";
import AnimatedStat from "./AnimatedStat";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-mute transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-mute">{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden="true" className="rtl:-scale-x-100">→</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function EntryDetail({
  entry,
  lang,
  categoryLabel,
  breadcrumbTrail,
  didYouKnowLabel,
  sourceLabel,
  visitSourceLabel
}: {
  entry: CosmicEntry;
  lang: Lang;
  categoryLabel: string;
  breadcrumbTrail: { label: string; href?: string }[];
  didYouKnowLabel: string;
  sourceLabel: string;
  visitSourceLabel: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={breadcrumbTrail} />

      <header className="mt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="h-3 w-3 rounded-full shrink-0"
            style={{ background: entry.colorHex, boxShadow: `0 0 20px ${entry.colorHex}` }}
            aria-hidden="true"
          />
          <span className="text-xs font-mono uppercase tracking-wide text-faint">{categoryLabel}</span>
        </div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl text-starlight text-balance">{entry.name[lang]}</h1>
        <p className="mt-3 text-lg text-mute">{entry.tagline[lang]}</p>
      </header>

      <section className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {entry.stats.map((stat, i) => (
            <AnimatedStat key={stat.label.en} stat={stat} lang={lang} index={i} />
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <p className="text-mute leading-8">{entry.summary[lang]}</p>
        <p className="text-mute leading-8">{entry.deepDive[lang]}</p>
      </section>

      {entry.facts.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-lg text-starlight mb-4">{didYouKnowLabel}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {entry.facts.map((f) => (
              <div key={f.en} className="rounded-lg border border-purple/30 bg-purple/10 p-4">
                <p className="text-sm text-starlight leading-6">{f[lang]}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-2">
        <p className="text-sm text-faint">{sourceLabel}: {entry.sourceName}</p>
        <a href={entry.sourceUrl} target="_blank" rel="noreferrer noopener" className="text-sm text-stellar hover:underline">
          {visitSourceLabel}
        </a>
      </section>
    </div>
  );
}
