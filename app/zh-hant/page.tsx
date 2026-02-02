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
  "teeth-falling-out", "being-chased", "falling", "flying", "snake", "water",
  "death", "being-naked", "being-lost", "pregnancy", "spiders", "ex-partner"
];

export default async function ChineseTraditionalHome() {
  const allSlugs = getAllAngelNumberSlugs("zh-hant");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort()
  ];

  const topDreams = await Promise.all(
    sortedSlugs.slice(0, 12).map(async (slug) => {
      const { frontmatter } = await readMarkdownFile(slug, "zh-hant");
      return {
        slug,
        title: frontmatter.title || slug,
        desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
      };
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            解夢指南
          </h1>
          <p className="text-xl text-gray-600">
            探索您夢境傳達的訊息
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            熱門解夢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topDreams.map((dream) => (
              <Link
                key={dream.slug}
                href={`/zh-hant/dreams/${dream.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {dream.title.replace(/:.*/g, "")}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{dream.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            所有解夢 ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/zh-hant/dreams/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </section>

        <Link
          href="https://read-tarot.com"
          className="block p-8 rounded-2xl text-center bg-gradient-to-r from-amber-100 via-orange-100 to-rose-100 hover:from-amber-200 hover:via-orange-200 hover:to-rose-200 transition-all shadow-sm hover:shadow-md"
        >
          <span className="text-3xl mb-2 block">✨</span>
          <span className="text-2xl font-serif font-semibold text-gray-800 tracking-wide">
            塔羅牌占卜
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            讓塔羅為您指引方向
          </p>
        </Link>
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/zh-hant/privacy" className="hover:text-gray-600 transition-colors">隱私權政策</Link>
            <span>|</span>
            <Link href="/zh-hant/terms" className="hover:text-gray-600 transition-colors">服務條款</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
