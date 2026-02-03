import Image from "next/image";
import { unserHaus } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export function UnserHaus() {
  return (
    <Section id="unser-haus" fullBleed bgClassName="bg-muted">
      {/* Full-bleed hero image of house exterior */}
      <ScrollReveal>
        <div className="group relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={unserHaus.image}
            alt="Haus des KStV Ravensberg"
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/8 transition-colors duration-500" />
        </div>
      </ScrollReveal>

      {/* Centered text content */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              {unserHaus.heading}
            </AnimatedHeading>
            <p className="text-muted-fg leading-relaxed">{unserHaus.text}</p>
          </div>
        </ScrollReveal>

        {/* Room photo grid — staggered reveals */}
        <ScrollReveal delay={0.1}>
          <AnimatedHeading as="h3" className="font-serif text-2xl text-foreground text-center mb-8">
            {unserHaus.raeume.heading}
          </AnimatedHeading>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {unserHaus.raeume.images.map((image, index) => (
            <ScrollReveal key={image} delay={0.1 + index * 0.1}>
              <div className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Raum ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
