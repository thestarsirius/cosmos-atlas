import { CosmicEntry } from "./types";

const NASA = { sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/" };

export const asteroids: CosmicEntry[] = [
  {
    id: "ceres", slug: "ceres", category: "asteroid",
    name: { en: "Ceres", ar: "سيريس" },
    tagline: { en: "The largest object in the asteroid belt", ar: "أكبر جرم في حزام الكويكبات" },
    summary: { en: "Ceres is both the largest body in the asteroid belt and classified as a dwarf planet — large enough that its own gravity has pulled it into a round shape.", ar: "سيريس أكبر جرم في حزام الكويكبات ويُصنَّف أيضًا كوكبًا قزمًا — كبير بما يكفي لتشكّله كرويًا بفعل جاذبيته الذاتية." },
    deepDive: { en: "NASA's Dawn mission orbited Ceres starting in 2015, finding bright salt deposits and evidence suggesting a subsurface reservoir of briny water.", ar: "دارت مركبة داون التابعة لناسا حول سيريس ابتداءً من 2015، ووجدت رواسب ملحية لامعة وأدلة توحي بوجود خزان مائي مالح تحت سطحه." },
    stats: [
      { label: { en: "Diameter", ar: "القطر" }, value: "≈ 940", unit: { en: "km", ar: "كم" }, approximate: true },
      { label: { en: "Location", ar: "الموقع" }, value: "Main asteroid belt", unit: { en: "", ar: "حزام الكويكبات الرئيسي" } }
    ],
    facts: [{ en: "Ceres was the first asteroid discovered, in 1801, and was originally classified as a planet.", ar: "كان سيريس أول كويكب يُكتشف، عام 1801، وصُنِّف في الأصل كوكبًا." }],
    colorHex: "#A8A296",
    ...NASA
  },
  {
    id: "bennu", slug: "bennu", category: "asteroid",
    name: { en: "Bennu", ar: "بينو" },
    tagline: { en: "A near-Earth asteroid sampled by spacecraft", ar: "كويكب قريب من الأرض أخذت منه مركبة فضائية عينة" },
    summary: { en: "Bennu is a small, carbon-rich near-Earth asteroid that NASA's OSIRIS-REx mission visited and collected a sample from, returned to Earth in 2023.", ar: "بينو كويكب صغير غني بالكربون قريب من الأرض، زارته مركبة أوزوريس-ركس التابعة لناسا وجمعت منه عينة أعادتها إلى الأرض عام 2023." },
    deepDive: { en: "Bennu's rubble-pile structure surprised mission scientists — it's loosely packed rock and dust rather than a solid body, and its surface proved rockier and rougher than expected from telescope observations.", ar: "فاجأ تركيب بينو الركامي علماء المهمة — فهو صخور وغبار مترابطة بشكل غير محكم بدلًا من جسم صلب، وتبيّن أن سطحه أكثر صخرية وخشونة مما توقّعته أرصاد التلسكوبات." },
    stats: [
      { label: { en: "Diameter", ar: "القطر" }, value: "≈ 490", unit: { en: "meters", ar: "متر" }, approximate: true }
    ],
    facts: [{ en: "The sample OSIRIS-REx returned from Bennu in 2023 was the largest asteroid sample ever brought to Earth.", ar: "كانت العينة التي أعادتها أوزوريس-ركس من بينو عام 2023 أكبر عينة كويكب أُحضرت إلى الأرض على الإطلاق." }],
    colorHex: "#4A4640",
    ...NASA
  }
];

export function getAsteroidBySlug(slug: string) {
  return asteroids.find((a) => a.slug === slug);
}
