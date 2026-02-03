import Image from "next/image";
import { willkommen } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Willkommen() {
  return (
    <Section id="willkommen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            {willkommen.heading}
          </h2>
          <p className="text-muted-fg leading-relaxed">{willkommen.text}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={willkommen.image}
              alt="KStV Ravensberg Gruppenfoto"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
