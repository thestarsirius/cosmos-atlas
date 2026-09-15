import { CosmicEntry } from "./types";

const NASA = { sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/" };
const ly = { en: "light-years", ar: "سنة ضوئية" };

export const nebulae: CosmicEntry[] = [
  {
    id: "orion-nebula", slug: "orion-nebula", category: "nebula",
    name: { en: "Orion Nebula", ar: "سديم الجبار" },
    tagline: { en: "A stellar nursery visible to the naked eye", ar: "حضانة نجمية مرئية بالعين المجردة" },
    summary: { en: "The Orion Nebula (M42) is one of the brightest nebulae in the sky and a region of active star formation.", ar: "سديم الجبار (M42) أحد ألمع السدم في السماء، ومنطقة نشطة لتكوّن النجوم." },
    deepDive: { en: "Within its glowing clouds of gas and dust, radiation from young, hot stars ionizes the surrounding hydrogen, making it glow — a visible snapshot of stars being born.", ar: "داخل سحبه المتوهجة من الغاز والغبار، يؤيّن إشعاع النجوم الفتية الحارة الهيدروجين المحيط فيتوهج — لقطة مرئية لنجوم في طور الولادة." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 1,344", unit: ly, approximate: true },
      { label: { en: "Type", ar: "النوع" }, value: "Emission nebula", unit: { en: "", ar: "سديم انبعاثي" } }
    ],
    facts: [{ en: "The Orion Nebula is visible to the naked eye as a fuzzy patch in Orion's 'sword.'", ar: "يمكن رؤية سديم الجبار بالعين المجردة كبقعة ضبابية في 'سيف الجبار'." }],
    colorHex: "#FF7A9C",
    ...NASA
  },
  {
    id: "crab-nebula", slug: "crab-nebula", category: "nebula",
    name: { en: "Crab Nebula", ar: "سديم السرطان" },
    tagline: { en: "The remnant of a supernova recorded by ancient astronomers", ar: "بقايا مستعر أعظم رصده الفلكيون القدامى" },
    summary: { en: "The Crab Nebula (M1) is the expanding remains of a massive star that exploded as a supernova, observed and recorded by Chinese astronomers in 1054 CE.", ar: "سديم السرطان (M1) بقايا متمددة لنجم ضخم انفجر كمستعر أعظم، رصده وسجّله فلكيون صينيون عام 1054م." },
    deepDive: { en: "At its center lies the Crab Pulsar, a rapidly rotating neutron star left behind by the explosion, spinning roughly 30 times per second.", ar: "في مركزه يقع نابض السرطان، نجم نيوتروني سريع الدوران خلّفه الانفجار، يدور حول نفسه نحو 30 مرة في الثانية." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 6,500", unit: ly, approximate: true },
      { label: { en: "Type", ar: "النوع" }, value: "Supernova remnant", unit: { en: "", ar: "بقايا مستعر أعظم" } }
    ],
    facts: [{ en: "The supernova that created the Crab Nebula was recorded by astronomers in 1054 CE and was visible in daylight.", ar: "سجّل الفلكيون المستعر الأعظم الذي كوّن سديم السرطان عام 1054م، وكان مرئيًا نهارًا." }],
    colorHex: "#7ADFFF",
    ...NASA
  },
  {
    id: "helix-nebula", slug: "helix-nebula", category: "nebula",
    name: { en: "Helix Nebula", ar: "السديم الحلزوني" },
    tagline: { en: "A dying sun-like star's final glow", ar: "التوهج الأخير لنجم شبيه بالشمس يحتضر" },
    summary: { en: "The Helix Nebula is a planetary nebula — the outer layers shed by a star like the Sun as it neared the end of its life.", ar: "السديم الحلزوني سديم كوكبي — طبقات خارجية تخلّى عنها نجم شبيه بالشمس وهو يقترب من نهاية حياته." },
    deepDive: { en: "Despite the name, planetary nebulae have nothing to do with planets; the term comes from their planet-like round appearance in early telescopes. The Helix offers a preview of what will eventually happen to the Sun.", ar: "رغم الاسم، لا علاقة للسدم الكوكبية بالكواكب؛ يعود التسمية إلى مظهرها الدائري الشبيه بالكواكب في التلسكوبات المبكرة. يقدّم السديم الحلزوني معاينة لما سيحدث للشمس يومًا ما." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 650", unit: ly, approximate: true },
      { label: { en: "Type", ar: "النوع" }, value: "Planetary nebula", unit: { en: "", ar: "سديم كوكبي" } }
    ],
    facts: [{ en: "The Helix Nebula shows roughly what our own Sun's remains may look like billions of years from now.", ar: "يُظهر السديم الحلزوني تقريبًا كيف قد تبدو بقايا شمسنا بعد مليارات السنين." }],
    colorHex: "#A0E8D0",
    ...NASA
  }
];

export function getNebulaBySlug(slug: string) {
  return nebulae.find((n) => n.slug === slug);
}
