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
    description: string;
    tarotLink: string;
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
      heading: "Explore This Message Further",
      description: "Angel numbers often appear when we need guidance. If you'd like to explore this message more deeply:",
      tarotLink: "Draw Tarot Cards",
      horoscopeLink: "Daily Horoscope",
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
      heading: "このメッセージをさらに深く探る",
      description: "エンジェルナンバーは導きが必要なときに現れることがあります。このメッセージをより深く探りたい場合は：",
      tarotLink: "タロットカードを引く",
      horoscopeLink: "今日の運勢",
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
      heading: "이 메시지를 더 깊이 탐구하기",
      description: "엔젤넘버는 우리에게 안내가 필요할 때 나타나기도 합니다. 이 메시지를 더 깊이 탐구하고 싶다면：",
      tarotLink: "타로 카드 뽑기",
      horoscopeLink: "오늘의 운세",
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
      heading: "Explora este mensaje más a fondo",
      description: "Los números de ángeles a menudo aparecen cuando necesitamos orientación. Si deseas explorar este mensaje más profundamente:",
      tarotLink: "Saca Cartas del Tarot",
      horoscopeLink: "Horóscopo de Hoy",
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
      heading: "深入探索這個訊息",
      description: "天使數字常常在我們需要指引時出現。如果你想更深入地探索這個訊息：",
      tarotLink: "抽塔羅牌",
      horoscopeLink: "今日運勢",
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
      heading: "Erkunde diese Botschaft weiter",
      description: "Engelzahlen erscheinen oft, wenn wir Führung brauchen. Wenn du diese Botschaft tiefer erkunden möchtest:",
      tarotLink: "Tarotkarten ziehen",
      horoscopeLink: "Tageshoroskop",
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
