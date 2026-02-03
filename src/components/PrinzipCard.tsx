import Image from "next/image";
import type { Prinzip } from "@/data/prinzipien";
import { ScrollReveal } from "@/components/ScrollReveal";
import { richText } from "@/lib/richText";

interface PrinzipCardProps {
  prinzip: Prinzip;
  delay?: number;
}

export function PrinzipCard({ prinzip, delay = 0 }: PrinzipCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="rounded-lg overflow-hidden bg-background transition-shadow duration-300 hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={prinzip.image}
            alt={prinzip.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="p-5">
          <h3 className="font-serif text-xl text-accent mb-2">{prinzip.name}</h3>
          <p className="text-muted-fg text-sm leading-relaxed">{richText(prinzip.description)}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
