import type { MetadataRoute } from "next"

const BASE = "https://pflegedienst-elblicht.de"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Genel: tüm botlar için varsayılan kurallar
      {
        userAgent: "*",
        allow: "/",
        // Hukuki sayfalar arama sonuçlarında görünmesin
        disallow: ["/impressum", "/datenschutz", "/cookies"],
      },

      // ─── AI search botlarına AÇIK izin ───
      // Strateji: AI Overviews / ChatGPT Search / Perplexity / Claude'da
      // citasyon almak için bu botların içeriği taraması GEREKLİ.
      { userAgent: "GPTBot",         allow: "/" }, // ChatGPT Search
      { userAgent: "OAI-SearchBot",  allow: "/" }, // ChatGPT Search (yeni)
      { userAgent: "ChatGPT-User",   allow: "/" }, // ChatGPT user fetch
      { userAgent: "PerplexityBot",  allow: "/" }, // Perplexity
      { userAgent: "Perplexity-User",allow: "/" }, // Perplexity user fetch
      { userAgent: "ClaudeBot",      allow: "/" }, // Claude web search
      { userAgent: "Claude-Web",     allow: "/" }, // Claude (legacy)
      { userAgent: "anthropic-ai",   allow: "/" }, // Anthropic
      { userAgent: "Google-Extended",allow: "/" }, // Gemini citation
      { userAgent: "CCBot",          allow: "/" }, // Common Crawl (LLM training)
      { userAgent: "cohere-ai",      allow: "/" }, // Cohere
      { userAgent: "Applebot-Extended", allow: "/" }, // Apple Intelligence
      { userAgent: "Bytespider",     allow: "/" }, // ByteDance/TikTok AI
      { userAgent: "DuckAssistBot",  allow: "/" }, // DuckDuckGo AI

      // Sosyal medya önizleme botları
      { userAgent: "facebookexternalhit", allow: "/" },
      { userAgent: "Twitterbot",     allow: "/" },
      { userAgent: "LinkedInBot",    allow: "/" },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
