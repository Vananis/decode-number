import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["*/about", "*/contact", "*/privacy", "*/terms"],
    },
    sitemap: "https://www.decode-number.com/sitemap.xml",
  }
}