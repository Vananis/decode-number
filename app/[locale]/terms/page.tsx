import Link from "next/link";
import { Metadata } from "next";
import { locales, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Terms of Service - Decode Number",
  description: "Terms of Service for Decode Number",
  robots: { index: false, follow: true },
};

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href={`/${locale}`} className="text-indigo-600 hover:text-indigo-800">
            {dict.nav.home}
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8">Last updated: January 29, 2026</p>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Acceptance of Terms</h2>
            <p>By accessing Decode Number, you agree to these Terms of Service.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Description of Service</h2>
            <p>Decode Number provides information about angel numbers and spiritual symbolism for educational purposes only.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Disclaimer</h2>
            <p>Content is for entertainment and educational purposes. We are not responsible for decisions made based on this content.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Intellectual Property</h2>
            <p>All content is protected by copyright laws.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
