import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/EntryDetail";
import CosmicScale from "@/components/CosmicScale";

export const metadata: Metadata = {
  title: "Cosmic Scale",
  description: "Drag through the scales of the universe, from a human being to the observable universe."
};

export default function CosmicScalePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Cosmic Scale" }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Cosmic Scale</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        Drag the slider to move between scales — from a single human being to the edge of what we can
        possibly observe.
      </p>
      <div className="mt-10">
        <CosmicScale />
      </div>
    </div>
  );
}
