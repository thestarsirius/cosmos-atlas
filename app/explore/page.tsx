"use client";

import { Suspense } from "react";
import { Breadcrumbs } from "@/components/EntryDetail";
import ExploreClient from "@/components/ExploreClient";
import { useLanguage } from "@/lib/LanguageContext";

export default function ExplorePage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navExplore") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("exploreTitle")}</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">{t("exploreSub")}</p>

      <div className="mt-10">
        <Suspense fallback={<p className="text-mute">…</p>}>
          <ExploreClient />
        </Suspense>
      </div>
    </div>
  );
}
