import { ContactSection } from "@/components/contact-section"
import { EducationSection } from "@/components/education-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { ShoreFooter } from "@/components/shore-footer"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SkillsSection } from "@/components/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[42%] z-0 translate-y-20 opacity-80">
          <ShoreFooter full />
        </div>
        <ContactSection />
        <SiteFooter />
      </div>
    </div>
  )
}
