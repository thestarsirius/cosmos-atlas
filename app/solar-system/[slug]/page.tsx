import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { planets, getPlanetBySlug } from "@/data/planets";
import { Breadcrumbs, FactCard, HowDoWeKnow } from "@/components/Misc";
import SourceCard, { VerifiedBadge } from "@/components/SourceCard";

export function generateStaticParams() {
  return planets.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const planet = getPlanetBySlug(params.slug);
  if (!planet) return {};
  return {
    title: `${planet.nameAr} | النظام الشمسي`,
    description: planet.shortDescriptionAr
  };
}

export default function PlanetPage({ params }: { params: { slug: string } }) {
  const planet = getPlanetBySlug(params.slug);
  if (!planet) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <Breadcrumbs
        items={[
          { labelAr: "الرئيسية", href: "/" },
          { labelAr: "النظام الشمسي", href: "/solar-system" },
          { labelAr: planet.nameAr }
        ]}
      />

      <header className="mt-4">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="font-kufi text-3xl sm:text-4xl text-ink">{planet.nameAr}</h1>
          <span className="font-mono text-sm text-faint">{planet.nameEn}</span>
        </div>
        <p className="mt-3 text-mute leading-8 max-w-prose">{planet.shortDescriptionAr}</p>
        {planet.lastVerified && <div className="mt-3"><VerifiedBadge date={planet.lastVerified} /></div>}
      </header>

      {/* Measurements table */}
      <section className="mt-10">
        <h2 className="font-kufi text-lg text-ink mb-4">بيانات فيزيائية</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded border border-line overflow-hidden bg-line">
          {planet.measurements.map((m) => (
            <div key={m.labelAr} className="bg-panel p-4">
              <dt className="text-xs text-faint">{m.labelAr}</dt>
              <dd className="mt-1 text-ink">
                <span className="font-mono">{m.value}</span>{" "}
                <span className="text-sm text-mute">{m.unit}</span>
                {m.approximate && <span className="text-xs text-faint"> (تقريبي)</span>}
              </dd>
              {m.note && <p className="mt-1 text-xs text-faint">{m.note}</p>}
            </div>
          ))}
        </dl>
      </section>

      {/* Layered explanation */}
      <section className="mt-10 space-y-6">
        <div>
          <h2 className="font-kufi text-lg text-ink mb-2">المستوى الأول</h2>
          <p className="text-mute leading-8">{planet.levels.simpleAr}</p>
        </div>
        <div>
          <h2 className="font-kufi text-lg text-ink mb-2">المستوى الثاني</h2>
          <p className="text-mute leading-8">{planet.levels.deepAr}</p>
        </div>
        {planet.levels.explorerAr && (
          <div>
            <h2 className="font-kufi text-lg text-ink mb-2">للمستكشف</h2>
            <p className="text-mute leading-8">{planet.levels.explorerAr}</p>
          </div>
        )}
      </section>

      {planet.howDoWeKnowAr && (
        <section className="mt-10">
          <HowDoWeKnow text={planet.howDoWeKnowAr} />
        </section>
      )}

      {planet.facts.length > 0 && (
        <section className="mt-10">
          <h2 className="font-kufi text-lg text-ink mb-4">هل تعلم؟</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {planet.facts.map((f) => (
              <FactCard key={f} text={f} />
            ))}
          </div>
        </section>
      )}

      {planet.related.length > 0 && (
        <section className="mt-10">
          <h2 className="font-kufi text-lg text-ink mb-4">مواضيع ذات صلة</h2>
          <div className="flex flex-wrap gap-2">
            {planet.related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.category}/${r.slug}`}
                className="rounded-sm border border-line px-3 py-1.5 text-sm text-mute hover:text-ink hover:border-ember/50 transition-colors"
              >
                {r.nameAr}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mt-10 border-t border-line pt-8">
        <h2 className="font-kufi text-lg text-ink mb-2">المصادر</h2>
        <ul>
          {planet.sources.map((s) => (
            <SourceCard key={s.url} source={s} />
          ))}
        </ul>
      </section>
    </div>
  );
}
