import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nehmen Sie Kontakt mit ElbLicht Pflegedienst auf. Telefon: 040 / 560 69 787. Adresse: Clemens-Schultz-Straße 76, 20359 Hamburg.",
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
