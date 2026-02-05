import { Locale, locales } from "@/lib/markdown"

const BASE_URL = "https://decode-number.com"

export function generatePageAlternates(locale: Locale, path: string = "") {
  const url = `${BASE_URL}/${locale}${path}`
  return {
    canonical: url,
    languages: Object.fromEntries(
      locales.map((l) => [
        l === "zh-hant" ? "zh-Hant" : l,
        `${BASE_URL}/${l}${path}`
      ])
    ),
  }
}
