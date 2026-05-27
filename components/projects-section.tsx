import { Clock, CodeXml } from "lucide-react"

import { SectionShell } from "@/components/section-shell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Two placeholders now, real builds later."
      description="These cards satisfy the showcase structure while keeping the project data easy to replace when the real builds are ready."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className="border-foreground/10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <CardHeader>
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="grid size-11 place-items-center rounded-lg border bg-muted">
                  <CodeXml className="size-5" aria-hidden="true" />
                </div>
                <Badge variant="outline">
                  <Clock aria-hidden="true" />
                  {project.status}
                </Badge>
              </div>
              <CardTitle>
                {project.title}
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  0{index + 1}
                </span>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
            <CardFooter>
              <p className="text-xs text-muted-foreground">
                Replace title, description, tech, and link when the project is
                ready.
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}
