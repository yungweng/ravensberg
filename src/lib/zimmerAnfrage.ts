import { siteConfig } from "@/data/content";

/** Shared mailto target for the "Wir haben Zimmer frei" call to action. */
export const zimmerAnfrageHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Zimmeranfrage – KStV Ravensberg")}`;
