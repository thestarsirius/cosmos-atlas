import { CosmicEntry } from "./types";

const SIMBAD = { sourceName: "SIMBAD Astronomical Database", sourceUrl: "https://simbad.cds.unistra.fr/simbad/" };
const ly = { en: "light-years", ar: "سنة ضوئية" };

export const stars: CosmicEntry[] = [
  {
    id: "sirius", slug: "sirius", category: "star",
    name: { en: "Sirius", ar: "الشعرى اليمانية" },
    tagline: { en: "The brightest star in Earth's night sky", ar: "ألمع نجم في سماء الأرض الليلية" },
    summary: { en: "Sirius, in the constellation Canis Major, is the brightest star visible from Earth (excluding the Sun) — partly because it's genuinely luminous, and partly because it's relatively close.", ar: "الشعرى اليمانية، في كوكبة الكلب الأكبر، هي ألمع نجم مرئي من الأرض (باستثناء الشمس) — جزئيًا لسطوعها الحقيقي، وجزئيًا لقربها النسبي." },
    deepDive: { en: "Sirius is actually a binary system: Sirius A, a hot white main-sequence star, and Sirius B, a faint white dwarf — the collapsed remnant of a once-larger star.", ar: "الشعرى اليمانية في الحقيقة نظام ثنائي: الشعرى أ، نجم أبيض حار من النسق الأساسي، والشعرى ب، قزم أبيض خافت — بقايا منهارة لنجم كان أكبر يومًا ما." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 8.6", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "A1V", unit: { en: "", ar: "" } },
      { label: { en: "Apparent magnitude", ar: "القدر الظاهري" }, value: "-1.46", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Sirius is a two-star system — the brighter Sirius A and a white dwarf companion, Sirius B.", ar: "الشعرى اليمانية نظام من نجمين — الشعرى أ الأكثر سطوعًا، ورفيقه القزم الأبيض الشعرى ب." }],
    colorHex: "#CFE3FF", mapX: 62, mapY: 38,
    ...SIMBAD
  },
  {
    id: "vega", slug: "vega", category: "star",
    name: { en: "Vega", ar: "النسر الواقع" },
    tagline: { en: "One of the most studied stars beyond the Sun", ar: "أحد أكثر النجوم دراسة خارج الشمس" },
    summary: { en: "Vega, in the constellation Lyra, was one of the first stars ever photographed and one of the first to have its spectrum recorded.", ar: "النسر الواقع، في كوكبة القيثارة، كان من أوائل النجوم التي صُوِّرت وأولها التي سُجِّل طيفها." },
    deepDive: { en: "Vega spins remarkably fast, which flattens it slightly at the poles. A surrounding disk of dust suggests a system possibly still forming planets.", ar: "يدور النسر الواقع حول نفسه بسرعة لافتة، ما يسطّحه قليلًا عند قطبيه. يحيط به قرص من الغبار يوحي بأن كواكبه ربما لا تزال قيد التشكّل." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 25", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "A0V", unit: { en: "", ar: "" } },
      { label: { en: "Apparent magnitude", ar: "القدر الظاهري" }, value: "0.03", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Vega served as the zero point for the magnitude scale for much of the 20th century.", ar: "استُخدم النسر الواقع كنقطة صفر لمقياس القدر النجمي لمعظم القرن العشرين." }],
    colorHex: "#E8F0FF", mapX: 22, mapY: 60,
    ...SIMBAD
  },
  {
    id: "polaris", slug: "polaris", category: "star",
    name: { en: "Polaris", ar: "النجم القطبي" },
    tagline: { en: "The North Star", ar: "نجم الشمال" },
    summary: { en: "Polaris sits almost directly above Earth's north celestial pole, which is why it appears nearly stationary while other stars wheel around it.", ar: "يقع النجم القطبي فوق القطب السماوي الشمالي للأرض تقريبًا، لذا يبدو شبه ثابت بينما تدور النجوم الأخرى حوله." },
    deepDive: { en: "Polaris is actually a multiple star system, and its primary component is a type of pulsating star called a Cepheid variable — a class of star crucial to how astronomers measure cosmic distances.", ar: "النجم القطبي في الحقيقة نظام نجمي متعدد، ومكوّنه الرئيسي نجم نابض من نوع القيفاويات — وهي فئة نجوم أساسية في طريقة قياس الفلكيين للمسافات الكونية." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 433", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "F7Ib", unit: { en: "", ar: "" } },
      { label: { en: "Apparent magnitude", ar: "القدر الظاهري" }, value: "1.98", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Polaris isn't the brightest star in the sky — it's notable for its position, not its brilliance.", ar: "النجم القطبي ليس ألمع نجم في السماء — أهميته في موقعه لا في سطوعه." }],
    colorHex: "#FFF6E0", mapX: 50, mapY: 15,
    ...SIMBAD
  },
  {
    id: "betelgeuse", slug: "betelgeuse", category: "star",
    name: { en: "Betelgeuse", ar: "منكب الجوزاء" },
    tagline: { en: "A dying red supergiant nearing the end of its life", ar: "عملاق أحمر فائق يحتضر قرب نهاية حياته" },
    summary: { en: "Betelgeuse, marking Orion's shoulder, is a red supergiant so large that if placed at the Sun's position, it would extend past the orbit of Jupiter.", ar: "منكب الجوزاء، الذي يمثّل كتف الجوزاء، عملاق أحمر فائق كبير لدرجة أنه لو وُضع مكان الشمس لامتد إلى ما بعد مدار المشتري." },
    deepDive: { en: "Betelgeuse is expected to end its life in a supernova — though on an astronomical timescale, which could mean anywhere from now to hundreds of thousands of years from now. Its brightness noticeably dimmed in 2019–2020, likely due to an ejected dust cloud.", ar: "يُتوقّع أن ينتهي منكب الجوزاء بمستعر أعظم — لكن على مقياس زمني فلكي، وهو ما قد يعني أي وقت بين الآن ومئات آلاف السنين القادمة. خفت لمعانه بشكل ملحوظ بين 2019 و2020، على الأرجح بسبب سحابة غبار انبعثت منه." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 640", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "M1-2Ia-Iab", unit: { en: "", ar: "" } },
      { label: { en: "Radius", ar: "نصف القطر" }, value: "≈ 700×", unit: { en: "the Sun's radius", ar: "نصف قطر الشمس" }, approximate: true }
    ],
    facts: [{ en: "If Betelgeuse replaced the Sun, its surface would reach roughly to Jupiter's orbit.", ar: "لو حلّ منكب الجوزاء محل الشمس، لامتد سطحه تقريبًا حتى مدار المشتري." }],
    colorHex: "#FF8A5C", mapX: 78, mapY: 55,
    ...SIMBAD
  },
  {
    id: "rigel", slug: "rigel", category: "star",
    name: { en: "Rigel", ar: "رجل الجبار" },
    tagline: { en: "A blue supergiant lighting up Orion", ar: "عملاق أزرق فائق يضيء كوكبة الجبار" },
    summary: { en: "Rigel is one of the most luminous stars known, tens of thousands of times brighter than the Sun despite its relative distance.", ar: "رجل الجبار من أكثر النجوم المعروفة سطوعًا، يفوق سطوع الشمس بعشرات الآلاف من المرات رغم بُعده النسبي." },
    deepDive: { en: "As a blue supergiant, Rigel burns hot and fast; stars this massive live far shorter lives than the Sun and are expected to end in a supernova.", ar: "بصفته عملاقًا أزرق فائقًا، يحترق رجل الجبار بحرارة وسرعة؛ فالنجوم الضخمة كهذا تعيش حياة أقصر بكثير من الشمس ويُتوقّع أن تنتهي بمستعر أعظم." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 860", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "B8Ia", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Rigel is tens of thousands of times more luminous than the Sun.", ar: "يفوق سطوع رجل الجبار سطوع الشمس بعشرات الآلاف من المرات." }],
    colorHex: "#B9D4FF", mapX: 85, mapY: 62,
    ...SIMBAD
  },
  {
    id: "proxima-centauri", slug: "proxima-centauri", category: "star",
    name: { en: "Proxima Centauri", ar: "قنطورس الأقرب" },
    tagline: { en: "Our nearest stellar neighbor", ar: "أقرب جار نجمي لنا" },
    summary: { en: "Proxima Centauri is the closest known star to the Sun, part of the Alpha Centauri triple-star system, and hosts at least one known exoplanet.", ar: "قنطورس الأقرب هو أقرب نجم معروف إلى الشمس، وهو جزء من نظام ألفا قنطورس الثلاثي، ويستضيف كوكبًا خارجيًا معروفًا واحدًا على الأقل." },
    deepDive: { en: "It's a small, dim red dwarf — invisible to the naked eye despite its proximity. Red dwarfs like Proxima burn fuel so slowly they're expected to remain on the main sequence for trillions of years.", ar: "هو قزم أحمر صغير وخافت — غير مرئي بالعين المجردة رغم قربه. تحرق الأقزام الحمراء مثل قنطورس الأقرب وقودها ببطء شديد، ويُتوقّع أن تبقى في النسق الأساسي لتريليونات السنين." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 4.25", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "M5.5Ve", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Proxima Centauri is too dim to see without a telescope, despite being the nearest star to us.", ar: "قنطورس الأقرب خافت لدرجة يتعذّر رؤيته دون تلسكوب، رغم كونه أقرب نجم إلينا." }],
    colorHex: "#FFB199", mapX: 10, mapY: 80,
    ...SIMBAD
  },
  {
    id: "arcturus", slug: "arcturus", category: "star",
    name: { en: "Arcturus", ar: "السماك الرامح" },
    tagline: { en: "An aging orange giant in Boötes", ar: "عملاق برتقالي متقدم بالعمر في كوكبة العواء" },
    summary: { en: "Arcturus is one of the brightest stars in the northern night sky, a red giant that has exhausted the hydrogen in its core.", ar: "السماك الرامح أحد ألمع نجوم السماء الشمالية الليلية، وهو عملاق أحمر استنفد الهيدروجين في نواته." },
    deepDive: { en: "Having left the main sequence, Arcturus has swollen considerably and cooled, giving it its distinct orange hue — a preview of the kind of star the Sun will become billions of years from now.", ar: "بعد مغادرته النسق الأساسي، تضخّم السماك الرامح كثيرًا وبرد، ما أعطاه لونه البرتقالي المميز — وهو معاينة لما ستؤول إليه الشمس بعد مليارات السنين." },
    stats: [
      { label: { en: "Distance", ar: "المسافة" }, value: "≈ 37", unit: ly, approximate: true },
      { label: { en: "Spectral type", ar: "النوع الطيفي" }, value: "K1.5III", unit: { en: "", ar: "" } }
    ],
    facts: [{ en: "Arcturus offers a glimpse of what the Sun may look like in its own red-giant phase.", ar: "يمنحنا السماك الرامح لمحة عمّا قد تبدو عليه الشمس في مرحلة العملاق الأحمر." }],
    colorHex: "#FFC97A", mapX: 40, mapY: 30,
    ...SIMBAD
  }
];

export function getStarBySlug(slug: string) {
  return stars.find((s) => s.slug === slug);
}
