import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Tell Dream",
  description: "Terms of Service for Tell Dream",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/en" className="text-indigo-600 hover:text-indigo-800">
            ← Home
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 30, 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Service Description</h2>
            <p className="text-gray-600">Tell Dream provides dream interpretation content for entertainment and self-reflection purposes only.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Disclaimer</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• Dream interpretations are for entertainment and should not replace professional advice.
• We do not guarantee the accuracy of any interpretation.
• Decisions made based on our content are your sole responsibility.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Intellectual Property</h2>
            <p className="text-gray-600">All content on Tell Dream is protected by copyright. Unauthorized reproduction or distribution is prohibited.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. External Links</h2>
            <p className="text-gray-600">Our site may contain links to external websites. We are not responsible for the content or practices of these sites.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Changes to Terms</h2>
            <p className="text-gray-600">We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">6. Contact</h2>
            <p className="text-gray-600">For questions about these terms, please contact us through our website.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
