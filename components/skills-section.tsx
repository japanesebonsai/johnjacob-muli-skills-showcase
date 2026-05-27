import Image from "next/image"
import { Boxes, Code2, Database, Wrench } from "lucide-react"

import { SectionShell } from "@/components/section-shell"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { skillGroups } from "@/lib/portfolio-data"

const groupIcons = {
  Frontend: Boxes,
  Programming: Code2,
  "Backend & Databases": Database,
  "Tools & Platforms": Wrench,
} as const

const devLogoFiles: Record<string, string> = {
  HTML: "/devlogos/html5.svg",
  CSS: "/devlogos/css3.svg",
  C: "/devlogos/c.svg",
  "C++": "/devlogos/cplusplus.svg",
  "C#": "/devlogos/csharp.svg",
  JavaScript: "/devlogos/javascript.svg",
  TypeScript: "/devlogos/typescript.svg",
  React: "/devlogos/react.svg",
  "Next.js": "/devlogos/nextjs.svg",
  "Tailwind CSS": "/devlogos/tailwindcss.svg",
  Git: "/devlogos/git.svg",
  Python: "/devlogos/python.svg",
  Java: "/devlogos/java.svg",
  Kotlin: "/devlogos/kotlin.svg",
  Figma: "/devlogos/figma.svg",
  Vercel: "/devlogos/vercel.svg",
  Supabase: "/devlogos/supabase.svg",
  Firebase: "/devlogos/firebase.svg",
  PostgreSQL: "/devlogos/postgresql.svg",
  Django: "/devlogos/django.svg",
  "Spring Boot": "/devlogos/springboot.svg",
  SQL: "/devlogos/sql.svg",
  "Android SDK": "/devlogos/android.svg",
}

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Organized by how they are used."
      description="A practical stack grouped by workflow, with DevLogos references used as subtle visual anchors for recognizable technologies."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = groupIcons[group.label]

          return (
            <Card key={group.label} className="border-foreground/10 shadow-sm">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 grid size-10 place-items-center rounded-lg border bg-muted">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <CardTitle>{group.label}</CardTitle>
                    <CardDescription>
                      {group.skills.length} tools and languages
                    </CardDescription>
                  </div>
                  <Badge variant="outline">{group.skills.length}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {group.skills.map((skill) => (
                    <SkillItem key={skill} skill={skill} />
                  ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SectionShell>
  )
}

function SkillItem({ skill }: { skill: string }) {
  const logo = devLogoFiles[skill]

  return (
    <div className="group flex items-center gap-3 rounded-xl border bg-background/70 p-2.5 transition-colors hover:bg-muted/40">
      <div className="flex min-w-0 items-center gap-3">
        {logo ? (
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border bg-background p-1.5 shadow-sm transition-colors group-hover:border-foreground/30">
            <Image
              src={logo}
              alt=""
              width={22}
              height={22}
              className={cn(
                "size-5.5 object-contain",
                skill === "Next.js" && "dark:invert",
                skill === "Vercel" && "dark:invert"
              )}
            />
          </span>
        ) : (
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border bg-background text-[0.7rem] font-semibold tracking-tight shadow-sm">
            {skill.slice(0, 2)}
          </span>
        )}
        <span className="truncate text-sm font-medium">{skill}</span>
      </div>
    </div>
  )
}
