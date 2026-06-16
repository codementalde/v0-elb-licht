"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { CheckCircle2, Send, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel, FieldGroup, FieldError } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { PageBanner } from "@/components/site/page-banner"
import { Reveal } from "@/components/site/reveal"
import { submitBewerben, type BewerbenState } from "@/app/actions/bewerben"

const jobOptions = [
  "Pflegefachkraft (m/w/d)",
  "Gesundheits- und Pflegeassistent/in (m/w/d)",
  "Sachbearbeiter/in (m/w/d)",
  "Initiativbewerbung",
]

const initial: BewerbenState = { ok: false }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="rounded-full bg-[color:var(--navy)] px-8 text-base text-white hover:bg-[color:var(--navy)]/90"
    >
      {pending ? (
        <>
          <Spinner className="size-4" />
          Wird gesendet…
        </>
      ) : (
        <>
          <Send className="size-4" aria-hidden />
          Bewerbung absenden
        </>
      )}
    </Button>
  )
}

function ConsentText() {
  return (
    <span>
      Ich habe die{" "}
      <a
        href="/datenschutz"
        className="underline hover:text-navy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Datenschutzerklärung
      </a>{" "}
      gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Bewerbung gespeichert und genutzt werden.
    </span>
  )
}

export default function BewerbenPage() {
  const searchParams = useSearchParams()
  const stelle = searchParams.get("stelle") ?? ""
  const [state, formAction] = useActionState(submitBewerben, initial)

  const v = state.values ?? {}
  const fe = state.fieldErrors

  const defaultStelle = v.stelle ?? stelle

  return (
    <>
      <PageBanner
        imageSrc="/images/banner-about.jpg"
        imageAlt="ElbLicht Pflegeteam in Hamburg Altona"
        eyebrow="Karriere bei ElbLicht"
        title="Jetzt bewerben."
        lead="Wir freuen uns auf Ihre Bewerbung – schnell, unkompliziert und direkt."
        breadcrumbs={[
          { href: "/", label: "Start" },
          { href: "/karriere", label: "Karriere" },
          { label: "Bewerbung" },
        ]}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <Reveal>
            <Link
              href="/karriere"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-navy transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Zurück zu den Stellenangeboten
            </Link>
          </Reveal>

          {state.ok ? (
            <Reveal>
              <div className="rounded-3xl border border-[color:var(--sky)]/30 bg-white p-10 text-center shadow-sm">
                <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--sky)]">
                  <CheckCircle2 className="size-7" aria-hidden />
                </div>
                <h2 className="mt-5 font-serif text-2xl font-semibold text-navy md:text-3xl">
                  Ihre Bewerbung ist eingegangen!
                </h2>
                <p className="mx-auto mt-3 max-w-md text-pretty text-foreground/75">
                  Vielen Dank – wir melden uns so schnell wie möglich bei Ihnen.
                </p>
                <Button asChild className="mt-7 rounded-full bg-[color:var(--navy)] text-white hover:bg-[color:var(--navy)]/90">
                  <Link href="/karriere">Zurück zu Karriere</Link>
                </Button>
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.05}>
              <form
                action={formAction}
                className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:p-8"
                noValidate
              >
                <h2 className="font-serif text-2xl font-semibold text-navy md:text-3xl">
                  Bewerbungsformular
                </h2>
                <p className="mt-2 text-[0.975rem] text-foreground/65">
                  Alle mit * markierten Felder sind Pflichtfelder.
                </p>

                <FieldGroup className="mt-7 flex flex-col gap-5">
                  {state.message && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
                    >
                      {state.message}
                    </div>
                  )}

                  {/* Stelle */}
                  <Field>
                    <FieldLabel htmlFor="stelle">Stelle</FieldLabel>
                    <select
                      id="stelle"
                      name="stelle"
                      defaultValue={defaultStelle || jobOptions[jobOptions.length - 1]}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    >
                      {jobOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <Field data-invalid={fe?.name ? true : undefined}>
                      <FieldLabel htmlFor="name">Name *</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        defaultValue={v.name ?? ""}
                      />
                      {fe?.name && (
                        <FieldError>Bitte geben Sie Ihren Namen ein.</FieldError>
                      )}
                    </Field>

                    {/* Phone */}
                    <Field>
                      <FieldLabel htmlFor="phone">Telefon</FieldLabel>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        defaultValue={v.phone ?? ""}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field data-invalid={fe?.email ? true : undefined}>
                    <FieldLabel htmlFor="email">E-Mail *</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      defaultValue={v.email ?? ""}
                    />
                    {fe?.email && (
                      <FieldError>
                        Bitte geben Sie eine gültige E-Mail-Adresse ein.
                      </FieldError>
                    )}
                  </Field>

                  {/* Anschreiben */}
                  <Field data-invalid={fe?.anschreiben ? true : undefined}>
                    <FieldLabel htmlFor="anschreiben">Anschreiben *</FieldLabel>
                    <Textarea
                      id="anschreiben"
                      name="anschreiben"
                      rows={7}
                      placeholder="Erzählen Sie uns kurz, warum Sie zu uns passen und was Sie mitbringen…"
                      required
                      defaultValue={v.anschreiben ?? ""}
                      className="resize-y"
                    />
                    {fe?.anschreiben && (
                      <FieldError>Bitte schreiben Sie ein kurzes Anschreiben.</FieldError>
                    )}
                  </Field>

                  {/* Consent */}
                  <Field data-invalid={fe?.consent ? true : undefined}>
                    <label
                      htmlFor="consent"
                      className="flex cursor-pointer items-start gap-3"
                    >
                      <Checkbox id="consent" name="consent" className="mt-0.5 shrink-0" />
                      <span className="text-[0.9rem] leading-relaxed text-foreground/75">
                        <ConsentText />
                      </span>
                    </label>
                    {fe?.consent && (
                      <FieldError>
                        Bitte stimmen Sie der Datenschutzerklärung zu.
                      </FieldError>
                    )}
                  </Field>

                  <div className="pt-2">
                    <SubmitButton />
                  </div>
                </FieldGroup>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
