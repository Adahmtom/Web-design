import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ourbrio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const sections = ["", "#work", "#services", "#process", "#pricing", "#waitlist"];
  return sections.map((s) => ({
    url: `${SITE}/${s}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: s === "" ? 1 : 0.7,
  }));
}
