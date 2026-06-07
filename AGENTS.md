# AGENTS.md — openschooldesk-web

> Autoritative Kontextdatei für KI-Coding-Agents (Jules, Claude Code u.a.).
> Vollständig lesen, bevor Code angefasst wird.

---

## Was dieses Repo ist

**openschooldesk-web** ist die Marketing-Website von openschooldesk —
einer Open-Source-Plattform, die UCS@school als zentrales Identitäts-Backend
nutzt und Lehrkräften, Schulleitungen, IT-Administratoren und Eltern eine
einheitliche Oberfläche bietet.

**Live:** https://openschooldesk.org  
**Blog:** https://openschooldesk.org/blog/ (separates Repo: openschooldesk-blog)  
**Lizenz:** AGPLv3

---

## Tech Stack

| Schicht | Technologie |
|---|---|
| Framework | React 19 + Vite 8 |
| Sprache | TypeScript 6 (strict) |
| Styling | Globales CSS (`src/index.css`) — kein Tailwind mehr |
| Fonts | Work Sans (Headlines), Inter (Body) via Google Fonts |
| Icons | Material Symbols Outlined via Google Fonts CDN |
| Build | `npm run build` → `dist/` |
| Deploy | pscp → `/var/www/openschooldesk-web/dist/` auf Ubuntu-Server |
| Webserver | nginx mit Certbot/Let's Encrypt (openschooldesk.org) |

---

## Repo-Struktur

```
openschooldesk-web/
├── public/
│   └── favicon.svg            ← Indigo-Monogramm (kein Blitz)
├── src/
│   ├── assets/                ← Logos + verarbeitete Hero-JPEGs
│   ├── components/
│   │   ├── nav.tsx            ← Sticky Header + Audience-Switcher (Segmented Pill)
│   │   ├── contact.tsx        ← Kontaktformular (POST /api/contact)
│   │   ├── footer.tsx         ← Footer (dark-Variante für IT-Seite)
│   │   ├── photo-slot.tsx     ← CSS-Gradient-Platzhalter mit SVG-Szenen
│   │   ├── page-teachers.tsx  ← Lehrkräfte-Seite
│   │   ├── page-leadership.tsx← Schulleitung-Seite
│   │   ├── page-it.tsx        ← IT & Träger-Seite (dark shell)
│   │   └── page-parents.tsx   ← Familien-Seite
│   ├── App.tsx                ← Hash-Routing + Audience-State
│   ├── index.css              ← Komplettes Design-System (Quelle der Wahrheit)
│   └── main.tsx
├── server/                    ← Express-Backend für Kontaktformular (nodemailer)
├── public/
│   ├── favicon.svg            ← Hexagon-Ring auf Logo-Blau (#2563EB)
│   ├── logo-wordmark.png      ← Fester Pfad für statische Seiten (kein Build-Hash)
│   ├── sitemap.xml            ← Alle URLs inkl. Blog-Artikel
│   ├── robots.txt
│   ├── ueber-uns/             ← Standalone HTML-Seite + team.jpg
│   ├── impressum/             ← Standalone HTML-Seite
│   └── datenschutz/           ← Standalone HTML-Seite
├── design-reference/          ← Originale Design-Referenz — gitignored, nicht deployen
│   └── marketing-web/         ← Vollständige Referenz in plain React/Babel
├── index.html                 ← Google Fonts + Material Symbols geladen hier
└── AGENTS.md                  ← Diese Datei
```

---

## Audience-Routing (Hash-basiert)

| Hash | Zielgruppe | Shell |
|---|---|---|
| `#/` | Lehrkräfte (Standard) | Hell / Warm |
| `#/leitung` | Schulleitung | Hell / Warm |
| `#/it` | IT & Träger | **Dunkel** |
| `#/eltern` | Familien | Hell / Warm |

Die IT-Seite (`audience === 'it'`) aktiviert `.shell-dark` auf dem Root-Div —
CSS-Kaskade verändert damit alle Kind-Elemente (Cards, Footer etc.).

---

## Design-System (`src/index.css`)

**Surfaces:**
- Warm Cream: `#FDFBF7` / `#F8F1E4` (`.section-cream`)
- Dark Shell: `#08080E` / `#0F172A`
- Hairline: `rgba(241, 233, 218, 0.7)`

**Primärfarbe:** Indigo `#4F46E5` (Hover `#4338CA`) — alle CTAs, Links, aktiver Switcher  
**Amber** `#B45309` — nur Warn-/Problem-Kontexte  
**Grün** `#065F46` / `#ECFDF5` — nur Erfolgs-States

