import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

const SITE_URL = "https://cosmos-atlas.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cosmos Atlas — Explore the Universe",
    template: "%s | Cosmos Atlas"
  },
  description: "An interactive atlas of the universe. Explore the solar system, stars, galaxies, and the scale of everything — one world at a time.",
  openGraph: {
    title: "Cosmos Atlas",
    description: "Explore the universe. One world at a time.",
    url: SITE_URL,
    siteName: "Cosmos Atlas",
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased min-h-screen flex flex-col bg-void text-starlight">
        <Starfield />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-navy focus:text-starlight focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
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
