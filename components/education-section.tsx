import Image from "next/image"
import { GraduationCap, Medal } from "lucide-react"

import { EducationBoy } from "@/components/education-boy"
import { EducationMap } from "@/components/education-map"
import { SectionShell } from "@/components/section-shell"
import { Card, CardContent } from "@/components/ui/card"
import { education } from "@/lib/portfolio-data"

const educationHighlights = [
  {
    label: "Academic Standing",
    value: education.standing,
    icon: Medal,
  },
] as const

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Campus story, mapped."
      description="A quick look at the university shaping my computer science path in Cebu City."
      headingAdornment={
        <div className="grid size-28 place-items-center overflow-hidden rounded-xl border bg-white p-3 shadow-sm sm:size-32">
          <Image
            src="/citu-logo.png"
            alt="Cebu Institute of Technology - University logo"
            width={104}
            height={104}
            className="object-contain"
          />
        </div>
      }
      layout="stacked"
      contentClassName="max-w-[96rem]"
    >
      <div className="relative space-y-4">
        <div className="pointer-events-none absolute right-6 top-14 z-30 hidden -translate-y-full lg:block">
          <EducationBoy />
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
            <GraduationCap
              className="size-4 text-[var(--play-blue)]"
              aria-hidden="true"
            />
            {education.year} {education.program}
          </div>
          {educationHighlights.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur-sm"
              >
                <Icon
                  className="size-4 text-[var(--play-green)]"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            )
          })}
        </div>

        <Card className="border-foreground/10 shadow-sm">
          <CardContent className="p-2">
            <div className="relative z-0 min-h-80 overflow-hidden rounded-xl border bg-muted/30 lg:aspect-[16/5]">
              <EducationMap />
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionShell>
  )
}
