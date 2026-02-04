import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.decode-number.com"),
  title: "Decode Number - Angel Number Meanings",
  description: "Discover the meaning behind angel numbers. Explore 111, 222, 333 and more with our comprehensive guide to numerology and spiritual insights.",
  keywords: ["angel numbers", "numerology", "111 meaning", "222 meaning", "333 meaning", "spiritual numbers"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NKLT6GH13Z"
          strategy="afterInteractive"
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5973811887757847"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NKLT6GH13Z');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
      </body>
    </>
  );
}
