import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OC Digital | Sites profissionais para empresas",
  description:
    "Sites institucionais e landing pages com visual estratégico, presença profissional e foco em conversão.",
  openGraph: {
    title: "OC Digital | Sites profissionais para empresas",
    description:
      "Criação de sites profissionais, landing pages e estrutura digital para empresas que querem crescer com autoridade.",
    siteName: "OC Digital",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
