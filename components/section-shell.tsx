import type { ReactNode } from "react"

import { AnimatedSection } from "@/components/animated-section"
import { cn } from "@/lib/utils"

type SectionShellProps = {
  eyebrow: string
  title: string
  description?: string
  id: string
  children: ReactNode
  background?: ReactNode
  className?: string
  contentClassName?: string
  headingAdornment?: ReactNode
  headingAside?: ReactNode
  layout?: "split" | "stacked"
}

export function SectionShell({
  eyebrow,
  title,
  description,
  id,
  children,
  background,
  className,
  contentClassName,
  headingAdornment,
  headingAside,
  layout = "split",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", className)}
    >
      {background}
      <AnimatedSection
        className={cn(
          "relative z-10 mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6",
          layout === "split" && "lg:grid-cols-[0.75fr_1.25fr]",
          contentClassName,
        )}
      >
        <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div
            className={cn(
              "flex gap-4",
              layout === "split" ? "max-w-sm" : "max-w-2xl",
            )}
          >
            {headingAdornment ? (
              <div className="mt-1 shrink-0">{headingAdornment}</div>
            ) : null}
            <div>
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
          </div>
          {headingAside ? (
            <div className="shrink-0 self-center">{headingAside}</div>
          ) : null}
        </div>
        <div>{children}</div>
      </AnimatedSection>
    </section>
  )
}
