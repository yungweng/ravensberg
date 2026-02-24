import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { siteConfig, kontakt } from "@/data/content";

export function Kontakt() {
  return (
    <Section id="kontakt" bgClassName="bg-muted">
      <AnimatedHeading className="font-serif text-3xl md:text-4xl text-accent mb-6">
        {kontakt.heading}
      </AnimatedHeading>

      <ScrollReveal>
        <p className="text-muted-fg max-w-2xl text-lg leading-relaxed mb-12">
          {kontakt.text}
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <ScrollReveal delay={0.1}>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-start gap-4 p-6 rounded-xl bg-background/60 hover:bg-background transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">E-Mail</h3>
              <p className="text-muted-fg text-sm group-hover:text-accent transition-colors">
                {siteConfig.email}
              </p>
            </div>
          </a>
        </ScrollReveal>

        {/* Address */}
        <ScrollReveal delay={0.2}>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 p-6 rounded-xl bg-background/60 hover:bg-background transition-colors"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-1">Adresse</h3>
              <p className="text-muted-fg text-sm group-hover:text-accent transition-colors">
                {siteConfig.address}
              </p>
            </div>
          </a>
        </ScrollReveal>

        {/* Social */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col gap-3 p-6 rounded-xl bg-background/60">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg text-foreground mb-1">Social Media</h3>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-14">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-fg text-sm hover:text-accent transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
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
                {siteConfig.instagramHandle}
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-fg text-sm hover:text-accent transition-colors"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                {siteConfig.facebookHandle}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
