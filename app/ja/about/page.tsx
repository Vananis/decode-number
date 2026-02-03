import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "サービス紹介 - Decode Number",
  description: "Decode Numberについて - エンジェルナンバーガイド",
  alternates: generatePageAlternates("/about"),
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
        <p className="text-gray-500 mb-8">Decode Numberへようこそ</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Decode Numberとは？</h2>
            <p className="text-gray-600">Decode Numberはエンジェルナンバーの総合ガイドです。数秘術、スピリチュアルな伝統、心理学的視点から、数字のシンボルと意味を探求し、あなたに届くメッセージを理解するお手伝いをします。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">アプローチ</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 数秘術的解釈と各数字の意味
• 世界各地の文化的・伝統的な数字の象徴
• スピリチュアルで形而上学的な視点
• 人生の各分野（恋愛、仕事、金運）への実践的なガイダンス
• 多言語対応（英語、スペイン語、ドイツ語、フランス語、日本語）`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">免責事項</h2>
            <p className="text-gray-600">エンジェルナンバーの解釈は娯楽と自己内省の目的でのみ提供されています。スピリチュアルな伝統に基づいており、科学的根拠はありません。専門的なアドバイス（医療、心理、法律、財務）の代わりとして使用すべきではありません。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
