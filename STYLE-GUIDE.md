# Style Guide — Skovgaard Yoga & Fysioterapi

> Living reference for the redesigned SKYF website. All values are derived directly from `index.html`. Update this document whenever a design decision is changed.

---

## 1. Brand Identity

**Name:** Skovgaard Yoga & Fysioterapi (abbrev. SKYF)  
**Tagline:** Fra hjerte til hjerte  
**Practitioner:** Birgitte Skovgaard  
**Core values:** Holistisk, nærværende, professionel, varm, tillidsfuld

---

## 2. Colour Palette

| Token | Hex | Usage |
|---|---|---|
| Plum (primary) | `#462b58` | CTAs, headings, icons, borders, focus rings |
| Plum mid | `#6b4488` | Gradient midpoint |
| Plum light | `#aa81c5` | Gradient end, tints, hover states |
| Nude | `#f7f3ef` | Section backgrounds (alternating) |
| Off-white | `#fdfaf7` | Body background, section backgrounds |
| Text dark | `#2d2d2d` | Primary body text |
| Text medium | `#6b7280` | Secondary body text, captions |
| Text light | `#9ca3af` | Placeholder text, meta |
| White | `#ffffff` | Cards, inputs, nav (scrolled) |

### Gradient

```css
background: linear-gradient(135deg, #462b58 0%, #6b4488 50%, #aa81c5 100%);
```

Used on: branded section backgrounds, CTA banners, Børnefysioterapi section.

### CSS Custom Properties

```css
:root {
  --brand-purple:        #462b58;
  --brand-gradient-end:  #aa81c5;
  --text-dark:           #2d2d2d;
  --off-white:           #fdfaf7;
}
```

---

## 3. Typography

### Font Families

| Role | Family | Import weight(s) |
|---|---|---|
| Display / Headings | Playfair Display | 400, 400 italic, 700 |
| Body / UI | Montserrat | 300, 400, 500, 600 |

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Type Scale

| Role | Font | Size | Weight | Style | Letter-spacing | Line-height |
|---|---|---|---|---|---|---|
| Hero H1 | Playfair Display | 5xl–7xl (clamp) | 700 | italic | — | tight |
| Section H2 | Playfair Display | 4xl–6xl | 700 | italic | — | tight |
| Card H3 | Playfair Display | 2xl | 700 | italic | — | — |
| Sub-heading H4 | Playfair Display | xl | 400 | italic | — | — |
| Overline / label | Montserrat | 10–11px | 600 | normal | 0.2–0.4em | — |
| Body | Montserrat | 14px (sm) | 400 | normal | — | 1.7 |
| Body large | Montserrat | 16–18px | 300–400 | normal / italic | — | relaxed |
| Nav links | Montserrat | 11px | 700 | normal | 0.2em | — |
| Button text | Montserrat | 10–11px | 600–700 | normal | 0.15–0.2em | — |

### Rules

- Headings are **always** Playfair Display, **bold italic** for personality.
- Never use Playfair Display for body copy or UI elements.
- Overlines (small labels above section titles) are always **ALL CAPS**, Montserrat 600, `letter-spacing: 0.3–0.4em`, muted colour (plum or gray-400).
- Body text uses Montserrat 400 at `line-height: 1.7` for readability.

---

## 4. Spacing & Layout

### Container

```css
max-width: none (Tailwind `container mx-auto`);
padding: 0 1.5rem; /* px-6 */
```

### Section Rhythm

| Context | Padding |
|---|---|
| Full sections | `py-24` (6rem) or `py-32` (8rem) |
| Hero | `100vh` |
| Card inner | `2.5rem` (p-10) |
| Content gap | `gap-8` to `gap-16` |

### Grid

- **Service cards:** `grid md:grid-cols-3 gap-8`
- **2-col feature:** `flex flex-col lg:flex-row gap-16`
- **Contact:** `grid lg:grid-cols-5 gap-12` (2 info + 3 form)
- **Process steps:** `grid md:grid-cols-4 gap-12`
- **Footer columns:** `grid md:grid-cols-3 gap-8`

Mobile-first: all grids collapse to single column below their breakpoint.

---

## 5. Components

### 5.1 Buttons

#### Primary

```css
background-color: #462b58;
color: white;
padding: 16px 36px;
text-transform: uppercase;
font-size: 0.75rem;       /* 12px */
letter-spacing: 0.15em;
font-weight: 600;
transition: all 0.3s ease;
border-radius: 0;          /* sharp corners — intentional */

/* Hover */
transform: translateY(-2px);
box-shadow: 0 10px 20px rgba(94, 58, 140, 0.2);
```

