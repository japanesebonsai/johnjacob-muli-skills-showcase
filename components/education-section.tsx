import Link from "next/link"
import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react"

import { EducationMap } from "@/components/education-map"
import { SectionShell } from "@/components/section-shell"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { education } from "@/lib/portfolio-data"

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Campus story, mapped."
      description="A quick look at the university shaping my computer science path in Cebu City."
    >
      <Card className="border-foreground/10 shadow-sm">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Badge variant="outline" className="mb-3 rounded-lg">
                <GraduationCap aria-hidden="true" />
                {education.year}
              </Badge>
              <CardTitle>{education.school}</CardTitle>
              <CardDescription className="mt-2">
                {education.program} - {education.locationLabel}
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<Link href={education.website} />}
            >
              Visit CIT-U
              <ArrowUpRight aria-hidden="true" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 rounded-xl border bg-muted/40 p-4">
            <MapPin className="mt-0.5 size-5 text-muted-foreground" aria-hidden="true" />
            <p className="text-sm leading-6 text-muted-foreground">
              Click the map pin to view the school card and open the official
              Cebu Institute of Technology - University website.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border">
            <EducationMap />
          </div>
        </CardContent>
      </Card>
    </SectionShell>
  )
}
