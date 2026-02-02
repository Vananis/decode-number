import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "利用規約 - Decode Number",
  description: "Decode Numberの利用規約",
  alternates: generatePageAlternates("/terms"),
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ja" className="text-indigo-600 hover:text-indigo-800">
            ← ホーム
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">利用規約</h1>
        <p className="text-gray-500 mb-8">最終更新日：2026年1月30日</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. サービス概要</h2>
            <p className="text-gray-600">Tell Dreamは娯楽と自己内省の目的でのみ夢の解釈コンテンツを提供します。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. 免責事項</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 夢の解釈は娯楽目的であり、専門的なアドバイスに代わるものではありません。
• 解釈の正確性を保証するものではありません。
• 当サイトのコンテンツに基づく決定はお客様自身の責任となります。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 知的財産権</h2>
            <p className="text-gray-600">Tell Dreamのすべてのコンテンツは著作権で保護されています。無断複製・配布を禁止します。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. 規約の変更</h2>
            <p className="text-gray-600">本規約はいつでも更新される場合があります。サイトの継続的な使用は、更新された規約への同意を意味します。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. お問い合わせ</h2>
            <p className="text-gray-600">本規約についてご質問がある場合は、ウェブサイトからお問い合わせください。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