#### Secondary (pill outline)

```css
border: 1px solid rgba(255,255,255,0.4);  /* or border-purple-300 on light bg */
padding: 12px 32px;
border-radius: 9999px;
font-size: 11px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
transition: all 0.3s;

/* Hover (on dark bg) */
background: white;
color: #462b58;

/* Hover (on light bg) */
background: rgba(94,58,140,0.05);
```

#### Ghost / text-link

```css
border-bottom: 1px solid currentColor;
padding-bottom: 4px;
font-size: 11px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.1em;
transition: opacity 0.3s;

/* Hover */
opacity: 0.7;
```

---

### 5.2 Service Cards

```css
background: white;
padding: 2.5rem;
border-radius: 1rem;        /* rounded-2xl */
border: 1px solid rgba(94, 58, 140, 0.06);
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
transition: transform 0.3s ease, box-shadow 0.3s ease;

/* Hover */
transform: translateY(-4px);
box-shadow: 0 20px 40px rgba(94, 58, 140, 0.08);
```

Card anatomy (top to bottom):
1. **Number** — Playfair Display italic, 4xl, plum at 20% opacity
2. **Title** — Playfair Display bold italic, 2xl, plum
3. **Description** — Montserrat 400, sm, gray-500, leading-relaxed
4. **Arrow link** — 10px uppercase, plum, animating `→` on hover

---

### 5.3 Navigation

#### Desktop header (transparent / hero)

```css
position: fixed;
top: 0; left: 0; right: 0;
z-index: 50;
padding: 1.5rem 0;
/* Text + logo: white */
transition: all 0.4s ease-in-out;
```

#### Desktop header (scrolled)

```css
background-color: rgba(255, 255, 255, 0.98);
padding: 0.5rem 0;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.03);
/* Text + logo: dark */
```

#### Dropdown menu

```css
position: absolute;
top: calc(100% + 12px);
left: 50%;
transform: translateX(-50%);
background: white;
min-width: 200px;
padding: 1rem 0;
border-radius: 0.75rem;
box-shadow: 0 10px 40px rgba(0,0,0,0.08);
z-index: 200;

/* Trigger: hover or focus-within */
```

Dropdown item:
```css
display: block;
padding: 0.6rem 1.5rem;
font-size: 10px;
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.15em;
color: #462b58;

/* Hover */
background: #f7f3ef;
```

#### Mobile drawer

```css
/* Drawer panel */
position: fixed;
top: 0; right: 0;
width: min(320px, 85vw);
height: 100%;
background: white;
z-index: 100;
transform: translateX(100%);
transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
overflow-y: auto;
padding: 2rem 1.5rem;

/* Open state */
transform: translateX(0);

/* Backdrop */
position: fixed; inset: 0;
background: rgba(0,0,0,0.3);
backdrop-filter: blur(2px);
z-index: 99;
```

Mobile nav items: Playfair Display italic, plum, 1.3rem, `text-decoration: none`  
Ydelser accordion chevron rotates 180° when open.  
"Book tid" CTA: full-width, rounded-full pill at bottom of drawer.

---

### 5.4 Form Inputs

```css
border: 1px solid #e5e7eb;   /* gray-200 */
padding: 12px 16px;
font-size: 14px;
color: #374151;
border-radius: 0.5rem;        /* rounded-lg */
background: white;
transition: border-color 0.2s;

/* Focus */
outline: none;
border-color: #aa81c5;        /* purple-400 */
```

Labels: Montserrat 700, 10px, uppercase, `letter-spacing: 0.1em`, plum.

---

### 5.5 Testimonial Cards

```css
background: white;
padding: 2rem;
border-radius: 0.75rem;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
border: 1px solid #f9fafb;    /* gray-50 */
```

- Quote: Montserrat 400 italic, sm, gray-600, `leading-relaxed`
- Stars: `#facc15` (yellow-400), 10px
- Attribution: Montserrat 700, 10px, uppercase, `letter-spacing: 0.1em`, plum

---

### 5.6 Process Steps

```css
/* Circle */
width: 45px; height: 45px;
border: 1px solid #eee;
border-radius: 50%;
font-family: 'Playfair Display', serif;
font-size: 0.9rem;
color: #462b58;
background: white;

/* Connecting line (desktop only) */
position: absolute;
top: 22px; left: 0; right: 0;
height: 1px;
background: #eee;
```

---

### 5.7 Section Overlines

