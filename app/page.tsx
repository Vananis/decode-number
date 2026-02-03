import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SUPPORTED_LOCALES = ["en", "ja"] as const;
type Locale = (typeof SUPPORTED_LOCALES)[number];

function getPreferredLocale(acceptLanguage: string | null): Locale {
  if (acceptLanguage === null) return "en";

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=");
      return {
        code: code.toLowerCase().trim(),
        q: qValue ? parseFloat(qValue) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of languages) {
    if (SUPPORTED_LOCALES.includes(code as Locale)) {
      return code as Locale;
    }
    const prefix = code.split("-")[0];
    if (SUPPORTED_LOCALES.includes(prefix as Locale)) {
      return prefix as Locale;
    }
  }

  return "en";
}

export default async function Home() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  const locale = getPreferredLocale(acceptLanguage);
  redirect(`/${locale}`);
}