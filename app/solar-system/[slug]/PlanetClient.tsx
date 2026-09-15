"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlanetBySlug } from "@/data/planets";
import { categoryLabelKey } from "@/data";
import EntryDetail from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

export default function PlanetClient({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const planet = getPlanetBySlug(slug);
  if (!planet) notFound();

  return (
    <div>
      <EntryDetail
        entry={planet}
        lang={lang}
        categoryLabel={t(categoryLabelKey[planet.category])}
        breadcrumbTrail={[
          { label: t("breadcrumbHome"), href: "/" },
          { label: t("navSolar"), href: "/solar-system" },
          { label: planet.name[lang] }
        ]}
        didYouKnowLabel={t("didYouKnow")}
        sourceLabel={t("source")}
        visitSourceLabel={t("visitSource")}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16 -mt-8">
        <Link href="/solar-system" className="inline-flex items-center gap-2 text-sm text-stellar hover:underline">
          {t("backToOrbit")}
        </Link>
      </div>
    </div>
  );
}
