import Link from "next/link";
import { Metadata } from "next";
import { locales, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";
import { generatePageAlternates } from "@/lib/alternates";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy Policy - Decode Number",
    description: "Privacy Policy for Decode Number",
    alternates: generatePageAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({ params }: Props) {
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

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 29, 2026</p>
        
        <div className="space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Information We Collect</h2>
            <p>Decode Number does not require user accounts or collect personal information directly.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Analytics</h2>
            <p className="whitespace-pre-line">{`We use Google Analytics to understand how visitors interact with our website. This includes:
• Pages visited and time spent
• Browser type and operating system
• Approximate geographic location
• Referral sources`}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Advertising</h2>
            <p>We use Google AdSense to display advertisements. You can opt out of personalized advertising at Google Ads Settings.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Cookies</h2>
            <p>Our website uses cookies for analytics and advertising purposes.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Contact</h2>
            <p>If you have questions, contact us at contact@decode-number.com</p>
          </section>
        </div>
      </div>
    </main>
  );
}
