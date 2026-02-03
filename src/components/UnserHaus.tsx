"use client";

import Image from "next/image";
import { useState } from "react";
import { unserHaus } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Lightbox } from "@/components/Lightbox";
import { richText } from "@/lib/richText";

export function UnserHaus() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section id="unser-haus" fullBleed bgClassName="bg-muted">
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
            <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              {unserHaus.heading}
            </AnimatedHeading>
            <p className="text-muted-fg leading-relaxed">{richText(unserHaus.text)}</p>
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
              <button
                type="button"
                onClick={() => setLightbox({ src: image, alt: `Raum ${index + 1}` })}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg block w-full cursor-pointer group"
              >
                <Image
                  src={image}
                  alt={`Raum ${index + 1}`}
                  fill
                  className="object-cover transition-[filter] duration-300 group-hover:brightness-75"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 text-white drop-shadow-lg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </Section>
  );
}
