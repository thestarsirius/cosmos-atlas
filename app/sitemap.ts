import { MetadataRoute } from "next";
import { planets } from "@/data/planets";

const SITE_URL = "https://cosmos-atlas.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/solar-system", "/glossary", "/about", "/explore"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date()
  }));

  const planetRoutes = planets.map((p) => ({
    url: `${SITE_URL}/solar-system/${p.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...planetRoutes];
}
