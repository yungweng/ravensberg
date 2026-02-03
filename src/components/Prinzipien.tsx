import { prinzipien } from "@/data/prinzipien";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PrinzipCard } from "@/components/PrinzipCard";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { TiltCard } from "@/components/TiltCard";

export function Prinzipien() {
  return (
    <Section id="prinzipien" bgClassName="bg-muted">
      <ScrollReveal>
        <div className="text-center mb-12">
          <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Unsere Prinzipien
          </AnimatedHeading>
          <p className="text-muted-fg text-lg">Religio, Scientia und Amicitia</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prinzipien.map((prinzip, index) => (
          <ScrollReveal key={prinzip.name} delay={index * 0.1} className="h-full">
            <TiltCard className="h-full">
              <PrinzipCard prinzip={prinzip} />
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
