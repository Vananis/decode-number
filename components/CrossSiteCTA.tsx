import { Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function CrossSiteCTA({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 my-6 rounded-r space-y-3">
      <p>
        <span className="text-gray-700">{dict.cta.dreamDesc}</span>{" "}
        <a
          href={`https://tell-dream.com/${locale}`}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {dict.cta.dreamLink} →
        </a>
      </p>
      <p>
        <span className="text-gray-700">{dict.cta.tarotDesc}</span>{" "}
        <a
          href={`https://read-tarot.com/${locale}/draw`}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {dict.cta.tarotLink} →
        </a>
      </p>
      <p>
        <span className="text-gray-700">{dict.cta.horoscopeDesc}</span>{" "}
        <a
          href={`https://read-star.com/${locale}/horoscope`}
          className="text-indigo-600 hover:text-indigo-800 font-medium"
        >
          {dict.cta.horoscopeLink} →
        </a>
      </p>
    </div>
  );
}
