import { Locale } from "@/lib/markdown";
import { getDictionary } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function CrossSiteCTA({ locale }: Props) {
  const dict = getDictionary(locale);

  return (
    <div className="my-12 py-8 px-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
      <p className="text-lg text-indigo-900 font-medium mb-4">
        🔮 {dict.cta.heading}
      </p>
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <a
          href={`https://read-tarot.com/${locale}/draw`}
          className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {dict.cta.tarotButton}
        </a>
        <a
          href={`https://read-star.com/${locale}/horoscope`}
          className="text-indigo-600 hover:text-indigo-800 text-sm"
        >
          {dict.cta.horoscopeLink} →
        </a>
      </div>
    </div>
  );
}
