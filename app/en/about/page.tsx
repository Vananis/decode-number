import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Tell Dream",
  description: "About Tell Dream - Your Dream Interpretation Guide",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/en" className="text-indigo-600 hover:text-indigo-800">
            ← Home
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">About Us</h1>
        <p className="text-gray-500 mb-8">Welcome to Tell Dream</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">What is Tell Dream?</h2>
            <p className="text-gray-600 whitespace-pre-line">Tell Dream is a comprehensive dream interpretation guide. We explore the symbolism and meanings behind your dreams, drawing from psychology, cultural traditions, and spiritual perspectives to help you understand what your subconscious might be telling you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Our Approach</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• Psychological interpretations (Freud, Jung, modern psychology)
• Cultural and traditional meanings from around the world
• Spiritual and symbolic perspectives
• Practical dream scenario analysis
• Multi-language support (English, Spanish, Japanese, Korean, Traditional Chinese)`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Disclaimer</h2>
            <p className="text-gray-600 whitespace-pre-line">Dream interpretations are provided for entertainment and self-reflection purposes only. They should not be used as a substitute for professional advice (medical, psychological, legal, or financial).</p>
          </section>
        </div>
      </div>
    </main>
  );
}
