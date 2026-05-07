export const siteConfig = {
  name: "ElbLicht Pflegedienst",
  tagline: "Ihr Licht in der häuslichen Pflege.",
  description:
    "Ambulanter Pflegedienst in Hamburg – mit Herz, Kompetenz und Menschlichkeit an Ihrer Seite.",
  phoneDisplay: "040 / 423 26 735",
  phoneHref: "tel:+494042326735",
  mobileDisplay: "0171 / 1500 882",
  mobileHref: "tel:+491711500882",
  faxDisplay: "040 / 423 26 805",
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
