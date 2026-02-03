import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Privacy Policy - Decode Number",
  description: "Privacy Policy for Decode Number - Angel Number Guide",
  alternates: generatePageAlternates("/privacy"),
};

const content = {
  title: "Privacy Policy",
  lastUpdated: "January 29, 2026",
  sections: [
    {
      title: "1. Information We Collect",
      content: `Decode Number does not require user accounts or collect personal information directly. We do not store any personal data on our servers.`
    },
    {
      title: "2. Analytics",
      content: `We use Google Analytics to understand how visitors interact with our website. This includes:
• Pages visited and time spent
• Browser type and operating system
• Approximate geographic location (country/city level)
• Referral sources

This data is collected anonymously and helps us improve our content.`
    },
    {
      title: "3. Advertising",
      content: `We use Google AdSense to display advertisements. Google AdSense may use cookies to serve ads based on your prior visits. You can opt out of personalized advertising at Google Ads Settings.`
    },
    {
      title: "4. Cookies",
      content: `Our website uses cookies for analytics and advertising purposes. You can control cookie settings through your browser preferences.`
    },
    {
      title: "5. Third-Party Links",
      content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.`
    },
    {
      title: "6. Changes to This Policy",
      content: `We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.`
    },
    {
      title: "7. Contact",
      content: `If you have any questions about this privacy policy, please contact us through our website.`
    }
  ]
};

export default function PrivacyPage() {
  const { title, lastUpdated, sections } = content;

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/en" className="text-indigo-600 hover:text-indigo-800">
            ← Home
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">{title}</h1>
        <p className="text-gray-500 mb-8">{lastUpdated}</p>
        
        <div className="space-y-8">
          {sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-indigo-800 mb-3">{section.title}</h2>
              <p className="text-gray-600 whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
