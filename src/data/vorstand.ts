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
    image: "/images/vorstand/tom-buchwald.jpg",
    description:
      "In meinem nunmehr schon fünften Aktivensemester ist mir die Ehre zu Teil geworden den KStV Ravensberg als Senior anzuführen. Dabei bin ich nicht nur intern als höchstes Entscheidungsgremium, sondern auch extern als Außendarstellung und Repräsentation zuständig.",
  },
  {
    name: "Henri Paul Kasten",
    role: "Consenior (xx)",
    image: "/images/vorstand/henri-paul-kasten.png",
    description:
      "Der Consenior, der den Senior vertritt und ihm in allen Belangen zur Seite steht. Ich bin hauptsächlich für die Planung und Umsetzung von Veranstaltungen zuständig.",
  },
  {
    name: "Elias Sanders",
    role: "Fuxmajor (FM)",
    image: "/images/vorstand/elias-sanders.png",
    description:
      "In diesem Wintersemester bin ich als Fuxmajor für die Neuen Leute aus unseren Reihen zuständig. Meine persönliche Überzeugung, das Erfahrungen in die Gemeinschaft auf die ersten natürlich Hausforderungen und die Orientierung geben.",
  },
];
