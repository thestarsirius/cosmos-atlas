import Link from "next/link";
import { CosmicEntry } from "@/data/types";
import { categoryLabels } from "@/data";
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
            {i < items.length - 1 && <span aria-hidden="true">→</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function EntryDetail({ entry, breadcrumbTrail }: { entry: CosmicEntry; breadcrumbTrail: { label: string; href?: string }[] }) {
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
          <span className="text-xs font-mono uppercase tracking-wide text-faint">{categoryLabels[entry.category]}</span>
        </div>
        <h1 className="mt-2 font-display text-4xl sm:text-5xl text-starlight text-balance">{entry.name}</h1>
        <p className="mt-3 text-lg text-mute">{entry.tagline}</p>
      </header>

      <section className="mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {entry.stats.map((stat, i) => (
            <AnimatedStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <p className="text-mute leading-8">{entry.summary}</p>
        <p className="text-mute leading-8">{entry.deepDive}</p>
      </section>

      {entry.facts.length > 0 && (
        <section className="mt-10">
          <h2 className="font-display text-lg text-starlight mb-4">Did you know?</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {entry.facts.map((f) => (
              <div key={f} className="rounded-lg border border-purple/30 bg-purple/10 p-4">
                <p className="text-sm text-starlight leading-6">{f}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 border-t border-white/10 pt-6 flex items-center justify-between flex-wrap gap-2">
        <p className="text-sm text-faint">Source: {entry.sourceName}</p>
        <a href={entry.sourceUrl} target="_blank" rel="noreferrer noopener" className="text-sm text-stellar hover:underline">
          Visit source
        </a>
      </section>
    </div>
  );
}
