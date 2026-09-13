export type NavLink = {
  labelAr: string;
  href: string;
};

// Central nav config. Add a route + a matching page under app/ to extend.
// Sections not yet built link to routes marked (status: "planned") so the
// homepage/nav can grow without dead links — see README for the build order.
export const primaryNav: NavLink[] = [
  { labelAr: "الرئيسية", href: "/" },
  { labelAr: "استكشف", href: "/explore" },
  { labelAr: "النظام الشمسي", href: "/solar-system" },
  { labelAr: "النجوم", href: "/stars" },
  { labelAr: "المجرات", href: "/galaxies" },
  { labelAr: "السدم", href: "/nebulae" },
  { labelAr: "الثقوب السوداء", href: "/black-holes" },
  { labelAr: "الكواكب الخارجية", href: "/exoplanets" },
  { labelAr: "الأقمار", href: "/moons" },
  { labelAr: "الأبراج", href: "/constellations" },
  { labelAr: "الكون", href: "/universe" },
  { labelAr: "المهمات الفضائية", href: "/missions" },
  { labelAr: "التلسكوبات", href: "/telescopes" },
  { labelAr: "سماء الليل", href: "/night-sky" },
  { labelAr: "الخط الزمني الكوني", href: "/timeline" },
  { labelAr: "المختبر الكوني", href: "/lab" },
  { labelAr: "أكاديمية الفلك", href: "/academy" },
  { labelAr: "معرض الصور", href: "/gallery" },
  { labelAr: "قاموس الفلك", href: "/glossary" }
];

export const footerNav: NavLink[] = [
  { labelAr: "عن أطلس الكون", href: "/about" },
  { labelAr: "قاموس الفلك", href: "/glossary" },
  { labelAr: "المصادر العلمية", href: "/about#sources" },
  { labelAr: "إمكانية الوصول", href: "/about#accessibility" },
  { labelAr: "الخصوصية", href: "/about#privacy" },
  { labelAr: "إخلاء المسؤولية", href: "/about#disclaimer" }
];
