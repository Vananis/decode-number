import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { readMarkdownFile, getAllSlugs, getAlternateLanguages } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs("zh-hant", "birth-stone").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const content = await readMarkdownFile(slug, "zh-hant", "birth-stone");
    const alternates = getAlternateLanguages(slug, "birth-stone");
    
    return {
      title: content.frontmatter.title || `${slug}誕生石`,
      description: content.frontmatter.description || `${slug}誕生石的含義與能量`,
      alternates: {
        languages: Object.fromEntries(
          alternates.map(({ locale, url }) => [locale, url])
        ),
      },
    };
  } catch {
    return { title: "找不到誕生石" };
  }
}

export default async function BirthstonePage({ params }: Props) {
  const { slug } = await params;
  
  let content;
  try {
    content = await readMarkdownFile(slug, "zh-hant", "birth-stone");
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <Link href="/zh-hant" className="text-amber-600 hover:text-amber-800">
            ← 首頁
          </Link>
        </nav>

        <article className="prose prose-gray max-w-none">
          <div 
            className="text-gray-700 leading-relaxed [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-amber-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-amber-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-amber-100 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-amber-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-amber-600 [&_a]:hover:text-amber-800 [&_table]:w-full [&_table]:my-6 [&_th]:bg-amber-50 [&_th]:p-3 [&_th]:text-left [&_th]:text-amber-800 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 [&_blockquote]:border-l-4 [&_blockquote]:border-amber-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-amber-50 [&_blockquote]:py-2 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </article>
      </div>
    </main>
  );
}