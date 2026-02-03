"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Lightbox } from "@/components/Lightbox";
import { siteConfig } from "@/data/content";

const galleryImages = [
  { src: "/images/veranstaltungen/winterfest-chargierten.jpg", alt: "Chargierten in vollem Wichs" },
  { src: "/images/veranstaltungen/winterfest-kneipe.jpg", alt: "Kneipe bei Kerzenschein" },
  { src: "/images/veranstaltungen/winterfest-stehen.jpg", alt: "Gemeinschaft beim Winterfest" },
  { src: "/images/veranstaltungen/winterfest-gesang.jpg", alt: "Gesang bei der Kneipe" },
  { src: "/images/geschichte/bildband-1919-gruendung.jpg", alt: "Gründungssemester 1919" },
  { src: "/images/veranstaltungen/winterfest-tisch.jpg", alt: "Gemütliches Beisammensein" },
  { src: "/images/veranstaltungen/winterfest-rede.jpg", alt: "Rede beim Winterfest" },
  { src: "/images/geschichte/bildband-1919-gruppen.jpg", alt: "Historische Gruppenfotos" },
];

export function InstagramFeed() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section id="instagram" bgClassName="bg-muted">
      <div className="text-center mb-12">
        <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Eindrücke
        </AnimatedHeading>
        <p className="text-muted-fg">
          Aus über 100 Jahren Vereinsleben
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {galleryImages.map((img, i) => (
          <ScrollReveal key={img.src} delay={i * 0.05}>
            <button
              type="button"
              onClick={() => setLightbox(img)}
              className="relative aspect-square rounded-lg overflow-hidden shadow-md block w-full cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.alt}
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

      <div className="text-center">
        <p className="text-muted-fg mb-6">
          Mehr Eindrücke und aktuelle Beiträge auf Instagram
        </p>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
        >
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

      <Lightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </Section>
  );
}
