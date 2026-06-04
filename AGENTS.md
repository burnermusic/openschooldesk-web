# AGENTS.md – openschooldesk-poc

> This file is the authoritative context for Jules and all AI coding agents.
> Read this completely before touching any code. Never deviate from these rules.

---

## Project Overview

**openschooldesk** is an open-source Flutter app and web platform as a native extension for UCS@school by Univention. Goal: replace a School Server from Microsoft, or any other licensed system like IServ, sdui, logodidact, and others,   with a sovereign, GDPR-compliant, beautiful alternative.

**Core Philosophy:**
```
UCS@school = the operating system (never modified)
openschooldesk = the beautiful face in front (API client only)
Safe and Secure Architecture matching GDPR, BSI-Grundschutz, Zero Trust, Open Source. 
```

**License:** AGPLv3 – all code must be AGPLv3 compatible.

---

## Repository Structure

```
openschooldesk-poc/
├── apps/
│   ├── mobile/          ← Flutter (iOS/Android) – Phase 2
│   └── web/             ← Next.js 14 PoC ← CURRENT FOCUS
│
├── packages/
│   ├── api-client/      ← Kelvin + Keycloak client (shared)
│   └── shared-types/    ← TypeScript types shared across apps
│
└── docs/
    └── adr/             ← Architecture Decision Records (READ BEFORE CODING)
```

---

## Tech Stack (Web PoC)

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14 (App Router) | SSR + Server Components |
| Language | TypeScript (strict mode) | No `any`, no `as` casts |
| Styling | Tailwind CSS + shadcn/ui | Never inline styles for design |
| Auth | NextAuth.js v5 (Auth.js) | Keycloak OIDC/PKCE provider |
| Data Fetching | TanStack Query v5 | Client-side caching |
| State | Zustand | UI state only (no server state) |
| Package Manager | pnpm | Never use npm or yarn |

---

## Critical Rules

### Security (NON-NEGOTIABLE)
1. **Tokens NEVER in browser storage** – Access tokens stay server-side only (httpOnly cookies via NextAuth)
2. **Kelvin API calls via server-side proxy** – `/api/kelvin/*` routes proxy requests with token injection
3. **No student/teacher PII in logs** – No `console.log` with user data in production code
4. **CSRF protection** – NextAuth built-in, never disable it
5. **No `dangerouslySetInnerHTML`** without explicit sanitization

### Code Quality
- TypeScript strict mode: `"strict": true` in tsconfig – no exceptions
- All components: named exports only (no anonymous default exports)
- File naming: kebab-case for files, PascalCase for components
- No commented-out code in PRs
- All user-facing strings: German (DE) – this is a German school product

### GDPR / DSGVO
- Kelvin API data: minimal data principle – only fetch what is displayed
- No analytics, no tracking, no third-party scripts
- All API responses: never cache user-identifiable data in localStorage

---

## Architecture Patterns

### Route Structure (Next.js App Router)
```
app/
├── (auth)/
│   ├── login/page.tsx          ← Login page with Keycloak redirect
│   └── error/page.tsx          ← Auth error page
├── (dashboard)/
│   ├── layout.tsx              ← Protected layout (server component)
│   ├── page.tsx                ← Dashboard home
│   ├── klassen/
│   │   ├── page.tsx            ← Class list
│   │   └── [id]/page.tsx       ← Class detail + student list
│   ├── stundenplan/page.tsx    ← Weekly timetable
│   └── mitteilungen/
│       ├── page.tsx            ← Message inbox
│       └── neu/page.tsx        ← Compose message
└── api/
    └── kelvin/
        └── [...path]/route.ts  ← Kelvin API proxy (authenticated)
```

### Server vs Client Components
- Default: **Server Components** (no `"use client"`)
- Add `"use client"` only for: interactive state, browser APIs, event handlers
- Data fetching: server components fetch directly, client components use TanStack Query

### Kelvin API Proxy Pattern
```typescript
// app/api/kelvin/[...path]/route.ts
// Always use this pattern – never call Kelvin from client-side
export async function GET(request: Request) {
  const session = await auth(); // NextAuth session
  if (!session?.accessToken) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  
  const kelvinPath = /* extract from URL */;
  const response = await fetch(`${KELVIN_BASE_URL}${kelvinPath}`, {
    headers: { Authorization: `Bearer ${session.accessToken}` }
  });
  return Response.json(await response.json());
}
```

