/** Standardized animation durations (seconds) */
export const duration = {
  micro: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.4,
  /** Animated number count-up (seconds) */
  counter: 3,
  /** One full marquee scroll cycle (seconds, CSS animation) */
  marquee: 120,
} as const;

/** Per-item stagger delay increment (seconds) */
export const stagger = 0.03;
