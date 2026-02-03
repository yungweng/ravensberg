"use client";

import Image from "next/image";
import { useState } from "react";
import { ueberUns } from "@/data/content";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Lightbox } from "@/components/Lightbox";
import { richText } from "@/lib/richText";

export function UeberUns() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

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

      {/* Main text alongside Vollwappen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <ScrollReveal>
          <p className="text-muted-fg leading-relaxed">{richText(ueberUns.text)}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center">
            <div className="relative w-64 h-72">
              <Image
                src="/images/wappen/vollwappen.webp"
                alt="Vollwappen des KStV Ravensberg"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
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

      {/* History: house drawing + text, then historical photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <ScrollReveal>
          <p className="text-muted-fg leading-relaxed">{richText(ueberUns.history)}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <figure>
            <button
              type="button"
              onClick={() => setLightbox({ src: "/images/geschichte/haus-zeichnung.webp", alt: "Historische Zeichnung des Ravensberg-Hauses" })}
              className="relative aspect-[4/3] rounded-lg overflow-hidden block w-full cursor-pointer group"
            >
              <Image
                src="/images/geschichte/haus-zeichnung.webp"
                alt="Historische Zeichnung des Ravensberg-Hauses"
                fill
                className="object-contain transition-[filter] duration-300 group-hover:brightness-90"
                unoptimized
              />
            </button>
            <figcaption className="text-center text-muted-fg text-sm mt-2 italic">
              Historische Zeichnung des Verbindungshauses
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      {/* Historical Bildband photo full-width */}
      <ScrollReveal>
        <figure>
          <button
            type="button"
            onClick={() => setLightbox({ src: ueberUns.historischImage, alt: "Bildband des Gründungssemesters 1919" })}
            className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg block w-full cursor-pointer group"
          >
            <Image
              src={ueberUns.historischImage}
              alt="Bildband des Gründungssemesters 1919"
              fill
              className="object-cover transition-[filter] duration-300 group-hover:brightness-75"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                aria-hidden="true"
                className="w-10 h-10 text-white drop-shadow-lg"
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
          <figcaption className="text-center text-muted-fg text-sm mt-3 italic">
            Gründungssemester 1919 — Bildband des KStV Ravensberg
          </figcaption>
        </figure>
      </ScrollReveal>

      <Lightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </Section>
  );
}
