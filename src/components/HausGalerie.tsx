"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import { Lightbox } from "@/components/Lightbox";
import { ScrollReveal } from "@/components/ScrollReveal";
import { hausGalerie } from "@/data/haus";

/**
 * Two-column photo grid of the house, with pull-quote cards sitting in the
 * same rhythm as the photos. Clicking a photo opens the shared Lightbox with
 * arrow navigation across the photos only (quotes are skipped).
 */
export function HausGalerie() {
  const photos = useMemo(() => hausGalerie.filter((item) => item.kind === "photo"), []);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length],
  );

  const current = openIndex === null ? null : photos[openIndex];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {hausGalerie.map((item, index) => {
          if (item.kind === "quote") {
            return (
              <ScrollReveal key={item.text} delay={(index % 2) * 0.08}>
                <figure className="h-full min-h-[16rem] sm:aspect-[3/4] sm:min-h-0 rounded-lg bg-muted border border-accent/20 flex flex-col items-center justify-center text-center px-8 py-12">
                  <div className="mb-7 h-2.5 w-2.5 rotate-45 border border-accent/60 bg-accent/20" />
                  <blockquote className="font-serif text-xl leading-snug text-balance text-foreground md:text-2xl lg:text-[1.75rem]">
                    {"„"}
                    {item.text}
                    {"“"}
                  </blockquote>
                  <div className="mt-7 h-px w-12 bg-accent/40" />
                </figure>
              </ScrollReveal>
            );
          }

          const photoIndex = photos.indexOf(item);

          return (
            <ScrollReveal key={item.src} delay={(index % 2) * 0.08}>
              <button
                type="button"
                onClick={() => setOpenIndex(photoIndex)}
                className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg block cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  unoptimized
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/35 transition-colors duration-300" />
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
          );
        })}
      </div>

      <Lightbox
        src={current?.src ?? ""}
        alt={current?.alt ?? ""}
        isOpen={current !== null}
        onClose={close}
        onPrev={prev}
        onNext={next}
        counter={current === null ? undefined : `${(openIndex ?? 0) + 1} / ${photos.length}`}
      />
    </>
  );
}
