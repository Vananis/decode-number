import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス紹介 - Tell Dream",
  description: "Tell Dreamについて - 夢占いガイド",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ja" className="text-indigo-600 hover:text-indigo-800">
            ← ホーム
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">サービス紹介</h1>
        <p className="text-gray-500 mb-8">Tell Dreamへようこそ</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Tell Dreamとは？</h2>
            <p className="text-gray-600">Tell Dreamは総合的な夢占いガイドです。心理学、文化的伝統、スピリチュアルな視点から、夢の象徴と意味を探求し、潜在意識からのメッセージを理解するお手伝いをします。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">アプローチ</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 心理学的解釈（フロイト、ユング、現代心理学）
• 世界各地の文化的・伝統的な意味
• スピリチュアルで象徴的な視点
• 実践的な夢のシナリオ分析
• 多言語対応（英語、スペイン語、日本語、韓国語、繁体字中国語）`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">免責事項</h2>
            <p className="text-gray-600">夢の解釈は娯楽と自己内省の目的でのみ提供されています。専門的なアドバイス（医療、心理、法律、財務）の代わりとして使用すべきではありません。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
