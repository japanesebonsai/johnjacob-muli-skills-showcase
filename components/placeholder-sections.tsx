import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionShell } from "@/components/section-shell"
import { projects, skillGroups } from "@/lib/portfolio-data"

export function SkillsPlaceholder() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Organized by how they are used."
      description="The skills section already has its content model. The next pass will refine this into polished grouped cards."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <Card key={group.label} className="border-foreground/10 shadow-sm">
            <CardHeader>
              <CardTitle>{group.label}</CardTitle>
              <CardDescription>{group.skills.length} skills</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.skills.slice(0, 5).map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
              {group.skills.length > 5 ? (
                <Badge variant="outline">+{group.skills.length - 5}</Badge>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

export function ProjectsPlaceholder() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Two placeholders now, real builds later."
      description="The challenge requires two projects, so the skeleton keeps the space ready without pretending unfinished work is complete."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="border-foreground/10 shadow-sm">
            <CardHeader>
              <Badge variant="outline" className="mb-2 w-fit">
                {project.status}
              </Badge>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  )
}

export function ContactPlaceholder() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="A simple form comes next."
      description="The final contact section will use shadcn form fields and a success toast, with no backend required."
    >
      <Card className="border-foreground/10 shadow-sm">
        <CardHeader>
          <CardTitle>Contact form placeholder</CardTitle>
          <CardDescription>
            Name, email, message, and toast behavior will be added in the polish
            increment.
          </CardDescription>
        </CardHeader>
      </Card>
    </SectionShell>
  )
}
