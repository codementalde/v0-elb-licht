"use server"

import nodemailer from "nodemailer"

export type FormState = {
  ok: boolean
  message?: string
  fieldErrors?: Record<string, string>
}

const isEmail = (s: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim())

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.strato.de",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const TO = "info@pflegedienst-elblicht.de"
const FROM = `"ElbLicht Website" <${process.env.SMTP_USER}>`

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

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `Kontaktanfrage: ${data.subject || "Allgemeine Anfrage"}`,
      text: [
        `Name: ${data.name}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.phone || "–"}`,
        `Betreff: ${data.subject || "–"}`,
        "",
        data.message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>E-Mail:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.phone || "–"}</p>
        <p><strong>Betreff:</strong> ${data.subject || "–"}</p>
        <hr/>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    })
  } catch (err) {
    console.error("[contact] sendMail error:", err)
    return { ok: false, message: "Fehler beim Senden. Bitte rufen Sie uns an." }
  }

  return { ok: true }
}

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

  const needs = formData.getAll("needs").map(String)

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: data.email ? `"${data.name}" <${data.email}>` : undefined,
      subject: `Beratungsanfrage: ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Angehöriger: ${data.relation || "–"}`,
        `Telefon: ${data.phone}`,
        `E-Mail: ${data.email || "–"}`,
        `Pflegegrad: ${data.careLevel || "–"}`,
        `Kontaktweg: ${data.preferredContact || "–"}`,
        `Uhrzeit: ${data.preferredTime || "–"}`,
        `Sprache: ${data.language || "–"}`,
        `Bedarf: ${needs.join(", ") || "–"}`,
        "",
        data.message || "",
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Angehöriger:</strong> ${data.relation || "–"}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>E-Mail:</strong> ${data.email || "–"}</p>
        <p><strong>Pflegegrad:</strong> ${data.careLevel || "–"}</p>
        <p><strong>Kontaktweg:</strong> ${data.preferredContact || "–"}</p>
        <p><strong>Uhrzeit:</strong> ${data.preferredTime || "–"}</p>
        <p><strong>Sprache:</strong> ${data.language || "–"}</p>
        <p><strong>Bedarf:</strong> ${needs.join(", ") || "–"}</p>
        ${data.message ? `<hr/><p>${data.message.replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    })
  } catch (err) {
    console.error("[consultation] sendMail error:", err)
    return { ok: false, message: "Fehler beim Senden. Bitte rufen Sie uns an." }
  }

  return { ok: true }
}

