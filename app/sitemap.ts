import type { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"

const BASE = "https://pflegedienst-elblicht.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0]

  // Sabit sayfalar — öncelik St. Pauli odaklı yapıya göre
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                  lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/leistungen`,  lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/beratung`,    lastModified: today, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/kontakt`,     lastModified: today, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/ueber-uns`,   lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/blog`,        lastModified: today, changeFrequency: "weekly", priority: 0.8 },
  ]

  // Blog yazıları — otomatik olarak blog-posts.ts'den çekilir
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
