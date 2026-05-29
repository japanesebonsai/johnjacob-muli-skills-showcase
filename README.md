# John Jacob Muli - Skills Showcase

A creative personal portfolio by **John Jacob Muli**, a third-year BS Computer Science student at Cebu Institute of Technology - University. The site presents education, skills, projects, experience, and contact details through an interactive single-page experience built for the IT & Operations Skills Showcase Challenge.

## Overview

This portfolio is designed to feel personal without losing clarity. It uses playful motion, custom illustrations, map interaction, project storytelling, and responsive layouts to show both technical range and visual taste.

**Live site:** [johnjacobmuli.vercel.app](https://johnjacobmuli.vercel.app)

## Highlights

- Large expressive hero section with animated profile treatment
- Interactive education section with CIT-U map and academic standing
- Zero-gravity skills section using local dev logo assets
- Project showcase with curated cards, repository links, and animated visual panels
- Experience and involvement section for work, volunteer, and organization roles
- Server-backed contact form with validation, honeypot protection, toast feedback, and Resend-ready email delivery
- Custom light/dark theme handling with system preference support
- 404 page with animated visual treatment and return-to-home action
- Asset preloading for critical hero assets and lazy loading for lower-section Lottie animations
- Responsive design across mobile, tablet, and desktop

## Sections

| Section | Purpose |
| --- | --- |
| Hero | Introduces Jacob with a bold first impression and quick calls to action. |
| Education | Highlights CIT-U, BS Computer Science, Dean's List standing, and campus location. |
| Skills | Shows the current technical stack through animated, scattered skill chips. |
| Projects | Features Kumpas, ResQ, StepSync, and Project EVA with roles, impact, tech, and GitHub links. |
| Experience | Covers IT assistant work, GDG involvement, and Angat Buhay volunteer development work. |
| Contact | Provides a polished form and direct links for email, GitHub, and LinkedIn. |

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | Next.js 16 App Router, React 19, TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui-style components, Base UI primitives |
| Motion | Motion, Lottie React |
| Maps | Leaflet, React Leaflet, OpenStreetMap |
| Forms | Next.js Server Actions, Resend REST API, Sonner toasts |
| Icons | Lucide React, local SVG dev logos |
| Runtime and Deploy | Bun, Vercel |

## Getting Started

Install dependencies with Bun:

```bash
bun install
```

Or install dependencies with npm:

```bash
npm install
```

Run the development server with Bun:

```bash
bun run dev
```

Or run it with npm:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy the example file and fill in values locally:

```bash
cp .env.example .env.local
```

Required for email delivery:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=jacobmuli0729@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <onboarding@resend.dev>
```

For production, add the same variables in Vercel under:

```text
Project Settings -> Environment Variables
```

`onboarding@resend.dev` is fine for testing. For a polished production sender, verify a custom domain in Resend and replace `CONTACT_FROM_EMAIL` with a domain-based address.

## Verification

Run lint:

```bash
bun run lint
```

Or with npm:

```bash
npm run lint
```

Run a production build:

```bash
bun run build
```

Or with npm:

```bash
npm run build
```

## Project Structure

```text
app/
  actions/
    contact.ts
  layout.tsx
  not-found.tsx
  page.tsx
components/
  contact-section.tsx
  education-section.tsx
  experience-section.tsx
  hero-section.tsx
  projects-section.tsx
  skills-section.tsx
  ui/
lib/
  asset-preloads.ts
  contact-form-state.ts
  portfolio-data.ts
  utils.ts
public/
  devlogos/
  involvement/
  project-lotties/
  projects/
```

## Notes

- Project and experience content is centralized in `lib/portfolio-data.ts`.
- Lottie JSON assets live in `public/` and `public/project-lotties/`.
- Real secret files are ignored by Git; only `.env.example` is intended to be committed.
- This repository is the final submitted work, so commit history should stay intentional and reviewer-friendly.
