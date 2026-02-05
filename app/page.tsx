import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, readMarkdownFile, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";
import { generatePageAlternates } from "@/lib/alternates";

export const dynamic = 'force-static';

const popularSlugs = [
  "111", "222", "333", "444", "555", "666", "777", "888", "999",
  "1111", "1212", "1234"
];

const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"
];

const zodiacSigns = [
  "aries", "taurus", "gemini", "cancer", "leo", "virgo",
  "libra", "scorpio", "sagittarius", "capricorn", "aquarius", "pisces"
];

const fullContentLocales: Locale[] = ['en', 'ja'];

export async function generateMetadata(): Promise<Metadata> {
  const dict = getDictionary("en");
  return {
    title: dict.home.title,
    description: dict.home.subtitle,
    alternates: generatePageAlternates("en", ""),
  };
}

export default async function Home() {
  const locale = "en";
  const dict = getDictionary(locale);
  const allSlugs = getAllAngelNumberSlugs(locale);
  const hasFullContent = fullContentLocales.includes(locale);
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug, locale);
        return {
          slug,
          title: frontmatter.title || `${slug} Angel Number`,
          desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
        };
      } catch {
        return { slug, title: `${slug} Angel Number`, desc: "" };
      }
    })
  );

  const birthFlowers = hasFullContent ? await Promise.all(
    months.map(async (month) => {
      try {
        const { frontmatter } = await readMarkdownFile(month, locale, 'birth-flower');
        return { slug: month, title: frontmatter.title || month };
      } catch {
        return { slug: month, title: month };
      }
    })
  ) : [];

  const birthStones = hasFullContent ? await Promise.all(
    months.map(async (month) => {
      try {
        const { frontmatter } = await readMarkdownFile(month, locale, 'birth-stone');
        return { slug: month, title: frontmatter.title || month };
      } catch {
        return { slug: month, title: month };
      }
    })
  ) : [];

  const zodiacItems = hasFullContent ? await Promise.all(
    zodiacSigns.map(async (sign) => {
      try {
        const { frontmatter } = await readMarkdownFile(sign, locale, 'zodiac');
        return { slug: sign, title: frontmatter.title || sign };
      } catch {
        return { slug: sign, title: sign };
      }
    })
  ) : [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {dict.home.title}
          </h1>
          <p className="text-xl text-gray-600">
            {dict.home.subtitle}
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {dict.home.popularNumbers}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/${locale}/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {number.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {dict.home.allNumbers} ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/${locale}/angel-numbers/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>

        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.birthFlowers}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {birthFlowers.map((flower) => {
                const parts = flower.title.split(": ");
                const subtitle = parts[0] || "";
                const name = parts[1] || flower.title;
                return (
                  <Link
                    key={flower.slug}
                    href={`/${locale}/birth-flower/${flower.slug}`}
                    className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors"
                  >
                    <span className="block text-xs text-pink-600 mb-1">{subtitle}</span>
                    <span className="block text-sm font-semibold text-pink-900">{name}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.birthStones}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {birthStones.map((stone) => {
                const parts = stone.title.split(": ");
                const subtitle = parts[0] || "";
                const name = parts[1] || stone.title;
                return (
                  <Link
                    key={stone.slug}
                    href={`/${locale}/birth-stone/${stone.slug}`}
                    className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
                  >
                    <span className="block text-xs text-amber-600 mb-1">{subtitle}</span>
                    <span className="block text-sm font-semibold text-amber-900">{name}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.zodiacSigns}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {zodiacItems.map((zodiac) => {
                const parts = zodiac.title.split(": ");
                const subtitle = parts[0] || "";
                const name = parts[1] || zodiac.title;
                return (
                  <Link
                    key={zodiac.slug}
                    href={`/${locale}/zodiac/${zodiac.slug}`}
                    className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="block text-xs text-purple-600 mb-1">{subtitle}</span>
                    <span className="block text-sm font-semibold text-purple-900">{name}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        <Link
          href="https://tell-dream.com"
          className="block p-8 rounded-2xl text-center bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 hover:from-indigo-200 hover:via-purple-200 hover:to-violet-200 transition-all shadow-sm hover:shadow-md"
        >
          <span className="text-3xl mb-2 block">🌙</span>
          <span className="text-2xl font-serif font-semibold text-gray-800 tracking-wide">
            {dict.home.dreamCta}
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            {dict.home.dreamCtaDesc}
          </p>
        </Link>

        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>{dict.footer.copyright}</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href={`/${locale}/privacy`} className="hover:text-gray-600 transition-colors">{dict.nav.privacy}</Link>
            <span>|</span>
            <Link href={`/${locale}/terms`} className="hover:text-gray-600 transition-colors">{dict.nav.terms}</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">{dict.nav.contact}</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
