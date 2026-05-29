import Link from "next/link"
import { ArrowDown, Mail } from "lucide-react"

import { AnimatedSection } from "@/components/animated-section"
import { FloatingCar } from "@/components/floating-car"
import { HeroBubbleBackground } from "@/components/hero-bubble-background"
import { HeroAvatarCard } from "@/components/hero-avatar-card"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden border-b">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,color-mix(in_oklch,var(--play-blue)_16%,transparent),transparent_28%),radial-gradient(circle_at_82%_18%,color-mix(in_oklch,var(--play-yellow)_20%,transparent),transparent_24%),radial-gradient(circle_at_70%_82%,color-mix(in_oklch,var(--play-green)_14%,transparent),transparent_28%)]" />
      <HeroBubbleBackground />
      <FloatingCar />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <AnimatedSection className="max-w-4xl">
          <h1 className="mt-6 font-semibold leading-[0.88] tracking-tight text-balance">
            <span className="relative block text-[clamp(5rem,18vw,14rem)] text-foreground sm:text-[clamp(6rem,18vw,14rem)]">
              <span className="absolute -left-3 top-4 h-6 w-6 rounded-full bg-[var(--play-blue)] sm:h-8 sm:w-8 lg:-left-5 lg:top-8 lg:h-10 lg:w-10" />
              <span className="relative">Hola,</span>
            </span>
            <br />
            <span className="block whitespace-nowrap text-[clamp(2.8rem,9vw,8rem)] text-foreground sm:text-[clamp(3.4rem,9vw,8rem)]">
              I&apos;m{" "}
              <span className="relative inline-block">
                Jacob
                <span className="absolute -bottom-3 left-2 flex h-3 gap-2">
                  <span className="h-2 w-16 rounded-full bg-[var(--play-red)]" />
                  <span className="h-2 w-10 rounded-full bg-[var(--play-yellow)]" />
                  <span className="h-2 w-14 rounded-full bg-[var(--play-green)]" />
                </span>
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            <span className="float-right ml-4 mt-1 block lg:hidden">
              <HeroAvatarCard compact />
            </span>
            I&apos;m a student developer based in Cebu, currently exploring the
            vast world of shaping systems that bring wonderful ideas together and
            make a difference in the community.
          </p>

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
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="hidden lg:block">
          <HeroAvatarCard />
        </AnimatedSection>
      </div>
    </section>
  )
}
