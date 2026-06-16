import Link from "next/link"
import { MapPin, Calendar, Clock, Phone, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { siteConfig } from "@/lib/site-config"

const jobs = [
  {
    title: "Pflegefachkraft (m/w/d)",
    location: "Hamburg Altona",
    startDate: "Ab sofort",
    hours: "Vollzeit · Teilzeit · Geringfügig",
  },
  {
    title: "Gesundheits- und Pflegeassistent/in (m/w/d)",
    location: "Hamburg Altona",
    startDate: "Ab sofort",
    hours: "Vollzeit · Teilzeit · Geringfügig",
  },
  {
    title: "Sachbearbeiter/in (m/w/d)",
    location: "Hamburg Altona",
    startDate: "Ab sofort",
    hours: "Vollzeit · Teilzeit",
  },
]

export default function KarrierePage() {
  return (
    <>
      <PageBanner
        imageSrc="/images/banner-about.jpg"
        imageAlt="ElbLicht Pflegeteam in Hamburg Altona"
        eyebrow="Karriere bei ElbLicht"
        title="Werde Teil unseres Teams."
        lead="Wir suchen engagierte Menschen, die Pflege mit Herz und Haltung leben – in Hamburg Altona und Umgebung."
        breadcrumbs={[
          { href: "/", label: "Start" },
          { label: "Karriere" },
        ]}
      />

      {/* JOB LISTINGS */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Section heading */}
          <Reveal>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center justify-center size-12 rounded-2xl bg-[color:var(--accent)] text-[color:var(--sky)]">
                <Briefcase className="size-6" aria-hidden />
              </div>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-navy md:text-5xl text-balance">
                Unsere aktuellen Stellenangebote
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/70 text-pretty">
                Alle Stellen sind in Hamburg Altona · Bewerbung jederzeit willkommen
              </p>
            </div>
          </Reveal>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.title} delay={i * 0.07}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/70 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                  <CardContent className="flex h-full flex-col gap-5 p-7">
                    {/* Title */}
                    <h3 className="font-serif text-2xl font-semibold leading-snug tracking-tight text-navy text-balance">
                      {job.title}
                    </h3>

                    {/* Meta badges */}
                    <div className="flex flex-col gap-2">
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                        <MapPin className="size-3.5 shrink-0 text-[color:var(--sky)]" aria-hidden />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                        <Calendar className="size-3.5 shrink-0 text-[color:var(--sky)]" aria-hidden />
                        {job.startDate}
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                        <Clock className="size-3.5 shrink-0 text-[color:var(--sky)]" aria-hidden />
                        {job.hours}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-2">
                      <Button
                        asChild
                        className="w-full bg-[color:var(--navy)] text-white hover:bg-[color:var(--navy)]/90 active:scale-[0.98] transition-transform"
                      >
                        <Link href={`/bewerben?stelle=${encodeURIComponent(job.title)}`}>
                          Jetzt bewerben
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPONTANEOUS APPLICATION CTA */}
      <section className="bg-[color:var(--muted)]/60 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--sky)]">
              Kein passendes Angebot dabei?
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight text-navy md:text-5xl text-balance">
              Wir freuen uns über Initiativbewerbungen.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-foreground/75 text-pretty">
              Schreiben Sie uns einfach – wir schauen, ob wir gemeinsam etwas aufbauen können. Mehrsprachige Bewerber:innen (Türkisch, Englisch) sind besonders willkommen.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[color:var(--navy)] text-white hover:bg-[color:var(--navy)]/90"
              >
                <Link href="/bewerben">Initiativbewerbung senden</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2">
                  <Phone className="size-4" aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
