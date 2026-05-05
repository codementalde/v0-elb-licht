"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/site/i18n-provider"

const STORAGE_KEY = "elblicht.cookie-consent.v2"

export function CookieBanner() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (!stored) {
        const id = window.setTimeout(() => setVisible(true), 600)
        return () => window.clearTimeout(id)
      }
    } catch {
      /* noop */
    }
  }, [])

  const decide = (value: "accepted" | "rejected") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* noop */
    }
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop blur overlay */}
          <motion.div
            key="cookie-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[59] bg-black/30 backdrop-blur-sm"
          />
          <motion.div
            key="cookie-banner"
            role="dialog"
            data-nosnippet
            aria-live="polite"
            aria-label={t.cookieBanner.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 sm:bottom-6"
          >
          <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-white shadow-[0_8px_40px_-8px_rgba(19,51,90,0.22)]">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--sky)] to-[color:var(--ruby)]"
            />
            <div className="p-5 pt-6">
              {/* Logo + text */}
              <div className="flex items-center gap-3">
                <Image
                  src="/elb-licht-logo.svg"
                  alt="ElbLicht Pflegedienst"
                  width={110}
                  height={36}
                  className="h-8 w-auto shrink-0"
                />
                <div>
                  <h2 className="font-serif text-[0.9rem] font-semibold leading-snug text-navy">
                    {t.cookieBanner.title}
                  </h2>
                  <p className="mt-0.5 text-[0.78rem] leading-relaxed text-muted-foreground">
                    {t.cookieBanner.text}
                  </p>
                </div>
              </div>
              {/* Buttons row */}
              <div className="mt-4 flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => decide("accepted")}
                  className="h-9 flex-1 rounded-full bg-[color:var(--brand)] text-sm text-[color:var(--brand-foreground)] hover:bg-[color:var(--brand)]/90"
                >
                  {t.cookieBanner.accept}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => decide("rejected")}
                  className="h-9 flex-1 rounded-full text-sm"
                >
                  {t.cookieBanner.reject}
                </Button>
                <Link
                  href="/cookies"
                  className="shrink-0 text-[0.75rem] text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                >
                  {t.cookieBanner.settings}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
