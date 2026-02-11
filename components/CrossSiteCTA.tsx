import { Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function CrossSiteCTA({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <blockquote className="border-l-4 border-indigo-400 pl-4 text-gray-600 bg-indigo-50 py-2 my-6">
      <p className="font-semibold text-gray-800 mb-2">
        {dict.cta.heading}
      </p>
      <p className="mb-2">
        {dict.cta.description}
      </p>
      <p>
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
      </p>
    </blockquote>
  );
}