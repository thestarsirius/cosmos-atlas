import { CosmicEntry } from "./types";

const NASA = { sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/" };
const km = { en: "km", ar: "كم" };

export const moons: CosmicEntry[] = [
  {
    id: "moon", slug: "moon", category: "moon",
    name: { en: "The Moon", ar: "القمر" },
    tagline: { en: "Earth's only natural satellite", ar: "القمر الطبيعي الوحيد للأرض" },
    summary: { en: "The Moon is the fifth-largest moon in the solar system and the only world beyond Earth that humans have physically visited.", ar: "القمر خامس أكبر قمر في النظام الشمسي، والعالم الوحيد خارج الأرض الذي زاره البشر فعليًا." },
    deepDive: { en: "The leading scientific model holds that the Moon formed from debris after a Mars-sized body collided with the early Earth. Its gravity drives most of Earth's ocean tides.", ar: "يفترض النموذج العلمي السائد أن القمر تشكّل من حطام ناتج عن اصطدام جرم بحجم المريخ بالأرض في مراحلها المبكرة. تدفع جاذبيته معظم مدّ وجزر محيطات الأرض." },
    stats: [
      { label: { en: "Diameter", ar: "القطر" }, value: "3,474", unit: km, approximate: true },
      { label: { en: "Distance from Earth", ar: "البعد عن الأرض" }, value: "≈ 384,400", unit: km, approximate: true },
      { label: { en: "Orbital period", ar: "مدة الدوران المداري" }, value: "27.3", unit: { en: "days", ar: "يومًا" } }
    ],
    facts: [{ en: "The same side of the Moon always faces Earth because its rotation is tidally locked to its orbit.", ar: "يواجه الوجه نفسه من القمر الأرض دائمًا لأن دورانه مرتبط مديًا بمداره." }],
    colorHex: "#D9D9D9",
    ...NASA
  },
  {
    id: "europa", slug: "europa", category: "moon",
    name: { en: "Europa", ar: "أوروبا" },
    tagline: { en: "An icy moon with a hidden ocean", ar: "قمر جليدي يخفي محيطًا" },
    summary: { en: "Europa, one of Jupiter's large moons, has a smooth icy crust that likely covers a liquid water ocean — making it a leading target in the search for life beyond Earth.", ar: "أوروبا، أحد أقمار المشتري الكبرى، له قشرة جليدية ناعمة تغطي على الأرجح محيطًا من الماء السائل — ما يجعله هدفًا رئيسيًا في البحث عن حياة خارج الأرض." },
    deepDive: { en: "Tidal flexing from Jupiter's gravity is thought to keep Europa's subsurface ocean liquid despite the moon's distance from the Sun.", ar: "يُعتقد أن انثناء المد الناتج عن جاذبية المشتري يبقي محيط أوروبا تحت السطحي سائلًا رغم بُعد القمر عن الشمس." },
    stats: [
      { label: { en: "Diameter", ar: "القطر" }, value: "3,122", unit: km, approximate: true },
      { label: { en: "Orbits", ar: "يدور حول" }, value: "Jupiter", unit: { en: "", ar: "المشتري" } }
    ],
    facts: [{ en: "Europa may hold more liquid water than all of Earth's oceans combined, beneath its icy shell.", ar: "قد يحتوي أوروبا تحت قشرته الجليدية على ماء سائل أكثر من كل محيطات الأرض مجتمعة." }],
    colorHex: "#E8DCC8",
    ...NASA
  },
  {
    id: "titan", slug: "titan", category: "moon",
    name: { en: "Titan", ar: "تيتان" },
    tagline: { en: "Saturn's moon with lakes of liquid methane", ar: "قمر زحل ذو بحيرات من الميثان السائل" },
    summary: { en: "Titan is Saturn's largest moon and the only moon in the solar system known to have a substantial atmosphere.", ar: "تيتان أكبر أقمار زحل، والقمر الوحيد في النظام الشمسي المعروف بامتلاكه غلافًا جويًا كثيفًا." },
    deepDive: { en: "Titan's surface hosts lakes and rivers — not of water, but of liquid methane and ethane, given the extreme cold. It's one of the most Earth-like worlds in terms of active surface processes.", ar: "يضم سطح تيتان بحيرات وأنهارًا — ليست من الماء، بل من الميثان والإيثان السائلين نظرًا لبرودته الشديدة. هو من أكثر العوالم شبهًا بالأرض من حيث العمليات السطحية النشطة." },
    stats: [
      { label: { en: "Diameter", ar: "القطر" }, value: "5,150", unit: km, approximate: true },
      { label: { en: "Orbits", ar: "يدور حول" }, value: "Saturn", unit: { en: "", ar: "زحل" } }
    ],
    facts: [{ en: "Titan is the only moon known to have a dense atmosphere and stable liquid on its surface.", ar: "تيتان القمر الوحيد المعروف بامتلاكه غلافًا جويًا كثيفًا وسوائل مستقرة على سطحه." }],
    colorHex: "#E8B563",
    ...NASA
  }
];

export function getMoonBySlug(slug: string) {
  return moons.find((m) => m.slug === slug);
}
