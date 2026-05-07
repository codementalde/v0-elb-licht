import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { blogPosts } from "@/lib/blog-posts"
import { Card, CardContent } from "@/components/ui/card"

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-28">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--navy)]/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-navy backdrop-blur mb-4">
          <span className="size-2 rounded-full bg-[color:var(--ruby)]" aria-hidden />
          Ratgeber &amp; Blog
        </div>
        <h1 className="font-serif text-4xl font-semibold leading-tight text-navy md:text-5xl text-balance">
          Wissenswertes rund um{" "}
          <span className="text-[color:var(--sky)]">häusliche Pflege</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-foreground/70 text-pretty">
          Praxisnahe Informationen für Pflegebedürftige und Angehörige in Hamburg –
          von kultursensiblen Pflegethemen bis zur Pflegegrad-Antragstellung.
        </p>
      </div>

      {/* Post list */}
      <div className="flex flex-col gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <Card className="overflow-hidden border-border/70 bg-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-lg">
              <CardContent className="flex flex-col gap-4 p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
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

                {/* Title */}
                <h2 className="font-serif text-2xl font-semibold text-navy group-hover:text-[color:var(--sky)] transition-colors text-balance">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-foreground/70 leading-relaxed text-pretty">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between gap-4 border-t border-border pt-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5" aria-hidden />
                      {post.readingMinutes} Min. Lesezeit
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--sky)]">
                    Weiterlesen
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Back to home */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-navy transition-colors"
        >
          ← Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}
