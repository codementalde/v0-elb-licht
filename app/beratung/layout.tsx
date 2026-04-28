import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Beratung anfordern",
  description:
    "Fordern Sie jetzt kostenlos eine persönliche Pflegeberatung bei ElbLicht an. Wir melden uns innerhalb eines Werktages bei Ihnen.",
}

export default function BeratungLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
