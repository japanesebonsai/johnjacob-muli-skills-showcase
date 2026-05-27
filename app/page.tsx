import { AboutSection } from "@/components/about-section"
import { HeroSection } from "@/components/hero-section"
import {
  ContactPlaceholder,
  EducationPlaceholder,
  ProjectsPlaceholder,
  SkillsPlaceholder,
} from "@/components/placeholder-sections"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationPlaceholder />
        <SkillsPlaceholder />
        <ProjectsPlaceholder />
        <ContactPlaceholder />
      </main>
      <SiteFooter />
    </div>
  )
}
