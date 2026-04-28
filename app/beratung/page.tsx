"use client"

import Link from "next/link"
import { Check, Phone } from "lucide-react"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { ConsultationForm } from "@/components/site/consultation-form"
import { useI18n } from "@/components/site/i18n-provider"
import { siteConfig } from "@/lib/site-config"

export default function BeratungPage() {
  const { t } = useI18n()

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-beratung.jpg"
        imageAlt="Pflegeberaterin im Gespräch mit einem älteren Ehepaar am Küchentisch"
        eyebrow={t.consultation.heroEyebrow}
        title={t.consultation.heroTitle}
        lead={t.consultation.heroLead}
        breadcrumbs={[
          { href: "/", label: t.nav.home },
          { label: t.nav.consultation },
        ]}
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-12">
          {/* Sidebar */}
          <Reveal className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-3xl border border-border/70 bg-[color:var(--navy)] p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]/90">
                  {t.consultation.heroEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight md:text-3xl text-balance">
                  {t.consultation.heroTitle}
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {t.consultation.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[0.95rem]">
                      <span
                        className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-white"
                        aria-hidden
                      >
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-white/90">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-border/70 bg-white p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {t.cta.callNow}
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-2 flex items-center gap-3 font-serif text-2xl font-semibold text-navy transition-colors hover:text-[color:var(--sky)]"
                >
                  <Phone className="size-5 text-[color:var(--sky)]" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {siteConfig.hours}
                </p>
                <Link
                  href="/kontakt"
                  className="mt-4 inline-flex text-sm font-medium text-[color:var(--sky)] hover:underline"
                >
                  {t.nav.contact} →
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-8" delay={0.06}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              {t.consultation.formTitle}
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl text-balance">
              {t.consultation.formLead}
            </h2>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
