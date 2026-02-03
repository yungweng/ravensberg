import type { Metadata } from "next";
import { generatePageMetadata, pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  ...pageMetadata.impressum,
  path: "/impressum",
});

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
