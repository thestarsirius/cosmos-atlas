import { MetadataRoute } from "next";
import { allEntries, categoryRoute } from "@/data";

const SITE_URL = "https://cosmos-atlas.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "", "/explore", "/solar-system", "/star-map", "/cosmic-scale",
    "/timeline", "/glossary", "/about", "/discover"
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date()
  }));

  const entryRoutes = allEntries.map((e) => ({
    url: `${SITE_URL}/${categoryRoute[e.category]}/${e.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...entryRoutes];
}
