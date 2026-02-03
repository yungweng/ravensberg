import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { siteConfig } from "@/data/content";

export function InstagramFeed() {
  return (
    <Section id="instagram" bgClassName="bg-muted">
      <div className="text-center">
        <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Folge uns auf Instagram
        </AnimatedHeading>
        <p className="text-muted-fg mb-12">
          Bleib auf dem Laufenden und folge uns auf{" "}
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-medium"
          >
            {siteConfig.instagramHandle}
          </a>
        </p>
      </div>

      {/* Placeholder grid — will be replaced with real posts once Instagram API is connected */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="aspect-square bg-background rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-muted-fg/40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center">
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
        >
          {/* Instagram icon */}
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          {siteConfig.instagramHandle} auf Instagram
        </a>
      </div>
    </Section>
  );
}
