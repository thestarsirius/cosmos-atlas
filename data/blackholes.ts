import { CosmicEntry } from "./types";

const EHT = { sourceName: "Event Horizon Telescope Collaboration", sourceUrl: "https://eventhorizontelescope.org/" };
const ly = { en: "light-years", ar: "سنة ضوئية" };
const solarMasses = { en: "solar masses", ar: "كتلة شمسية" };

export const blackHoles: CosmicEntry[] = [
  {
    id: "sagittarius-a-star", slug: "sagittarius-a-star", category: "black-hole",
    name: { en: "Sagittarius A*", ar: "القوس أ*" },
    tagline: { en: "The supermassive black hole at our galaxy's center", ar: "الثقب الأسود الهائل في مركز مجرتنا" },
    summary: { en: "Sagittarius A* is the supermassive black hole at the center of the Milky Way, imaged directly for the first time by the Event Horizon Telescope in 2022.", ar: "القوس أ* هو الثقب الأسود الهائل في مركز درب التبانة، صوّره تلسكوب أفق الحدث مباشرة لأول مرة عام 2022." },
    deepDive: { en: "Its presence was inferred for decades by tracking the orbits of stars whirling around an invisible, immensely massive object — before the Event Horizon Telescope collaboration produced a direct image of its shadow against surrounding glowing gas.", ar: "استُدلّ على وجوده لعقود بتتبّع مدارات نجوم تدور حول جرم غير مرئي هائل الكتلة — قبل أن ينتج تعاون تلسكوب أفق الحدث صورة مباشرة لظله على خلفية الغاز المتوهج المحيط." },
    stats: [
      { label: { en: "Mass", ar: "الكتلة" }, value: "≈ 4.3 million", unit: solarMasses, approximate: true },
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 26,000", unit: ly, approximate: true }
    ],
    facts: [{ en: "Astronomers inferred Sagittarius A* by tracking stars orbiting an invisible point for years before it was ever imaged.", ar: "استنتج الفلكيون وجود القوس أ* بتتبّع نجوم تدور حول نقطة غير مرئية لسنوات قبل أن يُصوَّر فعليًا." }],
    colorHex: "#1A1030",
    ...EHT
  },
  {
    id: "m87-star", slug: "m87-star", category: "black-hole",
    name: { en: "M87*", ar: "M87*" },
    tagline: { en: "The first black hole ever directly imaged", ar: "أول ثقب أسود يُصوَّر مباشرة على الإطلاق" },
    summary: { en: "M87* is the supermassive black hole at the center of the galaxy Messier 87, and the subject of the first-ever direct image of a black hole, released in 2019.", ar: "M87* هو الثقب الأسود الهائل في مركز مجرة مسييه 87، وموضوع أول صورة مباشرة لثقب أسود على الإطلاق، نُشرت عام 2019." },
    deepDive: { en: "The image, produced by the Event Horizon Telescope — a network of radio observatories acting as one Earth-sized instrument — showed a glowing ring of superheated gas around a dark central shadow, matching predictions from general relativity.", ar: "أظهرت الصورة، التي أنتجها تلسكوب أفق الحدث — شبكة من المراصد الراديوية تعمل كأداة واحدة بحجم الأرض — حلقة متوهجة من الغاز فائق الحرارة حول ظل مركزي مظلم، مطابقة لتنبؤات النسبية العامة." },
    stats: [
      { label: { en: "Mass", ar: "الكتلة" }, value: "≈ 6.5 billion", unit: solarMasses, approximate: true },
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 55 million", unit: ly, approximate: true }
    ],
    facts: [{ en: "The 2019 image of M87* was assembled from data collected by telescopes on multiple continents, linked to act as one giant radio dish.", ar: "جُمِّعت صورة M87* عام 2019 من بيانات رصدتها تلسكوبات في عدة قارات، مترابطة لتعمل كطبق راديوي عملاق واحد." }],
    colorHex: "#2A1840",
    ...EHT
  }
];

export function getBlackHoleBySlug(slug: string) {
  return blackHoles.find((b) => b.slug === slug);
}
