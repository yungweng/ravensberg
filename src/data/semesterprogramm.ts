export interface SemesterEvent {
  uid: string;
  title: string;
  start: string;
  end?: string;
  location?: string;
  description?: string;
}

export interface Semesterprogramm {
  title: string;
  slug: string;
  pdfUrl: string;
  icsUrl: string;
  coverImage: string;
  events: SemesterEvent[];
}

export const semesterprogramm: Semesterprogramm = {
  "title": "Wintersemester 2026/27",
  "slug": "wise-2026-27",
  "pdfUrl": "/semesterprogramm/wise-2026-27.pdf",
  "icsUrl": "/semesterprogramm/wise-2026-27.ics",
  "coverImage": "/semesterprogramm/wise-2026-27-cover.webp",
  "events": [
    {
      "uid": "ravensberg-ws2627-000@kstv-ravensberg.de",
      "start": "2026-10-01T00:00:00",
      "end": "2026-10-02T00:00:00",
      "title": "Semesterbeginn WiSe 2026/27",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27"
    },
    {
      "uid": "ravensberg-ws2627-001@kstv-ravensberg.de",
      "start": "2026-10-08T16:00:00+02:00",
      "end": "2026-10-08T19:00:00+02:00",
      "title": "Haus- und Gartenarbeitstag",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-002@kstv-ravensberg.de",
      "start": "2026-10-10T18:00:00+02:00",
      "end": "2026-10-10T21:00:00+02:00",
      "title": "Semesterantrittsessen",
      "description": "Beginn 18:00 c.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-003@kstv-ravensberg.de",
      "start": "2026-10-12T00:00:00",
      "end": "2026-10-13T00:00:00",
      "title": "Vorlesungsbeginn",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27"
    },
    {
      "uid": "ravensberg-ws2627-004@kstv-ravensberg.de",
      "start": "2026-10-12T20:00:00+02:00",
      "end": "2026-10-12T22:00:00+02:00",
      "title": "1. Aktivenconvent",
      "description": "Beginn 20:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-005@kstv-ravensberg.de",
      "start": "2026-10-13T19:00:00+02:00",
      "end": "2026-10-13T22:00:00+02:00",
      "title": "Semesterantrittsgottesdienst in der St. Lamberti-Kirche",
      "description": "Beginn 19:00 s.t.\nAnschl. Fidulitas bei e.S.V. KStV Germania\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "St. Lamberti-Kirche, Lambertikirchplatz, 48143 Münster"
    },
    {
      "uid": "ravensberg-ws2627-006@kstv-ravensberg.de",
      "start": "2026-10-20T18:00:00+02:00",
      "end": "2026-10-20T20:00:00+02:00",
      "title": "Fuxenbummel",
      "description": "Beginn 18:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-007@kstv-ravensberg.de",
      "start": "2026-10-23T20:00:00+02:00",
      "end": "2026-10-24T00:00:00+02:00",
      "title": "Casino-Abend auf dem Ravensberghaus",
      "description": "Beginn 20:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-008@kstv-ravensberg.de",
      "start": "2026-10-24T20:00:00+02:00",
      "end": "2026-10-25T00:00:00+02:00",
      "title": "Semesterankneipe mit Flaggehissen",
      "description": "Beginn 20:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-009@kstv-ravensberg.de",
      "start": "2026-10-30T19:00:00+01:00",
      "end": "2026-10-30T22:00:00+01:00",
      "title": "„Schlag den Raab“-Abend mit e.v. ATV Westmark",
      "description": "Beginn 19:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-010@kstv-ravensberg.de",
      "start": "2026-11-02T20:00:00+01:00",
      "end": "2026-11-02T22:00:00+01:00",
      "title": "2. Aktivenconvent",
      "description": "Beginn 20:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-011@kstv-ravensberg.de",
      "start": "2026-11-04T16:00:00+01:00",
      "end": "2026-11-04T19:00:00+01:00",
      "title": "1. Arbeitstag zur Beach Party",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-012@kstv-ravensberg.de",
      "start": "2026-11-11T16:00:00+01:00",
      "end": "2026-11-11T19:00:00+01:00",
      "title": "2. Arbeitstag zur Beach Party",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-013@kstv-ravensberg.de",
      "start": "2026-11-13T00:00:00",
      "end": "2026-11-16T00:00:00",
      "title": "Aktivenfahrt zum 70. Schlosskommers nach Heidelberg",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Heidelberg"
    },
    {
      "uid": "ravensberg-ws2627-014@kstv-ravensberg.de",
      "start": "2026-11-17T16:00:00+01:00",
      "end": "2026-11-17T19:00:00+01:00",
      "title": "3. Arbeitstag zur Beach Party",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-015@kstv-ravensberg.de",
      "start": "2026-11-18T16:00:00+01:00",
      "end": "2026-11-18T19:00:00+01:00",
      "title": "4. Arbeitstag zur Beach Party",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-016@kstv-ravensberg.de",
      "start": "2026-11-20T20:00:00+01:00",
      "end": "2026-11-21T01:00:00+01:00",
      "title": "Beach Party auf dem Ravensberghaus",
      "description": "Beginn 20:00 c.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-017@kstv-ravensberg.de",
      "start": "2026-11-24T16:00:00+01:00",
      "end": "2026-11-24T19:00:00+01:00",
      "title": "Arbeitstag zur Nachbereitung (Beach Party)",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-018@kstv-ravensberg.de",
      "start": "2026-11-25T18:00:00+01:00",
      "end": "2026-11-25T20:00:00+01:00",
      "title": "Gemeinsame Fuxenstunde mit e.v. ATV Westmark",
      "description": "Beginn 18:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-019@kstv-ravensberg.de",
      "start": "2026-11-26T16:00:00+01:00",
      "end": "2026-11-26T19:00:00+01:00",
      "title": "Arbeitstag zur Nachbereitung (Beach Party)",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-020@kstv-ravensberg.de",
      "start": "2026-12-01T00:00:00",
      "end": "2026-12-02T00:00:00",
      "title": "„Trinken für einen guten Zweck“",
      "description": "Erhöhung der Getränkepreise adh. mit Stiftung des Erlöses an die Münsteraner Caritas\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-021@kstv-ravensberg.de",
      "start": "2026-12-05T20:00:00+01:00",
      "end": "2026-12-06T00:00:00+01:00",
      "title": "Nikolauskneipe",
      "description": "Beginn 20:00 c.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-022@kstv-ravensberg.de",
      "start": "2026-12-07T20:00:00+01:00",
      "end": "2026-12-07T22:00:00+01:00",
      "title": "3. Aktivenconvent",
      "description": "Beginn 20:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-023@kstv-ravensberg.de",
      "start": "2026-12-12T19:00:00+01:00",
      "end": "2026-12-12T23:00:00+01:00",
      "title": "Christbaumschmücken mit anschl. Cocktailabend zugunsten der Kinderkrebshilfe",
      "description": "Beginn 19:00 c.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-024@kstv-ravensberg.de",
      "start": "2026-12-18T19:00:00+01:00",
      "end": "2026-12-18T22:00:00+01:00",
      "title": "Feuerzangenbowle mit e.S.V. KStV Germania",
      "description": "Beginn 19:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-025@kstv-ravensberg.de",
      "start": "2026-12-23T00:00:00",
      "end": "2026-12-24T00:00:00",
      "title": "Beginn der Weihnachtspause",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27"
    },
    {
      "uid": "ravensberg-ws2627-026@kstv-ravensberg.de",
      "start": "2027-01-07T00:00:00",
      "end": "2027-01-08T00:00:00",
      "title": "Fortsetzung der Vorlesungen",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27"
    },
    {
      "uid": "ravensberg-ws2627-027@kstv-ravensberg.de",
      "start": "2027-01-11T20:00:00+01:00",
      "end": "2027-01-11T23:00:00+01:00",
      "title": "4. Aktivenconvent, anschl. Wahlconvent",
      "description": "Beginn 20:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-028@kstv-ravensberg.de",
      "start": "2027-01-15T00:00:00",
      "end": "2027-01-18T00:00:00",
      "title": "Winterfest",
      "description": "Festfolge s. Seite 4 im SemPro. Gäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-029@kstv-ravensberg.de",
      "start": "2027-01-15T19:30:00+01:00",
      "end": "2027-01-15T23:00:00+01:00",
      "title": "Winterfest: Gemeinsamer Begrüßungsabend",
      "description": "Beginn 19:30 s.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-030@kstv-ravensberg.de",
      "start": "2027-01-16T14:30:00+01:00",
      "end": "2027-01-16T17:00:00+01:00",
      "title": "Winterfest: Damen- und Kinderprogramm",
      "description": "Beginn 14:30 s.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-031@kstv-ravensberg.de",
      "start": "2027-01-16T14:30:00+01:00",
      "end": "2027-01-16T17:30:00+01:00",
      "title": "Winterfest: Cumulativconvent",
      "description": "Beginn 14:30 s.t.\nIm Anschluss: AHV- und HBV-Convente (MV Altherrenverein 15:30, MV Verein Studentenwohnheim 16:30)\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-032@kstv-ravensberg.de",
      "start": "2027-01-16T19:30:00+01:00",
      "end": "2027-01-16T20:00:00+01:00",
      "title": "Winterfest: Sektempfang",
      "description": "Beginn 19:30 s.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-033@kstv-ravensberg.de",
      "start": "2027-01-16T20:00:00+01:00",
      "end": "2027-01-17T00:00:00+01:00",
      "title": "Winterfest: Festkommers",
      "description": "Beginn 20:00 s.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-034@kstv-ravensberg.de",
      "start": "2027-01-17T00:00:00+01:00",
      "end": "2027-01-17T03:00:00+01:00",
      "title": "Winterfest: Fidulitas auf dem Ravensberghaus",
      "description": "Beginn 00:00 c.t.\nIm SemPro: 24.00 c.t. (Samstagnacht). Gäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-035@kstv-ravensberg.de",
      "start": "2027-01-17T10:30:00+01:00",
      "end": "2027-01-17T12:00:00+01:00",
      "title": "Winterfest: Heilige Messe in der Heilig-Kreuz-Kirche",
      "description": "Beginn 10:30 s.t.\nGäste willkommen\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Heilig-Kreuz-Kirche, Münster"
    },
    {
      "uid": "ravensberg-ws2627-036@kstv-ravensberg.de",
      "start": "2027-01-17T13:00:00+01:00",
      "end": "2027-01-17T15:00:00+01:00",
      "title": "Winterfest: Gemeinsames Mittagessen im Nordstern",
      "description": "Beginn 13:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Nordstern, Münster"
    },
    {
      "uid": "ravensberg-ws2627-037@kstv-ravensberg.de",
      "start": "2027-01-26T16:00:00+01:00",
      "end": "2027-01-26T18:00:00+01:00",
      "title": "Besuch des Planetariums in Münster mit AHX Jonas Kemper",
      "description": "Beginn 16:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Planetarium Münster"
    },
    {
      "uid": "ravensberg-ws2627-038@kstv-ravensberg.de",
      "start": "2027-02-01T20:00:00+01:00",
      "end": "2027-02-01T23:00:00+01:00",
      "title": "5. Aktivenconvent, anschl. Dechargierungsconvent",
      "description": "Beginn 20:00 s.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    },
    {
      "uid": "ravensberg-ws2627-039@kstv-ravensberg.de",
      "start": "2027-02-02T19:00:00+01:00",
      "end": "2027-02-02T22:00:00+01:00",
      "title": "Semesterabgottesdienst in der St. Lamberti-Kirche",
      "description": "Beginn 19:00 s.t.\nAnschl. Fidulitas bei e.v. Markomannia\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "St. Lamberti-Kirche, Lambertikirchplatz, 48143 Münster"
    },
    {
      "uid": "ravensberg-ws2627-040@kstv-ravensberg.de",
      "start": "2027-02-05T00:00:00",
      "end": "2027-02-06T00:00:00",
      "title": "Vorlesungsende",
      "description": "Quelle: Semesterprogramm KStV Ravensberg WiSe 2026/27"
    },
    {
      "uid": "ravensberg-ws2627-041@kstv-ravensberg.de",
      "start": "2027-02-27T20:00:00+01:00",
      "end": "2027-02-28T00:00:00+01:00",
      "title": "Semesterabkneipe mit Flaggeeinholen",
      "description": "Beginn 20:00 c.t.\nQuelle: Semesterprogramm KStV Ravensberg WiSe 2026/27",
      "location": "Ravensberghaus, Raesfeldstraße 32, 48149 Münster"
    }
  ]
};
