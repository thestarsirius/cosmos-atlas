export type Lang = "en" | "ar";

// Shared shape for any bilingual data value used across data files.
export interface Bilingual {
  en: string;
  ar: string;
}

export function bi(lang: Lang, value: Bilingual): string {
  return value[lang] ?? value.en;
}

// Every static (non-data-driven) UI string in the site. Component code
// calls t('key') via useLanguage() rather than hardcoding English text, so
// adding a language later means extending this object, not touching JSX.
export const UI = {
  en: {
    brand: "COSMOS ATLAS",
    brandSub: "Explore the universe",
    navExplore: "Explore",
    navSolar: "Solar System",
    navStarMap: "Star Map",
    navScale: "Cosmic Scale",
    navTimeline: "Timeline",
    navGlossary: "Glossary",
    navAbout: "About",
    navDiscover: "Cosmic Discovery",

    heroEyebrow: "An interactive atlas",
    heroSub: "Explore the universe. One world at a time.",
    heroCtaPrimary: "Begin Exploration",
    heroCtaSecondary: "Search the atlas",
    scrollHint: "Scroll to explore",

    startExploring: "Start exploring",
    startExploringSub: "Four ways into the atlas — pick a starting point.",
    exploreByCategory: "Explore by category",
    viewAll: "View all",

    solarHubTitle: "The Solar System",
    solarHubSub: "The Sun and everything bound to it by gravity — eight planets, dozens of moons, and countless smaller bodies. Drag to pan, use the zoom controls, and click any planet to open its page.",
    allEightPlanets: "All eight planets",
    dragPan: "Drag to pan · click a planet to explore it",
    reset: "Reset",
    backToOrbit: "Back to the orbit view",

    exploreTitle: "Explore the Universe",
    exploreSub: "A gateway to everything in the atlas. Search by name, or filter by category.",
    exploreSearchPlaceholder: "Search for Mars, Andromeda, a black hole…",
    exploreNoResults: "No matches. Try a different search or category.",
    exploreResultsOne: "result",
    exploreResultsMany: "results",
    catAll: "All",

    starmapTitle: "Star Map",
    starmapSub: "Positions here are illustrative, not a precise sky chart — click any star to learn what makes it distinctive.",
    selectStar: "Select a star to see details.",
    fullDetails: "Full details →",

    scaleTitle: "Cosmic Scale",
    scaleSub: "Drag the slider to move between scales — from a single human being to the edge of what we can possibly observe.",
    scaleHuman: "Human",
    scaleUniverse: "Observable Universe",

    timelineTitle: "Cosmic Timeline",
    timelineSub: "From the Big Bang to today. Labels distinguish direct observation from scientific models and open questions — the timeline doesn't present speculation as settled fact.",

    glossaryTitle: "Glossary",
    glossarySub: "Core astronomy terms, explained simply and in more depth.",
    glossarySearchPlaceholder: "Search a term…",
    glossaryNoResults: "No matching terms.",

    aboutTitle: "About Cosmos Atlas",
    discoveryTitle: "Today's Cosmic Discovery",
    discoveryEyebrow: "Today's Discovery",
    viewDetails: "View details",
    discoverAnother: "Discover another",

    didYouKnow: "Did you know?",
    anotherFact: "Another fact",

    statDistance: "Distance",
    statDay: "Day length",
    statYear: "Year length",
    statMoons: "Moons",
    statType: "Type",
    statSize: "Size",
    statTemp: "Temperature",

    catPlanet: "Planet",
    catStar: "Star",
    catGalaxy: "Galaxy",
    catNebula: "Nebula",
    catMoon: "Moon",
    catBlackHole: "Black Hole",
    catAsteroid: "Asteroid",
    catComet: "Comet",

    statusObserved: "observed",
    statusModel: "model",
    statusOpen: "open question",

    source: "Source",
    visitSource: "Visit source",

    breadcrumbHome: "Home",

    footerTagline: "An independent, educational atlas for exploring the universe. Not affiliated with NASA, ESA, or any space agency.",
    footerDisclaimer: "Cosmos Atlas is an independent educational project and is not affiliated with NASA, ESA, or any other space agency.",
    footerCopy: "Cosmos Atlas · open source",
    devCredit: "Developed by Shahad Ghazwani"
  },
  ar: {
    brand: "أطلس الكون",
    brandSub: "استكشف الكون",
    navExplore: "استكشف",
    navSolar: "النظام الشمسي",
    navStarMap: "خريطة النجوم",
    navScale: "مقياس الكون",
    navTimeline: "الخط الزمني",
    navGlossary: "قاموس المصطلحات",
    navAbout: "عن الموقع",
    navDiscover: "اكتشاف كوني",

    heroEyebrow: "أطلس تفاعلي",
    heroSub: "استكشف الكون، عالمًا تلو الآخر.",
    heroCtaPrimary: "ابدأ الاستكشاف",
    heroCtaSecondary: "ابحث في الأطلس",
    scrollHint: "مرّر للاستكشاف",

    startExploring: "ابدأ الاستكشاف",
    startExploringSub: "أربع طرق للدخول إلى الأطلس — اختر نقطة انطلاقك.",
    exploreByCategory: "استكشف حسب الفئة",
    viewAll: "عرض الكل",

    solarHubTitle: "النظام الشمسي",
    solarHubSub: "الشمس وكل ما يرتبط بها بفعل الجاذبية — ثمانية كواكب وعشرات الأقمار وأجرام أصغر لا تُحصى. اسحب للتحرك، استخدم أدوات التكبير، واضغط على أي كوكب لفتح صفحته.",
    allEightPlanets: "الكواكب الثمانية",
    dragPan: "اسحب للتحرك · اضغط على كوكب لاستكشافه",
    reset: "إعادة ضبط",
    backToOrbit: "العودة إلى العرض المداري",

    exploreTitle: "استكشف الكون",
    exploreSub: "بوابة إلى كل ما في الأطلس. ابحث بالاسم أو صفِّ حسب الفئة.",
    exploreSearchPlaceholder: "ابحث عن المريخ، أندروميدا، ثقب أسود…",
    exploreNoResults: "لم نجد نتائج مطابقة. جرّب بحثًا أو فئة مختلفة.",
    exploreResultsOne: "نتيجة",
    exploreResultsMany: "نتائج",
    catAll: "الكل",

    starmapTitle: "خريطة النجوم",
    starmapSub: "المواقع هنا توضيحية وليست خريطة سماء دقيقة — اضغط على أي نجم لمعرفة ما يميّزه.",
    selectStar: "اختر نجمًا لعرض تفاصيله.",
    fullDetails: "التفاصيل الكاملة ←",

    scaleTitle: "مقياس الكون",
    scaleSub: "اسحب المؤشر للتنقل بين المقاييس — من إنسان واحد إلى حدود ما يمكننا رصده.",
    scaleHuman: "الإنسان",
    scaleUniverse: "الكون المرصود",

    timelineTitle: "الخط الزمني الكوني",
    timelineSub: "من الانفجار العظيم إلى اليوم. التصنيفات تميّز بين الرصد المباشر والنماذج العلمية والأسئلة المفتوحة — فالخط الزمني لا يقدّم التكهنات كحقائق مؤكدة.",

    glossaryTitle: "قاموس المصطلحات",
    glossarySub: "مصطلحات فلكية أساسية، مشروحة ببساطة وبتعمق أكبر.",
    glossarySearchPlaceholder: "ابحث عن مصطلح…",
    glossaryNoResults: "لا توجد مصطلحات مطابقة.",

    aboutTitle: "عن أطلس الكون",
    discoveryTitle: "اكتشاف اليوم الكوني",
    discoveryEyebrow: "اكتشاف اليوم",
    viewDetails: "عرض التفاصيل",
    discoverAnother: "اكتشف جرمًا آخر",

    didYouKnow: "هل تعلم؟",
    anotherFact: "حقيقة أخرى",

    statDistance: "المسافة",
    statDay: "مدة اليوم",
    statYear: "مدة السنة",
    statMoons: "الأقمار",
    statType: "النوع",
    statSize: "الحجم",
    statTemp: "درجة الحرارة",

    catPlanet: "كوكب",
    catStar: "نجم",
    catGalaxy: "مجرة",
    catNebula: "سديم",
    catMoon: "قمر",
    catBlackHole: "ثقب أسود",
    catAsteroid: "كويكب",
    catComet: "مذنب",

    statusObserved: "مرصود",
    statusModel: "نموذج علمي",
    statusOpen: "سؤال مفتوح",

    source: "المصدر",
    visitSource: "زيارة المصدر",

    breadcrumbHome: "الرئيسية",

    footerTagline: "أطلس تعليمي مستقل لاستكشاف الكون. غير تابع لناسا أو وكالة الفضاء الأوروبية أو أي جهة فضائية أخرى.",
    footerDisclaimer: "أطلس الكون مشروع تعليمي مستقل، وليس تابعًا لناسا أو وكالة الفضاء الأوروبية أو أي جهة فضائية أخرى.",
    footerCopy: "أطلس الكون · مشروع مفتوح المصدر",
    devCredit: "تطوير: شهد غزواني"
  }
} as const;
