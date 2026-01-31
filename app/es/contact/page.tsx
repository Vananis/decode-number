import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contáctenos - Tell Dream",
  description: "Contactar Tell Dream",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href="/es" className="text-indigo-600 hover:text-indigo-800">
            ← Inicio
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-2">Contáctenos</h1>
        <p className="text-gray-500 mb-8">¿Tiene preguntas? Póngase en contacto con nosotros</p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Contacto por Email</h2>
            <p className="text-gray-600 whitespace-pre-line">{`Para todas las consultas, envíenos un correo a:

📧 contact@tell-dream.com

Responderemos lo antes posible.`}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">Comentarios</h2>
            <p className="text-gray-600">Agradecemos sus comentarios para mejorar Tell Dream. Comparta sus sugerencias, correcciones o ideas para nuevos temas de sueños.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
