import Link from "next/link";

export function FactCard({ text }: { text: string }) {
  return (
    <div className="rounded border border-ember/30 bg-ember/5 p-4">
      <p className="text-xs text-ember mb-1.5">هل تعلم؟</p>
      <p className="text-sm text-ink leading-7">{text}</p>
    </div>
  );
}

export function HowDoWeKnow({ text }: { text: string }) {
  return (
    <div className="rounded border border-nebula/30 bg-nebula/5 p-5">
      <p className="font-kufi text-sm text-nebula mb-2">كيف عرف العلماء ذلك؟</p>
      <p className="text-sm text-ink leading-7">{text}</p>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { labelAr: string; href?: string }[] }) {
  return (
    <nav aria-label="مسار التصفح" className="text-sm text-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="hover:text-mute transition-colors">
                {item.labelAr}
              </Link>
            ) : (
              <span className="text-mute">{item.labelAr}</span>
            )}
            {i < items.length - 1 && <span aria-hidden="true">←</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
