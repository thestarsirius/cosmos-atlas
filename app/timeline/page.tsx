"use client";

import { Breadcrumbs } from "@/components/EntryDetail";
import { useLanguage } from "@/lib/LanguageContext";

interface Era {
  title: { en: string; ar: string };
  time: { en: string; ar: string };
  description: { en: string; ar: string };
  status: "observed" | "model" | "open";
}

const eras: Era[] = [
  { title: { en: "The Big Bang", ar: "الانفجار العظيم" }, time: { en: "≈ 13.8 billion years ago", ar: "≈ 13.8 مليار سنة مضت" }, description: { en: "The universe begins expanding from an extremely hot, dense state. What happened in the very first fraction of a second remains an open area of research.", ar: "بدأ الكون بالتمدد من حالة شديدة الحرارة والكثافة. ما حدث في الجزء الأول من الثانية لا يزال مجال بحث مفتوحًا." }, status: "model" },
  { title: { en: "Cosmic Microwave Background", ar: "الإشعاع الخلفي الكوني الميكروي" }, time: { en: "≈ 380,000 years after", ar: "≈ 380,000 سنة بعده" }, description: { en: "The universe cools enough for light to travel freely for the first time. This afterglow is still detectable today and is one of the strongest pieces of evidence for the Big Bang model.", ar: "برد الكون بما يكفي ليتحرك الضوء بحرية لأول مرة. لا يزال هذا التوهج قابلًا للرصد اليوم، وهو أحد أقوى الأدلة على نموذج الانفجار العظيم." }, status: "observed" },
  { title: { en: "First Stars", ar: "النجوم الأولى" }, time: { en: "≈ 100–250 million years after", ar: "≈ 100–250 مليون سنة بعده" }, description: { en: "Gravity pulls primordial hydrogen and helium into the first stars, ending the universe's 'dark ages.'", ar: "جذبت الجاذبية الهيدروجين والهيليوم البدائيين لتكوين أولى النجوم، منهية 'العصور المظلمة' للكون." }, status: "model" },
  { title: { en: "First Galaxies", ar: "المجرات الأولى" }, time: { en: "≈ 400 million years after", ar: "≈ 400 مليون سنة بعده" }, description: { en: "Stars and gas cluster into the earliest galaxies — some of the most distant ones have been directly imaged by the James Webb Space Telescope.", ar: "تجمّعت النجوم والغاز لتكوّن أولى المجرات — صُوِّر بعض أبعدها مباشرة بتلسكوب جيمس ويب الفضائي." }, status: "observed" },
  { title: { en: "The Milky Way Forms", ar: "تشكّل درب التبانة" }, time: { en: "≈ 13 billion years ago (onward)", ar: "≈ 13 مليار سنة مضت (فصاعدًا)" }, description: { en: "Our home galaxy begins assembling, growing over billions of years through star formation and mergers with smaller galaxies.", ar: "بدأت مجرتنا بالتشكّل، ونمت على مدى مليارات السنين عبر تكوّن النجوم والاندماج مع مجرات أصغر." }, status: "model" },
  { title: { en: "The Solar System Forms", ar: "تشكّل النظام الشمسي" }, time: { en: "≈ 4.6 billion years ago", ar: "≈ 4.6 مليار سنة مضت" }, description: { en: "A cloud of gas and dust collapses under gravity, forming the Sun and, from the leftover disk, the planets.", ar: "انهارت سحابة من الغاز والغبار تحت تأثير الجاذبية، مكوّنة الشمس، وشكّل القرص المتبقي الكواكب." }, status: "observed" },
  { title: { en: "Earth & Early Life", ar: "الأرض ونشأة الحياة" }, time: { en: "≈ 4.5 billion years ago onward", ar: "≈ 4.5 مليار سنة مضت فصاعدًا" }, description: { en: "Earth forms and cools; the earliest evidence of life dates back roughly 3.5–3.8 billion years, though the exact timing is still debated.", ar: "تشكّلت الأرض وبردت؛ وتعود أقدم أدلة الحياة إلى نحو 3.5–3.8 مليار سنة، رغم أن التوقيت الدقيق لا يزال موضع نقاش." }, status: "open" },
  { title: { en: "Today", ar: "اليوم" }, time: { en: "Now", ar: "الآن" }, description: { en: "We observe the universe from a single small planet, using light that in some cases left its source billions of years ago.", ar: "نرصد الكون من كوكب صغير واحد، مستخدمين ضوءًا غادر مصدره في بعض الحالات منذ مليارات السنين." }, status: "observed" }
];

export default function TimelinePage() {
  const { lang, t } = useLanguage();
  const statusKey = { observed: "statusObserved", model: "statusModel", open: "statusOpen" } as const;

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 pb-16">
      <Breadcrumbs items={[{ label: t("breadcrumbHome"), href: "/" }, { label: t("navTimeline") }]} />
      <h1 className="font-display text-3xl sm:text-5xl text-starlight mt-4 text-balance">{t("timelineTitle")}</h1>
      <p className="mt-3 text-mute max-w-prose leading-8">{t("timelineSub")}</p>

      <ol className="mt-12 relative border-s border-white/10 ps-6 space-y-10">
        {eras.map((era) => (
          <li key={era.title.en} className="relative">
            <span className="absolute -start-[27px] top-1 h-3 w-3 rounded-full bg-purple" style={{ boxShadow: "0 0 10px #6C4FD1" }} aria-hidden="true" />
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-display text-lg text-starlight">{era.title[lang]}</h2>
              <span className="rounded-full border border-white/15 px-2 py-0.5 text-[11px] text-mute">{t(statusKey[era.status])}</span>
            </div>
            <p className="text-sm text-faint mt-0.5">{era.time[lang]}</p>
            <p className="mt-2 text-mute leading-7 max-w-prose">{era.description[lang]}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
