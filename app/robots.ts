import { MetadataRoute } from "next";

// Required for `output: "export"` — without this, Next.js 15 fails to
// statically generate this metadata route (see vercel/next.js#68667).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://cosmos-atlas.pages.dev/sitemap.xml"
  };
}
