"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

type Props = {
  imageSrc: string
  imageAlt: string
  eyebrow: string
  title: string
  lead?: string
  /** Optional breadcrumbs: [{ href, label }] last is the current page */
  breadcrumbs?: { href?: string; label: string }[]
}

export function PageBanner({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  lead,
  breadcrumbs,
}: Props) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Color overlay tuned to brand */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[color:var(--brand)]/65"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[color:var(--brand)]/45 via-[color:var(--brand)]/55 to-[color:var(--brand)]/80"
        />
        {/* Soft sky bloom */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-[-10%] size-[420px] rounded-full bg-[color:var(--sky)]/30 blur-3xl"
        />
      </div>

      <div className="mx-auto flex min-h-[28vh] max-w-7xl flex-col justify-end px-4 pb-10 pt-20 text-white md:min-h-[34vh] md:px-6 md:pb-14 md:pt-24">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-3 text-sm text-white/75">
            <ol className="flex flex-wrap items-center gap-1.5">
              {breadcrumbs.map((b, i) => {
                const last = i === breadcrumbs.length - 1
                return (
                  <li key={i} className="flex items-center gap-1.5">
                    {b.href && !last ? (
                      <Link
                        href={b.href}
                        className="rounded transition-colors hover:text-white"
                      >
                        {b.label}
                      </Link>
                    ) : (
                      <span aria-current={last ? "page" : undefined}>{b.label}</span>
                    )}
                    {!last && (
                      <ChevronRight className="size-3.5 text-white/50" aria-hidden />
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]/90"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 max-w-3xl font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg text-pretty"
          >
            {lead}
          </motion.p>
        )}
      </div>

      {/* Bottom curve */}
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-10 w-full text-background md:h-12"
      >
        <path
          d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,20 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
