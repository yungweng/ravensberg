"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { Lightbox } from "@/components/Lightbox";
import { siteConfig } from "@/data/content";
import type { InstagramPost } from "@/lib/instagram";

const galleryImages = [
  { src: "/images/veranstaltungen/winterfest-chargierten.webp", alt: "Chargierten in vollem Wichs" },
  { src: "/images/veranstaltungen/winterfest-kneipe.webp", alt: "Kneipe bei Kerzenschein" },
  { src: "/images/veranstaltungen/winterfest-stehen.webp", alt: "Gemeinschaft beim Winterfest" },
  { src: "/images/veranstaltungen/winterfest-gesang.webp", alt: "Gesang bei der Kneipe" },
  { src: "/images/geschichte/bildband-1919-gruendung.webp", alt: "Gründungssemester 1919" },
  { src: "/images/veranstaltungen/winterfest-tisch.webp", alt: "Gemütliches Beisammensein" },
  { src: "/images/veranstaltungen/winterfest-rede.webp", alt: "Rede beim Winterfest" },
  { src: "/images/geschichte/bildband-1919-gruppen.webp", alt: "Historische Gruppenfotos" },
];

function formatGermanDate(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function getImageUrl(post: InstagramPost): string {
  if (post.media_type === "VIDEO" && post.thumbnail_url) {
    return post.thumbnail_url;
  }
  return post.media_url;
}

function truncateCaption(caption: string | undefined, maxLength = 120): string {
  if (!caption) return "";
  if (caption.length <= maxLength) return caption;
  return `${caption.slice(0, maxLength).trimEnd()}\u2026`;
}

interface InstagramFeedProps {
  posts: InstagramPost[];
}

export function InstagramFeed({ posts }: InstagramFeedProps) {
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

      {posts.length > 0 && (
        <>
          <div className="text-center mb-12 mt-16">
            <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Aktuelles
            </AnimatedHeading>
            <p className="text-muted-fg">
              Aktuelle Beiträge von Instagram
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {posts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.05} className="h-full">
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={getImageUrl(post)}
                      alt={post.caption ? truncateCaption(post.caption, 80) : "Instagram Beitrag"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <p className="text-sm text-muted-fg mb-2">
                      {formatGermanDate(post.timestamp)}
                    </p>
                    {post.caption && (
                      <p className="text-foreground text-sm leading-relaxed mb-3 flex-1">
                        {truncateCaption(post.caption)}
                      </p>
                    )}
                    <span className="text-accent text-sm font-medium">
                      &rarr; Auf Instagram ansehen
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </>
      )}

      <div className="text-center">
        <p className="text-muted-fg mb-6">
          Folge uns für mehr Einblicke
        </p>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
        >
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