---

## UCS@school / Kelvin API Reference

- **Base URL:** `https://ucs.simonboerner.de/ucsschool/kelvin/v1`
- **Auth:** Bearer token from Keycloak (injected server-side)
- **Docs:** https://kelvin-rest-api.readthedocs.io

### Key Endpoints
```
GET  /schools/                           → List schools
GET  /classes/?school=IGS+Simon          → List classes
GET  /classes/{name}                     → Class detail
GET  /users/?school=IGS+Simon&role=teacher → List teachers
GET  /users/?school=IGS+Simon&role=student → List students
GET  /users/?class={className}           → Students in class
```

### Response Typing (in packages/shared-types)
```typescript
interface KelvinUser {
  dn: string;
  name: string;
  firstname: string;
  lastname: string;
  school: string;
  roles: string[];
  school_classes: Record<string, string[]>;
  email?: string;
}

interface KelvinClass {
  dn: string;
  name: string;
  school: string;
  users: string[];
}
```

---

## Keycloak Configuration

- **Issuer:** `https://ucs.simonboerner.de/realms/ucs` (verify with admin)
- **Client ID:** `openschooldesk`
- **Flow:** PKCE (Authorization Code + PKCE)
- **Scopes:** `openid profile email`
- **NextAuth Provider:** `import Keycloak from "next-auth/providers/keycloak"`

### Environment Variables Required
```env
# .env.local (NEVER commit this file)
NEXTAUTH_URL=https://schule.simonboerner.de
NEXTAUTH_SECRET=<min 32 chars, crypto random>
KEYCLOAK_CLIENT_ID=openschooldesk
KEYCLOAK_CLIENT_SECRET=<from Keycloak admin>
KEYCLOAK_ISSUER=https://ucs.simonboerner.de/realms/ucs
KELVIN_BASE_URL=https://ucs.simonboerner.de/ucsschool/kelvin/v1
```

---

## Design System

### Palette
```
Primary (Teacher role):    Indigo 600 (#4F46E5)
Background:                Slate 50 (#F8FAFC)
Surface:                   White (#FFFFFF)
Border:                    Slate 200 (#E2E8F0)
Text primary:              Slate 900 (#0F172A)
Text muted:                Slate 500 (#64748B)
Destructive:               Red 600 (#DC2626)
Success:                   Emerald 600 (#059669)
Warning:                   Amber 500 (#F59E0B)
```

### Typography
```
Display/Headings:   Geist (font-geist-sans)
Body:               Geist (font-geist-sans)  
Mono (IDs, codes):  Geist Mono (font-geist-mono)
Base size:          16px (1rem)
```

### shadcn/ui Components (use these, don't reinvent)
```
Avatar, Badge, Button, Card, Command, Dialog, 
DropdownMenu, Input, Label, Popover, ScrollArea,
Select, Separator, Sheet, Skeleton, Switch, 
Table, Tabs, Toast, Tooltip
```

### UX Principles
- **Speed:** Optimistic UI updates. Skeleton loading states always.
- **Teachers are busy:** Max 2 clicks to any action
- **No cognitive load:** Clear visual hierarchy, generous whitespace
- **German language:** All UI text in German ("Klassen", "Stundenplan", not "Classes", "Timetable")
- **WCAG AA:** All interactive elements keyboard-accessible, sufficient color contrast

---

## Issue Workflow

1. Issues are written with User Story + Acceptance Criteria
2. Label `jules` → Jules picks up and implements
3. Jules creates PR → Claude reviews → merge to main
4. DO NOT merge without at least one code review

## PR Rules

- PR title: `feat: `, `fix: `, `chore: `, `docs: ` prefix (conventional commits)
- PR description: What was changed + how to test
- No PR without passing CI (lint + type check)
- Screenshots for UI changes

---

## What Jules Should NOT Do

- Never use `any` in TypeScript
- Never store tokens in localStorage or sessionStorage  
- Never call Kelvin API directly from client components
- Never commit `.env.local` or any secret
- Never add analytics or tracking scripts
- Never use `console.log` with PII data
- Never skip loading and error states in UI components
- Never use German umlauts in variable/function names (use `ae/oe/ue`)

---

*Last updated: April 2026*
