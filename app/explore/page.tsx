import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/EntryDetail";
import ExploreClient from "@/components/ExploreClient";

export const metadata: Metadata = {
  title: "Explore",
  description: "Search and filter planets, stars, galaxies, nebulae, moons, black holes, asteroids, and comets."
};

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Explore" }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Explore the Universe</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        A gateway to everything in the atlas. Search by name, or filter by category.
      </p>

      <div className="mt-10">
        <Suspense fallback={<p className="text-mute">Loading…</p>}>
          <ExploreClient />
        </Suspense>
      </div>
    </div>
  );
}
