"use client"

import { Phone, Mail, MapPin, Clock, Printer, ExternalLink } from "lucide-react"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { ContactForm } from "@/components/site/contact-form"
import { useI18n } from "@/components/site/i18n-provider"
import { siteConfig } from "@/lib/site-config"

export default function KontaktPage() {
  const { t } = useI18n()

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`
  const mapsQuery = encodeURIComponent(fullAddress)

  const items = [
    {
      icon: MapPin,
      label: t.common.address,
      value: (
        <>
          {siteConfig.address.street}
          <br />
          {siteConfig.address.zip} {siteConfig.address.city}
        </>
      ),
      href: `https://www.google.com/maps?q=${mapsQuery}`,
    },
    {
      icon: Phone,
      label: t.common.phone,
      value: siteConfig.phoneDisplay,
      href: siteConfig.phoneHref,
    },
    {
      icon: Phone,
      label: "Mobil 24/7",
      value: siteConfig.mobileDisplay,
      href: siteConfig.mobileHref,
      highlight: true,
    },
    {
      icon: Printer,
      label: t.common.fax,
      value: siteConfig.faxDisplay,
    },
    {
      icon: Mail,
      label: t.common.email,
      value: siteConfig.email,
      href: siteConfig.emailHref,
    },
    {
      icon: Clock,
      label: t.common.hours,
      value: siteConfig.hours,
    },
  ]

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-contact.jpg"
        imageAlt="Hamburg Speicherstadt zur blauen Stunde"
        eyebrow={t.contact.heroEyebrow}
        title={t.contact.heroTitle}
        lead={t.contact.heroLead}
        breadcrumbs={[
          { href: "/", label: t.nav.home },
          { label: t.nav.contact },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
            {/* Info */}
            <Reveal className="lg:col-span-5 h-full">
              <div className="flex h-full flex-col">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
                  {t.contact.infoTitle}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl text-balance">
                  {t.contact.infoHeading}
                </h2>

                <ul className="mt-8 grid flex-1 auto-rows-fr gap-3">
                  {items.map((it) => {
                    const isHighlight = "highlight" in it && it.highlight
                    const inner = (
                      <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:bg-accent/60">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-[color:var(--sky)]">
                          <it.icon className="size-5" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                            {it.label}
                            {isHighlight && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[0.65rem] font-semibold leading-none text-emerald-700">
                                <span className="relative flex size-1.5">
                                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                  <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                                </span>
                                24/7
                              </span>
                            )}
                          </p>
                          <p className="mt-0.5 text-base font-semibold text-navy">
                            {it.value}
                          </p>
                        </div>
                      </div>
                    )
                    return (
                      <li key={it.label} className="h-full">
                        {it.href ? (
                          <a
                            href={it.href}
                            target={it.href.startsWith("http") ? "_blank" : undefined}
                            rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            {inner}
                          </a>
                        ) : (
                          inner
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal className="lg:col-span-7 h-full" delay={0.06}>
              <div className="flex h-full flex-col">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
                  {t.contact.formTitle}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl text-balance">
                  {t.contact.formLead}
                </h2>
                <div className="mt-8 flex h-full flex-1 flex-col">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Wide map rectangle spanning both columns */}
          <Reveal className="mt-10" delay={0.12}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="flex flex-col items-start justify-between gap-2 border-b border-border bg-muted/40 px-4 py-3 sm:flex-row sm:items-center sm:px-6">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <MapPin className="size-4 text-[color:var(--sky)]" aria-hidden />
                  <span className="font-medium">{fullAddress}</span>
                </div>
                <a
                  href={`https://www.google.com/maps?q=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:underline"
                >
                  {t.common.openInMaps}
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
              </div>
              <iframe
                title={t.common.mapTitle}
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="460"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
