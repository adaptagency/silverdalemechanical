# Silverdale Mechanical Engineering — Website

Premium single-page website for **Silverdale Mechanical Engineering Limited**, Auckland's trusted mechanics for cars, trucks, motorhomes, and heavy machinery. Built to replace the legacy site at [silverdalemechanical.com](https://silverdalemechanical.com).

---

## Live Site

**GitHub Pages:** [https://adaptagency.github.io/silverdalemechanical](https://adaptagency.github.io/silverdalemechanical)

---

## Project Structure

```
silverdalemechanical/
├── index.html          # Single-page application
├── style.css           # Full stylesheet with responsive breakpoints
├── main.js             # Vanilla JS — animations, counters, forms, nav
├── favicon.svg         # SVG favicon
├── privacy-policy.html # Privacy policy page
├── terms-of-use.html   # Terms of use page
└── images/             # 21 locally-hosted AI-generated images (~5 MB total)
    ├── hero-truck-highway.jpg
    ├── workshop-interior.jpg
    ├── bg-services-dark.jpg
    ├── bg-parallax-quote.jpg
    ├── service-diesel-servicing.jpg
    ├── service-plant-machinery.jpg
    ├── service-engineering-welding.jpg
    ├── service-cof-wof-checks.jpg
    ├── service-mobile-onsite.jpg
    ├── service-motorhome.jpg
    ├── service-hydraulic-systems.jpg
    ├── service-engine-rebuilds.jpg
    ├── service-prepurchase-inspection.jpg
    ├── vehicle-heavy-trucks.jpg
    ├── vehicle-motorhomes.jpg
    ├── vehicle-excavators.jpg
    ├── vehicle-diesel-vehicles.jpg
    ├── vehicle-plant-equipment.jpg
    ├── vehicle-fleet-vehicles.jpg
    └── vehicle-cars-suv.jpg
```

No build tools. No frameworks. No dependencies. Pure HTML, CSS and JavaScript.
All images are stored locally in the repository — no external CDN dependencies.

---

## About the Business

Silverdale Mechanical Engineering Limited is a full-service mechanical workshop based in Silverdale, Auckland. The business services a wide range of vehicles including **cars and SUVs** alongside heavy commercial vehicles — covering petrol and diesel, all makes. Services span general mechanical repairs, diesel servicing, engine rebuilds, hydraulic systems, mobile on-site service, and COF/WOF compliance checks.

---

## Design

| Property             | Value                                                                 |
|---------------------|------------------------------------------------------------------------|
| Theme               | Dark premium industrial                                               |
| Primary colour      | Crimson `#E8231A`                                                     |
| Background          | Near-black `#0a0a0a`                                                  |
| Accent              | Silver / light grey                                                   |
| Fonts               | Bebas Neue · Barlow Condensed · Inter (Google Fonts)                  |
| Images              | AI-generated via `fal-ai/flux-2-pro`, hosted locally in `/images`     |
| Language            | British English (`lang=en-GB`)                                        |

### Design Principles

- **No horizontal dividers** — free-flowing, full-bleed section transitions
- Full-screen background images throughout
- Cinematic, editorial feel appropriate to a premium trade brand

---

## Sections

| #  | Section                                                      | ID         |
|----|--------------------------------------------------------------|------------|
| 1  | Fixed navbar (frosted glass, hamburger on mobile)            | `#navbar`  |
| 2  | Full-screen hero with Ken Burns zoom                         | `#hero`    |
| 3  | Scrolling service marquee strip                              | —          |
| 4  | About / intro split                                          | `#about`   |
| 5  | 9-card services grid                                         | `#services`|
| 6  | 7-tile vehicle types grid                                    | `#vehicles`|
| 7  | Parallax quote (Henry Ford)                                  | —          |
| 8  | Why Choose Us with animated stat counters                    | `#why-us`  |
| 9  | 4-step How It Works process                                  | —          |
| 10 | Two-tab booking section (Free Quote / Book a Service)        | `#booking` |
| 11 | Contact info + Get Directions + Google Maps embed            | `#contact` |
| 12 | 4-column footer                                              | —          |

---

## Services Covered

- **Car & SUV Servicing** (petrol & diesel, all makes)
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

Cars & SUVs · Heavy Trucks · Motorhomes · Excavators · Diesel Vehicles · Plant & Equipment · Fleet Vehicles

---

## Features

### Navigation
- Two CTAs in the navbar: **Free Quote** (outline) and **Book a Service** (filled red)
- Both link to `#booking` and auto-activate the corresponding form tab via `data-tab` attribute
- Hamburger mobile menu mirrors both CTAs
- Smooth-scroll with navbar-height offset

### Booking Section (Two Tabs)

The booking section hosts two separate forms behind a tab switcher:

| Tab                 | Audience             | Extra Fields                                   | Submit Label            |
|---------------------|----------------------|------------------------------------------------|------------------------|
| **Free Quote**      | New customers        | —                                              | Request Free Quote     |
| **Book a Service**  | Returning customers  | Registration number, Workshop or Mobile preference | Confirm Service Booking |

**Shared fields:** First name, last name, phone, email, vehicle type, service required, preferred date (native `<input type=date>`), preferred time slot, optional message.

Date input uses the browser's native date picker — no third-party calendar library is used.

- Client-side validation with inline error states and shake animation
- Success confirmation message on submit (auto-hides after 8 seconds)
- Currently front-end only — wire to a backend or service (e.g. Formspree, EmailJS, AutoHive API) as needed
- Deep-linking: any `<a href=#booking data-tab=quote|service>` anywhere on the page scrolls to the section and activates the correct tab

### Contact Section
- Phone, email, address, business hours
- **Get Directions** — inline link beneath address + standalone button, both opening Google Maps directions to Silverdale Mechanical Engineering in a new tab
- Embedded Google Maps iframe (Silverdale, Auckland)

### Interactivity
- Scroll-triggered reveal animations (Intersection Observer)
- Animated stat counters (counts up on scroll into view)
- Card tilt effect on hover (mouse-tracking, disabled on touch devices)
- Parallax background scrolling (desktop only, ≥ 900px)
- Sticky navbar with scroll-state frosted-glass effect

---

## Responsive Breakpoints

| Breakpoint | Layout change                                                        |
|------------|---------------------------------------------------------------------|
| ≤ 1100 px  | Services 2-column · footer 2-column                                 |
| ≤ 900 px   | Nav collapses to hamburger · sections stack · parallax disabled      |
| ≤ 700 px   | Services & vehicles 1-column · form rows stack · hero buttons stack |
| ≤ 480 px   | Compact typography · shorter images · tighter spacing · CTA buttons full-width |
| ≤ 360 px   | Minimum viable layout                                               |

---

## Authorised Partners

| Partner     | Role                                  |
|-------------|---------------------------------------|
| MTA Assured | Motor Trade Association membership    |
| Kobelco     | Authorised service agent              |
| Attach2     | Authorised agent                      |
| Caltex      | Preferred oils & lubricants           |

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

- [ ] **Form backend (EmailJS)** — connect booking forms to EmailJS to deliver quote and service submissions directly to the workshop inbox. Two forms (Free Quote and Book a Service) need separate email templates configured.
- [ ] **Analytics** — add privacy-friendly analytics (e.g. Plausible, Fathom)

---

## Contact

**Silverdale Mechanical Engineering Limited**
Silverdale, Auckland, New Zealand
📞 (09) 426 4181
✉️ info@silverdalemechanical.com

---

© 2025 Silverdale Mechanical Engineering Limited. All rights reserved.
