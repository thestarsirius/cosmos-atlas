// Nav items reference i18n keys (data/i18n.ts) rather than hardcoded labels
// so the Navbar/Footer render correctly in both languages from one list.
export interface NavLink {
  labelKey: "navExplore" | "navSolar" | "navStarMap" | "navScale" | "navTimeline" | "navGlossary" | "navAbout" | "navDiscover";
  href: string;
}

export const primaryNav: NavLink[] = [
  { labelKey: "navExplore", href: "/explore" },
  { labelKey: "navSolar", href: "/solar-system" },
  { labelKey: "navStarMap", href: "/star-map" },
  { labelKey: "navScale", href: "/cosmic-scale" },
  { labelKey: "navTimeline", href: "/timeline" },
  { labelKey: "navGlossary", href: "/glossary" }
];

export const footerNav: NavLink[] = [
  { labelKey: "navAbout", href: "/about" },
  { labelKey: "navExplore", href: "/explore" },
  { labelKey: "navDiscover", href: "/discover" },
  { labelKey: "navGlossary", href: "/glossary" }
];
