"use server"

import nodemailer from "nodemailer"

export type BewerbenState = {
  ok: boolean
  message?: string
  fieldErrors?: Record<string, string>
  values?: Record<string, string>
}

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.trim())

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

const C = {
  navy: "#162a52",
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

function buildHtml(data: Record<string, string>): string {
  const rows = [
    { label: "Name", value: data.name },
    { label: "E-Mail", value: data.email },
    { label: "Telefon", value: data.phone || "–" },
    { label: "Stelle", value: data.stelle || "Initiativbewerbung" },
  ]
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 16px;border-bottom:1px solid ${C.border};font-size:13px;color:${C.muted};font-weight:600;text-transform:uppercase;letter-spacing:.04em;width:130px;vertical-align:top;font-family:Inter,Arial,sans-serif;">${esc(r.label)}</td>
        <td style="padding:10px 16px;border-bottom:1px solid ${C.border};font-size:15px;color:${C.text};font-family:Inter,Arial,sans-serif;">${esc(r.value)}</td>
      </tr>`,
    )
    .join("")

  const anschreiben = esc(data.anschreiben || "").replace(/\n/g, "<br/>")

  return `<!doctype html>
<html lang="de">
<head><meta charset="utf-8"/><title>Neue Bewerbung</title></head>
<body style="margin:0;padding:0;background:${C.bg};font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.bg};padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#fff;border:1px solid ${C.border};border-radius:14px;overflow:hidden;">
        <tr>
          <td style="background:${C.navy};padding:24px 28px;color:#fff;font-family:Inter,Arial,sans-serif;">
            <div style="font-size:13px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#a9c4e0;">ElbLicht Pflegedienst</div>
            <div style="font-size:22px;font-weight:700;margin-top:6px;font-family:Georgia,'Times New Roman',serif;">Neue Bewerbung</div>
            <div style="font-size:14px;color:#cfdcec;margin-top:4px;">${esc(data.stelle || "Initiativbewerbung")}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 8px 0;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              ${rows}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 24px 8px;font-family:Inter,Arial,sans-serif;">
            <div style="font-size:13px;color:${C.muted};font-weight:600;text-transform:uppercase;letter-spacing:.04em;margin-bottom:8px;">Anschreiben</div>
            <div style="background:${C.accent};border-left:3px solid ${C.sky};padding:14px 18px;border-radius:4px;font-size:15px;line-height:1.6;color:${C.text};">${anschreiben}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px;background:${C.accent};color:${C.muted};font-size:12px;line-height:1.6;font-family:Inter,Arial,sans-serif;border-top:1px solid ${C.border};">
            Diese Bewerbung wurde über das Formular auf
            <a href="https://pflegedienst-elblicht.de" style="color:${C.navy};font-weight:600;text-decoration:none;">pflegedienst-elblicht.de</a>
            eingereicht.
          </td>
        </tr>
      </table>
      <div style="color:${C.muted};font-size:11px;margin-top:14px;font-family:Inter,Arial,sans-serif;">
        ElbLicht Pflegedienst · Clemens-Schultz-Straße 76 · 20359 Hamburg · ☎ 040 423 26 735
      </div>
    </td></tr>
  </table>
</body>
</html>`
}

export async function submitBewerben(
  _prev: BewerbenState,
  formData: FormData,
): Promise<BewerbenState> {
  const data = Object.fromEntries(formData.entries()) as Record<string, string>
  const errors: Record<string, string> = {}

  if (!data.name || data.name.trim().length < 2) errors.name = "required"
  if (!data.email || !isEmail(data.email)) errors.email = "invalid"
  if (!data.anschreiben || data.anschreiben.trim().length < 10) errors.anschreiben = "required"
  if (data.consent !== "on") errors.consent = "required"

  if (Object.keys(errors).length > 0) {
    return { ok: false, fieldErrors: errors, values: data }
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("[bewerben] SMTP_USER / SMTP_PASS missing in env")
    return {
      ok: false,
      message: "E-Mail-Konfiguration fehlt. Bitte rufen Sie uns an: 040 560 69 787",
      values: data,
    }
  }

  const stelle = data.stelle || "Initiativbewerbung"
  const html = buildHtml(data)

  try {
    const transporter = createTransporter()
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `Bewerbung: ${stelle} – ${data.name}`,
      text: [
        `Stelle: ${stelle}`,
        `Name: ${data.name}`,
        `E-Mail: ${data.email}`,
        `Telefon: ${data.phone || "–"}`,
        "",
        "Anschreiben:",
        data.anschreiben,
      ].join("\n"),
      html,
    })
    return { ok: true }
  } catch (err) {
    console.error("[bewerben] sendMail error", err)
    return {
      ok: false,
      message: "Die Bewerbung konnte leider nicht gesendet werden. Bitte rufen Sie uns an: 040 560 69 787",
      values: data,
    }
  }
}
