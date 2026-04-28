"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { useI18n } from "@/components/site/i18n-provider"

export function ScrollToTop() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="scroll-to-top"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={t.common.backToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -2 }}
          className="fixed bottom-6 right-6 z-[55] inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--brand)] text-white shadow-[0_10px_30px_-8px_color-mix(in_oklab,var(--brand)_70%,transparent)] ring-1 ring-black/5 transition-colors hover:bg-[color:var(--navy)]"
        >
          <ArrowUp className="size-5" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
