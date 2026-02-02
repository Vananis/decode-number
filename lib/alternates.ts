const LOCALES = ["en", "ko", "ja", "es", "zh-hant"] as const;
const BASE_URL = "https://decode-number.com";

export function generatePageAlternates(path: string = "") {
  return {
    languages: Object.fromEntries(
      LOCALES.map((locale) => [
        locale === "zh-hant" ? "zh-Hant" : locale,
        `${BASE_URL}/${locale}${path}`
      ])
    ),
  };
}