"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { UI, Lang } from "@/data/i18n";

const STORAGE_KEY = "cosmosAtlasLang";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof UI.en) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start in English/LTR so server-rendered (statically exported) HTML and
  // the client's first paint match exactly — no hydration mismatch. The
  // visitor's real saved/browser language is applied right after mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    const initial = saved === "ar" || saved === "en"
      ? saved
      : navigator.language?.startsWith("ar") ? "ar" : "en";
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  function t(key: keyof typeof UI.en): string {
    return UI[lang][key] ?? UI.en[key] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, dir: lang === "ar" ? "rtl" : "ltr", setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
