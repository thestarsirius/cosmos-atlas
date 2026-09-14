import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "What Cosmos Atlas is, and the principles behind it."
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-28 pb-16">
      <nav aria-label="Breadcrumb" className="text-sm text-faint">
        <Link href="/" className="hover:text-mute">Home</Link> <span aria-hidden="true">→</span> <span className="text-mute">About</span>
      </nav>
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">About Cosmos Atlas</h1>

      <div className="mt-8 space-y-8 text-mute leading-8">
        <section>
          <h2 className="font-display text-lg text-starlight mb-2">What this is</h2>
          <p>
            Cosmos Atlas is an interactive, independent project for exploring the universe — the solar
            system, stars, galaxies, and the sheer scale of everything — built to feel like discovery rather
            than a page of facts.
          </p>
        </section>
        <section>
          <h2 className="font-display text-lg text-starlight mb-2">On accuracy</h2>
          <p>
            Figures throughout the site are drawn from public sources including NASA, SIMBAD, and the Event
            Horizon Telescope Collaboration. Approximate values are marked as such, and figures that change
            over time (like moon counts) are phrased to avoid going stale.
          </p>
        </section>
        <section className="rounded-lg border border-white/10 bg-navy/40 p-5">
          <h2 className="font-display text-lg text-starlight mb-2">Disclaimer</h2>
          <p className="text-starlight">
            Cosmos Atlas is an independent educational project and is not affiliated with NASA, ESA, or any
            other space agency.
          </p>
        </section>
      </div>
    </div>
  );
}
