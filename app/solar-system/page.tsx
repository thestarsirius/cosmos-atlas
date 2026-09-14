import type { Metadata } from "next";
import { planets } from "@/data/planets";
import SolarSystemOrbit from "@/components/SolarSystemOrbit";
import ObjectCard from "@/components/ObjectCard";
import { Breadcrumbs } from "@/components/EntryDetail";

export const metadata: Metadata = {
  title: "Solar System",
  description: "An interactive orbit view of the Sun and eight planets, with real physical data for each world."
};

export default function SolarSystemPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Solar System" }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">The Solar System</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        The Sun and everything bound to it by gravity — eight planets, dozens of moons, and countless smaller
        bodies. Drag to pan, use the zoom controls, and click any planet to open its page.
      </p>

      <div className="mt-10">
        <SolarSystemOrbit />
      </div>

      <h2 className="font-display text-xl text-starlight mt-14 mb-5">All eight planets</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {planets.map((p) => (
          <ObjectCard key={p.id} entry={p} />
        ))}
      </div>
    </div>
  );
}
