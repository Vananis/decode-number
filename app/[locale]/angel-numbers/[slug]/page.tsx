import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { readMarkdownFile, getAllAngelNumberSlugs, getAlternateLanguages, locales, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";
import { splitContentAfterCoreMeanings } from "@/lib/content";
import CrossSiteCTA from "@/components/CrossSiteCTA";

type Props = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getAllAngelNumberSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const angelNumber = await readMarkdownFile(slug, locale);
    const alternates = getAlternateLanguages(slug);
    
    return {
      title: angelNumber.frontmatter.title || `${slug} Angel Number Meaning`,
      description: angelNumber.frontmatter.description || `Discover the meaning of angel number ${slug}`,
      alternates: {
        languages: Object.fromEntries(
          alternates.map(({ locale, url }) => [locale, url])
        ),
      },
    };
  } catch {
    return { title: "Number Not Found" };
  }
}

export default async function AngelNumberPage({ params }: Props) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  
  let angelNumber;
  try {
    angelNumber = await readMarkdownFile(slug, locale);
  } catch {
    notFound();
  }

  const [contentBeforeCTA, contentAfterCTA] = splitContentAfterCoreMeanings(angelNumber.content);

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <Link href={`/${locale}`} className="text-indigo-600 hover:text-indigo-800">
            {dict.nav.home}
          </Link>
        </nav>

        <article className="prose prose-gray max-w-none">
          <div
            className="text-gray-700 leading-relaxed [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-indigo-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-indigo-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-indigo-100 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-indigo-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-indigo-600 [&_a]:hover:text-indigo-800 [&_table]:w-full [&_table]:my-6 [&_th]:bg-indigo-50 [&_th]:p-3 [&_th]:text-left [&_th]:text-indigo-800 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-indigo-50 [&_blockquote]:py-2 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: contentBeforeCTA }}
          />

          {contentAfterCTA && <CrossSiteCTA locale={locale} />}

          {contentAfterCTA && (
            <div
              className="text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-indigo-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-indigo-100 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-indigo-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-indigo-600 [&_a]:hover:text-indigo-800 [&_table]:w-full [&_table]:my-6 [&_th]:bg-indigo-50 [&_th]:p-3 [&_th]:text-left [&_th]:text-indigo-800 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-indigo-50 [&_blockquote]:py-2 [&_strong]:text-gray-900"
              dangerouslySetInnerHTML={{ __html: contentAfterCTA }}
            />
          )}
        </article>

        <p className="text-center text-gray-500 text-sm mt-12">
          {dict.cta.footerPrefix}{" "}
          <a
            href={`https://read-star.com/${locale}/horoscope`}
            className="text-indigo-600 hover:underline"
          >
            {dict.cta.footerHoroscope}
          </a>
          <span className="mx-3 text-gray-400">|</span>
          <a
            href={`https://read-tarot.com/${locale}/draw`}
            className="text-indigo-600 hover:underline"
          >
            {dict.cta.footerTarot}
          </a>
          <span className="mx-3 text-gray-400">|</span>
          <a
            href={`https://tell-dream.com/${locale}`}
            className="text-indigo-600 hover:underline"
          >
            {dict.cta.footerDream}
          </a>
        </p>
      </div>
    </main>
  );
}
