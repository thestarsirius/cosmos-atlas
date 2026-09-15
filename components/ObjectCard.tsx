import Link from "next/link";
import { CosmicEntry } from "@/data/types";
import { categoryRoute } from "@/data";
import { Lang } from "@/data/i18n";

export function hrefFor(entry: CosmicEntry) {
  return `/${categoryRoute[entry.category]}/${entry.slug}`;
}

export default function ObjectCard({ entry, lang, categoryLabel }: { entry: CosmicEntry; lang: Lang; categoryLabel: string }) {
  return (
    <Link
      href={hrefFor(entry)}
      className="group relative block overflow-hidden rounded-lg border border-white/10 bg-navy/50 p-5 transition-all hover:border-white/25 hover:bg-navy/70"
    >
      <div
        className="absolute -top-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-35 rtl:start-auto rtl:-end-10 -end-10"
        style={{ background: entry.colorHex }}
        aria-hidden="true"
      />
      <div className="relative">
        <span className="text-xs font-mono uppercase tracking-wide text-faint">{categoryLabel}</span>
        <h3 className="mt-1 font-display text-lg text-starlight">{entry.name[lang]}</h3>
        <p className="mt-2 text-sm text-mute leading-6 line-clamp-3">{entry.summary[lang]}</p>
      </div>
    </Link>
  );
}
