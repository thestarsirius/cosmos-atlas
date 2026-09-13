import Link from "next/link";
import { CosmicObject } from "@/data/types";

export default function ObjectCard({ obj, href }: { obj: CosmicObject; href: string }) {
  return (
    <Link
      href={href}
      className="group block rounded border border-line bg-panel/60 p-5 transition-colors hover:border-ember/50"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-kufi text-lg text-ink">{obj.nameAr}</h3>
        <span className="font-mono text-xs text-faint">{obj.nameEn}</span>
      </div>
      <p className="mt-2 text-sm text-mute leading-7 line-clamp-3">{obj.shortDescriptionAr}</p>
      <span className="mt-4 inline-flex text-sm text-ember opacity-0 group-hover:opacity-100 transition-opacity">
        عرض التفاصيل ←
      </span>
    </Link>
  );
}
