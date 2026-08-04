import type { MetadataRoute } from "next";

import { siteUrl } from "./site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: ["OAI-SearchBot", "ChatGPT-User"],
        allow: "/",
        disallow: "/api/",
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
