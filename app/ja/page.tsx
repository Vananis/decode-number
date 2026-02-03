import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, readMarkdownFile } from "@/lib/markdown";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "エンジェルナンバーの意味",
  description: "繰り返し見る数字に隠されたメッセージを解読する",
  alternates: generatePageAlternates(),
};

const popularSlugs = [
  "111", "222", "333", "444", "555", "666", "777", "888", "999",
  "1111", "1212", "1234"
];

const months = [
  { slug: "january", name: "1月" },
  { slug: "february", name: "2月" },
  { slug: "march", name: "3月" },
  { slug: "april", name: "4月" },
  { slug: "may", name: "5月" },
  { slug: "june", name: "6月" },
  { slug: "july", name: "7月" },
  { slug: "august", name: "8月" },
  { slug: "september", name: "9月" },
  { slug: "october", name: "10月" },
  { slug: "november", name: "11月" },
  { slug: "december", name: "12月" },
];

const zodiacSigns = [
  { slug: "aries", name: "牡羊座" },
  { slug: "taurus", name: "牡牛座" },
  { slug: "gemini", name: "双子座" },
  { slug: "cancer", name: "蟹座" },
  { slug: "leo", name: "獅子座" },
  { slug: "virgo", name: "乙女座" },
  { slug: "libra", name: "天秤座" },
  { slug: "scorpio", name: "蠍座" },
  { slug: "sagittarius", name: "射手座" },
  { slug: "capricorn", name: "山羊座" },
  { slug: "aquarius", name: "水瓶座" },
  { slug: "pisces", name: "魚座" },
];

export default async function JapaneseHome() {
  const allSlugs = getAllAngelNumberSlugs("ja");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug, "ja");
        return {
          slug,
          title: frontmatter.title || `${slug}エンジェルナンバー`,
          desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
        };
      } catch {
        return { slug, title: `${slug}エンジェルナンバー`, desc: "" };
      }
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            エンジェルナンバーの意味
          </h1>
          <p className="text-xl text-gray-600">
            繰り返し見る数字に隠されたメッセージを解読する
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            人気のエンジェルナンバー
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/ja/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {number.slug}の意味
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            すべてのエンジェルナンバー ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/ja/angel-numbers/${slug}`}
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
                href={`/ja/birth-flower/${month.slug}`}
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
                href={`/ja/birth-stone/${month.slug}`}
                className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
              >
                <span className="text-sm font-medium text-amber-800">{month.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ 星座占い
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.slug}
                href={`/ja/zodiac/${sign.slug}`}
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
            夢占い
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            この数字を夢で見ましたか？その意味を探る
          </p>
        </Link>

        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/ja/privacy" className="hover:text-gray-600 transition-colors">プライバシーポリシー</Link>
            <span>|</span>
            <Link href="/ja/terms" className="hover:text-gray-600 transition-colors">利用規約</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">お問い合わせ</a>
          </div>
        </footer>
      </div>
    </main>
  );
}