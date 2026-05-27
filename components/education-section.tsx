import { EducationCardReveal } from "@/components/education-card-reveal"
import { EducationMap } from "@/components/education-map"
import { SectionShell } from "@/components/section-shell"
import { Card, CardContent } from "@/components/ui/card"

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Campus story, mapped."
      description="A quick look at the university shaping my computer science path in Cebu City."
      layout="stacked"
    >
      <EducationCardReveal>
        <Card className="border-foreground/10 shadow-sm">
          <CardContent className="p-2">
            <div className="relative z-0 min-h-80 overflow-hidden rounded-xl border bg-muted/30 lg:aspect-[16/5]">
              <EducationMap />
            </div>
          </CardContent>
        </Card>
      </EducationCardReveal>
    </SectionShell>
  )
}
