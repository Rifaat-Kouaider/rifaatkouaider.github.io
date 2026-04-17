# Brand Guidelines — Rifaat Kouaider Consulting

## Brand Overview

**Name:** Rifaat Kouaider  
**Positioning:** Healthcare IT consultant helping medical practices modernize their technology infrastructure.  
**Audience:** Medical practice owners, office managers, and healthcare executives making technology decisions.  
**Tone:** Confident, knowledgeable, direct. Not corporate-stiff — approachable but credible.

---

## Logo / Name Treatment

The wordmark is the name **Rifaat.** — set in Inter 800 (ExtraBold) with a blue period as the accent mark.

```
Rifaat.
       ↑ Electric Blue (#1B4FFF)
```

- Always use the blue period
- Never use an icon or symbol as a substitute
- Minimum size: 16px

---

## Color Palette

### Primary
| Name | Hex | Usage |
|---|---|---|
| Electric Blue | `#1B4FFF` | Primary CTA, links, accents, icons |
| Blue Hover | `#1440E0` | Hover state for blue elements |
| Blue Glow | `rgba(27, 79, 255, 0.12)` | Icon backgrounds, subtle highlights |

### Neutrals
| Name | Hex | Usage |
|---|---|---|
| Black | `#0A0A0A` | Page background, footer |
| Dark 1 | `#111111` | Section backgrounds (services, contact) |
| Dark 2 | `#1A1A1A` | Card hover states, form inputs |
| Dark 3 | `#252525` | Borders, dividers |
| Gray | `#888888` | Body text on dark backgrounds |
| Gray Light | `#BBBBBB` | Secondary text, subheadings on dark |
| Off White | `#F5F5F5` | Light section backgrounds (experience) |
| White | `#FFFFFF` | Primary text on dark, about section background |

### Section Color Map
| Section | Background | Text |
|---|---|---|
| Hero | `#0A0A0A` | White |
| About | `#FFFFFF` | `#0A0A0A` |
| Services | `#111111` | White |
| Experience | `#F5F5F5` | `#0A0A0A` |
| Contact | `#111111` | White |
| Footer | `#0A0A0A` | `#888888` |

---

## Typography

