"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldError,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { submitConsultation, type FormState } from "@/app/actions/contact"
import { useI18n } from "@/components/site/i18n-provider"
import { locales } from "@/lib/i18n/dictionaries"

/** Renders a string like "Ich habe die {link}Datenschutz{/link} gelesen" with a real link */
function ConsentText({ template }: { template: string }) {
  const parts = template.split(/(\{link\}.*?\{\/link\})/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\{link\}(.*?)\{\/link\}$/)
        if (m) {
          return (
            <a key={i} href="/datenschutz" className="underline hover:text-navy" target="_blank" rel="noopener noreferrer">
              {m[1]}
            </a>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

const initial: FormState = { ok: false }

function SubmitButton() {
  const { pending } = useFormStatus()
  const { t } = useI18n()
  return (
    <Button
      type="submit"
      size="lg"
      disabled={pending}
      className="rounded-full bg-[color:var(--navy)] px-6 text-base text-white hover:bg-[color:var(--navy)]/90"
    >
      {pending ? (
        <>
          <Spinner className="size-4" />
          {t.cta.sending}
        </>
      ) : (
        <>
          <Send className="size-4" aria-hidden />
          {t.cta.submit}
        </>
      )}
    </Button>
  )
}

export function ConsultationForm() {
  const { t, locale } = useI18n()
  const [state, formAction] = useActionState(submitConsultation, initial)

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-[color:var(--sky)]/30 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--sky)]">
          <CheckCircle2 className="size-7" aria-hidden />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy md:text-3xl">
          {t.consultation.success}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-pretty text-foreground/75">
          {t.consultation.successLead}
        </p>
      </div>
    )
  }

  const v = state.values ?? {}
  const fe = state.fieldErrors
  const fieldErrorMessages: Record<string, string> = {
    name: "Bitte geben Sie Ihren Namen ein.",
    phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein (z.B. name@beispiel.de).",
    consent: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }

  return (
    <form
      action={formAction}
      className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <FieldGroup>
        {state.message && (
          <div
            role="alert"
            className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            {state.message}
          </div>
        )}
        {!state.message && fe && Object.keys(fe).length > 0 && (
          <div
            role="alert"
            className="rounded-2xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            Bitte überprüfen Sie die rot markierten Felder.
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <Field data-invalid={fe?.name ? true : undefined}>
            <FieldLabel htmlFor="name">{t.consultation.fields.name}</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required defaultValue={v.name ?? ""} />
            {fe?.name && <FieldError>{fieldErrorMessages.name}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="relation">{t.consultation.fields.relation}</FieldLabel>
            <Select name="relation" defaultValue={v.relation ?? t.consultation.relations[0]}>
              <SelectTrigger id="relation">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {t.consultation.relations.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field data-invalid={fe?.phone ? true : undefined}>
            <FieldLabel htmlFor="phone">{t.consultation.fields.phone}</FieldLabel>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" required defaultValue={v.phone ?? ""} />
            {fe?.phone && <FieldError>{fieldErrorMessages.phone}</FieldError>}
          </Field>

          <Field data-invalid={fe?.email ? true : undefined}>
            <FieldLabel htmlFor="email">{t.consultation.fields.email}</FieldLabel>
            <Input id="email" name="email" type="email" autoComplete="email" defaultValue={v.email ?? ""} />
            {fe?.email && <FieldError>{fieldErrorMessages.email}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="careLevel">
              {t.consultation.fields.careLevel}
            </FieldLabel>
            <Select name="careLevel">
              <SelectTrigger id="careLevel">
                <SelectValue
                  placeholder={t.consultation.fields.careLevelPlaceholder}
                />
              </SelectTrigger>
              <SelectContent>
                {t.consultation.careLevels.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel htmlFor="preferredTime">
              {t.consultation.fields.preferredTime}
            </FieldLabel>
            <Select
              name="preferredTime"
              defaultValue={t.consultation.timeSlots[3]}
            >
              <SelectTrigger id="preferredTime">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {t.consultation.timeSlots.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        {/* Needs - multi-select checkboxes */}
        <FieldSet>
          <FieldLegend>{t.consultation.fields.needs}</FieldLegend>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {t.consultation.needs.map((n) => {
              const id = `need-${n.replace(/\s+/g, "-").toLowerCase()}`
              return (
                <Field
                  key={n}
                  orientation="horizontal"
                  className="rounded-xl border border-border/70 bg-[color:var(--muted)]/40 px-3 py-2.5"
                >
                  <Checkbox id={id} name="needs" value={n} />
                  <Label
                    htmlFor={id}
                    className="text-sm font-medium text-foreground/85"
                  >
                    {n}
                  </Label>
                </Field>
              )
            })}
          </div>
        </FieldSet>

        {/* Preferred contact + language - radio rows */}
        <div className="grid gap-6 md:grid-cols-2">
          <FieldSet>
            <FieldLegend>{t.consultation.fields.preferredContact}</FieldLegend>
            <RadioGroup
              name="preferredContact"
              defaultValue={t.consultation.contactMethods[0]}
              className="mt-3 flex flex-wrap gap-3"
            >
              {t.consultation.contactMethods.map((m) => {
                const id = `contact-${m}`
                return (
                  <Label
                    key={m}
                    htmlFor={id}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-border/70 bg-white px-3.5 py-2 text-sm font-medium text-foreground/85 transition-colors has-[[data-state=checked]]:border-[color:var(--sky)] has-[[data-state=checked]]:bg-[color:var(--accent)] has-[[data-state=checked]]:text-navy"
                  >
                    <RadioGroupItem id={id} value={m} />
                    {m}
                  </Label>
                )
              })}
            </RadioGroup>
          </FieldSet>

          <FieldSet>
            <FieldLegend>{t.consultation.fields.language}</FieldLegend>
            <RadioGroup
              name="language"
              defaultValue={locale}
              className="mt-3 flex flex-wrap gap-3"
            >
              {locales.map((l) => {
                const id = `lang-${l.code}`
                return (
                  <Label
                    key={l.code}
                    htmlFor={id}
                    className="flex cursor-pointer items-center gap-2 rounded-full border border-border/70 bg-white px-3.5 py-2 text-sm font-medium text-foreground/85 transition-colors has-[[data-state=checked]]:border-[color:var(--sky)] has-[[data-state=checked]]:bg-[color:var(--accent)] has-[[data-state=checked]]:text-navy"
                  >
                    <RadioGroupItem id={id} value={l.code} />
                    {l.label}
                  </Label>
                )
              })}
            </RadioGroup>
          </FieldSet>
        </div>

        <Field>
          <FieldLabel htmlFor="message">{t.consultation.fields.message}</FieldLabel>
          <Textarea id="message" name="message" rows={5} defaultValue={v.message ?? ""} />
        </Field>

        <Field
          orientation="horizontal"
          data-invalid={fe?.consent ? true : undefined}
        >
          <Checkbox id="consent" name="consent" defaultChecked={v.consent === "on"} />
          <Label htmlFor="consent" className="text-sm leading-relaxed text-foreground/80">
            <ConsentText template={t.consultation.fields.consent} />
          </Label>
        </Field>
        {fe?.consent && (
          <p className="text-sm text-red-700">{fieldErrorMessages.consent}</p>
        )}

        <div className="flex justify-end">
          <SubmitButton />
        </div>
      </FieldGroup>
    </form>
  )
}
