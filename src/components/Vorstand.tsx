import { vorstand } from "@/data/vorstand";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { VorstandCard } from "@/components/VorstandCard";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { TiltCard } from "@/components/TiltCard";

export function Vorstand() {
  return (
    <Section id="vorstand">
      <ScrollReveal>
        <div className="text-center mb-12">
          <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground">
            Der Vorstand
          </AnimatedHeading>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {vorstand.map((member, index) => (
          <ScrollReveal key={member.name} delay={index * 0.1}>
            <TiltCard>
              <VorstandCard member={member} />
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
