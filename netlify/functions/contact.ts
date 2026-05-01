import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  const emailBody = [
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
      to: 'birgitte@skyf.dk',
      subject: `Ny henvendelse fra ${navn}`,
      text: emailBody,
      replyTo: email,
    })
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Resend fejl:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Email kunne ikke sendes' }) }
  }
}
