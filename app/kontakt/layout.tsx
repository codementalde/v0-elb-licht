import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt – ElbLicht Pflegedienst Hamburg | ☎ 040 560 69 787",
  description:
    "ElbLicht Pflegedienst kontaktieren: Clemens-Schultz-Straße 76, 20359 Hamburg. Mo–Fr 08–18 Uhr. Telefon, E-Mail & Karte. Antwort innerhalb eines Werktages.",
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
