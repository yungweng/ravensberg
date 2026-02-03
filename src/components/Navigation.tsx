"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { navigation } from "@/data/content";

interface NavigationProps {
  hasInstagramPosts?: boolean;
}

export function Navigation({ hasInstagramPosts = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = useMemo(() => {
    if (!hasInstagramPosts) return navigation;
    return [
      ...navigation,
      { label: "Aktuelles", href: "#aktuelles" },
    ];
  }, [hasInstagramPosts]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [navItems]);

  const handleLinkClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          className={`flex items-center gap-2 font-serif text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
        >
          <Image
            src="/images/wappen/kleines-wappen.webp"
            alt="Wappen KStV Ravensberg"
            width={32}
            height={38}
            className="h-8 w-auto"
            unoptimized
          />
          KStV Ravensberg
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : scrolled
                        ? "text-foreground/80 hover:text-foreground"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        } ${scrolled ? "bg-background/95 backdrop-blur-sm" : "bg-foreground/90 backdrop-blur-sm"}`}
      >
        <ul className="px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : scrolled
                        ? "text-foreground/80"
                        : "text-white/80"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
