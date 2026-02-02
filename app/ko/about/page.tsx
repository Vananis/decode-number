import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "서비스 소개 - Decode Number",
  description: "Decode Number 소개 - 엔젤넘버 가이드",
  alternates: generatePageAlternates("/about"),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ko" className="text-indigo-600 hover:text-indigo-800">
            ← 홈
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">서비스 소개</h1>
        <p className="text-gray-500 mb-8">Tell Dream에 오신 것을 환영합니다</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Tell Dream이란?</h2>
            <p className="text-gray-600">Tell Dream은 종합적인 꿈해몽 가이드입니다. 심리학, 문화적 전통, 영적 관점을 바탕으로 꿈의 상징과 의미를 탐구하여 잠재의식이 전하는 메시지를 이해하도록 도와드립니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">접근 방식</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• 심리학적 해석 (프로이트, 융, 현대 심리학)
• 전 세계 문화적·전통적 의미
• 영적이고 상징적인 관점
• 실용적인 꿈 시나리오 분석
• 다국어 지원 (영어, 스페인어, 일본어, 한국어, 번체 중국어)`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">면책 조항</h2>
            <p className="text-gray-600">꿈 해석은 오락과 자기 성찰 목적으로만 제공됩니다. 전문적인 조언(의료, 심리, 법률, 재정)을 대체해서는 안 됩니다.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
