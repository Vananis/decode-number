import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "문의하기 - Decode Number",
  description: "Decode Number 문의",
  alternates: generatePageAlternates("/contact"),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/ko" className="text-indigo-600 hover:text-indigo-800">
            ← 홈
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">문의하기</h1>
        <p className="text-gray-500 mb-8">궁금한 점이 있으시면 연락해 주세요</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">이메일 문의</h2>
            <p className="text-gray-600 whitespace-pre-line">{`모든 문의는 아래 이메일로 보내주세요:

📧 contact@tell-dream.com

가능한 빨리 답변드리겠습니다.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">피드백</h2>
            <p className="text-gray-600">Tell Dream을 개선하기 위한 의견을 환영합니다. 제안, 수정 사항, 새로운 꿈 주제에 대한 아이디어를 알려주세요.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
