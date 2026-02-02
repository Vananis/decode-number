import Link from "next/link";
import { Metadata } from "next";
import { generatePageAlternates } from "@/lib/alternates";

export const metadata: Metadata = {
  title: "Política de Privacidad - Decode Number",
  description: "Política de Privacidad de Decode Number",
  alternates: generatePageAlternates("/privacy"),
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/es" className="text-indigo-600 hover:text-indigo-800">
            ← Inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Política de Privacidad</h1>
        <p className="text-gray-500 mb-8">Última actualización: 30 de enero de 2026</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">1. Información que Recopilamos</h2>
            <p className="text-gray-600">Tell Dream no requiere cuentas de usuario ni recopila información personal directamente. No almacenamos datos personales en nuestros servidores.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">2. Analítica</h2>
            <p className="text-gray-600 whitespace-pre-line">{`Utilizamos Google Analytics para comprender cómo los visitantes interactúan con nuestro sitio web. Esto incluye:
• Páginas visitadas y tiempo de permanencia
• Tipo de navegador y sistema operativo
• Ubicación geográfica aproximada (nivel país/ciudad)
• Fuentes de referencia

Estos datos se recopilan de forma anónima.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">3. Publicidad</h2>
            <p className="text-gray-600">Utilizamos Google AdSense para mostrar anuncios. Google AdSense puede usar cookies para mostrar anuncios basados en visitas anteriores.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">4. Cookies</h2>
            <p className="text-gray-600">Nuestro sitio web utiliza cookies para análisis y publicidad. Puede controlar las cookies a través de la configuración de su navegador.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">5. Contacto</h2>
            <p className="text-gray-600">Si tiene preguntas sobre esta política, contáctenos a través de nuestro sitio web.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
