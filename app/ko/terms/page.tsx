import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - Tell Dream",
  description: "Tell Dream 이용약관",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ko" className="text-indigo-600 hover:text-indigo-800">
            ← 홈
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">이용약관</h1>
        <p className="text-gray-500 mb-8">최종 업데이트: 2026년 1월 30일</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. 서비스 개요</h2>
            <p className="text-gray-600">Tell Dream은 오락과 자기 성찰 목적으로만 꿈 해석 콘텐츠를 제공합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. 면책 조항</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 꿈 해석은 오락 목적이며 전문적인 조언을 대체하지 않습니다.
• 해석의 정확성을 보장하지 않습니다.
• 본 사이트의 콘텐츠를 기반으로 한 결정은 본인의 책임입니다.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 지적재산권</h2>
            <p className="text-gray-600">Tell Dream의 모든 콘텐츠는 저작권으로 보호됩니다. 무단 복제 및 배포를 금지합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. 약관 변경</h2>
            <p className="text-gray-600">본 약관은 언제든지 업데이트될 수 있습니다. 사이트의 지속적인 사용은 업데이트된 약관에 대한 동의를 의미합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. 문의</h2>
            <p className="text-gray-600">본 약관에 대해 궁금한 점이 있으시면 웹사이트를 통해 문의해 주세요.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
