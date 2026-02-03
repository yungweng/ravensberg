import Image from "next/image";
import { unserHaus } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";

export function UnserHaus() {
  return (
    <Section id="unser-haus" fullBleed>
      {/* Full-bleed hero image of house exterior */}
      <ScrollReveal>
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={unserHaus.image}
            alt="Haus des KStV Ravensberg"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </ScrollReveal>

      {/* Centered text content */}
      <div className="max-w-6xl mx-auto px-6 mt-16">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              {unserHaus.heading}
            </h2>
            <p className="text-muted-fg leading-relaxed">{unserHaus.text}</p>
          </div>
        </ScrollReveal>

        {/* Room photo grid */}
        <ScrollReveal delay={0.1}>
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">
            {unserHaus.raeume.heading}
          </h3>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {unserHaus.raeume.images.map((image, index) => (
            <ScrollReveal key={image} delay={0.1 + index * 0.1}>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Raum ${index + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
