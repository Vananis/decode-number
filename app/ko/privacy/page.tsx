import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - Tell Dream",
  description: "Tell Dream 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ko" className="text-indigo-600 hover:text-indigo-800">
            ← 홈
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">개인정보처리방침</h1>
        <p className="text-gray-500 mb-8">최종 업데이트: 2026년 1월 30일</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. 수집하는 정보</h2>
            <p className="text-gray-600">Tell Dream은 회원가입이 필요 없으며 개인정보를 직접 수집하지 않습니다. 서버에 개인 데이터를 저장하지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. 분석</h2>
            <p className="text-gray-600 whitespace-pre-line">{`방문자가 웹사이트를 어떻게 이용하는지 이해하기 위해 Google Analytics를 사용합니다:
• 방문한 페이지 및 체류 시간
• 브라우저 유형 및 운영체제
• 대략적인 지리적 위치 (국가/도시 수준)
• 유입 경로

이 데이터는 익명으로 수집됩니다.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. 광고</h2>
            <p className="text-gray-600">광고 표시를 위해 Google AdSense를 사용합니다. Google AdSense는 이전 방문 기록을 기반으로 광고를 표시하기 위해 쿠키를 사용할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. 쿠키</h2>
            <p className="text-gray-600">본 웹사이트는 분석 및 광고 목적으로 쿠키를 사용합니다. 브라우저 설정에서 쿠키를 제어할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. 문의</h2>
            <p className="text-gray-600">이 정책에 대해 궁금한 점이 있으시면 웹사이트를 통해 문의해 주세요.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
