import Link from "next/link";
import { footerNav } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex flex-wrap items-start justify-between gap-8">
        <div>
          <p className="font-display font-semibold text-starlight">COSMOS ATLAS</p>
          <p className="mt-2 text-sm text-mute max-w-xs leading-6">
            An independent, educational atlas for exploring the universe. Not affiliated with NASA, ESA, or
            any space agency.
          </p>
        </div>
        <nav aria-label="Footer" className="flex gap-6">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-mute hover:text-starlight transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-xs text-faint font-mono">
          Cosmos Atlas · open source
        </div>
      </div>
    </footer>
  );
}
