import { MetadataRoute } from "next";
import { allEntries, categoryRoute } from "@/data";

// Required for `output: "export"` — without this, Next.js 15 fails to
// statically generate this metadata route (see vercel/next.js#68667).
export const dynamic = "force-static";

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
