import { Code2, Layers, Sparkles } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionShell } from "@/components/section-shell"

const focusAreas = [
  {
    icon: Code2,
    title: "Student developer",
    description:
      "Growing through hands-on projects, coursework, and practical web development challenges.",
  },
  {
    icon: Layers,
    title: "Full-stack curiosity",
    description:
      "Exploring frontend, backend, database, and mobile tools with an eye for clean structure.",
  },
  {
    icon: Sparkles,
    title: "Polished interfaces",
    description:
      "Interested in responsive layouts, useful interactions, and interfaces that feel easy to use.",
  },
]

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A personal portfolio with room to grow."
      description="This section frames John as a student developer building practical skills across web, software, and mobile development."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {focusAreas.map((area) => {
          const Icon = area.icon

          return (
            <Card key={area.title} className="border-foreground/10 shadow-sm">
              <CardHeader>
                <div className="mb-3 grid size-10 place-items-center rounded-lg border bg-muted">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}
