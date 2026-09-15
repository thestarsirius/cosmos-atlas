"use client";

import { useState } from "react";
import Link from "next/link";
import { primaryNav } from "@/data/navigation";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  function LangSwitch({ idPrefix }: { idPrefix: string }) {
    return (
      <span className="flex items-center gap-1 rounded-full border border-line-strong p-0.5" role="group" aria-label="Language">
        <button
          type="button"
          id={`${idPrefix}-en`}
          onClick={() => setLang("en")}
          className={`rounded-full px-2.5 py-1 text-[11px] font-mono transition-colors ${lang === "en" ? "bg-purple text-starlight" : "text-faint"}`}
        >
          EN
        </button>
        <button
          type="button"
          id={`${idPrefix}-ar`}
          onClick={() => setLang("ar")}
          className={`rounded-full px-2.5 py-1 text-[11px] font-mono transition-colors ${lang === "ar" ? "bg-purple text-starlight" : "text-faint"}`}
        >
          AR
        </button>
      </span>
    );
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-void/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight shrink-0">
          <span className="font-display font-semibold tracking-wide text-starlight text-base">{t("brand")}</span>
          <span className="text-[11px] text-faint">{t("brandSub")}</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-mute hover:text-starlight transition-colors rounded"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <span className="ms-2">
            <LangSwitch idPrefix="lang-desktop" />
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-white/10 text-starlight shrink-0"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden border-t border-white/5 bg-void/95 px-4 py-3">
          <ul className="space-y-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-mute hover:text-starlight hover:bg-white/5 rounded transition-colors"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 px-3">
            <LangSwitch idPrefix="lang-mobile" />
          </div>
        </nav>
      )}
    </header>
  );
}
