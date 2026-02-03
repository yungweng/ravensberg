import { Fragment } from "react";

/**
 * Parses **bold** markers in a string into <strong> elements.
 */
export function richText(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      // biome-ignore lint/suspicious/noArrayIndexKey: stable list derived from split, never reordered
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      // biome-ignore lint/suspicious/noArrayIndexKey: stable list derived from split, never reordered
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
