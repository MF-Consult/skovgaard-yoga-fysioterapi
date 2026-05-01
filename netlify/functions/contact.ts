import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

function buildHtmlEmail(navn: string, email: string, telefon: string, kategori: string, besked: string): string {
  const rows = [
    { label: 'Navn', value: navn },
    { label: 'E-mail', value: `<a href="mailto:${email}" style="color:#462b58;">${email}</a>` },
    telefon ? { label: 'Telefon', value: `<a href="tel:${telefon}" style="color:#462b58;">${telefon}</a>` } : null,
    kategori ? { label: 'Kategori', value: kategori } : null,
  ]
    .filter(Boolean)
    .map(
      (r) => `<tr>
        <td style="padding:10px 16px;font-size:13px;color:#888;font-weight:600;white-space:nowrap;vertical-align:top;width:110px;">${r!.label}</td>
        <td style="padding:10px 16px;font-size:14px;color:#2d2d2d;vertical-align:top;">${r!.value}</td>
      </tr>`
    )
    .join('')

  const beskedBlock = besked
    ? `<div style="margin:24px 0 0;padding:20px 24px;background:#fdfaf7;border-left:4px solid #462b58;border-radius:0 8px 8px 0;">
        <p style="margin:0 0 8px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#888;">Besked</p>
        <p style="margin:0;font-size:14px;color:#2d2d2d;line-height:1.7;white-space:pre-wrap;">${besked}</p>
      </div>`
    : ''

  return `<!DOCTYPE html>
<html lang="da">
<body style="margin:0;padding:0;background:#f4f0f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(70,43,88,0.10);">

        <!-- Header -->
        <tr>
          <td style="background:#462b58;padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#d4bfea;">Ny henvendelse</p>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;font-style:italic;">Skovgaard Yoga- &amp; Fysioterapi</h1>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="padding:24px 16px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:0 32px 32px;">
            ${beskedBlock}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#fdfaf7;padding:16px 32px;border-top:1px solid #ede8f5;">
            <p style="margin:0;font-size:12px;color:#aaa;">Svar direkte på denne mail for at kontakte ${navn}.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const params = new URLSearchParams(event.body ?? '')
  const navn = params.get('navn') ?? ''
  const email = params.get('email') ?? ''
  const telefon = params.get('telefon') ?? ''
  const kategori = params.get('kategori') ?? ''
  const besked = params.get('besked') ?? ''

  if (!navn || !email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Navn og email er påkrævet' }) }
  }

  const textBody = [
    `Navn: ${navn}`,
    `Email: ${email}`,
    telefon ? `Telefon: ${telefon}` : null,
    kategori ? `Kategori: ${kategori}` : null,
    besked ? `\nBesked:\n${besked}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  try {
    await resend.emails.send({
      from: 'noreply@skyf.dk',
      to: 'mark@mfconsult.dk',
      subject: `Ny henvendelse fra ${navn}${kategori ? ` – ${kategori}` : ''}`,
      html: buildHtmlEmail(navn, email, telefon, kategori, besked),
      text: textBody,
      replyTo: email,
    })
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Resend fejl:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Email kunne ikke sendes' }) }
  }
}
