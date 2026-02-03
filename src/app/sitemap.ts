import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://kstvravensberg.de";

const BUILD_DATE = new Date().toISOString();

const staticPages: Array<{
  path: string;
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
}> = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/impressum/", priority: 0.3, changeFrequency: "yearly" },
  { path: "/datenschutz/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
