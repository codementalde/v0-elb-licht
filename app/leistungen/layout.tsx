import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Unsere ambulanten Pflegeleistungen: Grundpflege, Behandlungspflege, Betreuung, Demenzversorgung und mehr. ElbLicht Pflegedienst Hamburg.",
}

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
