import type { MetadataRoute } from "next";
import { researchNotes } from "@/content/research";
import { siteConfig } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: new Date(), priority: 1 },
    {
      url: `${siteConfig.url}/research`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/recognition`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/methodology`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified: new Date(),
      priority: 0.6,
    },
  ];

  const noteRoutes: MetadataRoute.Sitemap = researchNotes.map((note) => ({
    url: `${siteConfig.url}/research/${note.slug}`,
    lastModified: new Date(note.published),
    priority: 0.8,
  }));

  return [...staticRoutes, ...noteRoutes];
}
