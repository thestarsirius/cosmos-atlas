import type { Metadata } from "next";
import { Noto_Kufi_Arabic, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const kufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-kufi",
  display: "swap"
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-arabic",
  display: "swap"
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

const SITE_URL = "https://cosmos-atlas.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "أطلس الكون | COSMOS",
    template: "%s | أطلس الكون"
  },
  description:
    "أطلس الكون — منصة تعليمية عربية تفاعلية للفلك وعلوم الكون، من الأرض إلى أبعد حدود الكون المرصود.",
  openGraph: {
    title: "أطلس الكون | COSMOS",
    description: "رحلة معرفية من الأرض إلى أبعد حدود الكون المرصود.",
    url: SITE_URL,
    siteName: "أطلس الكون",
    locale: "ar_AR",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${kufi.variable} ${plexArabic.variable} ${plexMono.variable}`}>
      <body className="font-arabic antialiased min-h-screen flex flex-col">
        <div className="starfield" aria-hidden="true" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:right-4 focus:bg-panel focus:text-ink focus:px-4 focus:py-2 focus:rounded"
        >
          تخطَّ إلى المحتوى
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
