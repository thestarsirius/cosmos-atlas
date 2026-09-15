"use client";

import { notFound } from "next/navigation";
import { allEntries, categoryLabelKey } from "@/data";
import { CosmicEntry } from "@/data/types";
import EntryDetail from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

function findEntry(category: string, slug: string): CosmicEntry | undefined {
  return allEntries.find((e) => e.category === category && e.slug === slug);
}

export default function EntryClient({ category, slug }: { category: string; slug: string }) {
  const { lang, t } = useLanguage();
  const entry = findEntry(category, slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      entry={entry}
      lang={lang}
      categoryLabel={t(categoryLabelKey[entry.category])}
      breadcrumbTrail={[
        { label: t("breadcrumbHome"), href: "/" },
        { label: t("navExplore"), href: "/explore" },
        { label: t(categoryLabelKey[entry.category]), href: `/explore?category=${entry.category}` },
        { label: entry.name[lang] }
      ]}
      didYouKnowLabel={t("didYouKnow")}
      sourceLabel={t("source")}
      visitSourceLabel={t("visitSource")}
    />
  );
}
