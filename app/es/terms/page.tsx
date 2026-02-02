import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Términos de Servicio - Decode Number",
  description: "Términos de Servicio de Decode Number",
  alternates: generatePageAlternates("/terms"),
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/es" className="text-indigo-600 hover:text-indigo-800">
            ← Inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Términos de Servicio</h1>
        <p className="text-gray-500 mb-8">Última actualización: 30 de enero de 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Descripción del Servicio</h2>
            <p className="text-gray-600">Tell Dream proporciona contenido de interpretación de sueños solo con fines de entretenimiento y autorreflexión.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Descargo de Responsabilidad</h2>
            <p className="text-gray-600 whitespace-pre-line">{`• Las interpretaciones de sueños son para entretenimiento y no reemplazan el asesoramiento profesional.
• No garantizamos la precisión de ninguna interpretación.
• Las decisiones basadas en nuestro contenido son su exclusiva responsabilidad.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Propiedad Intelectual</h2>
            <p className="text-gray-600">Todo el contenido de Tell Dream está protegido por derechos de autor. Se prohíbe la reproducción o distribución no autorizada.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Cambios en los Términos</h2>
            <p className="text-gray-600">Podemos actualizar estos términos en cualquier momento. El uso continuado del sitio constituye la aceptación de los términos actualizados.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Contacto</h2>
            <p className="text-gray-600">Para preguntas sobre estos términos, contáctenos a través de nuestro sitio web.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
