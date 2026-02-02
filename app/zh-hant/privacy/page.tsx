import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "隱私權政策 - Decode Number",
  description: "Decode Number 隱私權政策",
  alternates: generatePageAlternates("/privacy"),
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/zh-hant" className="text-indigo-600 hover:text-indigo-800">
            ← 首頁
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">隱私權政策</h1>
        <p className="text-gray-500 mb-8">最後更新：2026年1月30日</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. 收集的資訊</h2>
            <p className="text-gray-600">Tell Dream 不需要用戶帳戶，也不直接收集個人資訊。我們不會在伺服器上儲存任何個人資料。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. 分析</h2>
            <p className="text-gray-600 whitespace-pre-line">{`我們使用 Google Analytics 來了解訪客如何使用我們的網站：
• 瀏覽的頁面和停留時間
• 瀏覽器類型和作業系統
• 大致的地理位置（國家/城市級別）
• 來源網站

這些資料以匿名方式收集。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 廣告</h2>
            <p className="text-gray-600">我們使用 Google AdSense 顯示廣告。Google AdSense 可能會使用 Cookie 根據您的過往訪問記錄顯示廣告。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Cookie</h2>
            <p className="text-gray-600">本網站使用 Cookie 進行分析和廣告。您可以通過瀏覽器設定控制 Cookie。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. 聯絡方式</h2>
            <p className="text-gray-600">如果您對本政策有任何疑問，請通過網站與我們聯繫。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
