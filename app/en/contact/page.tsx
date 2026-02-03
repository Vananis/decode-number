import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Contact Us - Decode Number",
  description: "Contact Decode Number",
  alternates: generatePageAlternates("/contact"),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/en" className="text-indigo-600 hover:text-indigo-800">
            ← Home
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-8">Have questions? Get in touch with us</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Email Contact</h2>
            <p className="text-gray-600 whitespace-pre-line">{`For all inquiries, please email us at:

📧 contact@decode-number.com

We will respond as soon as possible.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Feedback</h2>
            <p className="text-gray-600">We welcome your feedback to improve Decode Number. Please share your suggestions, corrections, or ideas for new angel number content.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
