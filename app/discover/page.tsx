import type { Metadata } from "next";
import Link from "next/link";
import DiscoveryCard from "@/components/DiscoveryCard";

export const metadata: Metadata = {
  title: "Cosmic Discovery",
  description: "A random cosmic object to discover, picked fresh each day."
};

export default function DiscoverPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <nav aria-label="Breadcrumb" className="text-sm text-faint">
        <Link href="/" className="hover:text-mute">Home</Link> <span aria-hidden="true">→</span> <span className="text-mute">Cosmic Discovery</span>
      </nav>
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">Cosmic Discovery</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">
        A new object to discover, picked for you today — or shuffle for another.
      </p>
      <div className="mt-10">
        <DiscoveryCard />
      </div>
    </div>
  );
}
