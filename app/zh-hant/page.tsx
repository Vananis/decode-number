import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, readMarkdownFile } from "@/lib/markdown";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "天使數字含義",
  description: "解讀您看到的數字背後的訊息",
  alternates: generatePageAlternates(),
};

const popularSlugs = [
  "111", "222", "333", "444", "555", "666", "777", "888", "999",
  "1111", "1212", "1234"
];

const months = [
  { slug: "january", name: "一月" },
  { slug: "february", name: "二月" },
  { slug: "march", name: "三月" },
  { slug: "april", name: "四月" },
  { slug: "may", name: "五月" },
  { slug: "june", name: "六月" },
  { slug: "july", name: "七月" },
  { slug: "august", name: "八月" },
  { slug: "september", name: "九月" },
  { slug: "october", name: "十月" },
  { slug: "november", name: "十一月" },
  { slug: "december", name: "十二月" },
];

const zodiacSigns = [
  { slug: "aries", name: "牡羊座" },
  { slug: "taurus", name: "金牛座" },
  { slug: "gemini", name: "雙子座" },
  { slug: "cancer", name: "巨蟹座" },
  { slug: "leo", name: "獅子座" },
  { slug: "virgo", name: "處女座" },
  { slug: "libra", name: "天秤座" },
  { slug: "scorpio", name: "天蠍座" },
  { slug: "sagittarius", name: "射手座" },
  { slug: "capricorn", name: "摩羯座" },
  { slug: "aquarius", name: "水瓶座" },
  { slug: "pisces", name: "雙魚座" },
];

export default async function ChineseTraditionalHome() {
  const allSlugs = getAllAngelNumberSlugs("zh-hant");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug, "zh-hant");
        return {
          slug,
          title: frontmatter.title || `天使數字 ${slug}`,
          desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
        };
      } catch {
        return { slug, title: `天使數字 ${slug}`, desc: "" };
      }
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            天使數字含義
          </h1>
          <p className="text-xl text-gray-600">
            解讀您看到的數字背後的訊息
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            熱門天使數字
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/zh-hant/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {number.slug}的含義
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            所有天使數字 ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/zh-hant/angel-numbers/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌸 誕生花
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month.slug}
                href={`/zh-hant/birth-flower/${month.slug}`}
                className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-sm font-medium text-pink-800">{month.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💎 誕生石
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month.slug}
                href={`/zh-hant/birth-stone/${month.slug}`}
                className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
              >
                <span className="text-sm font-medium text-amber-800">{month.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ 星座運勢
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.slug}
                href={`/zh-hant/zodiac/${sign.slug}`}
                className="p-4 bg-purple-50 rounded-xl text-center hover:bg-purple-100 transition-colors"
              >
                <span className="text-sm font-medium text-purple-800">{sign.name}</span>
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
            解夢
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            在夢中看到這個數字了嗎？探索它的含義
          </p>
        </Link>

        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/zh-hant/privacy" className="hover:text-gray-600 transition-colors">隱私權政策</Link>
            <span>|</span>
            <Link href="/zh-hant/terms" className="hover:text-gray-600 transition-colors">服務條款</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">聯繫我們</a>
          </div>
        </footer>
      </div>
    </main>
  );
}