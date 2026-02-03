import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, getAllSlugs, readMarkdownFile, locales, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";
import { generatePageAlternates } from "@/lib/alternates";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return {
    title: dict.home.title,
    description: dict.home.subtitle,
    alternates: generatePageAlternates(),
  };
}

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

// Languages that have birth-flower, birth-stone, zodiac content
const fullContentLocales: Locale[] = ['en', 'ja'];

export default async function Home({ params }: Props) {
  const { locale } = await params;
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

        {/* Angel Numbers */}
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

        {/* Birth Flowers - only for locales with content */}
        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.birthFlowers}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {months.map((month) => (
                <Link
                  key={month}
                  href={`/${locale}/birth-flower/${month}`}
                  className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors"
                >
                  <span className="text-sm font-medium text-pink-800 capitalize">{month}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Birthstones */}
        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.birthStones}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {months.map((month) => (
                <Link
                  key={month}
                  href={`/${locale}/birth-stone/${month}`}
                  className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
                >
                  <span className="text-sm font-medium text-amber-800 capitalize">{month}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Zodiac Signs */}
        {hasFullContent && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {dict.home.zodiacSigns}
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {zodiacSigns.map((sign) => (
                <Link
                  key={sign}
                  href={`/${locale}/zodiac/${sign}`}
                  className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors"
                >
                  <span className="text-sm font-medium text-purple-800 capitalize">{sign}</span>
                </Link>
              ))}
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
