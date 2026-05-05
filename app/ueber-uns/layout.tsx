import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Über uns | ElbLicht – Türkischsprachiger Pflegedienst Hamburg",
  description:
    "Das Team von ElbLicht Pflegedienst: Deutsch- und türkischsprachige Pflegefachkräfte in Hamburg-St. Pauli. Mit Herz, Empathie und zertifizierter Pflegequalität.",
}

export default function UeberUnsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
