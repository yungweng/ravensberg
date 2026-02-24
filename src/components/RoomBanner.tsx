"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/content";
import { duration } from "@/lib/motion";

const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Zimmeranfrage \u2013 KStV Ravensberg")}`;

const HouseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 shrink-0"
    aria-hidden="true"
  >
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </svg>
);

const linkClasses =
  "bg-accent text-background font-serif font-semibold text-base shadow-lg hover:bg-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 print:hidden room-banner-glow";

export function RoomBanner() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <>
        <a
          href={mailtoHref}
          aria-label="Zimmeranfrage per E-Mail senden"
          className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 px-3.5 py-5 rounded-r-lg ${linkClasses}`}
        >
          <HouseIcon />
          <span
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Wir haben freie Zimmer
          </span>
        </a>
        <a
          href={mailtoHref}
          aria-label="Zimmeranfrage per E-Mail senden"
          className={`fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-center gap-2.5 px-5 py-3.5 ${linkClasses}`}
        >
          <HouseIcon />
          <span>Wir haben freie Zimmer</span>
        </a>
      </>
    );
  }

  return (
    <>
      {/* Desktop: slide in from left */}
      <motion.a
        href={mailtoHref}
        aria-label="Zimmeranfrage per E-Mail senden"
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-3.5 px-3.5 py-5 rounded-r-lg ${linkClasses}`}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: duration.slow,
          delay: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HouseIcon />
        <span
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Wir haben freie Zimmer
        </span>
      </motion.a>

      {/* Mobile: slide up from bottom */}
      <motion.a
        href={mailtoHref}
        aria-label="Zimmeranfrage per E-Mail senden"
        className={`fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-center gap-2.5 px-5 py-3.5 ${linkClasses}`}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: duration.slow,
          delay: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <HouseIcon />
        <span>Wir haben freie Zimmer</span>
      </motion.a>
    </>
  );
}
