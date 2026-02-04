import type { Metadata } from "next";
import { generatePageMetadata, pageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = generatePageMetadata({
  ...pageMetadata.geschichte,
  path: "/geschichte",
});

export default function GeschichteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
