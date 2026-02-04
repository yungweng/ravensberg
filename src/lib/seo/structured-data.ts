export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KStV Ravensberg zu Münster",
    alternateName: "KStV Ravensberg",
    url: "https://kstvravensberg.de",
    logo: "https://kstvravensberg.de/images/wappen/wappen.webp",
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
    sameAs: [
      "https://www.instagram.com/kstvravensberg",
      "https://www.facebook.com/KStVRavensberg",
    ],
  };
}

export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Was ist der KStV Ravensberg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KStV Ravensberg ist eine katholische, nichtschlagende, farbenführende Studentenverbindung im Kartellverband (KV) an der Westfälischen Wilhelms-Universität Münster. Er wurde am 5. Mai 1919 gegründet und hat seinen Sitz im Ravensberg-Haus im Münsteraner Kreuzviertel.",
        },
      },
      {
        "@type": "Question",
        name: "Was bedeutet nichtschlagend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nichtschlagend bedeutet, dass die Verbindung kein akademisches Fechten (Mensur) praktiziert. Der KStV Ravensberg lehnt die Mensur ab — im Gegensatz zu schlagenden Verbindungen wie Burschenschaften oder Corps.",
        },
      },
      {
        "@type": "Question",
        name: "Wie kann ich Mitglied beim KStV Ravensberg werden?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Jeder männliche Student an einer Münsteraner Hochschule kann Mitglied werden. Interessierte sind jederzeit zu Veranstaltungen und Kneipenabenden im Ravensberg-Haus (Raesfeldstraße 32, 48149 Münster) willkommen. Kontakt über vorstand@kstv-ravensberg.de oder Instagram @kstvravensberg.",
        },
      },
      {
        "@type": "Question",
        name: "Kann ich im Ravensberg-Haus wohnen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ja, das Ravensberg-Haus im Kreuzviertel bietet günstigen Wohnraum für Studierende. Die Zimmer sind zentral gelegen, nur wenige Minuten von der Universität Münster entfernt. Anfragen an vorstand@kstv-ravensberg.de.",
        },
      },
      {
        "@type": "Question",
        name: "Was ist der Kartellverband (KV)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der Kartellverband katholischer deutscher Studentenvereine (KV) ist ein Dachverband katholischer, nichtschlagender Studentenverbindungen in Deutschland. Er wurde 1853 gegründet und ist einer der ältesten und größten katholischen Akademikerverbände.",
        },
      },
      {
        "@type": "Question",
        name: "Welche Prinzipien vertritt der KStV Ravensberg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Der KStV Ravensberg steht auf drei Prinzipien: Religio (Glaube und Verantwortung), Scientia (Wissenschaft und Bildung) und Amicitia (Freundschaft und Lebensbund). Der Wahlspruch lautet \u201EVorwärts! Aufwärts!\u201C.",
        },
      },
    ],
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
