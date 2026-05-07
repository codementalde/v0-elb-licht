import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, User, Tag, Phone } from "lucide-react"
import { blogPosts, getBlogPost, getAllBlogSlugs } from "@/lib/blog-posts"
import { siteConfig } from "@/lib/site-config"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://pflegedienst-elblicht.de/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  // Build JSON-LD schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "ElbLicht Pflegedienst",
        url: "https://pflegedienst-elblicht.de",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "ElbLicht Pflegedienst",
      url: "https://pflegedienst-elblicht.de",
      logo: {
        "@type": "ImageObject",
        url: "https://pflegedienst-elblicht.de/elb-licht-logo.svg",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    url: `https://pflegedienst-elblicht.de/blog/${post.slug}`,
    mainEntityOfPage: `https://pflegedienst-elblicht.de/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://pflegedienst-elblicht.de" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://pflegedienst-elblicht.de/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://pflegedienst-elblicht.de/blog/${post.slug}` },
    ],
  }

  const howToSchema = post.howToSteps
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: post.title,
        description: post.metaDescription,
        step: post.howToSteps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }
    : null

  // Other posts for "related" section
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      {/* Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      <div className="mx-auto max-w-3xl px-4 py-20 md:px-6 md:py-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-navy transition-colors">Start</Link>
          <span aria-hidden>/</span>
          <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
          <span aria-hidden>/</span>
          <span className="text-foreground/60 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full bg-[color:var(--accent)] px-2.5 py-0.5 text-xs font-medium text-navy"
              >
                <Tag className="size-3" aria-hidden />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl text-balance">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-foreground/70 leading-relaxed text-pretty">
            {post.excerpt}
          </p>

          {/* Meta bar */}
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted-foreground border-y border-border py-4">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden />
              {post.author} · {post.authorRole}
            </span>
            <time dateTime={post.publishedAt} className="flex items-center gap-1.5">
              <span>
                {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </time>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden />
              {post.readingMinutes} Min. Lesezeit
            </span>
          </div>
        </header>

        {/* Article body */}
        <article
          className="prose prose-lg prose-navy max-w-none
            prose-headings:font-serif prose-headings:text-navy
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-7 prose-h3:mb-3
            prose-p:text-foreground/80 prose-p:leading-relaxed
            prose-li:text-foreground/80
            prose-strong:text-navy prose-strong:font-semibold
            prose-a:text-[color:var(--sky)] prose-a:no-underline hover:prose-a:underline
            prose-ul:my-4 prose-ul:pl-6
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQ Section */}
        {post.faqs.length > 0 && (
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-serif text-3xl font-semibold text-navy mb-6">
              Häufige Fragen
            </h2>
            <div className="flex flex-col gap-4">
              {post.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border bg-white p-6">
                  <h3 className="font-semibold text-navy mb-2">{faq.q}</h3>
                  <p className="text-foreground/75 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <aside className="mt-14 rounded-2xl bg-[color:var(--navy)] p-8 text-white">
          <p className="text-white/70 text-sm font-medium uppercase tracking-wider mb-2">
            Kostenlose Erstberatung
          </p>
          <h2 className="font-serif text-2xl font-semibold mb-3">
            Fragen? Wir helfen Ihnen gerne – auf Deutsch, Türkisch oder Englisch.
          </h2>
          <p className="text-white/80 mb-6 leading-relaxed">
            Rufen Sie uns an oder vereinbaren Sie einen Beratungstermin. Die erste Beratung ist
            kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-white text-navy px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              <Phone className="size-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/beratung"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Beratung anfordern
            </Link>
          </div>
        </aside>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="mt-14" aria-labelledby="related-heading">
            <h2 id="related-heading" className="font-serif text-2xl font-semibold text-navy mb-6">
              Weitere Artikel
            </h2>
            <div className="flex flex-col gap-4">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-5 hover:shadow-md transition-all hover:-translate-y-0.5"
                >
                  <div>
                    <p className="font-semibold text-navy group-hover:text-[color:var(--sky)] transition-colors">
                      {p.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{p.excerpt}</p>
                  </div>
                  <ArrowLeft className="size-5 text-muted-foreground rotate-180 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Alle Artikel
          </Link>
        </div>
      </div>
    </>
  )
}
