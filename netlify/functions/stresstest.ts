import type { Handler } from '@netlify/functions'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FREQUENCY_LABELS = ['Aldrig', 'Næsten aldrig', 'Ind imellem', 'Ret ofte', 'Meget ofte']

const QUESTIONS = [
  { short: 'Oprevet over noget uventet', full: 'Hvor ofte inden for den sidste måned er du blevet oprevet over noget, der skete uventet?' },
  { short: 'Ude af stand til at kontrollere de vigtige ting', full: 'Hvor ofte inden for den sidste måned har du følt, at du har været ude af stand til at kontrollere de betydningsfulde ting i dit liv?' },
  { short: 'Nervøs og stresset', full: 'Hvor ofte inden for den sidste måned har du følt dig nervøs og "stresset"?' },
  { short: 'Sikker på evner til at klare problemer', full: 'Hvor ofte inden for den sidste måned har du følt dig sikker på dine evner til at klare dine personlige problemer?' },
  { short: 'Tingene gik som ønsket', full: 'Hvor ofte inden for den sidste måned har du følt, at tingene gik som du ønskede?' },
  { short: 'Ikke kunne overkomme alt du skulle', full: 'Hvor ofte inden for den sidste måned har du oplevet, at du ikke kunne overkomme alt det du skulle?' },
  { short: 'I stand til at håndtere irriterende ting', full: 'Hvor ofte inden for den sidste måned har du været i stand til at håndtere ting, som irriterer dig?' },
  { short: 'Følte du havde styr på tingene', full: 'Hvor ofte inden for den sidste måned har du følt, at du havde styr på tingene?' },
  { short: 'Vred over ting du ikke havde indflydelse på', full: 'Hvor ofte inden for den sidste måned er du blevet vred over ting, du ikke havde indflydelse på?' },
  { short: 'Vanskeligheder hobede sig op', full: 'Hvor ofte inden for den sidste måned har du følt, at vanskelighederne hobede sig så meget op, at du ikke kunne klare dem?' },
]

function buildHtmlEmail(params: URLSearchParams): string {
  const navn = params.get('navn') ?? ''
  const email = params.get('email') ?? ''
  const telefon = params.get('telefon') ?? ''
  const booking = params.get('booking') === '1'
  const nyhedsbrev = params.get('nyhedsbrev') === '1'
  const score = params.get('score') ?? ''

  const answers = QUESTIONS.map((q) => params.get(q.short) ?? '')

  const colHeaders = FREQUENCY_LABELS.map(
    (l) => `<th style="padding:6px 10px;font-size:12px;color:#555;font-weight:600;text-align:center;white-space:nowrap;">${l}</th>`
  ).join('')

  const rows = QUESTIONS.map((q, i) => {
    const selected = answers[i]
    const cells = FREQUENCY_LABELS.map((label) => {
      const isSelected = label === selected
      return `<td style="padding:8px 10px;text-align:center;font-size:14px;color:${isSelected ? '#462b58' : '#ccc'};">${isSelected ? 'X' : ''}</td>`
    }).join('')
    return `<tr style="border-bottom:1px solid #eee;">
      <td style="padding:8px 12px;font-size:13px;color:#333;max-width:380px;">${i + 1}) ${q.full}</td>
      ${cells}
    </tr>`
  }).join('')

  const checkboxLines = [
    booking ? `<p style="margin:4px 0;">✓ Jeg vil gerne indsende mit resultat og booke en gratis afklarende samtale</p>` : null,
    nyhedsbrev ? `<p style="margin:4px 0;">✓ Jeg accepterer, at min mailadresse bliver gemt, så jeg kan få nyheder om kommende events – Du bliver ikke spammet ♡</p>` : null,
  ].filter(Boolean).join('')

  return `<!DOCTYPE html>
<html lang="da">
<body style="font-family:Arial,sans-serif;color:#333;max-width:780px;margin:0 auto;padding:20px;">
  <h2 style="color:#462b58;margin-bottom:20px;">Stresstest resultat</h2>
  <p style="margin:4px 0;"><strong>Navn:</strong> ${navn}</p>
  <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  ${telefon ? `<p style="margin:4px 0;"><strong>Telefonnummer:</strong> ${telefon}</p>` : ''}
  ${checkboxLines}
  <p style="margin:12px 0;font-weight:bold;font-size:16px;">${score}</p>
  <table style="border-collapse:collapse;width:100%;margin-top:16px;font-family:Arial,sans-serif;">
    <thead>
      <tr style="border-bottom:2px solid #462b58;">
        <th style="padding:6px 12px;text-align:left;font-size:12px;color:#555;font-weight:600;"></th>
        ${colHeaders}
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`
}

function buildTextEmail(params: URLSearchParams): string {
  const navn = params.get('navn') ?? ''
  const email = params.get('email') ?? ''
  const telefon = params.get('telefon') ?? ''
  const booking = params.get('booking') === '1'
  const nyhedsbrev = params.get('nyhedsbrev') === '1'
  const score = params.get('score') ?? ''

  return [
    `Navn: ${navn}`,
    `Email: ${email}`,
    telefon ? `Telefonnummer: ${telefon}` : null,
    booking ? 'Jeg vil gerne indsende mit resultat og booke en gratis afklarende samtale' : null,
    nyhedsbrev ? 'Jeg accepterer, at min mailadresse bliver gemt, så jeg kan få nyheder om kommende events' : null,
    score,
    '',
    ...QUESTIONS.map((q, i) => `${i + 1}) ${q.full}\n   → ${params.get(q.short) ?? '?'}`),
  ].filter((l) => l !== null).join('\n')
}

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const params = new URLSearchParams(event.body ?? '')

  if (params.get('website')) {
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  }

  const navn = params.get('navn') ?? ''
  const email = params.get('email') ?? ''
  const score = params.get('score') ?? 'Resultat'

  if (!navn || !email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Navn og email er påkrævet' }) }
  }

  try {
    await resend.emails.send({
      from: 'noreply@skyf.dk',
      to: 'birgitte@skyf.dk',
      subject: `Stresstest resultat fra ${navn} – ${score}`,
      html: buildHtmlEmail(params),
      text: buildTextEmail(params),
      replyTo: email,
    })
    return { statusCode: 200, body: JSON.stringify({ success: true }) }
  } catch (err) {
    console.error('Resend fejl:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Email kunne ikke sendes' }) }
  }
}
