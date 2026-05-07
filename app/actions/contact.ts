"use server"

import nodemailer from "nodemailer"

export type FormState = {
  ok: boolean
  message?: string
  fieldErrors?: Record<string, string>
  values?: Record<string, string>
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

const COLOR = {
  navy: "#162a52",
  navyDark: "#0f1f3d",
  sky: "#3d7fb8",
  accent: "#eef4f9",
  border: "#dfe7ef",
  text: "#1f2937",
  muted: "#6b7280",
  bg: "#f4f6f9",
}

function esc(v: string | undefined | null): string {
  if (v == null) return ""
  return String(v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

type Row = { label: string; value: string; isLink?: "email" | "tel" | "none" }

function renderRows(rows: Row[]): string {
  return rows
    .filter((r) => r.value && r.value !== "–")
    .map((r) => {
      const safe = esc(r.value)
      let valueHtml = safe.replace(/\n/g, "<br/>")
      if (r.isLink === "email") {
        valueHtml = `<a href="mailto:${safe}" style="color:${COLOR.sky};text-decoration:none;">${safe}</a>`
      } else if (r.isLink === "tel") {
        const tel = safe.replace(/[^+0-9]/g, "")
        valueHtml = `<a href="tel:${tel}" style="color:${COLOR.sky};text-decoration:none;">${safe}</a>`
      }
      return `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid ${COLOR.border};font-size:13px;color:${COLOR.muted};font-weight:600;text-transform:uppercase;letter-spacing:.04em;width:140px;vertical-align:top;font-family:Inter,Arial,sans-serif;">${esc(r.label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid ${COLOR.border};font-size:15px;color:${COLOR.text};font-family:Inter,Arial,sans-serif;">${valueHtml}</td>
        </tr>`
    })
    .join("")
}

function renderEmail({
  heading,
  subheading,
  rows,
  message,
}: {
  heading: string
  subheading: string
  rows: Row[]
  message?: string
}): string {
  const messageBlock = message
    ? `
    <tr>
      <td style="padding:24px 24px 8px;font-family:Inter,Arial,sans-serif;">
        <div style="font-size:13px;color:${COLOR.muted};font-weight:600;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;">Nachricht</div>
        <div style="background:${COLOR.accent};border-left:3px solid ${COLOR.sky};padding:14px 18px;border-radius:4px;font-size:15px;line-height:1.6;color:${COLOR.text};white-space:pre-wrap;">${esc(message).replace(/\n/g, "<br/>")}</div>
      </td>
    </tr>`
    : ""

  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <title>${esc(heading)}</title>
</head>
<body style="margin:0;padding:0;background:${COLOR.bg};font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${COLOR.bg};padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${COLOR.border};border-radius:14px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:${COLOR.navy};padding:24px 28px;color:#ffffff;font-family:Inter,Arial,sans-serif;">
              <div style="font-size:13px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#a9c4e0;">ElbLicht Pflegedienst</div>
              <div style="font-size:22px;font-weight:700;margin-top:6px;font-family:Georgia,'Times New Roman',serif;">${esc(heading)}</div>
              <div style="font-size:14px;color:#cfdcec;margin-top:4px;">${esc(subheading)}</div>
            </td>
          </tr>

          <!-- Data table -->
          <tr>
            <td style="padding:8px 8px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${renderRows(rows)}
              </table>
            </td>
          </tr>

          ${messageBlock}

          <!-- Footer -->
          <tr>
            <td style="padding:24px 28px;background:${COLOR.accent};color:${COLOR.muted};font-size:12px;line-height:1.6;font-family:Inter,Arial,sans-serif;border-top:1px solid ${COLOR.border};">
              Diese Nachricht wurde über das Formular auf
              <a href="https://pflegedienst-elblicht.de" style="color:${COLOR.navy};font-weight:600;text-decoration:none;">pflegedienst-elblicht.de</a>
              gesendet. Antworten Sie direkt auf diese E-Mail, um dem Absender zu antworten.
            </td>
          </tr>
        </table>
        <div style="color:${COLOR.muted};font-size:11px;margin-top:14px;font-family:Inter,Arial,sans-serif;">
          ElbLicht Pflegedienst · Clemens-Schultz-Straße 76 · 20359 Hamburg · ☎ 040 423 26 735
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`
}

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
    return { ok: false, fieldErrors: errors, values: data }
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[contact] SMTP_USER / SMTP_PASS missing in env")
    return {
      ok: false,
      message: "E-Mail-Konfiguration fehlt. Bitte rufen Sie uns an: 040 423 26 735",
      values: data,
    }
  }

  const subject = data.subject || "Allgemeine Anfrage"
  const html = renderEmail({
    heading: "Neue Kontaktanfrage",
    subheading: subject,
    rows: [
      { label: "Name", value: data.name },
      { label: "E-Mail", value: data.email, isLink: "email" },
      { label: "Telefon", value: data.phone || "", isLink: "tel" },
      { label: "Betreff", value: subject },
    ],
    message: data.message,
  })

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `Kontaktanfrage: ${subject}`,
      text: [
        `Name: ${data.name}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.phone || "–"}`,
        `Betreff: ${subject}`,
        "",
        data.message,
      ].join("\n"),
      html,
    })
  } catch (err) {
    console.error("[contact] sendMail error:", err)
    const detail = err instanceof Error ? err.message : String(err)
    return {
      ok: false,
      message: `Fehler beim Senden: ${detail}. Bitte rufen Sie uns an: 040 423 26 735`,
      values: data,
    }
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
    return { ok: false, fieldErrors: errors, values: data }
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[consultation] SMTP_USER / SMTP_PASS missing in env")
    return {
      ok: false,
      message: "E-Mail-Konfiguration fehlt. Bitte rufen Sie uns an: 040 423 26 735",
      values: data,
    }
  }

  const needs = formData.getAll("needs").map(String)
  const html = renderEmail({
    heading: "Neue Beratungsanfrage",
    subheading: data.name,
    rows: [
      { label: "Name", value: data.name },
      { label: "Angehöriger", value: data.relation || "" },
      { label: "Telefon", value: data.phone, isLink: "tel" },
      { label: "E-Mail", value: data.email || "", isLink: "email" },
      { label: "Pflegegrad", value: data.careLevel || "" },
      { label: "Kontaktweg", value: data.preferredContact || "" },
      { label: "Uhrzeit", value: data.preferredTime || "" },
      { label: "Sprache", value: data.language || "" },
      { label: "Bedarf", value: needs.join(", ") || "" },
    ],
    message: data.message || undefined,
  })

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
      html,
    })
  } catch (err) {
    console.error("[consultation] sendMail error:", err)
    const detail = err instanceof Error ? err.message : String(err)
    return {
      ok: false,
      message: `Fehler beim Senden: ${detail}. Bitte rufen Sie uns an: 040 423 26 735`,
      values: data,
    }
  }

  return { ok: true }
}
