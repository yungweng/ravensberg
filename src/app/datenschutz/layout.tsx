import type { Metadata } from "next";
import { generatePageMetadata, pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  ...pageMetadata.datenschutz,
  path: "/datenschutz",
});

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
