# Silverdale Mechanical Engineering — Website

Live website for **Silverdale Mechanical Engineering**, Auckland's trusted mechanics for cars, trucks, motorhomes, and heavy machinery.

## Overview

Silverdale Mechanical Engineering is a full-service mechanical workshop in Silverdale, Auckland NZ, servicing cars, trucks, motorhomes and heavy machinery (petrol + diesel, all makes). This repo is the static site (pure HTML/CSS/JS, no build tools) served via GitHub Pages at the live domain. Recent work: 8 SEO service pages + services landing page, SEO foundation (JSON-LD, sitemap/robots, llms.txt), and suburb landing pages for the Hibiscus Coast catchment.

## Quick Links

| Link | URL |
|---|---|
| Production | https://silverdalemechanical.com |
| Services landing (production) | https://silverdalemechanical.com/services/ |
| Repo | https://github.com/adaptagency/silverdalemechanical |

## Status

**✅ Live (production)** — 8 service pages + SEO foundation merged to `main` and deployed to `silverdalemechanical.com`; client reviewed and approved.

## Active Tasks

- [x] 8 service pages (diesel, engine rebuilds, COF/WOF, mobile on-site, hydraulics, plant/machinery, motorhome/coach, pre-purchase) + `services/index.html`
- [x] SEO foundation: JSON-LD `AutoRepair` (4.7/100 aggregate + 4 real reviews), `sitemap.xml`, `robots.txt`, `llms.txt`
- [x] Responsive QA (10 pages × 3 viewports — no horizontal scroll)
- [x] **Responsive tap-target pass (10 Sep 2026)** — mobile nav hamburger + phone link enlarged from 18–36px to 44×44px hit areas; full grid re-verified live, zero overflow
- [x] Client review + approval → merge to `main` + production deploy (live)
- [x] Google Search Console: property verified (HTML file method) + sitemap submitted — 9 Sep 2026
- [x] GSC meta token replaced with real token (`google6cee01378f69f469`) — 9 Sep 2026
- [x] 8 area SEO landing pages under `areas/` (Orewa, Millwater, Whangaparaoa, Red Beach, Dairy Flat, Milldale, Hibiscus Coast, Silverdale) — "Mechanic in <area>" targeting
- [x] "Service Areas" dropdown submenu (desktop) + area links in mobile menu, area names linked in home copy (9 Sep 2026)
- [x] **Analytics (10 Sep 2026)** — Cloudflare Web Analytics live on all 20 public pages (beacon in `<head>`); cookieless, no consent banner; **daily 5am Auckland (= midnight VN) WhatsApp PDF report to Damien Harris** (+64 27 772 6956), cron `8136fc9445f7`. Deployed `2e9efbf`
- [ ] Refactor header/footer to common, responsive shared partial (Steve note, 31 Aug 2026)

## Recent Changes

