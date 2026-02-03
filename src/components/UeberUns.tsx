import Image from "next/image";
import { ueberUns } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";

export function UeberUns() {
  return (
    <Section id="ueber-uns" className="relative overflow-hidden">
      {/* Zirkel watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.04] pointer-events-none select-none">
        <Image
          src={ueberUns.zirkelImage}
          alt=""
          fill
          className="object-contain"
          unoptimized
          aria-hidden="true"
        />
      </div>

      {/* Heading */}
      <ScrollReveal>
        <div className="text-center mb-16">
          <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            {ueberUns.heading}
          </AnimatedHeading>
          <p className="text-muted-fg text-lg">{ueberUns.subtitle}</p>
        </div>
      </ScrollReveal>

      {/* Main text alongside Zirkel image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <ScrollReveal>
          <p className="text-muted-fg leading-relaxed">{ueberUns.text}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ueberUns.zirkelImage}
              alt="Zirkel des KStV Ravensberg"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>

      {/* Wahlspruch decorative quote */}
      <ScrollReveal>
        <blockquote className="text-center my-16 py-8 border-t border-b border-accent/30">
          <p className="font-serif text-2xl md:text-3xl text-accent italic">
            {ueberUns.wahlspruch}
          </p>
          <footer className="text-muted-fg text-sm mt-3 block">
            Wahlspruch des KStV Ravensberg
          </footer>
        </blockquote>
      </ScrollReveal>

      {/* History text alongside historical photo (reversed order) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollReveal delay={0.15}>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={ueberUns.historischImage}
              alt="Historisches Foto des KStV Ravensberg"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-muted-fg leading-relaxed">{ueberUns.history}</p>
        </ScrollReveal>
      </div>
    </Section>
  );
}
