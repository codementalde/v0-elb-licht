import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von ElbLicht Pflegedienst Hamburg.",
}

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
