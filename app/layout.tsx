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
    <html lang="en">
      <head>
        {/* TODO: Add Google Analytics and Search Console verification after setup */}
      </head>
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
