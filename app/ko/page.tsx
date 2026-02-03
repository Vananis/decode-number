import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, readMarkdownFile } from "@/lib/markdown";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "엔젤 넘버 의미",
  description: "반복적으로 보이는 숫자의 메시지를 해석하세요",
  alternates: generatePageAlternates(),
};

const popularSlugs = [
  "teeth-falling-out", "being-chased", "falling", "flying", "snake", "water",
  "death", "being-naked", "being-lost", "pregnancy", "spiders", "ex-partner"
];

export default async function KoreanHome() {
  const allSlugs = getAllAngelNumberSlugs("ko");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort()
  ];

  const topDreams = await Promise.all(
    sortedSlugs.slice(0, 12).map(async (slug) => {
      const { frontmatter } = await readMarkdownFile(slug, "ko");
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
            꿈 해몽 가이드
          </h1>
          <p className="text-xl text-gray-600">
            당신의 꿈이 전하는 메시지를 알아보세요
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            인기 꿈 해몽
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topDreams.map((dream) => (
              <Link
                key={dream.slug}
                href={`/ko/dreams/${dream.slug}`}
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
            모든 꿈 해몽 ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/ko/dreams/${slug}`}
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
            타로 카드 뽑기
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            타로가 당신의 길을 비춰드려요
          </p>
        </Link>
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/ko/privacy" className="hover:text-gray-600 transition-colors">개인정보처리방침</Link>
            <span>|</span>
            <Link href="/ko/terms" className="hover:text-gray-600 transition-colors">이용약관</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">문의</a>
          </div>
        </footer>
      </div>
    </main>
  );
}