import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Sparkles } from "lucide-react"

import { GitHubRepoMeta } from "@/components/github-repo-meta"
import { ProjectLottieAccent } from "@/components/project-lottie-accent"
import { SectionShell } from "@/components/section-shell"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

const projectAccentStyles = {
  green: {
    shell:
      "bg-[radial-gradient(circle_at_12%_15%,color-mix(in_oklch,var(--play-green)_20%,transparent),transparent_35%),linear-gradient(135deg,color-mix(in_oklch,var(--play-green)_8%,var(--card)),var(--card)_58%)]",
    badge: "border-[var(--play-green)]/35 bg-[var(--play-green)]/10",
    line: "from-[var(--play-green)]/60",
  },
  blue: {
    shell:
      "bg-[radial-gradient(circle_at_88%_18%,color-mix(in_oklch,var(--play-blue)_22%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_oklch,var(--play-blue)_9%,var(--card)),var(--card)_58%)]",
    badge: "border-[var(--play-blue)]/35 bg-[var(--play-blue)]/10",
    line: "from-[var(--play-blue)]/60",
  },
  yellow: {
    shell:
      "bg-[radial-gradient(circle_at_88%_20%,color-mix(in_oklch,var(--play-yellow)_34%,transparent),transparent_36%),linear-gradient(135deg,color-mix(in_oklch,var(--play-yellow)_12%,var(--card)),var(--card)_60%)]",
    badge: "border-[var(--play-yellow)]/45 bg-[var(--play-yellow)]/14",
    line: "from-[var(--play-yellow)]/70",
  },
} as const

const projectLottieAccents = {
  Kumpas: {
    src: "/project-lotties/project-kumpas-bus.json",
    className:
      "-inset-x-[6%] -bottom-10 z-20 h-52 w-[112%] opacity-45 mix-blend-multiply dark:opacity-50 dark:mix-blend-screen sm:h-60 lg:h-72",
  },
  ResQ: {
    src: "/project-lotties/project-resq-chain.json",
    className:
      "inset-0 z-10 h-full w-full opacity-15 mix-blend-screen dark:opacity-20",
  },
  StepSync: {
    src: "/project-lotties/project-stepsync-wind.json",
    className:
      "-inset-x-[18%] inset-y-0 z-10 h-full w-[136%] opacity-30 mix-blend-screen dark:opacity-35",
  },
  "Project EVA": {
    src: "/project-lotties/project-eva-stars.json",
    className:
      "inset-0 z-20 h-full w-full opacity-50 mix-blend-screen dark:opacity-55",
  },
} as const

function GitHubMark() {
  return (
    <svg
      aria-hidden="true"
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4 text-current"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="currentColor"
      />
    </svg>
  )
}

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected builds."
      description="Projects where I explored AI systems, transparency, and practical software with a mix of curated story and live GitHub metadata."
      layout="stacked"
      contentClassName="max-w-[96rem]"
    >
      <div className="space-y-5">
        {projects.map((project, index) => {
          const styles = projectAccentStyles[project.accent]
          const isFlipped = index % 2 === 1
          const lottieAccent =
            projectLottieAccents[
            project.title as keyof typeof projectLottieAccents
            ]

          return (
            <Card
              key={project.title}
              className={cn(
                "overflow-hidden border-foreground/10 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                styles.shell,
              )}
            >
              <CardContent
                className={cn(
                  "grid gap-0 p-0 lg:grid-cols-[1.1fr_0.9fr]",
                  isFlipped && "lg:grid-cols-[0.9fr_1.1fr]",
                )}
              >
                <div
                  className={cn(
                    "relative min-h-72 overflow-hidden border-b border-foreground/10 bg-muted lg:min-h-[25rem] lg:border-b-0 lg:border-r",
                    isFlipped && "lg:order-2 lg:border-l lg:border-r-0",
                    project.title === "StepSync" &&
                    "bg-[radial-gradient(circle_at_30%_25%,#7c3aed55,transparent_34%),linear-gradient(135deg,#080712,#241149_55%,#0b1226)]",
                    project.title === "Project EVA" &&
                    "bg-[linear-gradient(135deg,#f7ead2,#c64235_48%,#6f1f1c)]",
                  )}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} interface screenshot`}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className={cn(
                      "object-cover",
                      project.title === "StepSync" &&
                      "object-contain p-12 sm:p-24 lg:p-32",
                      project.title === "Project EVA" &&
                      "scale-105 object-cover p-0",
                    )}
                  />
                  {lottieAccent ? (
                    <ProjectLottieAccent
                      src={lottieAccent.src}
                      className={lottieAccent.className}
                      innerClassName={
                        project.title === "Kumpas"
                          ? "h-full w-full scale-x-125 scale-y-105"
                          : project.title === "StepSync"
                            ? "h-full w-full scale-x-[1.35] scale-y-110"
                            : undefined
                      }
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="flex min-h-[25rem] flex-col justify-between gap-8 p-5 sm:p-6 lg:p-8">
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn("h-7 gap-1.5", styles.badge)}
                      >
                        <Sparkles aria-hidden="true" />
                        {project.eyebrow}
                      </Badge>
                      <Badge variant="secondary" className="h-7">
                        {project.status}
                      </Badge>
                    </div>

                    <div
                      className={cn(
                        "mb-5 h-px w-24 bg-gradient-to-r to-transparent",
                        styles.line,
                      )}
                    />

                    <h3 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border bg-background/65 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Role
                        </p>
                        <p className="mt-2 text-sm leading-5">
                          {project.role}
                        </p>
                      </div>
                      <div className="rounded-xl border bg-background/65 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Impact
                        </p>
                        <p className="mt-2 text-sm leading-5">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <GitHubRepoMeta repo={project.repoFullName} />
                      <Link
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-lg border bg-background px-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-muted sm:w-fit"
                      >
                        <GitHubMark />
                        View repo
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}
