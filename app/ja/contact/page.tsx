import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ - Tell Dream",
  description: "Tell Dreamへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ja" className="text-indigo-600 hover:text-indigo-800">
            ← ホーム
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">お問い合わせ</h1>
        <p className="text-gray-500 mb-8">ご質問がございましたらお気軽にご連絡ください</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">メールでのお問い合わせ</h2>
            <p className="text-gray-600 whitespace-pre-line">{`すべてのお問い合わせは以下のメールアドレスまでお送りください：

📧 contact@tell-dream.com

できるだけ早くご返信いたします。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">フィードバック</h2>
            <p className="text-gray-600">Tell Dreamを改善するためのご意見をお待ちしております。ご提案、訂正、新しい夢のテーマのアイデアをお聞かせください。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
