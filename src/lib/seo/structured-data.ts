export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KStV Ravensberg zu Münster",
    alternateName: "KStV Ravensberg",
    url: "https://kstvravensberg.de",
    logo: "https://kstvravensberg.de/images/wappen/wappen.png",
    description:
      "Katholische, nichtschlagende, farbenführende Studentenverbindung im Kartellverband (KV) an der Universität Münster. Gegründet 1919.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Raesfeldstraße 32",
      addressLocality: "Münster",
      addressRegion: "Nordrhein-Westfalen",
      postalCode: "48149",
      addressCountry: "DE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "vorstand@kstv-ravensberg.de",
      contactType: "general inquiry",
      availableLanguage: ["German"],
    },
    foundingDate: "1919-05-05",
    memberOf: {
      "@type": "Organization",
      name: "Kartellverband katholischer deutscher Studentenvereine (KV)",
      url: "https://www.kartellverband.de",
    },
    sameAs: ["https://www.instagram.com/kstvravensberg"],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CivicStructure",
    name: "Ravensberg-Haus",
    description:
      "Vereinshaus des KStV Ravensberg zu Münster im Kreuzviertel",
    url: "https://kstvravensberg.de",
    email: "vorstand@kstv-ravensberg.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Raesfeldstraße 32",
      addressLocality: "Münster",
      addressRegion: "Nordrhein-Westfalen",
      postalCode: "48149",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.9558,
      longitude: 7.6197,
    },
  };
}
