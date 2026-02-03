import { prinzipien } from "@/data/prinzipien";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PrinzipCard } from "@/components/PrinzipCard";

export function Prinzipien() {
  return (
    <Section id="prinzipien">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-3">
            Unsere Prinzipien
          </h2>
          <p className="text-muted-fg text-lg">Religio, Scientia und Amicitia</p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prinzipien.map((prinzip, index) => (
          <PrinzipCard key={prinzip.name} prinzip={prinzip} delay={index * 0.1} />
        ))}
      </div>
    </Section>
  );
}
