"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Phone, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useI18n } from "@/components/site/i18n-provider"

export function TopBanner() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 60)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="topbar"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-[55] overflow-hidden bg-[color:var(--brand)] text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs md:px-6 md:text-[0.82rem]">
            {/* Left — phone + mobile + email */}
            <div className="flex items-center gap-x-5">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Phone className="size-3.5" aria-hidden />
                <span className="font-medium">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.mobileHref}
                className="hidden sm:inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-medium">{siteConfig.mobileDisplay}</span>
                <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[0.68rem] font-semibold leading-none">24/7</span>
              </a>
              <a
                href={siteConfig.emailHref}
                className="hidden lg:inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              >
                <Mail className="size-3.5" aria-hidden />
                {siteConfig.email}
              </a>
            </div>

            {/* Right — hours */}
            <div className="flex items-center gap-x-4">
              <span className="hidden md:inline-flex items-center gap-1.5 opacity-90">
                <Clock className="size-3.5" aria-hidden />
                {siteConfig.hours}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
