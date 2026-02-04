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
  title: "About - Decode Number",
  description: "About Decode Number",
};

export default async function AboutPage({ params }: Props) {
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

        <h1 className="text-3xl font-bold text-indigo-900 mb-8">About Decode Number</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>Decode Number is your guide to understanding angel numbers and their spiritual meanings.</p>
          <p>We provide comprehensive information about number sequences, birth flowers, birthstones, and zodiac signs to help you on your spiritual journey.</p>
        </div>
      </div>
    </main>
  );
}
