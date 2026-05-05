"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Languages,
  Clock,
  MapPin,
  Stethoscope,
  Home as HomeIcon,
  FileText,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"
import { useI18n } from "@/components/site/i18n-provider"

const serviceIcons = [
  HeartHandshake,
  Stethoscope,
  HomeIcon,
  FileText,
  Users,
  Languages,
] as const

export default function HomePage() {
  const { t } = useI18n()

  // We show the first 6 service titles in the bento grid
  const services = t.services.items.slice(0, 6).map((s, i) => ({
    icon: serviceIcons[i] ?? HeartHandshake,
    title: s.title,
    badge: s.badge,
    text: s.text,
  }))

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-soft [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] size-[540px] rounded-full bg-[color:var(--sky)]/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 left-[-10%] size-[480px] rounded-full bg-[color:var(--ruby)]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 md:grid-cols-2 md:px-6 md:pb-24 md:pt-20">
          <Reveal as="div">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--navy)]/15 bg-white/60 px-4 py-1.5 text-sm font-medium text-navy backdrop-blur">
              <span className="size-2 rounded-full bg-[color:var(--ruby)]" aria-hidden />
              {t.home.eyebrow}
            </div>
            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-navy md:text-6xl lg:text-7xl text-balance">
              {t.home.titleA}{" "}
              <span className="text-[color:var(--sky)]">{t.home.titleHighlight}</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/75 md:text-xl text-pretty">
              {t.home.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-[color:var(--navy)]/20 px-6 text-base text-navy hover:bg-[color:var(--accent)]"
              >
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { icon: MapPin, label: t.home.statArea, value: "Hamburg & Umgebung" },
                { icon: Clock, label: t.home.statHours, value: t.home.statValueHours },
                { icon: Languages, label: t.home.statLanguages, value: "DE · TR · EN" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border/70 bg-white/60 p-3.5 backdrop-blur"
                >
                  <dt className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <item.icon className="size-3.5 text-[color:var(--sky)]" aria-hidden />
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-navy">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Hero photo card */}
          <Reveal as="div" delay={0.1} className="relative">
            <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] border border-border/70 bg-white shadow-[0_30px_80px_-30px_color-mix(in_oklab,var(--navy)_35%,transparent)] md:max-w-lg">
              <Image
                src="/images/hero-care.jpg"
                alt="Pflegerin von ElbLicht hilft einer älteren Dame in einer hellen Hamburger Wohnung"
                fill
                priority
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              {/* Brand glow tint */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/30 via-transparent to-transparent"
              />
              {/* Floating badges */}
              <div className="absolute left-4 top-4 rounded-2xl border border-white/40 bg-white/85 px-3.5 py-2.5 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="size-5 text-[color:var(--sky)]" aria-hidden />
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">
                      {t.badges.certified}
                    </p>
                    <p className="text-sm font-semibold text-navy">SGB V & SGB XI</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/40 bg-white/85 px-3.5 py-2.5 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="size-5 text-[color:var(--ruby)]" aria-hidden />
                  <div>
                    <p className="text-[11px] font-medium text-muted-foreground">
                      {t.badges.yearsExperience}
                    </p>
                    <p className="text-sm font-semibold text-navy">
                      {t.badges.withHeart}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEISTUNGEN — Bento Grid */}
      <section id="leistungen-preview" className="cv-auto bg-[color:var(--muted)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.home.servicesEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.home.servicesTitle}
            </h2>
            <p className="mt-4 text-lg text-foreground/75 text-pretty">
              {t.home.servicesLead}
            </p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {services.map((s, i) => {
              const span =
                i === 0
                  ? "md:col-span-3"
                  : i === 1
                  ? "md:col-span-3"
                  : i === 2
                  ? "md:col-span-2"
                  : i === 3
                  ? "md:col-span-2"
                  : i === 4
                  ? "md:col-span-2"
                  : "md:col-span-6"
              const featured = i === 5
              return (
                <Reveal key={s.title} delay={i * 0.04} className={span}>
                  <Card
                    className={[
                      "group relative h-full overflow-hidden border-border/70 transition-all duration-300",
                      featured
                        ? "bg-[color:var(--navy)] text-white"
                        : "bg-white hover:-translate-y-0.5 hover:shadow-lg",
                    ].join(" ")}
                  >
                    <CardContent className="flex h-full flex-col gap-4 p-6 md:p-7">
                      <div className="flex items-center justify-between">
                        <div
                          className={[
                            "inline-flex size-11 items-center justify-center rounded-xl",
                            featured
                              ? "bg-white/10 text-white"
                              : "bg-[color:var(--accent)] text-[color:var(--navy)]",
                          ].join(" ")}
                        >
                          <s.icon className="size-5" aria-hidden />
                        </div>
                        <span
                          className={[
                            "rounded-full border px-3 py-1 text-xs font-medium",
                            featured
                              ? "border-white/25 text-white/85"
                              : "border-[color:var(--navy)]/15 text-navy/80",
                          ].join(" ")}
                        >
                          {s.badge}
                        </span>
                      </div>
                      <h3
                        className={[
                          "font-serif text-2xl font-semibold tracking-tight md:text-[1.65rem]",
                          featured ? "text-white" : "text-navy",
                        ].join(" ")}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={[
                          "text-[0.975rem] leading-relaxed text-pretty",
                          featured ? "text-white/80" : "text-foreground/75",
                        ].join(" ")}
                      >
                        {s.text}
                      </p>
                      {featured && (
                        <div className="mt-2">
                          <Button
                            asChild
                            variant="secondary"
                            className="rounded-full bg-white text-navy hover:bg-white/90"
                          >
                            <Link href="/leistungen">
                              {t.cta.allServices}
                              <ArrowRight className="size-4" aria-hidden />
                            </Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* WERTE - with image */}
      <section className="cv-auto py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
          <Reveal className="relative">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] border border-border/70 shadow-[0_25px_60px_-25px_color-mix(in_oklab,var(--navy)_35%,transparent)]">
              <Image
                src="/images/home-moment.jpg"
                alt="Pflegerin von ElbLicht serviert einem älteren Mann eine Tasse Tee"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--navy)]/35 via-transparent to-transparent"
              />
            </div>
            {/* Floating quote */}
            <div className="absolute -bottom-6 -right-2 hidden max-w-xs rounded-2xl border border-border/70 bg-white/95 p-4 shadow-lg backdrop-blur md:block">
              <p className="font-serif text-base italic text-navy">
                {t.home.ctaQuote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.home.valuesEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.home.valuesTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/75 text-pretty">
              {t.home.valuesLead}
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.values.map((v, i) => (
                <li
                  key={v.title}
                  className="rounded-2xl border border-border/70 bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex size-9 items-center justify-center rounded-lg bg-[color:var(--accent)] font-serif text-base font-semibold text-navy"
                      aria-hidden
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy">
                      {v.title}
                    </h3>
                  </div>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-foreground/75">
                    {v.text}
                  </p>
                </li>
              ))}
            </ul>

          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-auto bg-[color:var(--muted)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.home.faqEyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              {t.home.faqTitle}
            </h2>
            <p className="mt-4 text-lg text-foreground/75 text-pretty">
              {t.home.faqLead}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border border-border/70 bg-white px-2 md:px-4"
            >
              {t.faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-border/60 last:border-b-0"
                >
                  <AccordionTrigger className="px-4 py-5 text-left text-lg font-semibold text-navy hover:no-underline md:text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-6 text-[1rem] leading-relaxed text-foreground/75">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cv-auto py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--navy)] px-6 py-14 text-white md:px-14 md:py-20">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-[color:var(--sky)]/25 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-24 size-[360px] rounded-full bg-[color:var(--ruby)]/20 blur-3xl"
              />
              <div className="relative grid items-center gap-8 md:grid-cols-2">
                <div>
                  <p className="font-serif text-xl italic text-white/80">
                    {t.home.ctaQuote}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl text-balance">
                    {t.home.ctaTitle}
                  </h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75 text-pretty">
                    {t.home.ctaLead}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full bg-white px-6 text-base text-navy hover:bg-white/90"
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
                    className="h-12 rounded-full border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={siteConfig.phoneHref}>
                      <Phone className="size-4" aria-hidden />
                      {siteConfig.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
