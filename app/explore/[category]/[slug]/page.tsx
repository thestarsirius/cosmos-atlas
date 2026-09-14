import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allEntries, categoryLabels } from "@/data";
import { CosmicEntry } from "@/data/types";
import EntryDetail from "@/components/EntryDetail";

export function generateStaticParams() {
  return allEntries
    .filter((e) => e.category !== "planet")
    .map((e) => ({ category: e.category, slug: e.slug }));
}

function findEntry(category: string, slug: string): CosmicEntry | undefined {
  return allEntries.find((e) => e.category === category && e.slug === slug);
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const entry = findEntry(category, slug);
  if (!entry) return {};
  return {
    title: entry.name,
    description: entry.summary
  };
}

export default async function CategoryEntryPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const entry = findEntry(category, slug);
  if (!entry) notFound();

  return (
    <EntryDetail
      entry={entry}
      breadcrumbTrail={[
        { label: "Home", href: "/" },
        { label: "Explore", href: "/explore" },
        { label: categoryLabels[entry.category], href: `/explore?category=${entry.category}` },
        { label: entry.name }
      ]}
    />
  );
}
