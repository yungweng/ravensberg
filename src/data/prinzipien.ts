export interface Prinzip {
  name: string;
  image: string;
  description: string;
}

export const prinzipien: Prinzip[] = [
  {
    name: "Religio",
    image: "/images/prinzipien/kirche-muenster.jpg",
    description:
      "Der KStV Ravensberg wurde als katholischer Verein gegründet, öffnete sich aber **1975 für Christen aller Konfessionen**. Religio heißt für uns nicht Frömmigkeit um ihrer selbst willen, sondern ein Kompass: Wir handeln nach **christlichen Werten**, suchen den Dialog und stehen füreinander ein — im Studium, im Beruf, im Leben.",
  },
  {
    name: "Scientia",
    image: "/images/prinzipien/scientia.jpg",
    description:
      "Ein Fachstudium allein macht noch keinen gebildeten Menschen. Wir diskutieren **über Fachgrenzen hinweg**, laden Redner ein, streiten über Politik, Gesellschaft und Wissenschaft. Wer Wissen ernst nimmt, trägt **Verantwortung** — gegenüber sich selbst und gegenüber anderen.",
  },
  {
    name: "Amicitia",
    image: "/images/prinzipien/amicitia.jpg",
    description:
      "Amicitia — Freundschaft — ist der Kern des **Lebensbundprinzips**. Was als Gemeinschaft unter Studenten beginnt, hält ein **Leben lang**. Alte Herren und Aktive stehen einander bei, beruflich wie persönlich. Das ist keine Formel: **1936** gründeten Ravensberger am Tag der Auflösung einen Geheimbund, um ihre Freundschaft durch die NS-Zeit zu retten.",
  },
];
