import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務條款 - Tell Dream",
  description: "Tell Dream 服務條款",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/zh-hant" className="text-indigo-600 hover:text-indigo-800">
            ← 首頁
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">服務條款</h1>
        <p className="text-gray-500 mb-8">最後更新：2026年1月30日</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. 服務說明</h2>
            <p className="text-gray-600">Tell Dream 僅為娛樂和自我反思目的提供夢境解讀內容。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. 免責聲明</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 夢境解讀僅供娛樂，不能替代專業建議。
• 我們不保證任何解讀的準確性。
• 根據本站內容做出的決定由您自行負責。`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 智慧財產權</h2>
            <p className="text-gray-600">Tell Dream 的所有內容均受版權保護。禁止未經授權的複製或傳播。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. 條款變更</h2>
            <p className="text-gray-600">本條款可能隨時更新。繼續使用本網站即表示接受更新後的條款。</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. 聯絡方式</h2>
            <p className="text-gray-600">如果您對本條款有任何疑問，請通過網站與我們聯繫。</p>
          </section>
        </div>
      </div>
    </main>
  );
}
