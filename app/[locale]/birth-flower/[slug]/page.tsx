import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { readMarkdownFile, getAllSlugs, getAlternateLanguages, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

// Only EN and JA have birth-flower content
const supportedLocales: Locale[] = ['en', 'ja'];

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of supportedLocales) {
    const slugs = getAllSlugs(locale, 'birth-flower');
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const content = await readMarkdownFile(slug, locale, 'birth-flower');
    const alternates = getAlternateLanguages(slug, 'birth-flower');
    
    return {
      title: content.frontmatter.title || `${slug} Birth Flower`,
      description: content.frontmatter.description || `Discover the birth flower for ${slug}`,
      alternates: {
        languages: Object.fromEntries(
          alternates.map(({ locale, url }) => [locale, url])
        ),
      },
    };
  } catch {
    return { title: "Not Found" };
  }
}

export default async function BirthFlowerPage({ params }: Props) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  
  // Check if locale is supported for this content type
  if (!supportedLocales.includes(locale)) {
    notFound();
  }
  
  let content;
  try {
    content = await readMarkdownFile(slug, locale, 'birth-flower');
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <Link href={`/${locale}`} className="text-pink-600 hover:text-pink-800">
            {dict.nav.home}
          </Link>
        </nav>

        <article className="prose prose-gray max-w-none">
          <div 
            className="text-gray-700 leading-relaxed [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-pink-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-pink-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-pink-100 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-pink-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-pink-600 [&_a]:hover:text-pink-800 [&_table]:w-full [&_table]:my-6 [&_th]:bg-pink-50 [&_th]:p-3 [&_th]:text-left [&_th]:text-pink-800 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 [&_blockquote]:border-l-4 [&_blockquote]:border-pink-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-pink-50 [&_blockquote]:py-2 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </div>
    </main>
  );
}
