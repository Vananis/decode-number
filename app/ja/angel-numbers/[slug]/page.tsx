import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { readMarkdownFile, getAllAngelNumberSlugs, getAlternateLanguages } from "@/lib/markdown";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllAngelNumberSlugs("ja").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const number = await readMarkdownFile(slug, "ja");
    const alternates = getAlternateLanguages(slug);
    
    return {
      title: number.frontmatter.title || `${slug}エンジェルナンバーの意味`,
      description: number.frontmatter.description || `${slug}エンジェルナンバーの意味と解釈`,
      alternates: {
        languages: Object.fromEntries(
          alternates.map(({ locale, url }) => [locale, url])
        ),
      },
    };
  } catch {
    return { title: "エンジェルナンバーが見つかりません" };
  }
}

export default async function AngelNumberPage({ params }: Props) {
  const { slug } = await params;
  
  let number;
  try {
    number = await readMarkdownFile(slug, "ja");
  } catch {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <nav className="mb-8">
          <Link href="/ja" className="text-indigo-600 hover:text-indigo-800">
            ← ホーム
          </Link>
        </nav>

        <article className="prose prose-gray max-w-none">
          <div 
            className="text-gray-700 leading-relaxed [&_h1]:text-3xl [&_h1]:md:text-4xl [&_h1]:font-bold [&_h1]:text-indigo-900 [&_h1]:mb-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-indigo-800 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-indigo-100 [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-indigo-700 [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-2 [&_a]:text-indigo-600 [&_a]:hover:text-indigo-800 [&_table]:w-full [&_table]:my-6 [&_th]:bg-indigo-50 [&_th]:p-3 [&_th]:text-left [&_th]:text-indigo-800 [&_td]:p-3 [&_td]:border-t [&_td]:border-gray-200 [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:bg-indigo-50 [&_blockquote]:py-2 [&_strong]:text-gray-900"
            dangerouslySetInnerHTML={{ __html: number.content }}
          />
        </article>

        <a
          href="https://tell-dream.com"
          className="aurora-border group block mt-16 p-6 transition-transform hover:scale-[1.01]"
        >
          <div className="flex items-center gap-8">
            <span className="text-4xl">🌙</span>
            <div className="text-left">
              <p className="text-gray-700 text-lg">
                この数字を夢で見ましたか？
              </p>
              <p className="text-purple-600 font-medium flex items-center gap-1">
                夢の意味を探る <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </p>
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}