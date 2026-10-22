import type { MetadataRoute } from "next";
import { profile, projects } from "@/data/portfolio";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.url, priority: 1 },
    { url: `${profile.url}/projects`, priority: 0.9 },
    ...projects
      .filter((project) => project.caseStudy)
      .map((project) => ({
        url: `${profile.url}/work/${project.slug}`,
        priority: 0.8,
      })),
  ];
}
