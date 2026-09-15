import type { Metadata } from "next";
import { planets, getPlanetBySlug } from "@/data/planets";
import PlanetClient from "./PlanetClient";

export function generateStaticParams() {
  return planets.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const planet = getPlanetBySlug(slug);
  if (!planet) return {};
  return {
    title: planet.name.en,
    description: planet.summary.en
  };
}

export default async function PlanetPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <PlanetClient slug={slug} />;
}
