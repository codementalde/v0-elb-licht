"use client"

import { ChevronDown, Check } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { locales } from "@/lib/i18n/dictionaries"
import { useI18n } from "@/components/site/i18n-provider"
import { cn } from "@/lib/utils"

type Props = {
  variant?: "navbar" | "inline"
  className?: string
}

export function LanguageSwitcher({ variant = "navbar", className }: Props) {
  const { locale, setLocale, t } = useI18n()
  const current = locales.find((l) => l.code === locale) ?? locales[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label={t.common.language}
          className={cn(
            "inline-flex h-8 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold tracking-wide transition-colors outline-none",
            variant === "navbar"
              ? "border-border bg-white text-navy hover:border-[color:var(--sky)] hover:bg-[color:var(--accent)]"
              : "border-border text-foreground hover:bg-accent",
            className,
          )}
        >
          <span className="tabular-nums">{current.flag}</span>
          <ChevronDown className="size-3 opacity-50" aria-hidden />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 rounded-xl p-1">
        {locales.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onSelect={() => setLocale(l.code)}
            className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-6 text-[0.72rem] font-bold tracking-widest text-muted-foreground">
                {l.flag}
              </span>
              <span className="text-sm">{l.label}</span>
            </span>
            {locale === l.code && (
              <Check className="size-3.5 text-[color:var(--sky)]" aria-hidden />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
