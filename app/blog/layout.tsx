import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ratgeber & Blog | ElbLicht Pflegedienst Hamburg",
  description:
    "Nützliche Informationen rund um häusliche Pflege in Hamburg: Pflegegrad beantragen, kultursensible Pflege, türkischsprachiger Pflegedienst und mehr.",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
