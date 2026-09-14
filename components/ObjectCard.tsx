import Link from "next/link";
import { CosmicEntry } from "@/data/types";
import { categoryLabels, categoryRoute } from "@/data";

export function hrefFor(entry: CosmicEntry) {
  return `/${categoryRoute[entry.category]}/${entry.slug}`;
}

export default function ObjectCard({ entry }: { entry: CosmicEntry }) {
  return (
    <Link
      href={hrefFor(entry)}
      className="group relative block overflow-hidden rounded-lg border border-white/10 bg-navy/50 p-5 transition-all hover:border-white/25 hover:bg-navy/70"
    >
      <div
        className="absolute -top-10 -right-10 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-35"
        style={{ background: entry.colorHex }}
        aria-hidden="true"
      />
      <div className="relative">
        <span className="text-xs font-mono uppercase tracking-wide text-faint">
          {categoryLabels[entry.category]}
        </span>
        <h3 className="mt-1 font-display text-lg text-starlight">{entry.name}</h3>
        <p className="mt-2 text-sm text-mute leading-6 line-clamp-3">{entry.summary}</p>
        <span className="mt-4 inline-flex text-sm text-stellar opacity-0 group-hover:opacity-100 transition-opacity">
          View details →
        </span>
      </div>
    </Link>
  );
}
