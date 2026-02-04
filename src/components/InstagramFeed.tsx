"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { EinblickeCarousel } from "@/components/EinblickeCarousel";
import { siteConfig } from "@/data/content";
import type { InstagramPost } from "@/lib/instagram";

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

function InstagramCta() {
  return (
    <div className="text-center mt-12">
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
  );
}

export function InstagramFeed({ posts }: InstagramFeedProps) {
  return (
    <>
      <Section id="eindruecke" bgClassName="bg-muted" className={posts.length > 0 ? "!pb-0" : ""}>
        <div className="text-center mb-12">
          <AnimatedHeading className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Eindrücke
          </AnimatedHeading>
          <p className="text-muted-fg">
            Aus über{" "}
            <a href="/geschichte" className="text-accent hover:underline">
              100 Jahren
            </a>{" "}
            Vereinsleben
          </p>
        </div>

        <EinblickeCarousel />

        {posts.length === 0 && <InstagramCta />}
      </Section>

      {posts.length > 0 && (
        <Section id="aktuelles" bgClassName="bg-muted" className="!pt-16 scroll-mt-20">
          <div className="text-center mb-12">
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

          <InstagramCta />
        </Section>
      )}
    </>
  );
}
