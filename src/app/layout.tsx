import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/seo/structured-data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: {
    default: "KStV Ravensberg – Studentenverbindung in Münster | Seit 1919",
    template: "%s | KStV Ravensberg",
  },
  description:
    "Katholische, nichtschlagende, farbenführende Studentenverbindung im Kartellverband (KV) an der Universität Münster. Gegründet 1919. Religio, Scientia, Amicitia.",
  keywords: [
    "KStV Ravensberg",
    "Studentenverbindung Münster",
    "Kartellverband",
    "KV Verbindung",
    "katholische Studentenverbindung",
    "nichtschlagend",
    "farbenführend",
    "Universität Münster",
    "Kreuzviertel Münster",
    "Religio Scientia Amicitia",
    "Studentenverbindung NRW",
    "Verbindung Münster",
    "KStV Ravensberg",
  ],
  authors: [{ name: "KStV Ravensberg zu Münster" }],
  creator: "KStV Ravensberg",
  publisher: "KStV Ravensberg zu Münster",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://kstvravensberg.de"),
  alternates: {
    canonical: "https://kstvravensberg.de/",
  },
  openGraph: {
    title: "KStV Ravensberg – Studentenverbindung in Münster | Seit 1919",
    description:
      "Katholische, nichtschlagende, farbenführende Studentenverbindung im Kartellverband (KV) an der Universität Münster. Gegründet 1919. Religio, Scientia, Amicitia.",
    url: "https://kstvravensberg.de",
    siteName: "KStV Ravensberg zu Münster",
    images: [
      {
        url: "https://kstvravensberg.de/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wappen des KStV Ravensberg zu Münster",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KStV Ravensberg zu Münster",
    description:
      "Katholische Studentenverbindung an der Universität Münster. Seit 1919.",
    images: ["https://kstvravensberg.de/images/og-image.png"],
  },
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
  category: "education",
  classification: "Organization",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B7324" },
    { media: "(prefers-color-scheme: dark)", color: "#8B7324" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" dir="ltr" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema()),
          }}
        />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
