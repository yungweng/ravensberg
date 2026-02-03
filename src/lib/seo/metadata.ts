import type { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  keywords?: string[];
}

const siteConfig = {
  name: "KStV Ravensberg",
  fullName: "KStV Ravensberg zu Münster",
  url: "https://kstvravensberg.de",
  description:
    "Katholische Studentenverbindung an der Universität Münster. Seit 1919.",
  defaultImage: "/images/og-image.png",
  locale: "de_DE",
};

export function generatePageMetadata({
  title,
  description,
  path,
  noindex = false,
  keywords = [],
}: PageSEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === "Home"
      ? siteConfig.fullName
      : `${title} | ${siteConfig.fullName}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "KStV Ravensberg",
      "Studentenverbindung Münster",
      "Kartellverband",
      ...keywords,
    ].join(", "),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.defaultImage}`,
          width: 1200,
          height: 630,
          alt: `Wappen des ${siteConfig.fullName}`,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteConfig.url}${siteConfig.defaultImage}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
  };
}

export const pageMetadata = {
  home: {
    title: "Home",
    description:
      "KStV Ravensberg zu Münster — Katholische, nichtschlagende, farbenführende Studentenverbindung im Kartellverband (KV) an der Universität Münster. Gegründet 1919. Religio, Scientia, Amicitia.",
    keywords: [
      "Studentenverbindung",
      "katholische Verbindung",
      "KV Verbindung",
      "nichtschlagend",
      "farbenführend",
      "Universität Münster",
      "Kreuzviertel",
      "Religio Scientia Amicitia",
    ],
  },
  impressum: {
    title: "Impressum",
    description:
      "Impressum des KStV Ravensberg zu Münster — Rechtliche Informationen und Kontaktdaten.",
    noindex: true,
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    description:
      "Datenschutzerklärung des KStV Ravensberg zu Münster — Informationen zum Umgang mit personenbezogenen Daten.",
    noindex: true,
  },
};
