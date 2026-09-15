import { CosmicEntry } from "./types";

const NASA = { sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/" };
const years = { en: "years", ar: "سنة" };

export const comets: CosmicEntry[] = [
  {
    id: "halley", slug: "halley", category: "comet",
    name: { en: "Halley's Comet", ar: "مذنب هالي" },
    tagline: { en: "The most famous returning comet", ar: "أشهر مذنب دوري" },
    summary: { en: "Halley's Comet is the best-known periodic comet, visible from Earth roughly every 76 years — the first comet confirmed to be periodic.", ar: "مذنب هالي أشهر مذنب دوري معروف، يُرى من الأرض كل 76 عامًا تقريبًا — وهو أول مذنب تأكّدت دوريته." },
    deepDive: { en: "Edmond Halley calculated in 1705 that comet sightings from 1531, 1607, and 1682 were the same object and correctly predicted its return in 1758, after his own death. It last appeared in 1986 and is expected back around 2061.", ar: "حسب إدموند هالي عام 1705 أن مشاهدات مذنبية من أعوام 1531 و1607 و1682 كانت للجرم نفسه، وتنبأ بدقة بعودته عام 1758، بعد وفاته هو نفسه. ظهر آخر مرة عام 1986، ويُتوقَّع أن يعود نحو عام 2061." },
    stats: [
      { label: { en: "Orbital period", ar: "الدورة المدارية" }, value: "≈ 76", unit: years, approximate: true },
      { label: { en: "Nucleus size", ar: "حجم النواة" }, value: "≈ 15", unit: { en: "km", ar: "كم" }, approximate: true }
    ],
    facts: [{ en: "Halley's Comet's return was the first successful prediction of a comet's reappearance.", ar: "كانت عودة مذنب هالي أول تنبؤ ناجح بعودة مذنب." }],
    colorHex: "#CDEFFF",
    ...NASA
  },
  {
    id: "neowise", slug: "neowise", category: "comet",
    name: { en: "Comet NEOWISE", ar: "مذنب نيووايز" },
    tagline: { en: "A bright naked-eye comet from 2020", ar: "مذنب لامع مرئي بالعين المجردة من عام 2020" },
    summary: { en: "Comet NEOWISE became one of the brightest comets visible from the Northern Hemisphere in decades when it passed near Earth in July 2020.", ar: "أصبح مذنب نيووايز أحد ألمع المذنبات المرئية من نصف الكرة الشمالي منذ عقود عندما مرّ قرب الأرض في يوليو 2020." },
    deepDive: { en: "Discovered by NASA's NEOWISE space telescope in March 2020, the comet survived its close pass by the Sun and became easily visible to the naked eye shortly after — a rare treat, since many comets don't survive solar heating intact.", ar: "اكتشفه تلسكوب نيووايز الفضائي التابع لناسا في مارس 2020، ونجا المذنب من مروره القريب بالشمس وأصبح مرئيًا بسهولة بالعين المجردة بعد ذلك بوقت قصير — حدث نادر، إذ لا تنجو مذنبات كثيرة سليمة من حرارة الشمس." },
    stats: [
      { label: { en: "Orbital period", ar: "الدورة المدارية" }, value: "≈ 6,800", unit: years, approximate: true }
    ],
    facts: [{ en: "Comet NEOWISE won't return to the inner solar system for about 6,800 years.", ar: "لن يعود مذنب نيووايز إلى النظام الشمسي الداخلي قبل نحو 6,800 سنة." }],
    colorHex: "#FFE4B5",
    ...NASA
  }
];

export function getCometBySlug(slug: string) {
  return comets.find((c) => c.slug === slug);
}
