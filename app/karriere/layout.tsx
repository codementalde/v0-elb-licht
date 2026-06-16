import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Karriere | Jobs beim ambulanten Pflegedienst in Hamburg Altona – ElbLicht",
  description:
    "Werde Teil des ElbLicht-Teams in Hamburg Altona. Offene Stellen: Pflegefachkraft, Gesundheits- und Pflegeassistent/in, Sachbearbeitung. Jetzt bewerben!",
}

export default function KarriereLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
