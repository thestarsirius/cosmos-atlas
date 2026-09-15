"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

interface ScaleStep {
  label: { en: string; ar: string };
  size: { en: string; ar: string };
  description: { en: string; ar: string };
  visualScale: number;
}

const steps: ScaleStep[] = [
  { label: { en: "Human", ar: "الإنسان" }, size: { en: "≈ 1.7 m", ar: "≈ 1.7 م" }, description: { en: "You, standing on the surface of a small rocky planet.", ar: "أنت، واقفًا على سطح كوكب صخري صغير." }, visualScale: 0.06 },
  { label: { en: "Earth", ar: "الأرض" }, size: { en: "≈ 12,742 km across", ar: "≈ 12,742 كم قطرًا" }, description: { en: "Our home planet — big enough to hold oceans and continents, tiny against everything ahead.", ar: "كوكبنا الأم — كبير بما يكفي ليحمل محيطات وقارات، لكنه ضئيل أمام كل ما هو قادم." }, visualScale: 0.18 },
  { label: { en: "Jupiter", ar: "المشتري" }, size: { en: "≈ 139,820 km across", ar: "≈ 139,820 كم قطرًا" }, description: { en: "The largest planet — over 11 times Earth's diameter.", ar: "أكبر الكواكب — يفوق قطر الأرض بأكثر من 11 مرة." }, visualScale: 0.3 },
  { label: { en: "The Sun", ar: "الشمس" }, size: { en: "≈ 1.39 million km across", ar: "≈ 1.39 مليون كم قطرًا" }, description: { en: "About 109 Earths could fit across the Sun's diameter.", ar: "يمكن أن تصطف نحو 109 أرضًا عبر قطر الشمس." }, visualScale: 0.45 },
  { label: { en: "The Solar System", ar: "النظام الشمسي" }, size: { en: "≈ 9 billion km wide (to Neptune)", ar: "≈ 9 مليار كم اتساعًا (حتى نبتون)" }, description: { en: "The Sun and everything gravitationally bound to it.", ar: "الشمس وكل ما يرتبط بها بفعل الجاذبية." }, visualScale: 0.6 },
  { label: { en: "Nearby Stars", ar: "النجوم القريبة" }, size: { en: "light-years apart", ar: "سنوات ضوئية تفصل بينها" }, description: { en: "The distances between even 'close' stars dwarf the entire solar system.", ar: "حتى النجوم 'القريبة' تفصلها مسافات تتضاءل أمامها أبعاد النظام الشمسي بأكمله." }, visualScale: 0.7 },
  { label: { en: "The Milky Way", ar: "درب التبانة" }, size: { en: "≈ 100,000 light-years across", ar: "≈ 100,000 سنة ضوئية قطرًا" }, description: { en: "Our home galaxy, home to hundreds of billions of stars.", ar: "مجرتنا الأم، موطن مئات مليارات النجوم." }, visualScale: 0.8 },
  { label: { en: "Galaxy Clusters", ar: "عناقيد المجرات" }, size: { en: "millions of light-years across", ar: "ملايين السنين الضوئية اتساعًا" }, description: { en: "Galaxies themselves gather into vast, gravitationally bound clusters.", ar: "تتجمع المجرات نفسها في عناقيد هائلة مرتبطة بالجاذبية." }, visualScale: 0.9 },
  { label: { en: "The Observable Universe", ar: "الكون المرصود" }, size: { en: "≈ 93 billion light-years across", ar: "≈ 93 مليار سنة ضوئية قطرًا" }, description: { en: "The farthest we can possibly see — the edge of what light has had time to reach us from.", ar: "أبعد ما يمكننا رؤيته على الإطلاق — حافة ما استطاع الضوء الوصول إلينا منه." }, visualScale: 1 }
];

export default function CosmicScale() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const step = steps[index]!;

  return (
    <div>
      <div className="relative h-72 sm:h-96 rounded-xl border border-white/10 bg-navy/30 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.label.en}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-full"
            style={{
              width: `${8 + step.visualScale * 70}%`,
              height: `${8 + step.visualScale * 70}%`,
              background: "radial-gradient(circle, rgba(139,114,232,0.5), rgba(111,168,255,0.15) 60%, transparent 80%)",
              border: "1px solid rgba(255,255,255,0.15)"
            }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
          <p className="font-display text-xl text-starlight">{step.label[lang]}</p>
          <p className="text-sm text-mute mt-1">{step.size[lang]}</p>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={steps.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="mt-6 w-full accent-purple"
        aria-label="Cosmic scale slider"
      />
      <div className="mt-1 flex justify-between text-xs text-faint">
        <span>{steps[0]!.label[lang]}</span>
        <span>{steps[steps.length - 1]!.label[lang]}</span>
      </div>

      <p className="mt-6 text-mute leading-7 max-w-prose">{step.description[lang]}</p>
    </div>
  );
}