```
UPPERCASE · Montserrat 600 · 10px · letter-spacing: 0.3–0.4em
Colours used:
  - On light bg: text-gray-400 (#9ca3af)
  - On dark bg: white at 80% opacity
  - On nude bg: plum (#462b58)
```

---

## 6. Animation

### Scroll fade-in

```css
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays */
.fade-in-delay-1 { transition-delay: 0.1s; }
.fade-in-delay-2 { transition-delay: 0.2s; }
.fade-in-delay-3 { transition-delay: 0.3s; }
.fade-in-delay-4 { transition-delay: 0.4s; }
```

Triggered via `IntersectionObserver` at `threshold: 0.15`.

### Scroll indicator (hero)

```css
animation: bounce 2s infinite;
/* translateY 0 → -10px → -5px → 0 */
```

### Card hover

```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
/* hover: translateY(-4px) */
```

### Nav arrow (card links)

```css
/* .group-hover: translateX(+8px) */
transition: transform 0.2s ease;
```

### Mobile drawer

```css
transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
```

### Accordion (Ydelser mobile sub-menu)

```css
max-height: 0 → max-height: 400px;
overflow: hidden;
transition: max-height 0.35s ease;
```

---

## 7. Imagery & Photography

### Style

- **Mood:** Calm, meditative, warm, natural
- **Colour temperature:** Warm to neutral — avoid cold blue tones
- **Subjects:** Yoga practitioners, physiotherapy treatments, children playing/moving, water therapy, nature
- **Composition:** Spacious, breathing room, often single subject
- **Avoid:** Clinical / sterile stock imagery, busy backgrounds, harsh studio lighting

### Hero image

- Full-screen (100vh), darkened with `rgba(0,0,0,0.4) → rgba(0,0,0,0.2)` gradient overlay
- `background-size: cover; background-position: center`

### Section images

- `border-radius: 1.5rem` (rounded-3xl) for feature images
- Floating accent card (white, rounded-2xl, shadow-2xl) overlaid at `-bottom-6 -right-6` on desktop

### Image sources

Current: Unsplash (placeholder).  
Production: Replace with real photography of Birgitte and the clinic.

---

## 8. Voice & Tone

| Principle | Detail |
|---|---|
| Language | Danish, always |
| Address | Intimate "du" — never "De" |
| Personality | Warm, grounded, expert without being clinical |
| Spiritual register | Present but not abstract — concrete and reassuring |
| Headlines | Poetic, slightly philosophical ("Genfind roen i din krop") |
| Body copy | Short paragraphs, plain language, empathetic |
| CTAs | Action-oriented, never pushy ("Book tid", "Læs mere", "Tag afklaringstest") |
| Avoid | Jargon, bullet-point overload, cold/corporate tone |

---

## 9. Page Structure (sitemap)

```
index.html          ← Home (single-page scroll)
fysioterapi.html    ← Ydelse: Fysioterapi
boern.html          ← Ydelse: Børnefysioterapi
yoga.html           ← Ydelse: Yoga
stress.html         ← Ydelse: Stressforløb
konsulent.html      ← Ydelse: Ekstern konsulent
stresstest.html     ← External / independently coded (do not modify)
om.html             ← Om os
kontakt.html        ← Kontakt
```

---

## 10. Navigation Structure

### Desktop

```
[Logo]   Ydelser ▾   Stresstest   Om os   Kontakt   [Book tid →]
              ├ Fysioterapi
              ├ Børnefysioterapi
              ├ Yoga
              ├ Stressforløb
              └ Ekstern konsulent
```

### Mobile (slide-in drawer, right side)

```
                              [✕]

  Ydelser ▾  ← accordion toggle
    – Fysioterapi
    – Børnefysioterapi
    – Yoga
    – Stressforløb
    – Ekstern konsulent

  Stresstest    ← external, plain link
  Om os
  Kontakt

  ──────────────────
  [ Book tid ]      ← full-width pill CTA
```

---

## 11. Accessibility Checklist

- [ ] All images have descriptive `alt` text
- [ ] Colour contrast ratio ≥ 4.5:1 for body text (plum on white: ✓)
- [ ] Focus-visible styles on all interactive elements
- [ ] `aria-label` on icon-only buttons (hamburger, close)
- [ ] `aria-expanded` on accordion trigger and dropdown button
- [ ] `role="dialog"` and `aria-modal="true"` on mobile drawer
- [ ] Keyboard navigable (Escape closes drawer/dropdown)
- [ ] Skip-to-main-content link (recommended addition)

---

*Last updated: February 2026*
