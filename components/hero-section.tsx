import Link from "next/link"
import { ArrowDown, Mail, Sparkles } from "lucide-react"

import { AnimatedSection } from "@/components/animated-section"
import { FloatingCar } from "@/components/floating-car"
import { HeroBubbleBackground } from "@/components/hero-bubble-background"
import { HeroAvatarCard } from "@/components/hero-avatar-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { profile, socialLinks } from "@/lib/portfolio-data"

const heroChips = ["Next.js", "Interactive UI", "Maps", "Mini-games soon"]

export function HeroSection() {
  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--play-blue)_16%,transparent),transparent_28%),radial-gradient(circle_at_82%_18%,color-mix(in_oklch,var(--play-yellow)_20%,transparent),transparent_24%),radial-gradient(circle_at_70%_82%,color-mix(in_oklch,var(--play-green)_14%,transparent),transparent_28%)]" />
      <HeroBubbleBackground />
      <FloatingCar />
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:py-20">
        <AnimatedSection className="max-w-3xl">
          <Badge
            variant="outline"
            className="rounded-lg border-[var(--play-blue)]/35 bg-[var(--play-blue)]/10 px-3 py-1 text-foreground"
          >
            <Sparkles aria-hidden="true" />
            Skills Showcase
          </Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-foreground/80 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Creative coder building cool interactive things. {profile.tagline} I
            am shaping a portfolio that connects practical software skills with
            a playful personal web presence.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {heroChips.map((chip, index) => (
              <span
                key={chip}
                className="rounded-lg border bg-card px-3 py-1 text-sm font-medium shadow-sm"
                style={{
                  borderColor: [
                    "var(--play-blue)",
                    "var(--play-red)",
                    "var(--play-yellow)",
                    "var(--play-green)",
                  ][index],
                }}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="#projects" />}
            >
              View Projects
              <ArrowDown aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="#contact" />}
            >
              Contact Me
              <Mail aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<Link href={link.href} />}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.12}>
          <HeroAvatarCard />
        </AnimatedSection>
      </div>
    </section>
  )
}
