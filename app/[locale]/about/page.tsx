import Link from "next/link";
import { Metadata } from "next";
import { locales, Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";
import { generatePageAlternates } from "@/lib/alternates";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const content = {
  en: {
    title: "About Decode Number",
    metaDescription: "About Decode Number — a numerology guide exploring the symbolic meanings of numbers, angel numbers, birth flowers, birthstones, and zodiac signs.",
    whatIsTitle: "What is Decode Number?",
    whatIsDesc: "Decode Number is a numerology guide that explores the symbolic meanings of numbers. We provide comprehensive information on angel numbers, birth flowers, birthstones, and zodiac signs — all in one place.",
    approachTitle: "Our Approach",
    approachItems: [
      "Grounded in the tradition of numerology, which has been studied across cultures for centuries.",
      "We reference symbolic number systems from diverse cultural traditions around the world.",
      "We present numbers not as superstition, but as a lens for symbolic exploration and personal reflection.",
    ],
    libraryTitle: "Content Library",
    libraryItems: [
      { name: "Angel Numbers", desc: "Interpretations of repeating number sequences and their symbolic meanings." },
      { name: "Birth Flowers", desc: "Monthly birth flower guides with meanings and cultural significance." },
      { name: "Birthstones", desc: "Monthly birthstone guides covering history, properties, and symbolism." },
      { name: "Zodiac Signs", desc: "Essential information on the 12 zodiac signs, traits, and compatibility." },
    ],
    disclaimerTitle: "Disclaimer",
    disclaimerDesc: "All content on Decode Number is provided for educational and entertainment purposes only. It is not intended as professional advice of any kind. Numerology and symbolic interpretation are cultural and historical practices — readers are encouraged to use this information as a starting point for personal reflection, not as a basis for important life decisions.",
  },
  ko: {
    title: "Decode Number 소개",
    metaDescription: "Decode Number 소개 — 숫자의 상징적 의미를 탐색하는 수비학 가이드. 엔젤넘버, 탄생화, 탄생석, 별자리 정보를 종합 제공합니다.",
    whatIsTitle: "Decode Number란?",
    whatIsDesc: "Decode Number는 숫자의 상징적 의미를 탐색하는 수비학(Numerology) 가이드입니다. 엔젤넘버, 탄생화, 탄생석, 별자리 정보를 한곳에서 종합적으로 제공합니다.",
    approachTitle: "접근 방식",
    approachItems: [
      "수세기에 걸쳐 여러 문화권에서 연구되어 온 수비학(Numerology) 전통에 기반합니다.",
      "전 세계 다양한 문화의 숫자 상징 체계를 참고합니다.",
      "미신이 아닌, 상징적 의미 탐색과 자기 성찰을 위한 도구로서 숫자를 다룹니다.",
    ],
    libraryTitle: "콘텐츠 라이브러리",
    libraryItems: [
      { name: "엔젤넘버", desc: "반복되는 숫자 배열과 그 상징적 의미에 대한 해석을 제공합니다." },
      { name: "탄생화", desc: "월별 탄생화 가이드와 꽃말, 문화적 의미를 다룹니다." },
      { name: "탄생석", desc: "월별 탄생석의 역사, 특성, 상징을 안내합니다." },
      { name: "별자리", desc: "12궁 별자리의 기본 정보, 성격 특성, 궁합을 소개합니다." },
    ],
    disclaimerTitle: "면책 조항",
    disclaimerDesc: "Decode Number의 모든 콘텐츠는 교육 및 엔터테인먼트 목적으로만 제공됩니다. 어떠한 종류의 전문적 조언을 대체하지 않습니다. 수비학과 상징 해석은 문화적·역사적 관습이며, 독자 여러분께서는 중요한 결정의 근거가 아닌 자기 성찰의 출발점으로 활용해 주시기 바랍니다.",
  },
  ja: {
    title: "Decode Numberについて",
    metaDescription: "Decode Numberについて — 数字の象徴的な意味を探求する数秘術ガイド。エンジェルナンバー、誕生花、誕生石、星座情報を総合的に提供します。",
    whatIsTitle: "Decode Numberとは？",
    whatIsDesc: "Decode Numberは、数字の象徴的な意味を探求する数秘術（Numerology）ガイドです。エンジェルナンバー、誕生花、誕生石、星座に関する情報をひとつの場所で総合的に提供しています。",
    approachTitle: "私たちのアプローチ",
    approachItems: [
      "何世紀にもわたり様々な文化圏で研究されてきた数秘術の伝統に基づいています。",
      "世界各地の多様な文化における数字の象徴体系を参考にしています。",
      "迷信としてではなく、象徴的な意味の探求と自己省察のためのツールとして数字を扱います。",
    ],
    libraryTitle: "コンテンツライブラリ",
    libraryItems: [
      { name: "エンジェルナンバー", desc: "繰り返し現れる数字の並びとその象徴的な意味の解釈を提供します。" },
      { name: "誕生花", desc: "月別の誕生花ガイド、花言葉、文化的な意味をご紹介します。" },
      { name: "誕生石", desc: "月別の誕生石の歴史、特性、象徴について解説します。" },
      { name: "星座", desc: "12星座の基本情報、性格特性、相性をご案内します。" },
    ],
    disclaimerTitle: "免責事項",
    disclaimerDesc: "Decode Numberのすべてのコンテンツは、教育およびエンターテインメント目的でのみ提供されています。いかなる種類の専門的なアドバイスの代わりとなるものではありません。数秘術と象徴解釈は文化的・歴史的な慣習であり、重要な決断の根拠としてではなく、自己省察の出発点としてご活用ください。",
  },
  es: {
    title: "Sobre Decode Number",
    metaDescription: "Sobre Decode Number — una guía de numerología que explora los significados simbólicos de los números, números de ángeles, flores de nacimiento, piedras de nacimiento y signos del zodiaco.",
    whatIsTitle: "¿Qué es Decode Number?",
    whatIsDesc: "Decode Number es una guía de numerología que explora los significados simbólicos de los números. Ofrecemos información completa sobre números de ángeles, flores de nacimiento, piedras de nacimiento y signos del zodiaco, todo en un solo lugar.",
    approachTitle: "Nuestro Enfoque",
    approachItems: [
      "Basado en la tradición de la numerología, estudiada en diversas culturas durante siglos.",
      "Consultamos sistemas simbólicos numéricos de diversas tradiciones culturales alrededor del mundo.",
      "Presentamos los números no como superstición, sino como una herramienta para la exploración simbólica y la reflexión personal.",
    ],
    libraryTitle: "Biblioteca de Contenidos",
    libraryItems: [
      { name: "Números de Ángeles", desc: "Interpretaciones de secuencias numéricas repetitivas y sus significados simbólicos." },
      { name: "Flores de Nacimiento", desc: "Guías mensuales de flores de nacimiento con significados y relevancia cultural." },
      { name: "Piedras de Nacimiento", desc: "Guías mensuales de piedras de nacimiento que cubren historia, propiedades y simbolismo." },
      { name: "Signos del Zodiaco", desc: "Información esencial sobre los 12 signos del zodiaco, rasgos y compatibilidad." },
    ],
    disclaimerTitle: "Aviso Legal",
    disclaimerDesc: "Todo el contenido de Decode Number se proporciona únicamente con fines educativos y de entretenimiento. No pretende sustituir ningún tipo de asesoramiento profesional. La numerología y la interpretación simbólica son prácticas culturales e históricas — animamos a los lectores a utilizar esta información como punto de partida para la reflexión personal, no como base para decisiones importantes en la vida.",
  },
} as const;

type ContentLocale = keyof typeof content;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = content[(locale as ContentLocale)] || content.en;
  return {
    title: t.title + " | Decode Number",
    description: t.metaDescription,
    alternates: generatePageAlternates(locale, "/about"),
    robots: { index: true, follow: true },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const t = content[(locale as ContentLocale)] || content.en;

  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <nav className="mb-8">
          <Link href={`/${locale}`} className="text-indigo-600 hover:text-indigo-800">
            {dict.nav.home}
          </Link>
        </nav>

        <h1 className="text-3xl font-bold text-indigo-900 mb-10">{t.title}</h1>

        <div className="space-y-10">
          {/* What is Decode Number? */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">{t.whatIsTitle}</h2>
            <p className="text-gray-600 leading-relaxed">{t.whatIsDesc}</p>
          </section>

          {/* Our Approach */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3">{t.approachTitle}</h2>
            <ul className="space-y-2 text-gray-600">
              {t.approachItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1 shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Content Library */}
          <section>
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">{t.libraryTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {t.libraryItems.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-indigo-100">
                  <h3 className="font-medium text-indigo-700 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">{t.disclaimerTitle}</h2>
            <p className="text-sm text-gray-500 leading-relaxed">{t.disclaimerDesc}</p>
          </section>
        </div>
      </div>
    </main>
  );
}