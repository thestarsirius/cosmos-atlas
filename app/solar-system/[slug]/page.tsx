import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { planets, getPlanetBySlug } from "@/data/planets";
import EntryDetail from "@/components/EntryDetail";

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
    title: planet.name,
    description: planet.summary
  };
}

export default async function PlanetPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const planet = getPlanetBySlug(slug);
  if (!planet) notFound();

  return (
    <div>
      <EntryDetail
        entry={planet}
        breadcrumbTrail={[
          { label: "Home", href: "/" },
          { label: "Solar System", href: "/solar-system" },
          { label: planet.name }
        ]}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 pb-16 -mt-8">
        <Link
          href="/solar-system"
          className="inline-flex items-center gap-2 text-sm text-stellar hover:underline"
        >
          ← Back to the orbit view
        </Link>
      </div>
    </div>
  );
}
