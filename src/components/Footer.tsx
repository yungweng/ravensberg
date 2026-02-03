import Link from "next/link";
import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Name and founding */}
          <div>
            <h3 className="font-serif text-xl mb-2">{siteConfig.fullName}</h3>
            <p className="text-background/60 text-sm">Seit 1919</p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-background/80">
              Kontakt
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-background/70 hover:text-background transition-colors text-sm"
            >
              {siteConfig.email}
            </a>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-background/80">
              Folge uns
            </h4>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm"
            >
              {/* Instagram icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
              {siteConfig.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      {/* Tricolor stripe — Verbindung flag colors */}
      <div className="flex h-[3px]">
        <div className="flex-1" style={{ backgroundColor: "#1B5E20" }} />
        <div className="flex-1" style={{ backgroundColor: "#F9A825" }} />
        <div className="flex-1" style={{ backgroundColor: "#B71C1C" }} />
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/50">
          <p>&copy; 2026 KStV Ravensberg. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-background transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-background transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
