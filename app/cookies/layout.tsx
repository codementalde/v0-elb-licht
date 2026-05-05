import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie-Einstellungen",
  description: "Informationen zur Cookie-Nutzung auf der Website von ElbLicht Pflegedienst.",
  robots: { index: false, follow: false },
}

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
