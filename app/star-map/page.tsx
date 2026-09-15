"use client";

import { Breadcrumbs } from "@/components/EntryDetail";
import StarMap from "@/components/StarMap";
import { useLanguage } from "@/lib/LanguageContext";

export default function StarMapPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navStarMap") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("starmapTitle")}</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">{t("starmapSub")}</p>
      <div className="mt-10">
        <StarMap />
      </div>
    </div>
  );
}
