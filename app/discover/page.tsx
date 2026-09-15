"use client";

import DiscoveryCard from "@/components/DiscoveryCard";
import { Breadcrumbs } from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

export default function DiscoverPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navDiscover") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("discoveryTitle")}</h1>
      <div className="mt-10">
        <DiscoveryCard />
      </div>
    </div>
  );
}
