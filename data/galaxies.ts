import { CosmicEntry } from "./types";

const NASA = { sourceName: "NASA Science", sourceUrl: "https://science.nasa.gov/" };
const mly = { en: "light-years", ar: "سنة ضوئية" };

export const galaxies: CosmicEntry[] = [
  {
    id: "milky-way", slug: "milky-way", category: "galaxy",
    name: { en: "Milky Way", ar: "درب التبانة" },
    tagline: { en: "Our home galaxy", ar: "مجرتنا الأم" },
    summary: { en: "The Milky Way is a barred spiral galaxy containing our Sun and hundreds of billions of other stars.", ar: "درب التبانة مجرة حلزونية مقضبة تحتضن شمسنا ومئات مليارات النجوم الأخرى." },
    deepDive: { en: "We view the Milky Way from within it, which is why it appears as a hazy band across the night sky rather than a spiral shape we can see face-on. At its center lies Sagittarius A*, a supermassive black hole.", ar: "نحن نرى درب التبانة من داخلها، لذا تبدو كشريط ضبابي عبر السماء الليلية بدلًا من شكل حلزوني نراه من الأمام. في مركزها يقع القوس أ*، ثقب أسود هائل." },
    stats: [
      { label: { en: "Type", ar: "النوع" }, value: "Barred spiral", unit: { en: "", ar: "حلزونية مقضبة" } },
      { label: { en: "Diameter", ar: "القطر" }, value: "≈ 100,000", unit: mly, approximate: true },
      { label: { en: "Estimated stars", ar: "عدد النجوم التقديري" }, value: "100–400", unit: { en: "billion", ar: "مليار" } }
    ],
    facts: [{ en: "The Milky Way and the Andromeda Galaxy are on a slow collision course, expected in several billion years.", ar: "درب التبانة ومجرة أندروميدا في مسار تصادم بطيء، متوقع خلال عدة مليارات من السنين." }],
    colorHex: "#8B72E8",
    ...NASA
  },
  {
    id: "andromeda", slug: "andromeda", category: "galaxy",
    name: { en: "Andromeda Galaxy", ar: "مجرة أندروميدا" },
    tagline: { en: "Our nearest large galactic neighbor", ar: "أقرب جارة مجرية كبيرة لنا" },
    summary: { en: "Andromeda (M31) is the closest large spiral galaxy to the Milky Way and is visible to the naked eye under dark skies.", ar: "أندروميدا (M31) أقرب مجرة حلزونية كبيرة إلى درب التبانة، وهي مرئية بالعين المجردة تحت سماء مظلمة." },
    deepDive: { en: "Andromeda is approaching the Milky Way at roughly 110 km/s, and the two galaxies are expected to merge in the distant future — an event sometimes nicknamed 'Milkomeda.'", ar: "تقترب أندروميدا من درب التبانة بسرعة نحو 110 كم/ث، ويُتوقّع أن تندمج المجرتان في المستقبل البعيد — حدث يُلقَّب أحيانًا بـ'ميلكوميدا'." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 2.5 million", unit: mly, approximate: true },
      { label: { en: "Type", ar: "النوع" }, value: "Spiral", unit: { en: "", ar: "حلزونية" } }
    ],
    facts: [{ en: "Andromeda is the most distant object easily visible to the naked eye.", ar: "أندروميدا هي أبعد جرم يمكن رؤيته بالعين المجردة بسهولة." }],
    colorHex: "#6FA8FF",
    ...NASA
  },
  {
    id: "whirlpool", slug: "whirlpool", category: "galaxy",
    name: { en: "Whirlpool Galaxy", ar: "مجرة الدوامة" },
    tagline: { en: "A textbook spiral, seen face-on", ar: "مجرة حلزونية نموذجية، مرئية من الأمام" },
    summary: { en: "The Whirlpool Galaxy (M51) is a classic grand-design spiral galaxy, famous for its clearly defined arms and a smaller companion galaxy interacting with it.", ar: "مجرة الدوامة (M51) مجرة حلزونية كلاسيكية، تشتهر بأذرعها الواضحة ومجرة مرافقة أصغر تتفاعل معها." },
    deepDive: { en: "The gravitational interaction with its smaller companion, NGC 5195, is thought to have helped trigger the star formation visible along the Whirlpool's arms.", ar: "يُعتقد أن التفاعل الجاذبي مع مرافقتها الأصغر، NGC 5195، ساهم في تحفيز تكوّن النجوم الظاهر على طول أذرع مجرة الدوامة." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 23 million", unit: mly, approximate: true },
      { label: { en: "Type", ar: "النوع" }, value: "Spiral", unit: { en: "", ar: "حلزونية" } }
    ],
    facts: [{ en: "Its well-defined spiral arms make it one of the most-imaged galaxies by amateur astronomers.", ar: "أذرعها الحلزونية الواضحة تجعلها من أكثر المجرات تصويرًا لدى هواة الفلك." }],
    colorHex: "#B9A6FF",
    ...NASA
  }
];

export function getGalaxyBySlug(slug: string) {
  return galaxies.find((g) => g.slug === slug);
}
