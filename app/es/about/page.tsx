import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Decode Number",
  description: "Sobre Decode Number - Tu Guía de Números Angelicales",
  alternates: generatePageAlternates("/about"),
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/es" className="text-indigo-600 hover:text-indigo-800">
            ← Inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Sobre Nosotros</h1>
        <p className="text-gray-500 mb-8">Bienvenido a Tell Dream</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">¿Qué es Tell Dream?</h2>
            <p className="text-gray-600">Tell Dream es una guía completa de interpretación de sueños. Exploramos el simbolismo y los significados detrás de tus sueños, basándonos en la psicología, tradiciones culturales y perspectivas espirituales.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Nuestro Enfoque</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• Interpretaciones psicológicas (Freud, Jung, psicología moderna)
• Significados culturales y tradicionales de todo el mundo
• Perspectivas espirituales y simbólicas
• Análisis práctico de escenarios de sueños
• Soporte multilingüe (inglés, español, japonés, coreano, chino tradicional)`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Aviso Legal</h2>
            <p className="text-gray-600">Las interpretaciones de sueños se proporcionan solo con fines de entretenimiento y autorreflexión. No deben usarse como sustituto del asesoramiento profesional.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
