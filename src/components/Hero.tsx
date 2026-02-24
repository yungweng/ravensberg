"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { duration, stagger } from "@/lib/motion";

const titleText = "KStV Ravensberg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const prefersReducedMotion = useReducedMotion();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        style={prefersReducedMotion ? {} : { y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1, x: 0, y: 0 }}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: 1.15,
                  x: 15,
                  y: -10,
                }
          }
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/images/haus/haus-exterior.webp"
            alt="KStV Ravensberg Haus"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="font-script text-4xl md:text-7xl lg:text-8xl text-white">
          <span className="sr-only">KStV Ravensberg – Katholische Studentenverbindung in Münster</span>
          <span aria-hidden="true">
            {titleText.split(" ").map((word, wordIndex) => {
              const charOffset = titleText.split(" ").slice(0, wordIndex).reduce((acc, w) => acc + w.length + 1, 0);
              return (
                <span key={word} className="whitespace-nowrap">
                  {wordIndex > 0 && (
                    <motion.span
                      className="inline-block"
                      style={{ width: "0.3em" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: duration.fast,
                        delay: prefersReducedMotion ? 0 : 0.15 + (charOffset - 1) * stagger,
                        ease: "easeOut",
                      }}
                    >
                      {"\u00A0"}
                    </motion.span>
                  )}
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      // biome-ignore lint/suspicious/noArrayIndexKey: static character list from constant string, never reordered
                      key={charIndex}
                      className="inline-block"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: duration.fast,
                        delay: prefersReducedMotion ? 0 : 0.15 + (charOffset + charIndex) * stagger,
                        ease: "easeOut",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </span>
        </h1>
        <motion.p
          className="font-serif text-xl md:text-2xl text-white/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.slow,
            delay: prefersReducedMotion ? 0 : 0.15 + titleText.length * stagger + 0.15,
          }}
        >
          zu Münster
        </motion.p>

        {/* Contact button */}
        <motion.a
          href="#kontakt"
          className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white/80 text-sm font-medium hover:text-white hover:border-white/50 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: duration.slow,
            delay: prefersReducedMotion ? 0 : 0.15 + titleText.length * stagger + 0.3,
          }}
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
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          Kontakt
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-70"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </div>
  );
}
