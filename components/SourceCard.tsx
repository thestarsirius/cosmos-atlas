import { Source } from "@/data/types";

const typeLabel: Record<Source["type"], string> = {
  nasa: "NASA",
  esa: "ESA",
  iau: "IAU",
  jpl: "JPL",
  database: "قاعدة بيانات علمية",
  other: "مصدر آخر"
};

export function VerifiedBadge({ date }: { date?: string }) {
  if (!date) return null;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-nebula/40 bg-nebula/10 px-2 py-1 text-xs text-nebula">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path d="M2 6.2l2.6 2.6L10 3.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      تم التحقق: {date}
    </span>
  );
}

export default function SourceCard({ source }: { source: Source }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-line py-3 last:border-0">
      <div>
        <p className="text-sm text-ink">{source.nameAr}</p>
        <p className="text-xs text-faint font-mono">{typeLabel[source.type]}</p>
      </div>
      <a
        href={source.url}
        target="_blank"
        rel="noreferrer noopener"
        className="text-sm text-ember hover:underline shrink-0"
      >
        زيارة المصدر
      </a>
    </li>
  );
}
