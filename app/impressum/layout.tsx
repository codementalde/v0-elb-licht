import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von ElbLicht Pflegedienst, Clemens-Schultz-Straße 76, 20359 Hamburg.",
}

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
