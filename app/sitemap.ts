import type { MetadataRoute } from "next";

import {
  getPath,
  locales,
  pageKeys,
  siteUrl,
  type PageKey,
} from "./site-config";

function getLanguageAlternates(page: PageKey) {
  return {
    es: `${siteUrl}${getPath("es", page)}`,
    en: `${siteUrl}${getPath("en", page)}`,
    "x-default": `${siteUrl}${getPath("es", page)}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.flatMap((page) =>
    locales.map((locale) => ({
      url: `${siteUrl}${getPath(locale, page)}`,
      alternates: {
        languages: getLanguageAlternates(page),
      },
    })),
  );
}
