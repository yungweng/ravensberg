import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { HausGalerie } from "@/components/HausGalerie";
import { RoomBanner } from "@/components/RoomBanner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { siteConfig, unserHaus } from "@/data/content";
import { hausPage } from "@/data/haus";
import { zimmerAnfrageHref } from "@/lib/zimmerAnfrage";

const ctaClasses =
  "inline-flex items-center justify-center gap-2.5 rounded-lg bg-accent px-6 py-3.5 font-serif text-base font-semibold text-background shadow-lg transition-colors duration-200 hover:bg-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const HouseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
  </svg>
);

export default function HausPage() {
  return (
    <>
      {/* Header sits over the hero — no scroll state, so it stays a server component */}
      <header className="absolute top-0 right-0 left-0 z-30">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-white">
            <Image
              src="/images/wappen/wappen-icon.webp"
              alt="Wappen KStV Ravensberg"
              width={137}
              height={160}
              className="h-10 w-auto"
              priority
              unoptimized
            />
            {siteConfig.name}
          </Link>
          <Link href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            &larr; Startseite
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden">
          <Image
            src={unserHaus.image}
            alt="Das Haus des KStV Ravensberg in der Raesfeldstraße 32"
            fill
            priority
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/45 to-foreground/25" />
          <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-16">
            <p className="mb-3 text-sm tracking-[0.2em] text-white/70 uppercase">{hausPage.subtitle}</p>
            <h1 className="mb-6 font-serif text-4xl text-white md:text-6xl">{hausPage.title}</h1>
            <p className="mb-8 max-w-xl leading-relaxed text-white/85">{hausPage.intro}</p>
            <a href={zimmerAnfrageHref} className={ctaClasses}>
              <HouseIcon />
              {hausPage.ctaHeading}
            </a>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <HausGalerie />
          </div>
        </section>

        {/* Closing call to action */}
        <section className="bg-muted py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <ScrollReveal>
              <AnimatedHeading className="mb-5 font-serif text-3xl text-foreground md:text-4xl">
                {hausPage.ctaHeading}
              </AnimatedHeading>
              <p className="mb-8 leading-relaxed text-muted-fg">{hausPage.ctaText}</p>
              <a href={zimmerAnfrageHref} className={ctaClasses}>
                <HouseIcon />
                {hausPage.ctaLabel}
              </a>
              <p className="mt-6 text-sm text-muted-fg">
                Oder direkt an{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-accent hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <RoomBanner />
    </>
  );
}