**Typografie:**
- `.h-display` → Work Sans, 56 px, 700
- `.h-headline` → Work Sans, 36 px, 600
- `.h-md` → Work Sans, 22 px, 600
- `.body-lg` → Inter, 19 px
- `.body` → Inter, 16 px

**Spacing:** 8 px-Grid. Button-Radius: 6 px. Card-Radius: 14 px.

CSS-Klassen aus `index.css` direkt in JSX verwenden — **kein Tailwind**.

---

## Kontaktformular (kritisch — Logik nie verändern)

`src/components/contact.tsx` POSTet an `/api/contact` (Express Port 3001):

- Honeypot `b_website` (verstecktes Input fängt Bots)
- **Silent-Error:** Bei Netzwerkfehler trotzdem `status = 'success'`
- Per-Audience Headline + Subline kommen als Props aus `App.tsx` (`contactCopy`)
- Backend `server/` bleibt unverändert

---

## Fotos / Assets

Verarbeitungs-Pipeline (Python/Pillow):
1. Watermark entfernen (Gradient-Patch über die Ecke)
2. Auf 4:3 zuschneiden (Motiv zentrieren)
3. 1200 × 900 px JPEG, quality 88

Fertige Dateien in `src/assets/`:
- `hero-teacher.jpg` — Lehrkräfte Hero
- `hero-leadership.jpg` — Schulleitung Hero
- `hero-parents.jpg` — Familien Hero
- `dsgvo-lock.jpg` — EU-Schloss (Elternseite, Datenschutz-Abschnitt)
- `schulbild-morgens.jpg` / `-unterricht.jpg` / `-nachmittag.jpg` — Story-Strip
- `author-ahlbrecht.jpg` / `author-schauer.jpg` — Blog-Autoren-Fotos (400×400)
- `hero-it.jpg` — IT-Seite (vorhanden aber nicht in Verwendung, PhotoSlot aktiv)

Quell-PNGs (Originale) sind per `.gitignore` ausgeschlossen.
Neue Fotos: erst Python-Skript (Vorlage aus Git-History), dann einsetzen.

---

## Deploy-Workflow

```bash
# 1. Bauen
npm run build

# 2. Geänderte Dateien hochladen (Hash im Dateinamen aus dist/assets/ ablesen)
pscp -pw 'PASSWORT' dist/assets/NEUE-DATEI.js root@45.76.85.213:/var/www/openschooldesk-web/dist/assets/
pscp -pw 'PASSWORT' dist/index.html            root@45.76.85.213:/var/www/openschooldesk-web/dist/

# 3. nginx neu laden
plink -batch -pw 'PASSWORT' root@45.76.85.213 "nginx -s reload"
```

**Server:** `45.76.85.213` · **User:** `root`  
Credentials niemals committen.

**nginx-Konfiguration:** `/etc/nginx/sites-enabled/openschooldesk`  
- `/blog/` → `/var/www/openschooldesk-blog/` (Astro-Blog)
- `/api` → Proxy zu `localhost:3001` (Kontaktformular-Backend)
- `/` → Marketing-SPA mit `try_files … /index.html`

---

## Coding-Regeln

- TypeScript strict, kein `any`, keine unbegründeten `as`-Casts
- Named exports only (`export const Foo`, nie `export default function()`)
- Dateinamen: kebab-case (`page-teachers.tsx`)
- Komponentennamen: PascalCase (`PageTeachers`)
- Keine deutschen Umlaute in Variablen-/Funktionsnamen (`ae/oe/ue`)
- Alle UI-Texte auf Deutsch, formelles „Sie", keine Emojis
- Kein Analytics, kein Tracking, keine Drittanbieter-Skripte außer Google Fonts
- WCAG 2.1 AA: Focus-Ringe sichtbar (`outline: 2px solid #4F46E5`),
  `aria-hidden="true"` auf dekorative Icons, `role="tablist"` auf Switcher

## Was Agents NICHT tun sollen

- Tailwind-Klassen verwenden (wurde entfernt)
- `server/` anfassen
- Honeypot oder Silent-Error im Kontaktformular ändern
- `design-reference/` verändern (Read-only)
- Neue npm-Abhängigkeiten ohne triftigen Grund
- Secrets/Passwörter committen

---

## Statische Seiten (standalone HTML)

`/ueber-uns/`, `/impressum/`, `/datenschutz/` sind eigenständige HTML-Dateien
in `public/`, kein React. Sie teilen das Farbschema mit der Hauptseite und
referenzieren `/logo-wordmark.png` (fester Pfad) und `/favicon.svg`.

---

*Zuletzt aktualisiert: Juni 2026*
