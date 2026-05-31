import Image from "next/image"
import { BadgeCheck, CalendarDays, HandHeart } from "lucide-react"

import { ExperienceCityBackground } from "@/components/experience-city-background"
import { SectionShell } from "@/components/section-shell"
import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const experienceAccentStyles = {
  blue: {
    dot: "bg-[var(--play-blue)]",
    image: "border-[var(--play-blue)]/20 bg-[var(--play-blue)]/8",
    badge: "border-[var(--play-blue)]/35 bg-[var(--play-blue)]/10",
    glow: "shadow-[0_18px_60px_color-mix(in_oklch,var(--play-blue)_20%,transparent)]",
  },
  google: {
    dot:
      "bg-[linear-gradient(135deg,var(--play-blue),var(--play-red),var(--play-yellow),var(--play-green))]",
    image:
      "border-[var(--play-green)]/20 bg-[linear-gradient(135deg,var(--play-blue)/8,var(--play-yellow)/10,var(--play-green)/8)]",
    badge: "border-[var(--play-green)]/35 bg-[var(--play-green)]/10",
    glow: "shadow-[0_18px_60px_color-mix(in_oklch,var(--play-green)_18%,transparent)]",
  },
  pink: {
    dot: "bg-[var(--play-red)]",
    image: "border-[var(--play-red)]/20 bg-[var(--play-red)]/8",
    badge: "border-[var(--play-red)]/35 bg-[var(--play-red)]/10",
    glow: "shadow-[0_18px_60px_color-mix(in_oklch,var(--play-red)_18%,transparent)]",
  },
} as const

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Experience & involvement."
      description="Hands-on roles where I practiced software, operations, community work, and rapid-response systems."
      layout="stacked"
      className="relative overflow-visible"
      contentClassName="max-w-[96rem]"
    >
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <ExperienceCityBackground className="order-1 min-h-[16rem] lg:min-h-[48rem]" />

        <div className="relative order-2 rounded-[1.75rem] border border-foreground/10 bg-background/72 p-3 shadow-sm backdrop-blur-sm sm:p-4 dark:bg-background/76">
          <div className="space-y-3">
        {experiences.map((item) => {
          const styles = experienceAccentStyles[item.accent]

          return (
            <article
              key={`${item.organization}-${item.title}`}
              className="group relative grid gap-5 rounded-2xl border border-foreground/10 bg-card/86 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-card/95 hover:shadow-md sm:grid-cols-[9rem_1fr] sm:p-5 dark:bg-card/86"
            >
              <div className="flex items-start gap-4 sm:block">
                <div
                  className={cn(
                    "relative grid size-28 shrink-0 place-items-center overflow-hidden rounded-2xl border transition-transform duration-300 group-hover:scale-[1.02] sm:size-36",
                    styles.image,
                    styles.glow,
                  )}
                >
                  <div className="relative size-20 sm:size-28">
                    <Image
                      src={item.image}
                      alt={`${item.shortName} visual identity`}
                      fill
                      sizes="(min-width: 640px) 112px, 80px"
                      className="rounded-lg object-contain"
                    />
                  </div>
                </div>
                <div className="min-w-0 sm:hidden">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {item.shortName}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                </div>
              </div>

              <div className="min-w-0">
                <div className="hidden sm:block">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span
                      className={cn("size-2.5 rounded-full", styles.dot)}
                      aria-hidden="true"
                    />
                    <Badge
                      variant="outline"
                      className={cn("h-7 gap-1.5", styles.badge)}
                    >
                      <HandHeart aria-hidden="true" />
                      {item.type}
                    </Badge>
                    <Badge variant="secondary" className="h-7 gap-1.5">
                      <CalendarDays aria-hidden="true" />
                      {item.period}
                    </Badge>
                  </div>
                </div>
                <h3 className="hidden font-heading text-xl font-semibold tracking-tight sm:block">
                  {item.title}
                </h3>
                <p className="mt-1 hidden text-sm font-medium text-muted-foreground sm:block">
                  {item.organization}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {item.summary}
                </p>

                <ul className="mt-4 grid gap-2 text-sm leading-5 md:grid-cols-3">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <BadgeCheck
                        className="mt-0.5 size-4 shrink-0 text-[var(--play-green)]"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-start-2">
                <div className="inline-flex rounded-full border bg-background/75 px-4 py-2 text-sm font-medium text-foreground/80">
                  {item.impact}
                </div>
              </div>
            </article>
          )
        })}
          </div>
        </div>
      </div>
    </SectionShell>
  )
}
