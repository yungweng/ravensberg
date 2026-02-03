"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import {
  einblickeRow1,
  einblickeRow2,
  einblickeRow3,
  type EinblickeImage,
} from "@/data/einblicke";
import { Lightbox } from "@/components/Lightbox";

function MarqueeRow({
  images,
  reverse,
  onImageClick,
  onImageLoad,
}: {
  images: EinblickeImage[];
  reverse?: boolean;
  onImageClick: (img: EinblickeImage) => void;
  onImageLoad: () => void;
}) {
  const prefersReducedMotion = useReducedMotion();
  const animationName = reverse ? "marquee-scroll-reverse" : "marquee-scroll";

  return (
    <div className="overflow-hidden marquee-container">
      <div
        className="flex gap-3 w-max marquee-strip"
        style={{
          animation: prefersReducedMotion
            ? "none"
            : `${animationName} 120s linear infinite`,
        }}
      >
        {[...images, ...images].map((img, i) => (
          <button
            type="button"
            key={`${img.src}-${i}`}
            onClick={() => onImageClick(img)}
            className="relative flex-shrink-0 h-[220px] md:h-[280px] aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group/img bg-muted"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="eager"
              onLoad={i < images.length ? onImageLoad : undefined}
              className="object-cover transition-[filter] duration-300 group-hover/img:brightness-75"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
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
        ))}
      </div>
    </div>
  );
}

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const TOTAL_UNIQUE = einblickeRow1.length + einblickeRow2.length + einblickeRow3.length;

export function EinblickeCarousel() {
  const [lightbox, setLightbox] = useState<EinblickeImage | null>(null);
  const [rows, setRows] = useState([einblickeRow1, einblickeRow2, einblickeRow3]);
  const [ready, setReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    setRows([shuffle(einblickeRow1), shuffle(einblickeRow2), shuffle(einblickeRow3)]);
  }, []);

  useEffect(() => {
    if (loadedCount >= TOTAL_UNIQUE) {
      setReady(true);
    }
  }, [loadedCount]);

  const handleImageLoad = useCallback(() => {
    setLoadedCount((c) => c + 1);
  }, []);

  return (
    <>
      <div
        className="w-screen relative left-1/2 -translate-x-1/2 flex flex-col gap-3 transition-opacity duration-700"
        style={{ opacity: ready ? 1 : 0 }}
      >
        <MarqueeRow images={rows[0]} onImageClick={setLightbox} onImageLoad={handleImageLoad} />
        <MarqueeRow images={rows[1]} reverse onImageClick={setLightbox} onImageLoad={handleImageLoad} />
        <MarqueeRow images={rows[2]} onImageClick={setLightbox} onImageLoad={handleImageLoad} />
      </div>

      <Lightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        isOpen={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