**Font Family:** [Inter](https://fonts.google.com/specimen/Inter) — Google Fonts  
**Fallback:** `sans-serif`

### Type Scale
| Role | Size | Weight | Usage |
|---|---|---|---|
| Hero H1 | `clamp(44px, 6.5vw, 84px)` | 900 | Hero headline |
| H2 | `42px` | 800 | Section headings |
| H2 Mobile | `32px` | 800 | Section headings on mobile |
| H3 | `20px` | 800 | Timeline titles |
| Service Title | `16px` | 700 | Service card headings |
| Body | `16px` | 400 | Paragraph text |
| Body Small | `14px` | 400 | Card descriptions, timeline body |
| Label / Tag | `11px` | 700 | Section tags (uppercase, 3px letter-spacing) |
| Nav | `12px` | 600 | Navigation links (uppercase, 1.5px letter-spacing) |
| Caption | `11–13px` | 600–700 | Dates, metadata |

### Letter Spacing
- Hero H1: `-2.5px`
- H2: `-1px` to `-1.5px`
- H3: `-0.5px`
- Section tags: `+3px` (uppercase)
- Nav links: `+1.5px` (uppercase)
- Buttons: `+1.5px` (uppercase)

---

## Spacing System

Based on an 8px base unit.

| Token | Value | Usage |
|---|---|---|
| `xs` | `8px` | Tight gaps, icon padding |
| `sm` | `16px` | Form gaps, small margins |
| `md` | `24px` | Card padding elements |
| `lg` | `40px` | Nav gaps, stat spacing |
| `xl` | `56–64px` | Section header bottom margin |
| `2xl` | `80–88px` | Grid gaps |
| `3xl` | `120px` | Section vertical padding |

---

## Layout

- **Max content width:** `1160px`
- **Container padding:** `40px` (desktop), `24px` (mobile)
- **Breakpoints:**
  - Desktop → Tablet: `960px`
  - Tablet → Mobile: `768px`
  - Mobile Small: `480px`

---

## Components

### Buttons

Three variants — all uppercase, `13px`, `700` weight, `1.5px` letter-spacing, `4px` border-radius.

| Variant | Background | Border | Text | Use |
|---|---|---|---|---|
| `btn-primary` | `#1B4FFF` | `#1B4FFF` | White | Primary CTA |
| `btn-secondary` | Transparent | `rgba(255,255,255,0.25)` | White | Secondary CTA on dark |
| `btn-dark` | `#1B4FFF` | `#1B4FFF` | White | CTA on light backgrounds |

All buttons: `14px 32px` padding, `translateY(-2px)` on hover.

---

### Section Tag

Small label above section headings.

```
HEALTHCARE IT CONSULTING
```

- Font: `11px`, `700`, uppercase, `3px` letter-spacing
- Color: `#1B4FFF`
- No background

---

### Service Cards

- Background: `#111111`
- Hover: `#1A1A1A`
- Padding: `36px`
- Icon container: `46x46px`, `rgba(27,79,255,0.12)` background, `4px` radius
- Icon size: `18px`, color `#1B4FFF`
- Title: `16px / 700`
- Description: `14px / 400`, color `#888888`
- Animate in: `opacity 0 → 1`, `translateY(24px → 0)`, staggered `70ms` delay per card

---

### Timeline

- Left border: `2px`, blue gradient fading to transparent
- Dot: `12px` circle, `#1B4FFF`, with offset ring matching section background
- Date: `11px`, `700`, uppercase, `2px` letter-spacing, `#1B4FFF`
- Title: `20px`, `800`, letter-spacing `-0.5px`
- Company: `13px`, `600`, uppercase, `1px` letter-spacing, `#999`
- Body: `14px`, color `#555`
- Animate in: `translateX(-20px → 0)`, staggered `90ms` per item

---

### Navigation

- Transparent on load → `rgba(10,10,10,0.95)` + `backdrop-filter: blur(12px)` on scroll
- Bottom border `#252525` appears on scroll
- Active link: `#FFFFFF`
- Inactive links: `#BBBBBB`
- CTA button in nav: `#1B4FFF` background

---

## Scroll Animations

Two animation patterns used across the site:

**Fade Up** (`.fade-up`) — general sections, headings
- `opacity: 0 → 1`, `translateY(32px → 0)`
- Duration: `0.65s ease`

**Slide In Left** (`.timeline-item`) — experience timeline
- `opacity: 0 → 1`, `translateX(-20px → 0)`
- Duration: `0.55s ease`, `90ms` stagger

All animations triggered by `IntersectionObserver` with `threshold: 0.08` and `rootMargin: 0px 0px -40px 0px`. Elements are unobserved after first trigger (animate once only).

---

## Imagery

- Profile photo: square crop, natural/professional setting, neutral background
- Style: candid but polished — not a traditional studio headshot
- Treatment: slight `grayscale(20%)` filter applied via CSS
- Blue border accent offset `20px` bottom-right via `::after` pseudo-element

---

## Voice & Tone

| Do | Don't |
|---|---|
| Direct and confident | Vague or jargon-heavy |
| Speak to business outcomes | Lead with technical specs |
| "Your practice" (client-focused) | "My clients" (self-focused) |
| Short, punchy sentences | Long-winded paragraphs |
| Active voice | Passive voice |

**Example:**
> ✅ "Navigate EMR migrations with a structured process that minimizes downtime and ensures staff adoption from day one."
>
> ❌ "EMR migration consulting services are provided to help healthcare organizations transition between electronic medical record systems."

---

## Contact Form

- Provider: [Formspree](https://formspree.io)
- Submission: AJAX (no page reload)
- Required fields: Name, Email, Message
- Optional: Organization, Service of Interest
- Success state: replaces form with confirmation message

---

*Last updated: April 2026*
