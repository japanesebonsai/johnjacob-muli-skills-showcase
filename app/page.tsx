import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { HeroSection } from "@/components/hero-section"
import { ContactPlaceholder } from "@/components/placeholder-sections"
import { ProjectsSection } from "@/components/projects-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactPlaceholder />
      </main>
      <SiteFooter />
    </div>
  )
}
