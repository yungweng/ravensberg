"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration } from "@/lib/motion";

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
  /** Optional gallery navigation — omit both for a single image. */
  onPrev?: () => void;
  onNext?: () => void;
  /** Position within the gallery, e.g. "3 / 21". */
  counter?: string;
}

export function Lightbox({ src, alt, isOpen, onClose, onPrev, onNext, counter }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    },
    [onClose, onPrev, onNext],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: duration.micro }}
        >
          {/* Backdrop */}
          {/* biome-ignore lint/a11y/noStaticElementInteractions: backdrop click-to-close is standard lightbox UX */}
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: keyboard close handled via Escape key listener */}
          {/* biome-ignore lint/a11y/noNoninteractiveElementInteractions: backdrop close is supplementary to the close button */}
          <div
            className="absolute inset-0 bg-black/90 cursor-pointer"
            onClick={onClose}
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 md:right-6 text-white/70 hover:text-white transition-colors z-10"
            style={{ top: "calc(1rem + env(safe-area-inset-top, 0px))" }}
            aria-label="Schließen"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Image — pointer-events-none so clicks pass through to backdrop */}
          <motion.div
            key={src}
            className="relative w-full h-full max-w-5xl max-h-[85vh] pointer-events-none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: duration.micro }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>

          {/* Gallery arrows */}
          {onPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Vorheriges Bild"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
          {onNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Nächstes Bild"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 md:w-10 md:h-10 drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}

          {counter && (
            <p className="absolute left-4 md:left-6 text-white/50 text-sm tabular-nums" style={{ top: "calc(1rem + env(safe-area-inset-top, 0px))" }}>
              {counter}
            </p>
          )}

          {/* Caption */}
          <motion.p
            className="absolute bottom-4 md:bottom-6 text-white/60 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            {alt}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
