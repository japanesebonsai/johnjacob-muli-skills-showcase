import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionShell } from "@/components/section-shell"

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
