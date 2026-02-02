import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "聯絡我們 - Decode Number",
  description: "聯絡 Decode Number",
  alternates: generatePageAlternates("/contact"),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/zh-hant" className="text-indigo-600 hover:text-indigo-800">
            ← 首頁
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">聯絡我們</h1>
        <p className="text-gray-500 mb-8">有任何問題請與我們聯繫</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">電子郵件聯繫</h2>
            <p className="text-gray-600 whitespace-pre-line">{`所有查詢請發送電子郵件至：

📧 contact@tell-dream.com

我們會盡快回覆。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">意見回饋</h2>
            <p className="text-gray-600">我們歡迎您的意見來改進 Tell Dream。請分享您的建議、更正或新夢境主題的想法。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
