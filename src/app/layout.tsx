import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OffersPopup } from "@/components/OffersPopup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "German Werks | Premier German & European Automotive Care in Coimbatore",
  description: "South India's premier destination for German and European automotive care. Certified service, OE-level diagnostics, premium detailing, and high-performance upgrades.",
  keywords: ["BMW service Coimbatore", "Mercedes service", "Audi service", "German car service", "automotive detailing", "ECU remapping", "performance tuning"],
  authors: [{ name: "German Werks" }],
  openGraph: {
    title: "German Werks | German Experts. Precision Meets Passion.",
    description: "Certified care for your German machine. 13,000+ sq. ft. facility launching January 2026 in Coimbatore.",
    type: "website",
    locale: "en_IN",
    siteName: "German Werks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        <Header />
        <OffersPopup />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
