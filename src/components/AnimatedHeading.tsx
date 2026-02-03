"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface AnimatedHeadingProps {
  children: string;
  as?: "h2" | "h3";
  className?: string;
}

export function AnimatedHeading({ children, as: Tag = "h2", className = "" }: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = children.split(" ");

  return (
    <Tag className={className} ref={ref}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: i * 0.06,
              ease: "easeOut",
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
