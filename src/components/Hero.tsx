"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

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
            src="/images/hero/haus-exterior.jpg"
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
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-white">
          <span className="sr-only">{titleText}</span>
          <span aria-hidden="true">
            {titleText.split("").map((char, i) => (
              <motion.span
                // biome-ignore lint/suspicious/noArrayIndexKey: static character list from constant string, never reordered
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : 0.3 + i * 0.06,
                  ease: "easeOut",
                }}
                style={char === " " ? { width: "0.3em" } : undefined}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </h1>
        <motion.p
          className="font-serif text-xl md:text-2xl text-white/80 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: prefersReducedMotion ? 0 : 0.3 + titleText.length * 0.06 + 0.3,
          }}
        >
          zu Münster
        </motion.p>
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
