import { CosmicObject } from "./types";

// Figures are drawn from NASA's public planetary fact sheets and rounded for
// readability. Counts that change over time (e.g. moons of Jupiter/Saturn)
// are phrased as "أكثر من" rather than a fixed number so they don't go stale.
const NASA_FACTSHEET = {
  nameAr: "NASA — الأوراق العلمية للكواكب (Planetary Fact Sheets)",
  url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/",
  type: "nasa" as const
};

const NASA_SOLAR_SYSTEM = {
  nameAr: "NASA Solar System Exploration",
  url: "https://solarsystem.nasa.gov/",
  type: "nasa" as const
};

export const planets: CosmicObject[] = [
  {
    id: "sun",
    slug: "sun",
    nameAr: "الشمس",
    nameEn: "The Sun",
    category: "solar-system",
    shortDescriptionAr: "نجم من النسق الأساسي في مركز نظامنا الشمسي، يمد الأرض بالضوء والحرارة اللازمين للحياة.",
    levels: {
      simpleAr:
        "الشمس هي النجم الذي يقع في مركز نظامنا الشمسي. كل الكواكب — ومن بينها الأرض — تدور حولها بفعل جاذبيتها. هي كرة ضخمة من الغاز المتوهج، وضوؤها يستغرق نحو 8 دقائق ليصل إلى الأرض.",
      deepAr:
        "الشمس نجم من النوع الطيفي G2V، أي أنها في مرحلة النسق الأساسي (Main Sequence) حيث يندمج الهيدروجين في نواتها إلى هيليوم عبر التفاعل النووي الحراري، منتجًا الطاقة التي تصلنا كضوء وحرارة. تتكون الشمس بشكل رئيسي من الهيدروجين (نحو 73٪) والهيليوم (نحو 25٪)، مع نسب ضئيلة من عناصر أثقل. يبلغ عمرها نحو 4.6 مليار سنة، وهي في منتصف عمرها التقريبي كنجم من هذا النوع.",
      explorerAr:
        "الغلاف الخارجي للشمس يتكوّن من عدة طبقات: النواة، ثم منطقة الإشعاع، ثم منطقة الحمل الحراري، فالغلاف الضوئي (السطح المرئي)، ثم الغلاف اللوني، والإكليل (Corona) الذي يمتد ملايين الكيلومترات في الفضاء."
    },
    measurements: [
      { labelAr: "القطر", value: "1,391,000", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "1.989 × 10³⁰", unit: "كغ", approximate: true },
      { labelAr: "درجة حرارة السطح", value: "≈ 5,500", unit: "°C", approximate: true },
      { labelAr: "درجة حرارة النواة", value: "≈ 15 مليون", unit: "°C", approximate: true },
      { labelAr: "العمر التقديري", value: "≈ 4.6", unit: "مليار سنة", approximate: true },
      { labelAr: "النوع الطيفي", value: "G2V", unit: "" }
    ],
    facts: [
      "ضوء الشمس يستغرق نحو 8 دقائق و20 ثانية ليصل إلى الأرض.",
      "تشكّل الشمس أكثر من 99.8٪ من كتلة النظام الشمسي بأكمله.",
      "الشمس ليست نجمًا كبيرًا مقارنة بنجوم أخرى — فهي نجم متوسط الحجم."
    ],
    howDoWeKnowAr:
      "يعرف العلماء تركيب الشمس عبر التحليل الطيفي (Spectroscopy): يُحلَّل ضوء الشمس إلى ألوانه المكوّنة، وتظهر خطوط امتصاص مميزة لكل عنصر كيميائي، ما يسمح بتحديد أن الهيدروجين والهيليوم هما المكوّنان الرئيسيان.",
    images: [],
    sources: [NASA_FACTSHEET, NASA_SOLAR_SYSTEM],
    related: [
      { nameAr: "المريخ", slug: "mars", category: "solar-system" },
      { nameAr: "الرياح الشمسية", slug: "solar-wind", category: "phenomena" }
    ]
  },
  {
    id: "mercury",
    slug: "mercury",
    nameAr: "عطارد",
    nameEn: "Mercury",
    category: "solar-system",
    shortDescriptionAr: "أصغر كواكب النظام الشمسي وأقربها إلى الشمس، بلا غلاف جوي يُذكر وفروق حرارية هائلة.",
    levels: {
      simpleAr:
        "عطارد هو أقرب الكواكب إلى الشمس وأصغرها. لا يملك غلافًا جويًا يحميه، لذلك تتفاوت درجة حرارته بشكل كبير بين النهار والليل.",
      deepAr:
        "نظرًا لقربه الشديد من الشمس وبطء دورانه حول نفسه (58.6 يومًا أرضيًا)، تصل درجة الحرارة نهارًا إلى نحو 427°م بينما تنخفض ليلًا إلى نحو -173°م. سطحه مغطى بالفوهات النيزكية بشكل يشبه سطح القمر، لغياب الغلاف الجوي الذي قد يحرق النيازك الصغيرة.",
      explorerAr: "بعثة MESSENGER التابعة لناسا (2011–2015) رسمت أول خريطة شاملة لسطح عطارد."
    },
    measurements: [
      { labelAr: "القطر", value: "4,879", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "3.30 × 10²³", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "3.7", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "57.9 مليون (0.39)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "88", unit: "يومًا أرضيًا" },
      { labelAr: "مدة الدوران حول نفسه", value: "58.6", unit: "يومًا أرضيًا" },
      { labelAr: "الأقمار", value: "0", unit: "" }
    ],
    facts: [
      "رغم قربه من الشمس، عطارد ليس أشد الكواكب حرارة — هذا اللقب من نصيب الزهرة بسبب غلافها الجوي الكثيف.",
      "سنة كاملة على عطارد (دورة حول الشمس) أقصر من يومه الشمسي الواحد."
    ],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "الزهرة", slug: "venus", category: "solar-system" },
      { nameAr: "الشمس", slug: "sun", category: "solar-system" }
    ]
  },
  {
    id: "venus",
    slug: "venus",
    nameAr: "الزهرة",
    nameEn: "Venus",
    category: "solar-system",
    shortDescriptionAr: "الكوكب الثاني من الشمس، وأشدّها حرارة بسبب غلاف جوي كثيف من ثاني أكسيد الكربون.",
    levels: {
      simpleAr:
        "الزهرة قريب من الأرض في الحجم، لكنه عالم مختلف تمامًا: غلافه الجوي الكثيف من ثاني أكسيد الكربون يحبس الحرارة عبر تأثير الاحتباس الحراري الشديد، فتصل درجة حرارة سطحه إلى نحو 464°م — أعلى من أي كوكب آخر في النظام الشمسي.",
      deepAr:
        "يدور الزهرة حول نفسه ببطء شديد وبعكس اتجاه معظم الكواكب (دوران رجعي)، ما يعني أن الشمس تشرق فيه من الغرب. ضغطه الجوي عند السطح يعادل نحو 90 ضعف ضغط الغلاف الجوي الأرضي.",
      explorerAr: "غيوم الزهرة مكوّنة جزئيًا من حمض الكبريتيك، ما يجعل الغلاف الجوي شديد العدائية لأي مسبار يهبط على السطح."
    },
    measurements: [
      { labelAr: "القطر", value: "12,104", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "4.87 × 10²⁴", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "8.87", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "108.2 مليون (0.72)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "224.7", unit: "يومًا أرضيًا" },
      { labelAr: "مدة الدوران حول نفسه", value: "243", unit: "يومًا أرضيًا (رجعي)" },
      { labelAr: "درجة حرارة السطح", value: "≈ 464", unit: "°C", approximate: true },
      { labelAr: "الأقمار", value: "0", unit: "" }
    ],
    facts: ["يوم واحد على الزهرة (دورة حول نفسها) أطول من سنته الكاملة حول الشمس."],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "عطارد", slug: "mercury", category: "solar-system" },
      { nameAr: "الأرض", slug: "earth", category: "solar-system" }
    ]
  },
  {
    id: "earth",
    slug: "earth",
    nameAr: "الأرض",
    nameEn: "Earth",
    category: "solar-system",
    shortDescriptionAr: "الكوكب الثالث من الشمس، والوحيد المعروف حاليًا الذي يحتضن حياة.",
    levels: {
      simpleAr:
        "الأرض هي موطننا، والكوكب الوحيد المعروف الذي تتوفر فيه الظروف الملائمة للحياة: ماء سائل على السطح، غلاف جوي غني بالأكسجين، ودرجات حرارة معتدلة نسبيًا.",
      deepAr:
        "يحمي الغلاف الجوي الأرضي (نيتروجين 78٪، أكسجين 21٪) الحياة من الإشعاع الضار، ويحافظ المجال المغناطيسي الأرضي — الناتج عن حركة الحديد المنصهر في اللب الخارجي — على الغلاف الجوي من أن تجرفه الرياح الشمسية.",
      explorerAr: "الأرض هي الكوكب الوحيد في النظام الشمسي الذي لا يحمل اسمًا مشتقًا من إله يوناني أو روماني."
    },
    measurements: [
      { labelAr: "القطر", value: "12,742", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "5.97 × 10²⁴", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "9.8", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "149.6 مليون (1.0)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "365.25", unit: "يومًا" },
      { labelAr: "مدة الدوران حول نفسها", value: "23.9", unit: "ساعة" },
      { labelAr: "متوسط درجة حرارة السطح", value: "≈ 15", unit: "°C", approximate: true },
      { labelAr: "الأقمار", value: "1", unit: "(القمر)" }
    ],
    facts: ["الأرض ليست كروية تمامًا؛ فهي منبعجة قليلًا عند خط الاستواء بسبب دورانها حول نفسها."],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "القمر", slug: "moon", category: "moons" },
      { nameAr: "المريخ", slug: "mars", category: "solar-system" }
    ]
  },
  {
    id: "mars",
    slug: "mars",
    nameAr: "المريخ",
    nameEn: "Mars",
    category: "solar-system",
    shortDescriptionAr: "الكوكب الأحمر — الرابع من الشمس، وأكثر كواكب النظام الشمسي استكشافًا بالمركبات الآلية.",
    levels: {
      simpleAr:
        "يُعرف المريخ بلونه الأحمر الناتج عن أكسيد الحديد (الصدأ) المنتشر على سطحه. غلافه الجوي رقيق جدًا مقارنة بالأرض، ودرجات حرارته باردة عمومًا.",
      deepAr:
        "يضم المريخ أكبر بركان معروف في النظام الشمسي (أوليمبوس مونس) وأحد أعمق الأخاديد (فاليس مارينيريس). توجد أدلة جيولوجية قوية على وجود ماء سائل على سطحه في الماضي البعيد.",
      explorerAr: "قمرا المريخ، فوبوس وديموس، صغيران وغير منتظمَي الشكل، ويُعتقد أنهما كويكبان أُسِرا بجاذبية الكوكب."
    },
    measurements: [
      { labelAr: "القطر", value: "6,779", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "6.42 × 10²³", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "3.71", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "227.9 مليون (1.52)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "687", unit: "يومًا أرضيًا" },
      { labelAr: "مدة الدوران حول نفسه", value: "24.6", unit: "ساعة" },
      { labelAr: "متوسط درجة حرارة السطح", value: "≈ -63", unit: "°C", approximate: true },
      { labelAr: "الأقمار", value: "2", unit: "(فوبوس وديموس)" }
    ],
    facts: ["أوليمبوس مونس على المريخ يبلغ ارتفاعه نحو ثلاثة أضعاف ارتفاع جبل إيفرست."],
    howDoWeKnowAr:
      "المركبات الجوّالة مثل كيوريوسيتي وبيرسيفيرنس تحلّل التربة والصخور مباشرة على السطح، بينما ترصد المركبات المدارية التضاريس والمعادن من الفضاء لتكوين صورة شاملة عن تاريخ الكوكب المائي.",
    images: [],
    sources: [NASA_FACTSHEET, NASA_SOLAR_SYSTEM],
    related: [
      { nameAr: "الأرض", slug: "earth", category: "solar-system" },
      { nameAr: "حزام الكويكبات", slug: "asteroid-belt", category: "solar-system" }
    ]
  },
  {
    id: "jupiter",
    slug: "jupiter",
    nameAr: "المشتري",
    nameEn: "Jupiter",
    category: "solar-system",
    shortDescriptionAr: "أكبر كواكب النظام الشمسي، عملاق غازي تحيط به منظومة كبيرة من الأقمار.",
    levels: {
      simpleAr:
        "المشتري كوكب غازي ضخم يتكون بشكل رئيسي من الهيدروجين والهيليوم، وهو أكبر من أن توضع كل الكواكب الأخرى بداخله مجتمعة تقريبًا من حيث الكتلة.",
      deepAr:
        "يتميّز المشتري بـ'البقعة الحمراء الكبرى'، وهي عاصفة عملاقة مستمرة منذ قرون على الأقل. يملك نظام حلقات خافتًا، ومجالًا مغناطيسيًا هو الأقوى بين كواكب النظام الشمسي.",
      explorerAr: "أقمار المشتري الأربعة الكبرى (آيو، أوروبا، غانيميد، كاليستو) اكتشفها غاليليو غاليلي عام 1610."
    },
    measurements: [
      { labelAr: "القطر", value: "139,820", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "1.898 × 10²⁷", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "24.79", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "778.5 مليون (5.2)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "≈ 11.9", unit: "سنة أرضية", approximate: true },
      { labelAr: "مدة الدوران حول نفسه", value: "≈ 9.9", unit: "ساعة", approximate: true },
      { labelAr: "الأقمار المعروفة", value: "أكثر من 90", unit: "قمرًا", approximate: true, note: "العدد يتغير مع استمرار الاكتشافات" }
    ],
    facts: ["البقعة الحمراء الكبرى على المشتري أكبر من كوكب الأرض بأكمله."],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "أوروبا", slug: "europa", category: "moons" },
      { nameAr: "زحل", slug: "saturn", category: "solar-system" }
    ]
  },
  {
    id: "saturn",
    slug: "saturn",
    nameAr: "زحل",
    nameEn: "Saturn",
    category: "solar-system",
    shortDescriptionAr: "الكوكب المعروف بحلقاته المذهلة، ثاني أكبر كواكب النظام الشمسي.",
    levels: {
      simpleAr:
        "يشتهر زحل بنظام حلقاته الواسع والمكوّن أساسًا من جسيمات جليدية وصخرية تتفاوت أحجامها من حبيبات دقيقة إلى كتل بحجم المنازل.",
      deepAr:
        "كثافة زحل أقل من كثافة الماء، ما يعني أنه كان سيطفو نظريًا لو وُضع في محيط ضخم بما يكفي. تدور حول زحل عشرات الأقمار، من بينها تيتان الذي يملك غلافًا جويًا كثيفًا وبحيرات من الميثان السائل.",
      explorerAr: "بعثة كاسيني (1997–2017) درست زحل وأقماره عن قرب لمدة 13 عامًا قبل أن تُنهي مهمتها بالغوص في الغلاف الجوي للكوكب."
    },
    measurements: [
      { labelAr: "القطر", value: "116,460", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "5.68 × 10²⁶", unit: "كغ", approximate: true },
      { labelAr: "الجاذبية السطحية", value: "10.44", unit: "م/ث²", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "1.43 مليار (9.5)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "≈ 29.4", unit: "سنة أرضية", approximate: true },
      { labelAr: "الأقمار المعروفة", value: "أكثر من 140", unit: "قمرًا", approximate: true, note: "العدد يتغير مع استمرار الاكتشافات" }
    ],
    facts: ["حلقات زحل رقيقة جدًا نسبيًا لاتساعها — سماكتها في الغالب لا تتجاوز بضعة كيلومترات."],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "تيتان", slug: "titan", category: "moons" },
      { nameAr: "المشتري", slug: "jupiter", category: "solar-system" }
    ]
  },
  {
    id: "uranus",
    slug: "uranus",
    nameAr: "أورانوس",
    nameEn: "Uranus",
    category: "solar-system",
    shortDescriptionAr: "عملاق جليدي يدور على جنبه تقريبًا، بميل محوري استثنائي بين كواكب النظام الشمسي.",
    levels: {
      simpleAr:
        "يتميز أورانوس بميل محوري يقارب 98 درجة، ما يعني أنه يدور حول الشمس وهو مائل شبه أفقي، فتمر أقطابه بفصول شديدة الطول.",
      deepAr:
        "يُصنَّف أورانوس ونبتون ضمن 'العمالقة الجليدية' تمييزًا لهما عن عمالقة الغاز (المشتري وزحل)، إذ يحتويان على نسبة أعلى من الماء والأمونيا والميثان المتجمدة في أعماقهما.",
      explorerAr: "لون أورانوس الأزرق-الأخضر مصدره غاز الميثان في غلافه الجوي، الذي يمتص الضوء الأحمر ويعكس الأزرق."
    },
    measurements: [
      { labelAr: "القطر", value: "50,724", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "8.68 × 10²⁵", unit: "كغ", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "2.87 مليار (19.8)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "≈ 84", unit: "سنة أرضية", approximate: true },
      { labelAr: "الميل المحوري", value: "≈ 98", unit: "درجة", approximate: true },
      { labelAr: "الأقمار المعروفة", value: "27", unit: "قمرًا", approximate: true }
    ],
    facts: ["أقمار أورانوس تحمل أسماء شخصيات من مسرحيات شكسبير وشعر ألكسندر پوپ، خلافًا لتقليد التسمية بالأساطير الإغريقية والرومانية."],
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "نبتون", slug: "neptune", category: "solar-system" }
    ]
  },
  {
    id: "neptune",
    slug: "neptune",
    nameAr: "نبتون",
    nameEn: "Neptune",
    category: "solar-system",
    shortDescriptionAr: "أبعد الكواكب المعروفة عن الشمس، وأكثرها رياحًا عنفًا في النظام الشمسي.",
    levels: {
      simpleAr:
        "نبتون عملاق جليدي بعيد جدًا عن الشمس، يستغرق نحو 165 سنة أرضية لإكمال دورة واحدة حولها. رياحه من أعنف الرياح المرصودة في النظام الشمسي.",
      deepAr:
        "اكتُشف نبتون عام 1846 عبر حسابات رياضية اعتمدت على اضطرابات في مدار أورانوس، قبل أن يُرصَد مباشرة بالتلسكوب — وهو ما يجعله الكوكب الوحيد الذي اكتُشف بالتنبؤ الرياضي أولًا.",
      explorerAr: "قمر نبتون الأكبر، تريتون، يدور حوله بعكس اتجاه دوران الكوكب نفسه، ما يشير إلى أنه جسم مأسور من حزام كايبر."
    },
    measurements: [
      { labelAr: "القطر", value: "49,244", unit: "كم", approximate: true },
      { labelAr: "الكتلة", value: "1.02 × 10²⁶", unit: "كغ", approximate: true },
      { labelAr: "متوسط البعد عن الشمس", value: "4.5 مليار (30.1)", unit: "كم (وحدة فلكية)", approximate: true },
      { labelAr: "مدة الدوران حول الشمس", value: "≈ 165", unit: "سنة أرضية", approximate: true },
      { labelAr: "الأقمار المعروفة", value: "14", unit: "قمرًا", approximate: true }
    ],
    facts: ["نبتون هو الكوكب الوحيد في النظام الشمسي غير المرئي بالعين المجردة من الأرض."],
    howDoWeKnowAr:
      "توصّل الفلكيان الفرنسي أوربان لوفيرييه والإنجليزي جون كوتش آدامز إلى موقع نبتون تقريبًا عبر حسابات جاذبية دقيقة، قبل أن يرصده يوهان غاله فعليًا بالتلسكوب في الليلة التي بحث فيها عنه.",
    images: [],
    sources: [NASA_FACTSHEET],
    related: [
      { nameAr: "أورانوس", slug: "uranus", category: "solar-system" },
      { nameAr: "حزام كايبر", slug: "kuiper-belt", category: "solar-system" }
    ]
  }
];

export function getPlanetBySlug(slug: string) {
  return planets.find((p) => p.slug === slug);
}
