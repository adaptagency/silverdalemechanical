# Silverdale Mechanical Engineering — Website

Premium single-page website for **Silverdale Mechanical Engineering Limited**, Auckland's heavy vehicle mechanical specialists. Built to replace the legacy site at [silverdalemechanical.com](https://silverdalemechanical.com).

---

## Live Preview

> Serve locally with any static file server — see [Running Locally](#running-locally) below.

---

## Project Structure

```
silverdalemechanical/
├── index.html        # Single-page application (766 lines)
├── style.css         # Full stylesheet with responsive breakpoints (1,287 lines)
├── main.js           # Vanilla JS — animations, counters, form, nav (265 lines)
└── favicon.svg       # SVG favicon
```

No build tools. No frameworks. No dependencies. Pure HTML, CSS and JavaScript.

---

## Design

| Property | Value |
|---|---|
| Theme | Dark premium industrial |
| Primary colour | Crimson `#E8231A` |
| Background | Near-black `#0a0a0a` |
| Accent | Silver / light grey |
| Fonts | Bebas Neue · Barlow Condensed · Inter (Google Fonts) |
| Images | AI-generated via `fal-ai/flux-2-pro` |
| Language | British English (`lang="en-GB"`) |

### Design Principles
- **No horizontal dividers** — free-flowing, full-bleed section transitions
- Full-screen background images throughout
- Cinematic, editorial feel appropriate to a premium trade brand

---

## Sections

| # | Section | ID |
|---|---|---|
| 1 | Fixed navbar (frosted glass, hamburger on mobile) | `#navbar` |
| 2 | Full-screen hero with Ken Burns zoom | `#hero` |
| 3 | Scrolling service marquee strip | — |
| 4 | About / intro split | `#about` |
| 5 | 9-card services grid | `#services` |
| 6 | 6-tile vehicle types grid | `#vehicles` |
| 7 | Parallax quote (Henry Ford) | — |
| 8 | Why Choose Us with animated stat counters | `#why-us` |
| 9 | 4-step How It Works process | — |
| 10 | Booking form (date / time picker) | `#booking` |
| 11 | Contact info + Google Maps embed | `#contact` |
| 12 | 4-column footer | — |

---

## Services Covered

- Diesel Servicing (oil & filter, top tunes, clutch, belts)
- Plant & Machinery (excavators, bulldozers, on-site)
- Engineering & Welding (MIG, TIG, arc, fabrication)
- COF & WOF Pre-Checks
- Mobile On-Site Service
- Motorhome & Coach Servicing
- Hydraulic Systems
- Engine Rebuilds
- Pre-Purchase Inspections

## Vehicle Types

Heavy Trucks · Motorhomes · Excavators · Diesel Vehicles · Plant & Equipment · Fleet Vehicles

---

## Features

### Interactivity
- Scroll-triggered reveal animations (Intersection Observer)
- Animated stat counters (counts up on scroll into view)
- Card tilt effect on hover (mouse-tracking)
- Parallax background scrolling
- Sticky navbar with scroll-state glass effect
- Hamburger mobile menu with smooth open/close

### Booking Form
- Fields: First name, last name, phone, email, vehicle type, service type, preferred date, preferred time, message
- Client-side validation with inline error states
- Success confirmation message on submit
- Currently front-end only — wire to a backend or service (e.g. Formspree, EmailJS, AutoHive API) as needed

### Google Maps
Embedded iframe pinned to Silverdale Mechanical Engineering, Silverdale, Auckland.

---

## Responsive Breakpoints

| Breakpoint | Layout change |
|---|---|
| ≤ 1100px | Services 2-column · footer 2-column |
| ≤ 900px | Nav collapses to hamburger · sections stack · parallax disabled |
| ≤ 700px | Services & vehicles 1-column · form rows stack · hero buttons stack |
| ≤ 480px | Compact typography · shorter images · tighter spacing |
| ≤ 360px | Minimum viable layout |

---

## Authorised Partners

| Partner | Role |
|---|---|
| **MTA Assured** | Motor Trade Association membership |
| **Kobelco** | Authorised service agent |
| **Attach2** | Authorised agent |
| **Caltex** | Preferred oils & lubricants |

Workshop management powered by **[AutoHive](https://autohive.co.nz/)**.

---

## Running Locally

**Python (built-in):**
```bash
python3 -m http.server 3000
# → http://localhost:3000
```

**Node.js:**
```bash
npx serve .
# or
npx http-server -p 3000
```

**VS Code:** Install the _Live Server_ extension and click **Go Live**.

---

## Planned / Future Work

- [ ] **Bilingual te reo Māori toggle** — EN / MI language switcher in the navbar using `data-en` / `data-mi` attributes (requires professional translation review)
- [ ] **Form backend** — connect booking form to EmailJS, Formspree or AutoHive API
- [ ] **Deployment** — publish to Cloudflare Pages or Netlify for production hosting
- [ ] **Analytics** — add privacy-friendly analytics (e.g. Plausible, Fathom)

---

## Contact

**Silverdale Mechanical Engineering Limited**
Silverdale, Auckland, New Zealand
📞 (09) 426 4181
✉️ info@silverdalemechanical.com

---

© 2025 Silverdale Mechanical Engineering Limited. All rights reserved.
