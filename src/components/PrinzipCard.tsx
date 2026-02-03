import Image from "next/image";
import type { Prinzip } from "@/data/prinzipien";
import { ScrollReveal } from "@/components/ScrollReveal";

interface PrinzipCardProps {
  prinzip: Prinzip;
  delay?: number;
}

export function PrinzipCard({ prinzip, delay = 0 }: PrinzipCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group rounded-lg overflow-hidden bg-background transition-shadow duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={prinzip.image}
            alt={prinzip.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            unoptimized
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl text-accent mb-2">{prinzip.name}</h3>
          <p className="text-muted-fg text-sm leading-relaxed">{prinzip.description}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
