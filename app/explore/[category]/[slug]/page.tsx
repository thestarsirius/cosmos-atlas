import type { Metadata } from "next";
import { allEntries } from "@/data";
import { CosmicEntry } from "@/data/types";
import EntryClient from "./EntryClient";

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
    title: entry.name.en,
    description: entry.summary.en
  };
}

export default async function CategoryEntryPage({
  params
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  return <EntryClient category={category} slug={slug} />;
}
