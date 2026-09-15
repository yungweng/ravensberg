"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { unserHaus, siteConfig } from "@/data/content";
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
        <button
          type="button"
          onClick={() => setLightbox({ src: unserHaus.image, alt: "Haus des KStV Ravensberg" })}
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden block w-full cursor-pointer group"
        >
          <Image
            src={unserHaus.image}
            alt="Haus des KStV Ravensberg"
            fill
            className="object-cover transition-[filter] duration-300 group-hover:brightness-75"
            unoptimized
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              aria-hidden="true"
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
                    aria-hidden="true"
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
        {/* Link to the full house tour */}
        <ScrollReveal delay={0.15}>
          <div className="mt-12 text-center">
            <Link
              href="/haus"
              className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-7 py-4 font-serif text-base font-semibold text-background shadow-lg transition-colors duration-200 hover:bg-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Unsere Wohnetagen ansehen
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <p className="text-muted-fg text-sm mt-3">
              Zimmer, Küche, Treppenhaus &ndash; und wir haben Zimmer frei.
            </p>
          </div>
        </ScrollReveal>

        {/* Google Maps embed */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <AnimatedHeading as="h3" className="font-serif text-2xl text-foreground text-center mb-8">
              Hier findest du uns
            </AnimatedHeading>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-[16/9] md:aspect-[21/9]">
              <iframe
                title="Standort KStV Ravensberg"
                src="https://maps.google.com/maps?q=Studentenheim+Ravensberg+e.V.+Raesfeldstra%C3%9Fe+32+48149+M%C3%BCnster&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-center mt-4">
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                In Google Maps öffnen
              </a>
            </p>
          </div>
        </ScrollReveal>
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
