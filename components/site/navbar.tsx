"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { useI18n } from "@/components/site/i18n-provider"
import { LanguageSwitcher } from "@/components/site/language-switcher"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useI18n()

  const nav = [
    { href: "/", label: t.nav.home },
    { href: "/leistungen", label: t.nav.services },
    { href: "/ueber-uns", label: t.nav.about },
    { href: "/kontakt", label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        "glass",
        scrolled
          ? "border-b border-border shadow-[0_1px_0_0_color-mix(in_oklab,var(--foreground)_6%,transparent)]"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-3.5">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="ElbLicht Pflegedienst"
        >
          <Image
            src="/elb-licht-logo.svg"
            alt="ElbLicht Pflegedienst Logo"
            width={220}
            height={72}
            priority
            className="h-10 w-auto md:h-11"
          />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden lg:block">
          <ul className="relative flex items-center gap-0.5 rounded-full border border-border/60 bg-background/60 px-1.5 py-1 shadow-[inset_0_1px_0_0_color-mix(in_oklab,white_60%,transparent)] backdrop-blur">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative z-10 block rounded-full px-4 py-1.5 text-[0.95rem] font-medium transition-colors",
                      active
                        ? "text-navy"
                        : "text-foreground/70 hover:text-navy",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 400, damping: 34 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <LanguageSwitcher />
          <span aria-hidden className="mx-1 h-6 w-px bg-border" />
          <Button
            asChild
            size="sm"
            className="h-9 rounded-full bg-[color:var(--brand)] px-4 text-[color:var(--brand-foreground)] shadow-sm hover:bg-[color:var(--brand)]/90"
          >
            <Link href="/beratung">{t.cta.requestConsultation}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-navy transition-colors hover:bg-accent"
            aria-label={open ? t.common.menuClose : t.common.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-border/70 bg-background/95 backdrop-blur"
          >
            <nav aria-label="Mobile Navigation" className="mx-auto max-w-7xl px-4 py-4">
              <ul className="flex flex-col gap-1">
                {nav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-accent text-navy"
                            : "text-foreground/80 hover:bg-muted",
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <div className="mt-3 flex flex-col gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full justify-center rounded-full border-navy text-navy hover:bg-navy/5"
                >
                  <a href={siteConfig.phoneHref}>
                    <Phone className="size-4" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full rounded-full bg-[color:var(--brand)] text-[color:var(--brand-foreground)] hover:bg-[color:var(--brand)]/90"
                >
                  <Link href="/beratung">{t.cta.requestConsultation}</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
