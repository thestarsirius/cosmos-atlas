"use client";

import { Breadcrumbs } from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

const copy = {
  whatTitle: { en: "What this is", ar: "ما هو هذا الموقع" },
  what: {
    en: "Cosmos Atlas is an interactive, independent project for exploring the universe — the solar system, stars, galaxies, and the sheer scale of everything — built to feel like discovery rather than a page of facts.",
    ar: "أطلس الكون مشروع تفاعلي مستقل لاستكشاف الكون — النظام الشمسي والنجوم والمجرات ومقياس كل شيء — صُمِّم ليشعرك بالاكتشاف بدلًا من قراءة صفحة حقائق."
  },
  accuracyTitle: { en: "On accuracy", ar: "الدقة العلمية" },
  accuracy: {
    en: "Figures throughout the site are drawn from public sources including NASA, SIMBAD, and the Event Horizon Telescope Collaboration. Approximate values are marked as such, and figures that change over time (like moon counts) are phrased to avoid going stale.",
    ar: "الأرقام في الموقع مستقاة من مصادر عامة تشمل ناسا وSIMBAD وتعاون تلسكوب أفق الحدث. تُميَّز القيم التقريبية بوضوح، وتُصاغ الأرقام المتغيرة بمرور الوقت (كعدد الأقمار) بطريقة تتجنب التقادم."
  },
  disclaimerTitle: { en: "Disclaimer", ar: "إخلاء المسؤولية" },
  disclaimer: {
    en: "Cosmos Atlas is an independent educational project and is not affiliated with NASA, ESA, or any other space agency.",
    ar: "أطلس الكون مشروع تعليمي مستقل، وليس تابعًا لناسا أو وكالة الفضاء الأوروبية أو أي جهة فضائية أخرى."
  }
};

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navAbout") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("aboutTitle")}</h1>

      <div className="mt-8 space-y-8 text-mute leading-8">
        <section>
          <h2 className="font-display text-lg text-starlight mb-2">{copy.whatTitle[lang]}</h2>
          <p>{copy.what[lang]}</p>
        </section>
        <section>
          <h2 className="font-display text-lg text-starlight mb-2">{copy.accuracyTitle[lang]}</h2>
          <p>{copy.accuracy[lang]}</p>
        </section>
        <section className="rounded-lg border border-white/10 bg-navy/40 p-5">
          <h2 className="font-display text-lg text-starlight mb-2">{copy.disclaimerTitle[lang]}</h2>
          <p className="text-starlight">{copy.disclaimer[lang]}</p>
        </section>
      </div>
    </div>
  );
}
