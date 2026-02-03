import { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/markdown";

type Locale = "en" | "es" | "ja" | "ko" | "zh-hant";
type ContentType = "number" | "birth-flower" | "birth-stone" | "zodiac";

const locales: Locale[] = ["en", "es", "ja", "ko", "zh-hant"];
const contentTypes: ContentType[] = ["number", "birth-flower", "birth-stone", "zodiac"];

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

  const contentPages = locales.flatMap((locale) =>
    contentTypes.flatMap((contentType) => {
      const slugs = getAllSlugs(locale, contentType);
      return slugs.map((slug) => ({
        url: `${baseUrl}/${locale}/${contentType === "number" ? "angel-numbers" : contentType}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: contentType === "number" ? 0.8 : 0.7,
      }));
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...homePages,
    ...legalPages,
    ...contentPages,
  ];
}
