"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-void/85 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-kufi text-xl text-ink">أطلس الكون</span>
          <span className="hidden sm:inline text-[11px] tracking-wide text-faint font-mono">COSMOS</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="التنقل الرئيسي" className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {primaryNav.slice(0, 9).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-mute hover:text-ink transition-colors rounded"
            >
              {item.labelAr}
            </Link>
          ))}
          <Link
            href="/explore"
            className="ms-2 px-3 py-2 text-sm rounded border border-ember/40 text-ember hover:bg-ember/10 transition-colors"
          >
            المزيد
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-line text-ink"
        >
          <span className="sr-only">{open ? "إغلاق القائمة" : "فتح القائمة"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="التنقل للجوال" className="lg:hidden border-t border-line bg-void px-4 py-3">
          <ul className="grid grid-cols-2 gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-mute hover:text-ink hover:bg-panel rounded transition-colors"
                >
                  {item.labelAr}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
