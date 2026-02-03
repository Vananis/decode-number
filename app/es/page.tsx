import Link from "next/link";
import { Metadata } from "next";
import { getAllAngelNumberSlugs, readMarkdownFile } from "@/lib/markdown";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Significados de Números Angelicales",
  description: "Descifra los mensajes detrás de los números que ves",
  alternates: generatePageAlternates(),
};

const popularSlugs = [
  "111", "222", "333", "444", "555", "666", "777", "888", "999",
  "1111", "1212", "1234"
];

export default async function SpanishHome() {
  const allSlugs = getAllAngelNumberSlugs("es");
  
  const sortedSlugs = [
    ...popularSlugs.filter(s => allSlugs.includes(s)),
    ...allSlugs.filter(s => !popularSlugs.includes(s)).sort((a, b) => parseInt(a) - parseInt(b))
  ];

  const topNumbers = await Promise.all(
    sortedSlugs.slice(0, 9).map(async (slug) => {
      try {
        const { frontmatter } = await readMarkdownFile(slug, "es");
        return {
          slug,
          title: frontmatter.title || `Número ${slug}`,
          desc: frontmatter.description ? frontmatter.description.slice(0, 80) + "..." : ""
        };
      } catch {
        return { slug, title: `Número ${slug}`, desc: "" };
      }
    })
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Significados de Números Angelicales
          </h1>
          <p className="text-xl text-gray-600">
            Descifra los mensajes detrás de los números que ves
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Números Angelicales Populares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topNumbers.map((number) => (
              <Link
                key={number.slug}
                href={`/es/angel-numbers/${number.slug}`}
                className="block p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Significado de {number.slug}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{number.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Todos los Números Angelicales ({allSlugs.length})
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sortedSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/es/angel-numbers/${slug}`}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {slug}
              </Link>
            ))}
          </div>
        </section>

        <Link
          href="https://tell-dream.com"
          className="block p-8 rounded-2xl text-center bg-gradient-to-r from-indigo-100 via-purple-100 to-violet-100 hover:from-indigo-200 hover:via-purple-200 hover:to-violet-200 transition-all shadow-sm hover:shadow-md"
        >
          <span className="text-3xl mb-2 block">🌙</span>
          <span className="text-2xl font-serif font-semibold text-gray-800 tracking-wide">
            Significados de Sueños
          </span>
          <p className="text-gray-600 mt-2 text-sm">
            ¿Viste este número en un sueño? Descubre su significado
          </p>
        </Link>
        {/* Footer */}
        <footer className="mt-12 text-center text-gray-400 text-sm space-y-2">
          <p>© 2026 Decode Number</p>
          <div className="flex justify-center gap-4 text-xs">
            <Link href="/es/privacy" className="hover:text-gray-600 transition-colors">Política de Privacidad</Link>
            <span>|</span>
            <Link href="/es/terms" className="hover:text-gray-600 transition-colors">Términos de Servicio</Link>
            <span>|</span>
            <a href="mailto:contact@decode-number.com" className="hover:text-gray-600 transition-colors">Contacto</a>
          </div>
        </footer>
      </div>
    </main>
  );
}