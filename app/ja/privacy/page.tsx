import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー - Tell Dream",
  description: "Tell Dreamのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ja" className="text-indigo-600 hover:text-indigo-800">
            ← ホーム
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">プライバシーポリシー</h1>
        <p className="text-gray-500 mb-8">最終更新日：2026年1月30日</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. 収集する情報</h2>
            <p className="text-gray-600">Tell Dreamはユーザーアカウントを必要とせず、個人情報を直接収集しません。サーバーに個人データを保存することはありません。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. アナリティクス</h2>
            <p className="text-gray-600 whitespace-pre-line">{`訪問者がウェブサイトをどのように利用しているかを理解するためにGoogle Analyticsを使用しています：
• 訪問したページと滞在時間
• ブラウザの種類とOS
• おおよその地理的位置（国/都市レベル）
• 参照元

これらのデータは匿名で収集されます。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 広告</h2>
            <p className="text-gray-600">広告表示にGoogle AdSenseを使用しています。Google AdSenseは過去の訪問に基づいて広告を表示するためにCookieを使用する場合があります。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Cookie</h2>
            <p className="text-gray-600">当サイトはアナリティクスと広告目的でCookieを使用します。ブラウザの設定でCookieを制御できます。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. お問い合わせ</h2>
            <p className="text-gray-600">このポリシーについてご質問がある場合は、ウェブサイトからお問い合わせください。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
