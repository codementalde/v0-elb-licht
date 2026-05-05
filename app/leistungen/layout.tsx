import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pflegeleistungen Hamburg | Grundpflege, Behandlungspflege – ElbLicht",
  description:
    "Ambulante Pflegeleistungen in Hamburg: Grundpflege, Behandlungspflege, Hauswirtschaft, Verhinderungspflege & kultursensible Pflege auf Deutsch, Türkisch & Englisch. SGB V & XI zertifiziert.",
}

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
