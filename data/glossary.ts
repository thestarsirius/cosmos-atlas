import { Bilingual } from "./i18n";

export interface GlossaryTerm {
  term: Bilingual;
  simple: Bilingual;
  deep: Bilingual;
}

export const glossary: GlossaryTerm[] = [
  {
    term: { en: "Perihelion", ar: "الحضيض" },
    simple: { en: "The closest point a body's orbit reaches to the Sun.", ar: "أقرب نقطة يصل إليها جسم في مداره من الشمس." },
    deep: { en: "The point of closest approach in an elliptical orbit, where orbital speed is at its maximum per Kepler's second law.", ar: "نقطة أقرب اقتراب في مدار إهليلجي، حيث تكون سرعة الجسم المداري عند أقصاها وفق قانون كبلر الثاني." }
  },
  {
    term: { en: "Aphelion", ar: "الأوج" },
    simple: { en: "The farthest point a body's orbit reaches from the Sun.", ar: "أبعد نقطة يصل إليها جسم في مداره عن الشمس." },
    deep: { en: "The point of greatest distance in an elliptical orbit, where orbital speed is at its minimum.", ar: "نقطة الأوج في مدار إهليلجي، حيث تكون سرعة الجسم المداري عند أدناها." }
  },
  {
    term: { en: "Redshift", ar: "الانزياح الأحمر" },
    simple: { en: "The stretching of light toward longer, redder wavelengths as its source moves away from us.", ar: "تمدد موجات الضوء نحو الطرف الأحمر من الطيف عندما يبتعد مصدرها عنا." },
    deep: { en: "Caused by the Doppler effect or cosmic expansion itself; used to measure how fast galaxies recede and to estimate vast cosmic distances.", ar: "ظاهرة طيفية ناتجة عن تأثير دوبلر أو عن تمدد الكون نفسه، تُستخدم لقياس سرعة ابتعاد المجرات وتقدير المسافات الكونية الكبيرة." }
  },
  {
    term: { en: "Blueshift", ar: "الانزياح الأزرق" },
    simple: { en: "The compression of light toward shorter, bluer wavelengths as its source moves toward us.", ar: "انضغاط موجات الضوء نحو الطرف الأزرق من الطيف عندما يقترب مصدرها منا." },
    deep: { en: "The opposite of redshift; occurs for objects moving toward us, such as the Andromeda Galaxy approaching the Milky Way.", ar: "عكس الانزياح الأحمر؛ يحدث لأجرام تتحرك باتجاهنا، مثل مجرة أندروميدا التي تقترب من درب التبانة." }
  },
  {
    term: { en: "Event Horizon", ar: "أفق الحدث" },
    simple: { en: "The boundary beyond which nothing, not even light, can escape a black hole's gravity.", ar: "الحد الذي بعده لا يمكن لأي شيء، ولا حتى الضوء، الإفلات من جاذبية الثقب الأسود." },
    deep: { en: "A mathematical boundary in spacetime where escape velocity exceeds the speed of light — not a physical surface.", ar: "حدّ رياضي في نسيج الزمكان حيث تتجاوز سرعة الإفلات سرعة الضوء — وليس سطحًا ماديًا." }
  },
  {
    term: { en: "Accretion Disk", ar: "قرص التراكم" },
    simple: { en: "A disk of hot gas and dust spiraling around a dense object like a black hole before falling in.", ar: "قرص من الغاز والغبار الساخن يدور حول جسم كثيف مثل ثقب أسود قبل أن يسقط فيه." },
    deep: { en: "Forms from the angular momentum of infalling matter; internal friction heats it enough to radiate strongly, making some black holes indirectly observable.", ar: "يتشكل من الزخم الزاوي للمادة المتساقطة؛ يسخّن الاحتكاك الداخلي المادة حتى تصدر إشعاعًا قويًا، ما يجعل بعض الثقوب السوداء مرصودة بشكل غير مباشر." }
  },
  {
    term: { en: "Parallax", ar: "التزيح" },
    simple: { en: "The apparent shift in a nearby star's position when viewed from two different points in Earth's orbit.", ar: "تغيّر ظاهري في موقع نجم قريب عند رصده من نقطتين مختلفتين في مدار الأرض." },
    deep: { en: "One of the most reliable methods for measuring distances to nearby stars, using the tiny shift angle and trigonometry to calculate distance in parsecs.", ar: "من أهم طرق قياس مسافات النجوم القريبة، إذ تُقاس زاوية التزيح الصغيرة جدًا وتُحسب المسافة بالفرسخ الفلكي." }
  },
  {
    term: { en: "Habitable Zone", ar: "المنطقة الصالحة للحياة" },
    simple: { en: "The range of distances from a star where a planet could have liquid water on its surface.", ar: "المدى من المسافات حول نجم يمكن أن يوجد فيه الماء السائل على سطح كوكب صخري." },
    deep: { en: "Depends on a star's brightness and temperature; a useful first filter for identifying potentially life-friendly exoplanets, alongside other factors like atmosphere.", ar: "تعتمد حدود هذه المنطقة على سطوع النجم وحرارته، وتُستخدم كمعيار أولي في تقييم قابلية الكواكب الخارجية لاستضافة الحياة." }
  },
  {
    term: { en: "Dark Matter", ar: "المادة المظلمة" },
    simple: { en: "An invisible form of matter that doesn't emit or absorb light, but whose gravity shapes galaxies.", ar: "مادة غير مرئية لا تصدر ولا تمتص ضوءًا، لكن تأثيرها الجاذبي محسوس في تشكيل المجرات." },
    deep: { en: "Inferred from galaxy rotation curves, gravitational lensing, and large-scale cosmic structure; its exact nature remains a major open question in physics.", ar: "يُستدل على وجودها من منحنيات دوران المجرات، وعدسات الجاذبية، وبنية الكون واسعة النطاق؛ طبيعتها الدقيقة لا تزال من أهم الأسئلة المفتوحة في الفيزياء." }
  },
  {
    term: { en: "Dark Energy", ar: "الطاقة المظلمة" },
    simple: { en: "An unknown force or property causing the expansion of the universe to accelerate.", ar: "قوة أو خاصية غير معروفة تسبب تسارع تمدد الكون." },
    deep: { en: "Inferred from observations of distant Type Ia supernovae, which showed the universe's expansion is speeding up rather than slowing under gravity alone.", ar: "استُنتج وجودها من رصد مستعرات عظمى بعيدة من النوع Ia، أظهرت أن تمدد الكون يتسارع بدلًا من أن يتباطأ بفعل الجاذبية وحدها." }
  },
  {
    term: { en: "Cosmic Microwave Background", ar: "الإشعاع الخلفي الكوني الميكروي" },
    simple: { en: "A faint glow of radiation filling the entire universe, left over from the universe's hot early stages.", ar: "توهج خافت من الإشعاع يملأ الكون بأكمله، بقايا حرارة من مراحل الكون المبكرة." },
    deep: { en: "Released when the universe became transparent to light for the first time, about 380,000 years after the Big Bang — one of the strongest pieces of observational evidence for the Big Bang model.", ar: "انبعث هذا الإشعاع عندما أصبح الكون شفافًا للضوء لأول مرة، بعد نحو 380 ألف سنة من الانفجار العظيم، ويُعد أحد أقوى الأدلة الرصدية على نموذج الانفجار العظيم." }
  },
  {
    term: { en: "Exoplanet", ar: "الكوكب الخارجي" },
    simple: { en: "A planet that orbits a star other than the Sun.", ar: "كوكب يدور حول نجم غير الشمس." },
    deep: { en: "Detected mainly via the transit method (a dip in starlight) or radial velocity (a star's slight wobble); thousands confirmed since the first detections in the 1990s.", ar: "يُكتشف أساسًا عبر طريقة العبور (انخفاض في ضوء النجم) أو السرعة الشعاعية (اهتزاز طفيف في النجم)؛ تأكّد وجود آلاف الكواكب منذ أولى الاكتشافات في تسعينيات القرن الماضي." }
  },
  {
    term: { en: "Light-year", ar: "السنة الضوئية" },
    simple: { en: "The distance light travels in one year — used to measure vast distances in space.", ar: "المسافة التي يقطعها الضوء في سنة واحدة — تُستخدم لقياس المسافات الشاسعة في الفضاء." },
    deep: { en: "Equal to about 9.46 trillion kilometers. Because light takes time to travel, looking at distant objects means seeing them as they were in the past.", ar: "تعادل نحو 9.46 تريليون كيلومتر. ولأن الضوء يستغرق وقتًا للانتقال، فإن النظر إلى أجرام بعيدة يعني رؤيتها كما كانت في الماضي." }
  },
  {
    term: { en: "Red Giant", ar: "العملاق الأحمر" },
    simple: { en: "A late-life stage of a sun-like star, where it swells enormously and cools, glowing red-orange.", ar: "مرحلة متأخرة من حياة نجم شبيه بالشمس، حيث يتضخم كثيرًا ويبرد، متوهجًا بلون أحمر برتقالي." },
    deep: { en: "Occurs after a star exhausts the hydrogen fuel in its core; the core contracts and heats while the outer layers expand dramatically. The Sun will become a red giant in several billion years.", ar: "تحدث بعد أن يستنفد النجم وقود الهيدروجين في نواته؛ تنكمش النواة وتسخن بينما تتمدد الطبقات الخارجية بشكل كبير. ستصبح الشمس عملاقًا أحمر بعد عدة مليارات من السنين." }
  },
  {
    term: { en: "Neutron Star", ar: "النجم النيوتروني" },
    simple: { en: "The extremely dense, collapsed core left behind after a massive star's supernova.", ar: "اللب شديد الكثافة المنهار المتبقي بعد مستعر أعظم لنجم ضخم." },
    deep: { en: "Packs roughly the mass of the Sun into a sphere about 20 km across. Many spin rapidly and emit radiation beams observed on Earth as pulsars.", ar: "يحشر كتلة تعادل تقريبًا كتلة الشمس في كرة قطرها نحو 20 كم. يدور كثير منها بسرعة ويصدر حزم إشعاع تُرصد على الأرض كنوابض." }
  }
];
