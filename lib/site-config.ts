export const siteConfig = {
  name: "ElbLicht Pflegedienst",
  tagline: "Wir sind da. Für Sie. Mit Herz.",
  description:
    "Ambulanter Pflegedienst in Hamburg – mit Herz, Kompetenz und Menschlichkeit an Ihrer Seite.",
  phoneDisplay: "040 / 560 69 787",
  phoneHref: "tel:+494056069787",
  faxDisplay: "040 / 572 61 524",
  email: "info@pflegedienst-elblicht.de",
  emailHref: "mailto:info@pflegedienst-elblicht.de",
  address: {
    street: "Clemens-Schultz-Straße 76",
    zip: "20359",
    city: "Hamburg",
  },
  hours: "Mo–Fr, 08:00–18:00 Uhr",
  serviceArea: "Hamburg-St. Pauli, Altona, Eimsbüttel und Umgebung",
  languages: ["Deutsch", "Türkisch", "Englisch"],
  nav: [
    { href: "/", label: "Start" },
    { href: "/leistungen", label: "Leistungen" },
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/kontakt", label: "Kontakt" },
  ],
} as const
