# Project Brief — Silverdale Mechanical Engineering Website

> **Status:** Active development  
> **Last updated:** 2025  
> **Repository:** [adaptagency/silverdalemechanical](https://github.com/adaptagency/silverdalemechanical)  
> **Live site:** [https://adaptagency.github.io/silverdalemechanical](https://adaptagency.github.io/silverdalemechanical)

---

## 1. Business Overview

**Client:** Silverdale Mechanical Engineering Limited  
**Location:** Silverdale, Auckland, New Zealand  
**Phone:** (09) 426 4181  
**Email:** info@silverdalemechanical.com  
**Workshop management:** [AutoHive](https://autohive.co.nz/)

Silverdale Mechanical is a full-service mechanical workshop serving both **general automotive customers and heavy/commercial vehicle customers**. Services cover petrol and diesel vehicles, all makes, ranging from passenger cars and SUVs through to heavy trucks, plant machinery, and fleet operations.

**Authorised partners:** MTA Assured, Kobelco (authorised service agent), Attach2 (authorised agent), Caltex (preferred oils & lubricants).

---

## 2. Site Goals

The website exists to:

- **Attract new customers** — position Silverdale Mechanical as the trusted, premium choice for car, truck, and machinery mechanical work in the Auckland region.
- **Drive enquiries** — convert visitors into quote requests and service bookings via clear, low-friction forms.
- **Serve returning customers** — provide a fast, familiar booking path for customers who already know the business.
- **Replace the legacy site** — present a modern, brand-strong digital presence that better reflects the workshop's capability and quality.

---

## 3. Target Audience

### Primary audiences

| Segment | Description |
|---------|-------------|
| General automotive | Car and SUV owners (petrol and diesel, all makes) seeking reliable local mechanical service |
| Heavy/commercial | Operators and owners of heavy trucks, motorhomes, excavators, diesel vehicles, plant equipment, and fleet vehicles |

### User intent
- Research and compare mechanical workshops
- Request a free quote
- Book a service (returning customers)
- Find contact details, address, and business hours
- Get directions to the workshop

---

## 4. Scope

### In scope
- Primary single-page marketing website (index.html)
- Booking system (two-tab: Free Quote / Book a Service)
- Contact section with Google Maps embed
- Privacy policy and Terms of Use pages
- All supporting assets (CSS, JavaScript, favicon, locally hosted images)

### Out of scope (planned future work)
- Te reo Māori / English bilingual toggle
- Form backend integration (EmailJS / Formspree / AutoHive API)
- Privacy-friendly analytics (Plausible / Fathom)
- Multi-language support

---

## 5. Key Pages / Sections

The site is a **single-page application** with the following sections:

| # | Section | Notes |
|---|---------|-------|
| 1 | Fixed navbar | Frosted glass on scroll, hamburger on mobile, two CTA buttons |
| 2 | Hero | Full-screen, Ken Burns zoom, primary headline + CTA |
| 3 | Service marquee | Scrolling strip of service keywords |
| 4 | About | Split-layout intro to the business |
| 5 | Services | 9-card grid covering all workshop services |
| 6 | Vehicle types | 7-tile grid: Cars & SUVs, Heavy Trucks, Motorhomes, Excavators, Diesel Vehicles, Plant & Equipment, Fleet Vehicles |
| 7 | Parallax quote | Henry Ford quote over full-bleed background image |
| 8 | Why Choose Us | Animated stat counters (years experience, jobs completed, etc.) |
| 9 | How It Works | 4-step process section |
| 10 | Booking | Two-tab form — Free Quote (new customers) / Book a Service (returning) |
| 11 | Contact | Address, phone, email, hours, Get Directions button, embedded Google Maps |
| 12 | Footer | 4-column layout with links, contact details, and legal pages |

---

## 6. Services Offered

1. **Car & SUV Servicing** — petrol & diesel, all makes
2. Diesel Servicing — oil & filter, top tunes, clutch, belts
3. Plant & Machinery — excavators, bulldozers, on-site work
4. Engineering & Welding — MIG, TIG, arc, fabrication
5. COF & WOF Pre-Checks
6. Mobile On-Site Service
7. Motorhome & Coach Servicing
8. Hydraulic Systems
9. Engine Rebuilds
10. Pre-Purchase Inspections

---

## 7. Technical Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 (`lang=en-GB`), semantic markup |
| Styling | Vanilla CSS with custom properties, no preprocessor |
| Interactivity | Vanilla JavaScript (no frameworks, no libraries) |
| Animations | CSS transitions + Intersection Observer API |
| Fonts | Google Fonts — Bebas Neue, Barlow Condensed, Inter |
| Images | AI-generated via `fal-ai/flux-2-pro`, locally hosted in `/images` |
| Hosting | GitHub Pages (main branch deployed automatically) |
| Build tools | None — zero dependencies, zero build step |
| CDNs | None — all assets self-contained |

---

## 8. Design System

### Colour palette

| Token | Hex | Use |
|-------|-----|-----|
| Primary | `#E8231A` | CTAs, highlights, accents |
| Background | `#0a0a0a` | Page background |
| Surface | `#111111` | Cards, sections |
| Accent silver | `#c0c0c0` | Secondary text, borders |
| Text primary | `#ffffff` | Headlines, body |
| Text muted | `#888888` | Captions, metadata |

### Typography

| Role | Font | Weight |
|------|------|--------|
| Headlines | Bebas Neue | 400 |
| Subheadings / labels | Barlow Condensed | 600 |
| Body / UI | Inter | 400–600 |

### Design principles
- **No horizontal dividers** — free-flowing, full-bleed section transitions
- Full-screen background images throughout
- Cinematic, editorial feel for a premium trade brand
- Dark industrial aesthetic with high-contrast red accents

### Responsive strategy
Mobile-first layout with five breakpoints:

| Breakpoint | Target |
|------------|--------|
| ≤ 360 px | Minimum viable layout |
| ≤ 480 px | Compact typography, full-width CTAs |
| ≤ 700 px | 1-column services and vehicles, stacked form rows |
| ≤ 900 px | Hamburger nav, parallax disabled |
| ≤ 1100 px | 2-column services and footer |

---

## 9. Booking System

Two distinct forms behind a tab switcher:

**Free Quote tab** (new customers)
- Fields: First name, Last name, Phone, Email, Vehicle type, Service required, Preferred date, Preferred time slot, Message
- Submit: *Request Free Quote*

**Book a Service tab** (returning customers)
- All shared fields plus: Registration number, Workshop or Mobile service preference
- Submit: *Confirm Service Booking*

Both forms use browser-native `<input type=date>` (no third-party calendar library), include client-side validation with shake animation on error, and show an 8-second auto-hiding success confirmation on submit. Forms are currently front-end only — backend integration (EmailJS / Formspree / AutoHive API) is a planned future item.

Deep-linking is supported: any `<a href=#booking data-tab=quote>` or `<a href=#booking data-tab=service>` link scrolls to the section and activates the correct tab.

---

## 10. Authorised Partners

| Partner | Role |
|---------|------|
| MTA Assured | Motor Trade Association membership |
| Kobelco | Authorised service agent |
| Attach2 | Authorised agent |
| Caltex | Preferred oils & lubricants |

---

## 11. Authorised Partners

Workshop management powered by **[AutoHive](https://autohive.co.nz/)**.

---

## 12. Planned Future Work

- [ ] **Bilingual te reo Māori toggle** — EN / MI language switcher in the navbar using `data-en` / `data-mi` attributes (requires professional translation review before implementation)
- [ ] **Form backend** — connect booking forms to EmailJS, Formspree or AutoHive API to deliver submissions to the workshop inbox
- [ ] **Analytics** — add privacy-friendly analytics (e.g. Plausible, Fathom)

---

*This brief should be reviewed and updated whenever the scope, services, or brand direction of the project changes.*
