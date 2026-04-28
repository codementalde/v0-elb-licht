"use server"

export type FormState = {
  ok: boolean
  message?: string
  fieldErrors?: Record<string, string>
}

const isEmail = (s: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim())

/**
 * Generic contact form submission.
 * NOTE: Hook up an email provider (e.g. Resend) here when an
 * integration is connected. For now we validate, log, and return success.
 */
export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length < 2) errors.name = "required"
  if (!data.email || !isEmail(data.email)) errors.email = "invalid"
  if (!data.message || data.message.trim().length < 5) errors.message = "required"
  if (data.consent !== "on") errors.consent = "required"

  if (Object.keys(errors).length > 0) {
    return { ok: false, fieldErrors: errors }
  }

  // eslint-disable-next-line no-console
  console.log("[v0] contact submission:", {
    name: data.name,
    email: data.email,
    phone: data.phone,
    subject: data.subject,
    message: data.message,
  })

  // Simulate small async latency
  await new Promise((r) => setTimeout(r, 600))
  return { ok: true }
}

/**
 * Consultation request — richer form.
 */
export async function submitConsultation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length < 2) errors.name = "required"
  if (!data.phone || data.phone.trim().length < 4) errors.phone = "required"
  if (data.email && !isEmail(data.email)) errors.email = "invalid"
  if (data.consent !== "on") errors.consent = "required"

  if (Object.keys(errors).length > 0) {
    return { ok: false, fieldErrors: errors }
  }

  // Multi-select checkboxes come back as repeated keys, but FormData.entries()
  // collapses them — use getAll for the "needs" group.
  const needs = formData.getAll("needs").map(String)

  // eslint-disable-next-line no-console
  console.log("[v0] consultation submission:", {
    name: data.name,
    relation: data.relation,
    phone: data.phone,
    email: data.email,
    careLevel: data.careLevel,
    preferredContact: data.preferredContact,
    preferredTime: data.preferredTime,
    language: data.language,
    needs,
    message: data.message,
  })

  await new Promise((r) => setTimeout(r, 700))
  return { ok: true }
}
