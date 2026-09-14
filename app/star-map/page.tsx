import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/EntryDetail";
import StarMap from "@/components/StarMap";

export const metadata: Metadata = {
  title: "Star Map",
  description: "An interactive map of notable stars visible from Earth — click any star to see its details."
};

export default function StarMapPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Star Map" }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Star Map</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        Positions here are illustrative, not a precise sky chart — click any star to learn what makes it
        distinctive.
      </p>
      <div className="mt-10">
        <StarMap />
      </div>
    </div>
  );
}
