"use client"

import Link from "next/link"
import {
  HeartHandshake,
  Stethoscope,
  Home as HomeIcon,
  FileText,
  Users,
  Languages,
  Check,
  ArrowRight,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { useI18n } from "@/components/site/i18n-provider"
import { siteConfig } from "@/lib/site-config"

const icons = [HeartHandshake, Stethoscope, HomeIcon, FileText, Users, Languages] as const

export default function LeistungenPage() {
  const { t } = useI18n()

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-leistungen.jpg"
        imageAlt="Hände einer Pflegekraft halten die Hände eines älteren Menschen"
        eyebrow={t.services.heroEyebrow}
        title={t.services.heroTitle}
        lead={t.services.heroLead}
        breadcrumbs={[
          { href: "/", label: t.nav.home },
          { label: t.nav.services },
        ]}
      />

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => {
              const Icon = icons[i] ?? HeartHandshake
              return (
                <Reveal key={s.title} delay={i * 0.05}>
                  <Card className="group h-full overflow-hidden border-border/70 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    <CardContent className="flex h-full flex-col gap-5 p-7">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[color:var(--accent)] text-[color:var(--navy)]">
                          <Icon className="size-5" aria-hidden />
                        </div>
                        <span className="rounded-full border border-[color:var(--navy)]/15 px-3 py-1 text-xs font-medium text-navy/80">
                          {s.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold tracking-tight text-navy">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/75 text-pretty">
                          {s.text}
                        </p>
                      </div>
                      <ul className="mt-auto flex flex-col gap-2.5 pt-2">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-[0.95rem] text-foreground/80"
                          >
                            <span
                              className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--sky)]/15 text-[color:var(--sky)]"
                              aria-hidden
                            >
                              <Check className="size-3.5" />
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--muted)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.services.processEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.services.processTitle}
            </h2>
            <p className="mt-4 text-lg text-foreground/75 text-pretty">
              {t.services.processLead}
            </p>
          </Reveal>

          <div className="relative mt-14">
            {/* Connector line */}
            <div
              aria-hidden
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[color:var(--navy)]/10 md:block"
            />
            <ol className="grid gap-5 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
              {t.services.steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s.title}
                  delay={i * 0.05}
                  className={i % 2 === 1 ? "md:mt-12" : ""}
                >
                  <div className="relative rounded-3xl border border-border/70 bg-white p-7 shadow-sm">
                    <div className="absolute -top-5 left-7 inline-flex size-10 items-center justify-center rounded-full bg-[color:var(--navy)] font-serif text-lg font-semibold text-white shadow">
                      {i + 1}
                    </div>
                    <h3 className="mt-3 font-serif text-xl font-semibold text-navy md:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[0.975rem] leading-relaxed text-foreground/75 text-pretty">
                      {s.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-[color:var(--navy)] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center text-white">
            <p className="font-serif text-2xl italic opacity-80">{t.home.ctaQuote}</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-balance">
              {t.home.ctaTitle}
            </h2>
            <p className="mt-4 text-lg opacity-80 text-pretty">{t.home.ctaLead}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full bg-white px-6 text-base text-[color:var(--navy)] hover:bg-white/90"
              >
                <Link href="/beratung">
                  {t.cta.requestConsultation}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/60 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
              >
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
