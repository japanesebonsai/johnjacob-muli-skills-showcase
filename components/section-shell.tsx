import type { ReactNode } from "react"

import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
  children: ReactNode
  className?: string
  layout?: "split" | "stacked"
}

export function SectionShell({
  eyebrow,
  title,
  description,
  id,
  children,
  className,
  layout = "split",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-16 sm:py-20", className)}
    >
      <AnimatedSection
        className={cn(
          "mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6",
          layout === "split" && "lg:grid-cols-[0.75fr_1.25fr]",
        )}
      >
        <div className={cn(layout === "split" ? "max-w-sm" : "max-w-2xl")}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div>{children}</div>
      </AnimatedSection>
    </section>
  )
}
