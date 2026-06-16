import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jetzt bewerben | Karriere beim ElbLicht Pflegedienst Hamburg",
  description:
    "Bewerbungsformular für offene Stellen beim ElbLicht Pflegedienst in Hamburg Altona. Jetzt online bewerben – schnell und unkompliziert.",
}

export default function BewerbenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
