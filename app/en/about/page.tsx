import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "About Us - Decode Number",
  description: "About Decode Number - Your Angel Number Guide",
  alternates: generatePageAlternates("/about"),
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
        <p className="text-gray-500 mb-8">Welcome to Decode Number</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">What is Decode Number?</h2>
            <p className="text-gray-600 whitespace-pre-line">Decode Number is your comprehensive guide to angel numbers. We explore the symbolism and meanings behind number sequences you encounter, drawing from numerology, spiritual traditions, and psychological perspectives to help you understand what messages might be awaiting you.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Our Approach</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• Numerological interpretations and digit meanings
• Cultural and traditional number symbolism from around the world
• Spiritual and metaphysical perspectives
• Practical guidance for life areas (love, career, finance)
• Multi-language support (English, Spanish, German, French, Japanese)`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Disclaimer</h2>
            <p className="text-gray-600 whitespace-pre-line">Angel number interpretations are provided for entertainment and self-reflection purposes only. They are based on spiritual and numerological traditions without scientific basis and should not be used as a substitute for professional advice (medical, psychological, legal, or financial).</p>
          </section>
        </div>
      </div>
    </main>
  );
}
