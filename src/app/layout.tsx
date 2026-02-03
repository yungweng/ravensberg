import type { Metadata } from "next";
import { Playfair_Display, Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });

export const metadata: Metadata = {
  title: "KStV Ravensberg zu Münster",
  description: "Katholische Studentenverbindung an der Universität Münster. Seit 1919.",
  openGraph: {
    title: "KStV Ravensberg zu Münster",
    description: "Katholische Studentenverbindung an der Universität Münster. Seit 1919.",
    url: "https://kstvravensberg.de",
    siteName: "KStV Ravensberg",
    images: [
      {
        url: "https://kstvravensberg.de/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wappen des KStV Ravensberg zu Münster",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
