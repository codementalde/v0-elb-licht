import type { Metadata, Viewport } from "next"
import { Inter, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { I18nProvider } from "@/components/site/i18n-provider"
import { CookieBanner } from "@/components/site/cookie-banner"
import { TopBanner } from "@/components/site/top-banner"
import { ScrollToTop } from "@/components/site/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Pflegedienst St. Pauli – ElbLicht | Häusliche Pflege Hamburg",
    template: "%s | ElbLicht Pflegedienst St. Pauli Hamburg",
  },
  metadataBase: new URL("https://pflegedienst-elblicht.de"),
  description:
    "Ambulanter Pflegedienst in Hamburg-St. Pauli, Altona & Eimsbüttel. Grundpflege, Behandlungspflege & kostenlose Beratung – Deutsch & Türkisch. ☎ 040 423 26 735",
  keywords: [
    "Pflegedienst St. Pauli",
    "Pflegedienst Hamburg St. Pauli",
    "ambulanter Pflegedienst St. Pauli",
    "häusliche Pflege St. Pauli",
    "Pflegedienst Hamburg",
    "ambulanter Pflegedienst Hamburg",
    "häusliche Pflege Hamburg",
    "häusliche Krankenpflege Hamburg",
    "türkischer Pflegedienst Hamburg",
    "türkischsprachiger Pflegedienst Hamburg",
    "kultursensible Pflege Hamburg",
    "Pflegedienst Altona",
    "Pflegedienst Eimsbüttel",
    "ElbLicht",
  ],
  openGraph: {
    title: "Pflegedienst St. Pauli – ElbLicht | Häusliche Pflege Hamburg",
    description:
      "Ambulanter Pflegedienst in Hamburg-St. Pauli. Deutsch & Türkisch. Kostenlose Erstberatung ☎ 040 423 26 735",
    url: "https://pflegedienst-elblicht.de",
    siteName: "ElbLicht Pflegedienst",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

// ---------------------------------------------------------------------------
// JSON-LD — Nested LocalBusiness / MedicalBusiness schema
// Veriler lib/site-config.ts ile senkrondur
// ---------------------------------------------------------------------------
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": "https://pflegedienst-elblicht.de/#business",
  name: "ElbLicht Pflegedienst",
  description:
    "Ambulanter Pflegedienst in Hamburg-St. Pauli – Grundpflege, Behandlungspflege, Beratung. Deutsch-, türkisch- und englischsprachig.",
  url: "https://pflegedienst-elblicht.de",
  telephone: "+494042326735",
  faxNumber: "+494057261524",
  email: "info@pflegedienst-elblicht.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Clemens-Schultz-Straße 76",
    postalCode: "20359",
    addressLocality: "Hamburg",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.5511,
    longitude: 9.9685,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: [
    { "@type": "City", name: "Hamburg-St. Pauli" },
    { "@type": "City", name: "Hamburg-Altona" },
    { "@type": "City", name: "Hamburg-Eimsbüttel" },
  ],
  knowsLanguage: ["de", "tr", "en"],
  employee: [
    {
      "@type": "Person",
      name: "Ebru Medik",
      jobTitle: "Pflegedienstleitung",
      knowsLanguage: ["Deutsch", "Türkisch"],
    },
    {
      "@type": "Person",
      name: "Gülay Patan",
      jobTitle: "Stellvertretende Pflegedienstleitung",
      knowsLanguage: ["Deutsch", "Englisch"],
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: "Grundpflege",
        description: "Körperpflege, Ankleiden, Mobilität – SGB XI",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: "Behandlungspflege",
        description: "Medikamentengabe, Wundversorgung, Injektionen – SGB V",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Hauswirtschaft & Betreuung",
        description: "Reinigung, Einkauf, Begleitung – §45b",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Pflegeberatung & Antragsunterstützung",
        description: "Pflegegrad, MDK-Vorbereitung – §37.3",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: "Verhinderungspflege",
        description: "Entlastung pflegender Angehöriger bis 6 Wochen – §39 SGB XI",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Kultursensible Pflege",
        description: "Pflege auf Deutsch, Türkisch und Englisch",
      },
    },
  ],
  // sameAs — Citation URLs eklendikçe burası güncellenir
  sameAs: [
    "https://www.gelbeseiten.de/",
    "https://www.dasoertliche.de/",
    "https://www.pflege.de/",
    "https://www.pflegefinder.de/",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${fraunces.variable} bg-background`}
    >
      <head>
        {/* Preconnect: Google Maps iframe footer + kontakt sayfasında var */}
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased min-h-dvh flex flex-col">
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <I18nProvider>
          <TopBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CookieBanner />
          <ScrollToTop />
        </I18nProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