| Date | Change |
|---|---|
| 10 Sep 2026 | **Analytics productionised** — daily Website Visits Snapshot PDF (CF Web Analytics, trailing 7-day window, top-pages table, "Page n of nn" pagination, Hal signature) auto-delivered to **Damien Harris** via WhatsApp at **5am Auckland (midnight VN)**, cron `8136fc9445f7`. Format reviewed & approved |
| 10 Sep 2026 | **Cloudflare Web Analytics installed** — beacon added to all 20 public pages (skipped GSC verification stub); cookieless, no GDPR consent needed. Commit `2e9efbf` |
| 10 Sep 2026 | Responsive tap-target fix — mobile nav hamburger toggle (was 36×28) and phone link (was 18×18 icon-only) both enlarged to 44×44px hit areas; deployed as `ea187a4`; verified live. Full viewport grid (7 pages × 1280/768/375) re-passed with zero horizontal overflow |
| 9 Sep 2026 | 8 area SEO landing pages live under `areas/` (Orewa, Millwater, Whangaparaoa, Red Beach, Dairy Flat, Milldale, Hibiscus Coast, Silverdale) + "Service Areas" dropdown submenu in nav + mobile menu; area names linked in home/services copy; sitemap + llms.txt updated |
| 9 Sep 2026 | Areas-serve targeting live: home + services landing + mobile on-site + sweep now name Orewa, Millwater, Milldale, Red Beach, Whangaparaoa, Dairy Flat + wider Hibiscus Coast/North Auckland (JSON-LD `areaServed` expanded, new "Areas We Serve" home section, llms.txt service-areas line). Deployed to production |
| 9 Sep 2026 | Google Search Console property verified + sitemap submitted. GSC verification file added (`google6cee01378f69f469.html`) |
| 9 Sep 2026 | Client reviewed and approved; merged to `main`, production live. README status updated from staging-pending to live. `PROJECT.md` at project root removed (duplicated this README) |
| 31 Aug 2026 | Built 8 service pages + services landing; wired home/service cards "More details"; made all footers consistent (8 links incl. Pre-Purchase); added SEO foundation (AutoRepair JSON-LD with real reviews, sitemap, robots, llms.txt, GSC placeholder) + full responsive pass; refreshed README to live build |
| 29 Aug 2026 | README corrected: live design is light blue/white (#0072BB), not the stale crimson/near-black |

## Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 31 Aug 2026 | Build individual service pages (SEO) on staging; production unchanged until client approval | Multi-page keyword surface + client review gate |
| 31 Aug 2026 | Add `llms.txt` + structured data for AI-search visibility | Future-proof organic/AI discovery at zero cost |
| 10 Sep 2026 | Add Cloudflare Web Analytics (free, cookieless, no consent needed) for client site tracking | Client wants visit/page tracking; easiest option given GitHub Pages + no cookie consent burden; Plausible available later if conversion goals needed |
| 31 Aug 2026 | Header/footer should be a common, responsive shared partial (future) | Prevents copy-paste drift (7 vs 8 footer links, wrong hrefs) |

## Tech Stack

| Service | Purpose |
|---|---|
| GitHub Pages | Production hosting (custom domain) |
| Web3Forms | Booking form submission (front-end, no backend) |
| GitHub | Source control |

## Repo Structure

```
├── index.html          # Home page (single-page SPA + JSON-LD + GSC meta)
├── style.css           # Stylesheet with responsive breakpoints
├── main.js             # Vanilla JS — animations, counters, forms, nav
├── services/           # 8 SEO service pages + services/index.html
├── areas/              # 8 area SEO landing pages (Orewa, Millwater, Whangaparaoa, Red Beach, Dairy Flat, Milldale, Hibiscus Coast, Silverdale)
├── sitemap.xml         # XML sitemap
├── robots.txt          # Robots + Sitemap reference
├── llms.txt            # AI-search visibility file
├── privacy-policy.html
├── terms-of-use.html
└── images/             # 21 locally-hosted AI-generated images
```

## Deployment

**Production:** push to `main`; GitHub Pages builds and serves `silverdalemechanical.com` automatically.

## Contacts

| Role | Name | Contact |
|---|---|---|
| Client | Silverdale Mechanical Engineering | admin@silverdalemechanical.com · (09) 426 8194 |
| Lead | Steve Hodgson | steve@adaptagency.com.au |

## Config & Secrets

- Web3Forms access key: in `main.js` (front-end submit)
- Google Search Console: verified — HTML file `google6cee01378f69f469.html` + meta token `google6cee01378f69f469` in index.html

## Known Issues

- `privacy-policy.html` + `terms-of-use.html` still use the older 7-link anchor footer (not yet aligned to the 8-link consistent footer; to be done with the shared-partial refactor)
- `.venv/` (python/playwright, ~156M) is untracked in the repo — deploys must exclude it
- Home phone in README/docs historically stale: live + verified is `(09) 426 8194` (not 4181)

## Testing

**Status:** ✅ Responsive QA passed — 10 pages × 3 viewports (desktop/tablet/mobile), zero horizontal scroll. SEO/JSON-LD validated. Client reviewed and approved; production live.

Manual client review checklist: Services nav scrolls to section; each card "More details" → its page; services landing shows 8 visible "More details"; footers consistent (8 links); booking forms work; JSON-LD passes Rich Results validation once production; GSC token replaced.