import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kostenlose Pflegeberatung Hamburg | ElbLicht Pflegedienst",
  description:
    "Gratis Erstberatung – Pflegegrad, Leistungen & Kosten erklärt. Rückruf innerhalb 24h. Auch auf Türkisch & Englisch. Jetzt Beratung anfordern ☎ 040 560 69 787",
}

export default function BeratungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
