import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "關於我們 - Decode Number",
  description: "關於 Decode Number - 天使數字指南",
  alternates: generatePageAlternates("/about"),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/zh-hant" className="text-indigo-600 hover:text-indigo-800">
            ← 首頁
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">關於我們</h1>
        <p className="text-gray-500 mb-8">歡迎來到 Tell Dream</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">什麼是 Tell Dream？</h2>
            <p className="text-gray-600">Tell Dream 是一個全面的解夢指南。我們從心理學、文化傳統和靈性角度探索夢境的象徵和意義，幫助您理解潛意識可能傳達的訊息。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">我們的方法</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 心理學解讀（佛洛伊德、榮格、現代心理學）
• 來自世界各地的文化和傳統意義
• 靈性和象徵性觀點
• 實用的夢境情境分析
• 多語言支援（英語、西班牙語、日語、韓語、繁體中文）`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">免責聲明</h2>
            <p className="text-gray-600">夢境解讀僅供娛樂和自我反思之用。不應作為專業建議（醫療、心理、法律或財務）的替代。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
