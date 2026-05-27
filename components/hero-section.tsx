import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Mail } from "lucide-react"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { education, profile, socialLinks } from "@/lib/portfolio-data"

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 border-b">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:py-20">
        <AnimatedSection className="max-w-3xl">
          <Badge variant="outline" className="rounded-lg px-3 py-1">
            Skills Showcase
          </Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-foreground/80 sm:text-2xl">
            {profile.title}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            {profile.tagline} I am shaping a portfolio that connects practical
            software skills with a clean, personal web presence.
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
          <Card className="mx-auto w-full max-w-64 border-foreground/10 bg-card/90 p-2 shadow-sm sm:max-w-72">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border bg-muted">
            <Image
              src={profile.profileImage}
              alt="Portrait of John Jacob Muli"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[50%_38%]"
            />
          </div>
          <CardHeader>
            <CardTitle>{education.program}</CardTitle>
            <CardDescription>
              {education.year} at {education.school}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {["Next.js", "shadcn/ui", "Dark mode", "Vercel"].map((item) => (
              <div
                key={item}
                className="rounded-lg border bg-background px-3 py-2 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  )
}
