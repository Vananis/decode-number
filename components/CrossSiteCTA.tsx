import { Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function CrossSiteCTA({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-6">
      <p className="mb-2">
        {dict.cta.description}
      </p>
      <p className="not-italic">
        <a
          href={`https://read-tarot.com/${locale}/draw`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          {dict.cta.tarotLink} →
        </a>
        <span className="mx-3 text-gray-400">|</span>
        <a
          href={`https://read-star.com/${locale}/horoscope`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          {dict.cta.horoscopeLink} →
        </a>
        <span className="mx-3 text-gray-400">|</span>
        <a
          href={`https://tell-dream.com/${locale}`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          {dict.cta.dreamLink} →
        </a>
      </p>
    </blockquote>
  );
}
