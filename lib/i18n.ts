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
    description: string;
    tarotLink: string;
    horoscopeLink: string;
    dreamLink: string;
    footerPrefix: string;
    footerTarot: string;
    footerHoroscope: string;
    footerDream: string;
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
      description: "Angel numbers often appear when we need guidance. If you saw this number in a dream, it may carry deeper meaning:",
      tarotLink: "Draw Tarot Cards",
      horoscopeLink: "Daily Horoscope",
      dreamLink: "Dream Interpretation",
      footerPrefix: "Explore more:",
      footerTarot: "Tarot",
      footerHoroscope: "Horoscope",
      footerDream: "Dreams",
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
      description: "エンジェルナンバーは導きが必要なときに現れることがあります。夢でこの数字を見た場合、より深い意味があるかもしれません：",
      tarotLink: "タロットカードを引く",
      horoscopeLink: "今日の運勢",
      dreamLink: "夢占い",
      footerPrefix: "もっと知りたいですか？",
      footerTarot: "タロット",
      footerHoroscope: "運勢",
      footerDream: "夢占い",
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
      description: "엔젤넘버는 우리에게 안내가 필요할 때 나타나기도 합니다. 꿈에서 이 숫자를 봤다면 더 깊은 의미가 있을 수 있습니다：",
      tarotLink: "타로 카드 뽑기",
      horoscopeLink: "오늘의 운세",
      dreamLink: "꿈해몽",
      footerPrefix: "더 확인하고 싶다면",
      footerTarot: "타로",
      footerHoroscope: "운세",
      footerDream: "꿈해몽",
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
      description: "Los números de ángeles a menudo aparecen cuando necesitamos orientación. Si viste este número en un sueño, puede tener un significado más profundo:",
      tarotLink: "Saca Cartas del Tarot",
      horoscopeLink: "Horóscopo de Hoy",
      dreamLink: "Interpretación de Sueños",
      footerPrefix: "¿Quieres explorar más?",
      footerTarot: "Tarot",
      footerHoroscope: "Horóscopo",
      footerDream: "Sueños",
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
      description: "天使數字常常在我們需要指引時出現。如果你在夢中看到這個數字，可能有更深的含義：",
      tarotLink: "抽塔羅牌",
      horoscopeLink: "今日運勢",
      dreamLink: "夢境解析",
      footerPrefix: "想了解更多嗎？",
      footerTarot: "塔羅",
      footerHoroscope: "運勢",
      footerDream: "夢境",
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
      description: "Engelzahlen erscheinen oft, wenn wir Führung brauchen. Wenn du diese Zahl im Traum gesehen hast, könnte sie eine tiefere Bedeutung haben:",
      tarotLink: "Tarotkarten ziehen",
      horoscopeLink: "Tageshoroskop",
      dreamLink: "Traumdeutung",
      footerPrefix: "Mehr erfahren?",
      footerTarot: "Tarot",
      footerHoroscope: "Horoskop",
      footerDream: "Träume",
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
