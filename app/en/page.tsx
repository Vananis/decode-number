import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, getAllSlugs, readMarkdownFile } from "@/lib/markdown";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Angel Number Meanings",
  description: "Decode the messages behind the numbers you see",
  alternates: generatePageAlternates(),
};

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

export default async function EnglishHome() {
  const allSlugs = getAllAngelNumberSlugs();
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug);
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
            Angel Number Meanings
          </h1>
          <p className="text-xl text-gray-600">
            Decode the messages behind the numbers you see
          </p>
        </header>

        {/* Angel Numbers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Angel Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/en/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {number.slug} Meaning
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            All Angel Numbers ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/en/angel-numbers/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>

        {/* Birth Flowers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌸 Birth Flowers by Month
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month}
                href={`/en/birth-flower/${month}`}
                className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-sm font-medium text-pink-800 capitalize">{month}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Birthstones */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💎 Birthstones by Month
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month}
                href={`/en/birth-stone/${month}`}
                className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
              >
                <span className="text-sm font-medium text-amber-800 capitalize">{month}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Zodiac Signs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ Zodiac Signs
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign}
                href={`/en/zodiac/${sign}`}
                className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors"
              >
                <span className="text-sm font-medium text-purple-800 capitalize">{sign}</span>
              </Link>
            ))}
          </div>
        </section>

        <Link
          href="https://tell-dream.com"
          className="block p-8 rounded-2xl text-center bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 hover:from-indigo-200 hover:via-purple-200 hover:to-violet-200 transition-all shadow-sm hover:shadow-md"
        >
          <span className="text-3xl mb-2 block">🌙</span>
          <span className="text-2xl font-serif font-semibold text-gray-800 tracking-wide">
            Dream Meanings
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            Saw this number in a dream? Discover what it means
          </p>
        </Link>

        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/en/privacy" className="hover:text-gray-600 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/en/terms" className="hover:text-gray-600 transition-colors">Terms of Service</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
}