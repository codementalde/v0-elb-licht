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
    default: "ElbLicht Pflegedienst — Ambulante Pflege in Hamburg",
    template: "%s | ElbLicht Pflegedienst",
  },
  metadataBase: new URL("https://pflegedienst-elblicht.de"),
  description:
    "ElbLicht ist Ihr ambulanter Pflegedienst in Hamburg-St. Pauli, Altona, Eimsbüttel und Umgebung. Wir sind da. Für Sie. Mit Herz.",
  keywords: [
    "Pflegedienst Hamburg",
    "ambulante Pflege",
    "häusliche Pflege",
    "St. Pauli",
    "Altona",
    "Eimsbüttel",
    "ElbLicht",
  ],
  icons: {
    icon: "/elb-licht-logo.svg",
    apple: "/elb-licht-logo.svg",
  },
  openGraph: {
    title: "ElbLicht Pflegedienst — Ambulante Pflege in Hamburg",
    description: "Wir sind da. Für Sie. Mit Herz. Ambulanter Pflegedienst in Hamburg.",
    locale: "de_DE",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
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
      <body className="font-sans antialiased min-h-dvh flex flex-col">
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
