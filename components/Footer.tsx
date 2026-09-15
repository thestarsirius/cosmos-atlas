"use client";

import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/5 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 flex flex-wrap items-start justify-between gap-8">
        <div>
          <p className="font-display font-semibold text-starlight">{t("brand")}</p>
          <p className="mt-2 text-sm text-mute max-w-xs leading-6">{t("footerTagline")}</p>
        </div>
        <nav aria-label="Footer" className="flex gap-6">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-mute hover:text-starlight transition-colors">
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 text-xs text-faint font-mono text-center">
          {t("footerCopy")}
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-display font-bold text-starlight"
            style={{
              background: "radial-gradient(circle at 35% 30%, #8B72E8, #6C4FD1 55%, #0B1226 100%)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 0 8px rgba(108,79,209,0.5)"
            }}
          >
            S
          </span>
          <span className="text-xs text-faint">{t("devCredit")}</span>
        </div>
      </div>
    </footer>
  );
}
