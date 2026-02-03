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
      "Wir leben und bewahren unseren katholischen Glauben, ohne streng gläubig zu sein. Religio bedeutet für uns, den Glauben im Alltag zu tragen und nach christlichen Werten zu handeln. Unser Glaube verbindet, schafft Orientierung und bietet Halt in Studium, Beruf und Leben.",
  },
  {
    name: "Scientia",
    image: "/images/prinzipien/scientia.jpg",
    description:
      "Bildung ist mehr als das Studium eines Fachs. Wir fördern den Austausch über Fachgrenzen hinweg, diskutieren aktiv weltoffene und gegenwärtige Themen in Diskussionsrunden. Streben nach Wissen und Wahrheit sind für Verantwortung gegenüber der Gesellschaft.",
  },
  {
    name: "Amicitia",
    image: "/images/prinzipien/amicitia.jpg",
    description:
      "Amicitia ist das Herz unseres Bundes. Sie steht für lebenslange Freundschaft, für gegenseitige Unterstützung und Vertrauen. Was im Studium als Gemeinschaft beginnt, wächst ein lebenslang Netzwerk fürs Leben.",
  },
];
