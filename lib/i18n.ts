import { Locale } from './markdown';

type Dictionary = {
  home: {
    title: string;
    subtitle: string;
    popularNumbers: string;
    allNumbers: string;
    birthFlowers: string;
    birthStones: string;
    zodiacSigns: string;
    dreamCta: string;
    dreamCtaDesc: string;
  };
  cta: {
    heading: string;
    tarotButton: string;
    horoscopeLink: string;
    footerPrefix: string;
    footerHoroscope: string;
    footerTarot: string;
  };
  nav: {
    home: string;
    privacy: string;
    terms: string;
    contact: string;
  };
  footer: {
    copyright: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    home: {
      title: "Angel Number Meanings",
      subtitle: "Decode the messages behind the numbers you see",
      popularNumbers: "Popular Angel Numbers",
      allNumbers: "All Angel Numbers",
      birthFlowers: "🌸 Birth Flowers by Month",
      birthStones: "💎 Birthstones by Month",
      zodiacSigns: "✨ Zodiac Signs",
      dreamCta: "Dream Meanings",
      dreamCtaDesc: "Saw this number in a dream? Discover what it means",
    },
    cta: {
      heading: "Want to explore this message further?",
      tarotButton: "Draw Tarot Cards",
      horoscopeLink: "or check today's cosmic flow",
      footerPrefix: "Explore more:",
      footerHoroscope: "Daily Horoscope",
      footerTarot: "Draw Tarot Cards",
    },
    nav: {
      home: "← Home",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
  ja: {
    home: {
      title: "エンジェルナンバーの意味",
      subtitle: "あなたが見る数字に込められたメッセージを解読",
      popularNumbers: "人気のエンジェルナンバー",
      allNumbers: "すべてのエンジェルナンバー",
      birthFlowers: "🌸 誕生花",
      birthStones: "💎 誕生石",
      zodiacSigns: "✨ 星座",
      dreamCta: "夢占い",
      dreamCtaDesc: "この数字を夢で見ましたか？その意味を発見しましょう",
    },
    cta: {
      heading: "このメッセージをさらに深く知りたいですか？",
      tarotButton: "タロットカードを引く",
      horoscopeLink: "または今日の宇宙の流れを確認",
      footerPrefix: "もっと知りたいですか？",
      footerHoroscope: "今日の運勢",
      footerTarot: "タロットを引く",
    },
    nav: {
      home: "← ホーム",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      contact: "お問い合わせ",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
  ko: {
    home: {
      title: "엔젤넘버 의미",
      subtitle: "당신이 보는 숫자에 담긴 메시지를 해독하세요",
      popularNumbers: "인기 엔젤넘버",
      allNumbers: "모든 엔젤넘버",
      birthFlowers: "🌸 탄생화",
      birthStones: "💎 탄생석",
      zodiacSigns: "✨ 별자리",
      dreamCta: "꿈해몽",
      dreamCtaDesc: "이 숫자를 꿈에서 봤나요? 그 의미를 알아보세요",
    },
    cta: {
      heading: "이 메시지의 흐름을 더 알고 싶다면?",
      tarotButton: "타로 카드 뽑기",
      horoscopeLink: "또는 오늘의 우주 흐름 확인",
      footerPrefix: "더 확인하고 싶다면",
      footerHoroscope: "오늘의 운세",
      footerTarot: "타로 카드 뽑기",
    },
    nav: {
      home: "← 홈",
      privacy: "개인정보처리방침",
      terms: "이용약관",
      contact: "문의",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
  es: {
    home: {
      title: "Significado de Números de Ángeles",
      subtitle: "Descifra los mensajes detrás de los números que ves",
      popularNumbers: "Números de Ángeles Populares",
      allNumbers: "Todos los Números de Ángeles",
      birthFlowers: "🌸 Flores de Nacimiento",
      birthStones: "💎 Piedras de Nacimiento",
      zodiacSigns: "✨ Signos del Zodiaco",
      dreamCta: "Significados de Sueños",
      dreamCtaDesc: "¿Viste este número en un sueño? Descubre su significado",
    },
    cta: {
      heading: "¿Quieres explorar más este mensaje?",
      tarotButton: "Saca Cartas del Tarot",
      horoscopeLink: "o consulta el flujo cósmico de hoy",
      footerPrefix: "¿Quieres explorar más?",
      footerHoroscope: "Horóscopo de Hoy",
      footerTarot: "Sacar Cartas del Tarot",
    },
    nav: {
      home: "← Inicio",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      contact: "Contacto",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
  "zh-hant": {
    home: {
      title: "天使數字含義",
      subtitle: "解讀你所看到的數字背後的訊息",
      popularNumbers: "熱門天使數字",
      allNumbers: "所有天使數字",
      birthFlowers: "🌸 生日花",
      birthStones: "💎 生日石",
      zodiacSigns: "✨ 星座",
      dreamCta: "夢境解析",
      dreamCtaDesc: "在夢中看到這個數字？發現它的含義",
    },
    cta: {
      heading: "想深入了解這個訊息的流向嗎？",
      tarotButton: "抽塔羅牌",
      horoscopeLink: "或查看今日宇宙流向",
      footerPrefix: "想了解更多嗎？",
      footerHoroscope: "今日運勢",
      footerTarot: "抽塔羅牌",
    },
    nav: {
      home: "← 首頁",
      privacy: "隱私政策",
      terms: "服務條款",
      contact: "聯繫我們",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
  de: {
    home: {
      title: "Engelzahlen Bedeutungen",
      subtitle: "Entschlüsseln Sie die Botschaften hinter den Zahlen, die Sie sehen",
      popularNumbers: "Beliebte Engelzahlen",
      allNumbers: "Alle Engelzahlen",
      birthFlowers: "🌸 Geburtsblumen",
      birthStones: "💎 Geburtssteine",
      zodiacSigns: "✨ Sternzeichen",
      dreamCta: "Traumdeutung",
      dreamCtaDesc: "Haben Sie diese Zahl im Traum gesehen? Entdecken Sie ihre Bedeutung",
    },
    cta: {
      heading: "Möchten Sie diese Botschaft weiter erkunden?",
      tarotButton: "Tarotkarten ziehen",
      horoscopeLink: "oder den kosmischen Fluss von heute sehen",
      footerPrefix: "Mehr erfahren?",
      footerHoroscope: "Tageshoroskop",
      footerTarot: "Tarotkarten ziehen",
    },
    nav: {
      home: "← Startseite",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
    },
    footer: {
      copyright: "© 2026 Decode Number",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
