# John Jacob Muli Skills Showcase

A personal portfolio website built for the IT & Operations Web Development Intern Skills Showcase Challenge. It introduces John Jacob Muli as a student developer and highlights education, skills, project placeholders, and contact details in a responsive single-page experience.

## Live Website

Deployment link: _Add the Vercel URL here after deployment._

## Features

- Responsive single-page portfolio
- Smooth section navigation
- Personal hero section with profile photo
- Education section with an interactive CIT-U map
- Grouped skills section with local SVG tech logos
- Two editable project placeholder cards
- Contact form with validation and success/error toast feedback
- Dark mode toggle with saved preference
- Subtle scroll and hover animations

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Bun
- next-themes
- Motion
- Leaflet and React Leaflet
- Sonner
- Lucide React
- Vercel

## Getting Started

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Verification

Run lint:

```bash
bun run lint
```

Run a production build:

```bash
bun run build
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
components/
  about-section.tsx
  contact-section.tsx
  education-section.tsx
  hero-section.tsx
  projects-section.tsx
  skills-section.tsx
  ui/
lib/
  portfolio-data.ts
  utils.ts
public/
  profile.jpg
  devlogos/
```

## Notes

The contact form is intentionally frontend-only for the challenge. It validates fields, shows a toast, and resets after submit. Project cards are placeholders and can be replaced with real projects later.
