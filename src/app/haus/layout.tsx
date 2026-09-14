import type { Metadata } from "next";
import { generatePageMetadata, pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  ...pageMetadata.haus,
  path: "/haus",
});

export default function HausLayout({ children }: { children: React.ReactNode }) {
  return children;
}
