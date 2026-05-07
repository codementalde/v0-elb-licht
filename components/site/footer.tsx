"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Printer, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useI18n } from "@/components/site/i18n-provider"

export function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/leistungen", label: t.nav.services },
    { href: "/ueber-uns", label: t.nav.about },
    { href: "/kontakt", label: t.nav.contact },
    { href: "/beratung", label: t.nav.consultation },
    { href: "/blog", label: t.nav.blog },
  ]

  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.zip} ${siteConfig.address.city}`
  const mapsQuery = encodeURIComponent(fullAddress)

  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* 1 — Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2" aria-label="ElbLicht Pflegedienst">
              <Image
                src="/elb-licht-logo.svg"
                alt="ElbLicht Pflegedienst Logo"
                width={220}
                height={72}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.description}
            </p>
            <p className="mt-3 font-serif text-base italic text-[color:var(--sky)]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* 2 — Schnell-Links */}
          <nav aria-label="Footer-Navigation">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">
              {t.common.quickLinks}
            </h2>
            <ul className="mt-4 flex flex-col gap-2.5 text-[0.975rem]">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-foreground/75 transition-colors hover:text-navy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3 — Kontakt */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-navy">
              {t.nav.contact}
            </h2>
            <address className="mt-4 flex flex-col gap-3 text-[0.975rem] not-italic text-foreground/80">
              <span className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[color:var(--sky)]" aria-hidden />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.zip} {siteConfig.address.city}
                </span>
              </span>
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 hover:text-navy">
                <Phone className="size-4 shrink-0 text-[color:var(--sky)]" aria-hidden />
                {siteConfig.phoneDisplay}
              </a>
              <span className="flex items-center gap-3">
                <Printer className="size-4 shrink-0 text-[color:var(--sky)]" aria-hidden />
                {siteConfig.faxDisplay}
              </span>
              <a href={siteConfig.emailHref} className="flex items-center gap-3 hover:text-navy">
                <Mail className="size-4 shrink-0 text-[color:var(--sky)]" aria-hidden />
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-3">
                <Clock className="size-4 shrink-0 text-[color:var(--sky)]" aria-hidden />
                {siteConfig.hours}
              </span>
            </address>
          </div>

          {/* 4 — Karte */}
          <div>
            <div className="mt-0 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <iframe
                title={t.common.mapTitle}
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
              <div className="border-t border-border px-3 py-2">
                <a
                  href={`https://www.google.com/maps?q=${mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-navy hover:underline"
                >
                  <ExternalLink className="size-3" aria-hidden />
                  {t.common.openInMaps}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link href="/impressum" rel="nofollow" className="transition-colors hover:text-navy">
                {t.common.imprint}
              </Link>
            </li>
            <li aria-hidden className="text-border">·</li>
            <li>
              <Link href="/cookies" rel="nofollow" className="transition-colors hover:text-navy">
                {t.common.cookies}
              </Link>
            </li>
            <li aria-hidden className="text-border">·</li>
            <li>
              <Link href="/datenschutz" rel="nofollow" className="transition-colors hover:text-navy">
                {t.common.privacy}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

