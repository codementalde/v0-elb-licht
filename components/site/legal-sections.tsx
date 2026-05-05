"use client"

import { Reveal } from "@/components/site/reveal"
import type { LegalSection } from "@/lib/i18n/dictionaries"

export function LegalSections({ sections }: { sections: LegalSection[] }) {
  return (
    <section data-nosnippet className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:gap-12">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <article>
                <h2 className="font-serif text-2xl font-semibold leading-tight tracking-tight text-navy md:text-3xl text-balance">
                  {s.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-base leading-relaxed text-foreground/80 md:text-[1.05rem]">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-pretty">
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
