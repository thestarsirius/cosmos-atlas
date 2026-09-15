"use client";

import { Breadcrumbs } from "@/components/EntryDetail";
import CosmicScale from "@/components/CosmicScale";
import { useLanguage } from "@/lib/LanguageContext";

export default function CosmicScalePage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navScale") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("scaleTitle")}</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">{t("scaleSub")}</p>
      <div className="mt-10">
        <CosmicScale />
      </div>
    </div>
  );
}
