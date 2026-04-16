import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vgvault.oliviergeiger.com"),
  title: "VGVault — Votre collection de jeux, maîtrisée",
  description:
    "Gérez votre collection de jeux vidéo. Suivez vos prêts, consultez vos statistiques, organisez votre bibliothèque. Synchronisé sur tous vos appareils Apple.",
  keywords: [
    "collection de jeux vidéo",
    "gestionnaire de jeux",
    "suivi de jeux",
    "iOS app",
    "VGVault",
    "prêt de jeux",
    "statistiques jeux",
    "bibliothèque gaming",
  ],
  authors: [{ name: "Olivier Geiger" }],
  openGraph: {
    title: "VGVault — Votre collection de jeux, maîtrisée",
    description:
      "Gérez votre collection de jeux vidéo. Suivez vos prêts, consultez vos statistiques, organisez votre bibliothèque.",
    url: "https://vgvault.oliviergeiger.com",
    siteName: "VGVault",
    images: [{ url: "/preview.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VGVault — Votre collection de jeux, maîtrisée",
    description:
      "Gérez votre collection de jeux vidéo. Suivez vos prêts, consultez vos statistiques, organisez votre bibliothèque.",
    images: ["/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "VGVault",
                  url: "https://vgvault.oliviergeiger.com",
                  description:
                    "Gestionnaire de collection de jeux vidéo pour iOS.",
                  inLanguage: ["fr"],
                  publisher: { "@type": "Organization", name: "VGVault" },
                },
                {
                  "@type": "MobileApplication",
                  name: "VGVault — Gestionnaire de collection de jeux",
                  applicationCategory: "GameApplication",
                  operatingSystem: "iOS",
                  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
                  url: "https://apps.apple.com/app/id6746959960",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
