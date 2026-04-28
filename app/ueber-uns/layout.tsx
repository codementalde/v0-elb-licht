import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie das Team von ElbLicht Pflegedienst kennen. Erfahrene Pflegefachkräfte mit Herz in Hamburg.",
}

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
