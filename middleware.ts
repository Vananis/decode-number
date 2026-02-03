import { NextRequest, NextResponse } from "next/server"

const locales = ["en", "ja"] as const
type Locale = (typeof locales)[number]
const defaultLocale: Locale = "en"

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage === null) return defaultLocale

  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, qValue] = lang.trim().split(";q=")
      const fullCode = code.toLowerCase()
      const baseCode = code.split("-")[0].toLowerCase()
      return { fullCode, baseCode, q: qValue ? parseFloat(qValue) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { baseCode } of languages) {
    if (locales.includes(baseCode as Locale)) {
      return baseCode as Locale
    }
  }

  return defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/icon" ||
    pathname === "/apple-icon"
  ) {
    return
  }

  const locale = getPreferredLocale(request)
  const url = new URL(`/${locale}${pathname}`, request.url)
  
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?\!_next|api|.*\\..*).*)"],
}