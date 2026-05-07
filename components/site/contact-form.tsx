"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldLabel, FieldGroup, FieldError } from "@/components/ui/field"
import { Spinner } from "@/components/ui/spinner"
import { submitContact, type FormState } from "@/app/actions/contact"
import { useI18n } from "@/components/site/i18n-provider"

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

export function ContactForm() {
  const { t } = useI18n()
  const [state, formAction] = useActionState(submitContact, initial)

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-[color:var(--sky)]/30 bg-white p-8 text-center shadow-sm md:p-12">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-[color:var(--accent)] text-[color:var(--sky)]">
          <CheckCircle2 className="size-7" aria-hidden />
        </div>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-navy md:text-3xl">
          {t.contact.success}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-pretty text-foreground/75">
          {t.contact.successLead}
        </p>
      </div>
    )
  }

  const v = state.values ?? {}
  const fe = state.fieldErrors
  const fieldErrorMessages: Record<string, string> = {
    name: "Bitte geben Sie Ihren Namen ein.",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein (z.B. name@beispiel.de).",
    message: "Bitte schreiben Sie eine Nachricht (mindestens 5 Zeichen).",
    consent: "Bitte stimmen Sie der Datenschutzerklärung zu.",
  }

  return (
    <form
      action={formAction}
      className="flex h-full flex-col rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:p-8"
      noValidate
    >
      <FieldGroup className="flex flex-1 flex-col">
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

        <div className="grid items-start gap-5 md:grid-cols-2">
          <Field data-invalid={state.fieldErrors?.name ? true : undefined}>
            <FieldLabel htmlFor="name">{t.contact.fields.name}</FieldLabel>
            <Input id="name" name="name" autoComplete="name" required defaultValue={v.name ?? ""} />
            {fe?.name && <FieldError>{fieldErrorMessages.name}</FieldError>}
          </Field>

          <Field data-invalid={state.fieldErrors?.email ? true : undefined}>
            <FieldLabel htmlFor="email">{t.contact.fields.email}</FieldLabel>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={v.email ?? ""}
            />
            {fe?.email && <FieldError>{fieldErrorMessages.email}</FieldError>}
          </Field>

          <Field>
            <FieldLabel htmlFor="phone">{t.contact.fields.phone}</FieldLabel>
            <Input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={v.phone ?? ""} />
          </Field>

          <Field>
            <FieldLabel htmlFor="subject">{t.contact.fields.subject}</FieldLabel>
            <Select name="subject" defaultValue={v.subject ?? t.contact.subjects[0]}>
              <SelectTrigger id="subject">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {t.contact.subjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>

        <Field data-invalid={state.fieldErrors?.message ? true : undefined} className="flex flex-1 flex-col">
          <FieldLabel htmlFor="message">{t.contact.fields.message}</FieldLabel>
          <Textarea
            id="message"
            name="message"
            className="min-h-[160px] flex-1 resize-none"
            required
            defaultValue={v.message ?? ""}
          />
          {fe?.message && <FieldError>{fieldErrorMessages.message}</FieldError>}
        </Field>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <Field
            orientation="horizontal"
            data-invalid={fe?.consent ? true : undefined}
            className="flex-1"
          >
            <Checkbox id="consent" name="consent" defaultChecked={v.consent === "on"} />
            <Label htmlFor="consent" className="text-sm leading-relaxed text-foreground/80">
              <ConsentText template={t.contact.fields.consent} />
            </Label>
          </Field>
          <SubmitButton />
        </div>
        {fe?.consent && (
          <p className="text-sm text-red-700">{fieldErrorMessages.consent}</p>
        )}
      </FieldGroup>
    </form>
  )
}
