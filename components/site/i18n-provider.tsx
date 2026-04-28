"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  defaultLocale,
  dictionaries,
  type Dict,
  type Locale,
} from "@/lib/i18n/dictionaries"

type I18nContextValue = {
  locale: Locale
  t: Dict
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "elblicht.locale"

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  // Hydrate from storage on mount
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored && stored in dictionaries) {
        setLocaleState(stored)
      }
    } catch {
      /* noop */
    }
  }, [])

  // Reflect locale on <html lang>
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale
    }
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* noop */
    }
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider")
  }
  return ctx
}
