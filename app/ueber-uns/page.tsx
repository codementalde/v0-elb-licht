"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { useI18n } from "@/components/site/i18n-provider"

const memberAccents = [
  { initial: "E", color: "var(--navy)" },
  { initial: "G", color: "var(--sky)" },
] as const

export default function UeberUnsPage() {
  const { t } = useI18n()

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-about.jpg"
        imageAlt="Pflegeteam von ElbLicht vor einem Speicherstadt-Gebäude in Hamburg"
        eyebrow={t.about.heroEyebrow}
        title={t.about.heroTitle}
        lead={t.about.heroLead}
        breadcrumbs={[
          { href: "/", label: t.nav.home },
          { label: t.nav.about },
        ]}
      />

      {/* STORY */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-12 md:items-center md:px-6">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_25px_60px_-25px_color-mix(in_oklab,var(--navy)_35%,transparent)]">
              <Image
                src="/images/home-moment.jpg"
                alt="Pflegerin und älterer Herr in häuslicher Atmosphäre"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.06}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.about.storyEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.about.storyTitle}
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-relaxed text-foreground/80 text-pretty">
              {t.about.storyBody.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pillar chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: ShieldCheck, label: "SGB V & SGB XI" },
                { icon: HeartHandshake, label: t.home.multilingualNote },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-3.5 py-1.5 text-sm font-medium text-navy"
                >
                  <b.icon className="size-4 text-[color:var(--sky)]" aria-hidden />
                  {b.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[color:var(--muted)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.home.valuesEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.about.valuesTitle}
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl border border-border/70 bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-xl bg-[color:var(--accent)] font-serif text-lg font-semibold text-navy"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-foreground/75">
                    {v.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.about.teamEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.about.teamTitle}
            </h2>
            <p className="mt-4 text-lg text-foreground/75 text-pretty">
              {t.about.teamLead}
            </p>
          </Reveal>

          <div className="mt-14 mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
            {t.about.members.map((m, i) => {
              const accent = memberAccents[i] ?? memberAccents[0]
              return (
                <Reveal key={m.name} delay={i * 0.06}>
                  <article className="group h-full rounded-[2rem] border border-border/70 bg-white p-7 transition-all hover:-translate-y-0.5 hover:shadow-lg">
                    <div
                      className="inline-flex size-14 items-center justify-center rounded-2xl font-serif text-2xl font-semibold text-white"
                      style={{ backgroundColor: accent.color }}
                      aria-hidden
                    >
                      {accent.initial}
                    </div>
                    <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[color:var(--sky)]">
                      {m.role}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-foreground/75">
                      {m.bio}
                    </p>
                  </article>
                </Reveal>
              )
            })}
          </div>

          <Reveal delay={0.1} className="mt-14 text-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-[color:var(--navy)] px-6 text-base text-white hover:bg-[color:var(--navy)]/90"
            >
              <Link href="/beratung">
                {t.cta.requestConsultation}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  )
}
