"use client";

import { planets } from "@/data/planets";
import { categoryLabelKey } from "@/data";
import SolarSystemOrbit from "@/components/SolarSystemOrbit";
import ObjectCard from "@/components/ObjectCard";
import { Breadcrumbs } from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

export default function SolarSystemPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navSolar") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("solarHubTitle")}</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">{t("solarHubSub")}</p>

      <div className="mt-10">
        <SolarSystemOrbit />
      </div>

      <h2 className="font-display text-xl text-starlight mt-14 mb-5">{t("allEightPlanets")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {planets.map((p) => (
          <ObjectCard key={p.id} entry={p} lang={lang} categoryLabel={t(categoryLabelKey[p.category])} />
        ))}
      </div>
    </div>
  );
}
