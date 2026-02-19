"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
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
          transition={{ duration: 0.2 }}
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
            className="relative w-full h-full max-w-5xl max-h-[85vh] pointer-events-none"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              unoptimized
            />
          </motion.div>

          {/* Caption */}
          <motion.p
            className="absolute bottom-4 md:bottom-6 text-white/60 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {alt}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
