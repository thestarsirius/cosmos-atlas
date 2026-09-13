// Core data model shared by every content type (planets, stars, galaxies,
// nebulae, moons, missions, telescopes...). New categories should reuse this
// shape rather than inventing a parallel one, so components like ObjectCard,
// SourceCard, and the search index work everywhere without special-casing.

export type SourceType = "nasa" | "esa" | "iau" | "jpl" | "database" | "other";

export interface Source {
  nameAr: string;
  url: string;
  type: SourceType;
  lastVerified?: string; // ISO date — only set when actually checked, never guessed
}

export interface Measurement {
  labelAr: string;
  value: string; // pre-formatted, e.g. "12,742"
  unit: string; // e.g. "كم"
  approximate?: boolean;
  note?: string;
}

export interface RelatedRef {
  nameAr: string;
  slug: string;
  category: string; // matches a top-level section, e.g. "solar-system"
}

export interface CosmicObject {
  id: string;
  slug: string;
  nameAr: string;
  nameEn: string;
  category: string;
  shortDescriptionAr: string;
  levels: {
    simpleAr: string; // المستوى الأول
    deepAr: string; // المستوى الثاني
    explorerAr?: string; // للمستكشف
  };
  measurements: Measurement[];
  facts: string[]; // هل تعلم؟ — each must be traceable to a source below
  howDoWeKnowAr?: string; // كيف عرف العلماء ذلك؟
  images: {
    url: string;
    altAr: string;
    creditAr: string;
    sourceUrl: string;
  }[];
  sources: Source[];
  related: RelatedRef[];
  lastVerified?: string;
}
