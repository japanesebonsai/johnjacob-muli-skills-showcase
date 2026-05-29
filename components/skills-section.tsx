import { AnimatedSection } from "@/components/animated-section"
import { SkillsMirror } from "@/components/skills-mirror"

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="overflow-x-clip overflow-y-visible py-16 sm:py-20"
    >
      <AnimatedSection className="mx-auto w-full max-w-[96rem] px-4 sm:px-6 lg:px-8">
        <SkillsMirror />
      </AnimatedSection>
    </section>
  )
}
