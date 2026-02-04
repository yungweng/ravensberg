export interface VorstandMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const vorstand: VorstandMember[] = [
  {
    name: "Henri Paul Kasten",
    role: "Senior (x)",
    image: "/images/vorstand/henri-paul-kasten.webp",
    description:
      "Als Senior führe ich den KStV Ravensberg. Intern leite ich die Convente und treffe die zentralen Entscheidungen, extern vertrete ich unseren Verein nach außen \u2014 gegenüber dem KV, anderen Verbindungen und der Universität.",
  },
  {
    name: "Alex Bullermann",
    role: "Consenior (xx)",
    image: "/images/vorstand/alex-bullermann.webp",
    description:
      "Als Consenior vertrete ich den Senior und bin seine rechte Hand. Mein Schwerpunkt liegt auf der Planung und Umsetzung unserer Veranstaltungen \u2014 von Kneipen und Kommersen bis zu Vortragsabenden und geselligen Runden auf dem Haus.",
  },
  {
    name: "Leon Suthe",
    role: "Fuxmajor (FM)",
    image: "/images/vorstand/leon-suthe.webp",
    description:
      "Als Fuxmajor begleite ich die neuen Mitglieder in ihren ersten Semestern. Ich bringe ihnen unsere Traditionen und Geschichte nahe und sorge dafür, dass sie sich in der Gemeinschaft zurechtfinden \u2014 denn gerade der Anfang entscheidet, ob aus Interesse echte Zugehörigkeit wird.",
  },
];
