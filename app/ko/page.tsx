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
  "111", "222", "333", "444", "555", "666", "777", "888", "999",
  "1111", "1212", "1234"
];

const months = [
  { slug: "january", name: "1월" },
  { slug: "february", name: "2월" },
  { slug: "march", name: "3월" },
  { slug: "april", name: "4월" },
  { slug: "may", name: "5월" },
  { slug: "june", name: "6월" },
  { slug: "july", name: "7월" },
  { slug: "august", name: "8월" },
  { slug: "september", name: "9월" },
  { slug: "october", name: "10월" },
  { slug: "november", name: "11월" },
  { slug: "december", name: "12월" },
];

const zodiacSigns = [
  { slug: "aries", name: "양자리" },
  { slug: "taurus", name: "황소자리" },
  { slug: "gemini", name: "쌍둥이자리" },
  { slug: "cancer", name: "게자리" },
  { slug: "leo", name: "사자자리" },
  { slug: "virgo", name: "처녀자리" },
  { slug: "libra", name: "천칭자리" },
  { slug: "scorpio", name: "전갈자리" },
  { slug: "sagittarius", name: "사수자리" },
  { slug: "capricorn", name: "염소자리" },
  { slug: "aquarius", name: "물병자리" },
  { slug: "pisces", name: "물고기자리" },
];

export default async function KoreanHome() {
  const allSlugs = getAllAngelNumberSlugs("ko");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug, "ko");
        return {
          slug,
          title: frontmatter.title || `${slug} 엔젤 넘버`,
          desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
        };
      } catch {
        return { slug, title: `${slug} 엔젤 넘버`, desc: "" };
      }
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            엔젤 넘버 의미
          </h1>
          <p className="text-xl text-gray-600">
            반복적으로 보이는 숫자의 메시지를 해석하세요
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            인기 엔젤 넘버
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/ko/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {number.slug}의 의미
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            모든 엔젤 넘버 ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/ko/angel-numbers/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            🌸 탄생화
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month.slug}
                href={`/ko/birth-flower/${month.slug}`}
                className="p-4 bg-pink-50 rounded-xl text-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-sm font-medium text-pink-800">{month.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            💎 탄생석
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((month) => (
              <Link
                key={month.slug}
                href={`/ko/birth-stone/${month.slug}`}
                className="p-4 bg-amber-50 rounded-xl text-center hover:bg-amber-100 transition-colors"
              >
                <span className="text-sm font-medium text-amber-800">{month.name}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ✨ 별자리 운세
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {zodiacSigns.map((sign) => (
              <Link
                key={sign.slug}
                href={`/ko/zodiac/${sign.slug}`}
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
            꿈 해몽
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            이 숫자를 꿈에서 보셨나요? 그 의미를 알아보세요
          </p>
        </Link>

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