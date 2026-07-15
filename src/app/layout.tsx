import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateOrganizationJsonLd } from "@/lib/jsonld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IPTV Sénégal — Abonnement IPTV Premium à partir de 3100 FCFA",
    template: "%s | IPTV Sénégal",
  },
  description:
    "Abonnement IPTV Premium au Sénégal à partir de 3100 FCFA. +22 000 chaînes TV, Football européen, Cinéma international. Paiement Wave ou Orange Money.",
  keywords: [
    "iptv sénégal",
    "abonnement iptv sénégal",
    "iptv dakar",
    "iptv pas cher sénégal",
    "iptv afrique",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: "IPTV Sénégal",
    title: "IPTV Sénégal — Abonnement IPTV Premium à partir de 3100 FCFA",
    description:
      "Abonnement IPTV Premium au Sénégal à partir de 3100 FCFA. +22 000 chaînes TV. Paiement Wave ou Orange Money.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${roboto.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationJsonLd()),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
