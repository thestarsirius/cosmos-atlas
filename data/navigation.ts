export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: "Explore", href: "/explore" },
  { label: "Solar System", href: "/solar-system" },
  { label: "Star Map", href: "/star-map" },
  { label: "Cosmic Scale", href: "/cosmic-scale" },
  { label: "Timeline", href: "/timeline" },
  { label: "Glossary", href: "/glossary" }
];

export const footerNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Cosmic Discovery", href: "/discover" },
  { label: "Glossary", href: "/glossary" }
];
