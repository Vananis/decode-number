import { MetadataRoute } from "next";
import { getAllAngelNumberSlugs } from "@/lib/markdown";

type Locale = "en" | "es" | "ja" | "ko" | "zh-hant";
const locales: Locale[] = ["en", "es", "ja", "ko", "zh-hant"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://decode-number.com";
  
  const homePages = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  const legalPages = locales.flatMap((locale) => 
    ["privacy", "terms", "about", "contact"].map((page) => ({
      url: `${baseUrl}/${locale}/${page}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }))
  );

  const dreamPages = locales.flatMap((locale) => {
    const slugs = getAllAngelNumberSlugs(locale);
    return slugs.map((slug) => ({
      url: `${baseUrl}/${locale}/angel-numbers/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...homePages,
    ...legalPages,
    ...dreamPages,
  ];
}
