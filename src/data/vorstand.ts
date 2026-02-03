export interface VorstandMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const vorstand: VorstandMember[] = [
  {
    name: "Tom Buchwald",
    role: "Senior (x)",
    image: "/images/vorstand/tom-buchwald.webp",
    description:
      "In meinem fünften Aktivensemester führe ich den KStV Ravensberg als Senior. Intern leite ich die Convente und treffe die zentralen Entscheidungen, extern vertrete ich unseren Verein nach außen — gegenüber dem KV, anderen Verbindungen und der Universität.",
  },
  {
    name: "Henri Paul Kasten",
    role: "Consenior (xx)",
    image: "/images/vorstand/henri-paul-kasten.webp",
    description:
      "Als Consenior vertrete ich den Senior und bin seine rechte Hand. Mein Schwerpunkt liegt auf der Planung und Umsetzung unserer Veranstaltungen — von Kneipen und Kommersen bis zu Vortragsabenden und geselligen Runden auf dem Haus.",
  },
  {
    name: "Elias Sanders",
    role: "Fuxmajor (FM)",
    image: "/images/vorstand/elias-sanders.webp",
    description:
      "Als Fuxmajor begleite ich die neuen Mitglieder in ihren ersten Semestern. Ich bringe ihnen unsere Traditionen und Geschichte nahe und sorge dafür, dass sie sich in der Gemeinschaft zurechtfinden — denn gerade der Anfang entscheidet, ob aus Interesse echte Zugehörigkeit wird.",
  },
];
