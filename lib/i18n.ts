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
  };
  cta: {
    dreamDesc: string;
    dreamLink: string;
    tarotDesc: string;
    tarotLink: string;
    horoscopeDesc: string;
    horoscopeLink: string;
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
      birthFlowers: "Birth Flowers by Month",
      birthStones: "Birthstones by Month",
      zodiacSigns: "Zodiac Signs",
    },
    cta: {
      dreamDesc: "If you saw this number in a dream",
      dreamLink: "Dream Interpretation",
      tarotDesc: "If you need deeper insight",
      tarotLink: "Draw Tarot Cards",
      horoscopeDesc: "If you're curious about today's flow",
      horoscopeLink: "Daily Horoscope",
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
      birthFlowers: "誕生花",
      birthStones: "誕生石",
      zodiacSigns: "星座",
    },
    cta: {
      dreamDesc: "夢でこの数字を見たなら",
      dreamLink: "夢占い",
      tarotDesc: "より深い洞察が必要なら",
      tarotLink: "タロットカードを引く",
      horoscopeDesc: "今日の流れが気になるなら",
      horoscopeLink: "今日の運勢",
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
      birthFlowers: "탄생화",
      birthStones: "탄생석",
      zodiacSigns: "별자리",
    },
    cta: {
      dreamDesc: "꿈에서 이 숫자를 봤다면",
      dreamLink: "꿈해몽 보기",
      tarotDesc: "더 깊은 통찰이 필요하다면",
      tarotLink: "타로 카드 뽑기",
      horoscopeDesc: "오늘의 흐름이 궁금하다면",
      horoscopeLink: "오늘의 운세",
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
      birthFlowers: "Flores de Nacimiento",
      birthStones: "Piedras de Nacimiento",
      zodiacSigns: "Signos del Zodiaco",
    },
    cta: {
      dreamDesc: "Si viste este número en un sueño",
      dreamLink: "Interpretación de Sueños",
      tarotDesc: "Si necesitas una visión más profunda",
      tarotLink: "Saca Cartas del Tarot",
      horoscopeDesc: "Si tienes curiosidad por el flujo de hoy",
      horoscopeLink: "Horóscopo de Hoy",
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
      birthFlowers: "生日花",
      birthStones: "生日石",
      zodiacSigns: "星座",
    },
    cta: {
      dreamDesc: "如果你在夢中看到這個數字",
      dreamLink: "夢境解析",
      tarotDesc: "如果你需要更深的洞察",
      tarotLink: "抽塔羅牌",
      horoscopeDesc: "如果你好奇今天的運勢",
      horoscopeLink: "今日運勢",
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
      birthFlowers: "Geburtsblumen",
      birthStones: "Geburtssteine",
      zodiacSigns: "Sternzeichen",
    },
    cta: {
      dreamDesc: "Wenn du diese Zahl im Traum gesehen hast",
      dreamLink: "Traumdeutung",
      tarotDesc: "Wenn du tiefere Einsicht brauchst",
      tarotLink: "Tarotkarten ziehen",
      horoscopeDesc: "Wenn du neugierig auf den heutigen Fluss bist",
      horoscopeLink: "Tageshoroskop",
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
