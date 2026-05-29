"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import Lottie from "lottie-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { skillGroups } from "@/lib/portfolio-data"

type SkillName = (typeof skillGroups)[number]["skills"][number]

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

const groupTints = [
  "border-[var(--play-blue)]/35 bg-[var(--play-blue)]/10",
  "border-[var(--play-red)]/35 bg-[var(--play-red)]/10",
  "border-[var(--play-yellow)]/45 bg-[var(--play-yellow)]/12",
  "border-[var(--play-green)]/35 bg-[var(--play-green)]/10",
]

const thrownLayouts = [
  { rotate: -6, x: -8, y: 4 },
  { rotate: 4, x: 5, y: -3 },
  { rotate: -3, x: -3, y: 5 },
  { rotate: 5, x: 7, y: -4 },
  { rotate: 3, x: 6, y: 2 },
  { rotate: -4, x: -7, y: -5 },
  { rotate: 3, x: 5, y: 5 },
  { rotate: -4, x: -4, y: -2 },
  { rotate: 5, x: -6, y: 4 },
  { rotate: -5, x: 4, y: -2 },
  { rotate: 4, x: 8, y: 3 },
  { rotate: -6, x: -5, y: -4 },
  { rotate: 3, x: -7, y: 5 },
  { rotate: 4, x: 6, y: -3 },
  { rotate: 5, x: -2, y: 4 },
  { rotate: -6, x: 7, y: -5 },
  { rotate: 4, x: -8, y: 3 },
  { rotate: -3, x: 5, y: -2 },
  { rotate: 5, x: 6, y: 5 },
  { rotate: -5, x: -4, y: -3 },
  { rotate: 3, x: -6, y: 3 },
  { rotate: -3, x: 4, y: -5 },
  { rotate: 6, x: -1, y: 4 },
  { rotate: 3, x: 7, y: -2 },
]

const desktopSkillPositions = [
  { x: -4, y: 5 },
  { x: 19, y: 7 },
  { x: 42, y: 5 },
  { x: 57, y: 7 },
  { x: 3, y: 20 },
  { x: 26, y: 22 },
  { x: 48, y: 20 },
  { x: 60, y: 22 },
  { x: -3, y: 35 },
  { x: 20, y: 37 },
  { x: 43, y: 35 },
  { x: 57, y: 37 },
  { x: 3, y: 50 },
  { x: 26, y: 52 },
  { x: 49, y: 50 },
  { x: 60, y: 52 },
  { x: -3, y: 65 },
  { x: 20, y: 67 },
  { x: 43, y: 65 },
  { x: 57, y: 67 },
  { x: 4, y: 81 },
  { x: 23, y: 84 },
  { x: 45, y: 81 },
  { x: 52, y: 84 },
]

const desktopSkillPositionOverrides: Partial<Record<SkillName, { x: number; y: number }>> = {
  Vercel: { x: 52, y: 86 },
  Figma: { x: 18, y: 84 },
  "shadcn/ui": { x: 4, y: -9 },
  Django: { x: 64, y: 49 },
  "Android SDK": { x: 38, y: 87 },
}

export function SkillsMirror() {
  const [animationData, setAnimationData] = useState<unknown>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const skills = useMemo(
    () =>
      skillGroups.flatMap((group, groupIndex) =>
        group.skills.map((skill, index) => ({
          groupIndex,
          index,
          skill,
        })),
      ),
    [],
  )

  useEffect(() => {
    let isMounted = true

    fetch("/mirror.json")
      .then((response) => response.json())
      .then((data) => {
        if (isMounted) {
          setAnimationData(data)
        }
      })
      .catch(() => {
        if (isMounted) {
          setAnimationData(null)
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const syncDesktop = () => setIsDesktop(mediaQuery.matches)

    syncDesktop()
    mediaQuery.addEventListener("change", syncDesktop)

    return () => {
      mediaQuery.removeEventListener("change", syncDesktop)
    }
  }, [])

  return (
    <div className="relative overflow-hidden lg:min-h-[40rem] lg:overflow-visible">
      <div className="pointer-events-none absolute inset-x-[-6vw] inset-y-0 bg-[radial-gradient(circle_at_24%_50%,color-mix(in_oklch,var(--play-blue)_14%,transparent),transparent_28%),radial-gradient(circle_at_78%_48%,color-mix(in_oklch,var(--play-yellow)_16%,transparent),transparent_26%)]" />
      <div className="relative z-20 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Thrown from the mirror.
        </h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
          A practical stack in zero gravity, drifting out from the tools I use
          to build software.
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden lg:mt-0 lg:min-h-[34rem] lg:overflow-visible">
        <div className="relative z-20 grid h-44 place-items-center overflow-hidden rounded-2xl border border-foreground/10 bg-background/50 lg:absolute lg:-left-24 lg:top-[50%] lg:h-auto lg:-translate-y-1/2 lg:overflow-visible lg:border-0 lg:bg-transparent xl:-left-36">
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-40 w-56 -translate-y-1/2 rounded-full bg-orange-400/20 blur-3xl lg:block" />
          <div className="grid size-64 place-items-center opacity-70 sm:size-80 lg:size-[28.5rem] lg:opacity-100 xl:size-[33rem]">
            {animationData ? (
              <Lottie animationData={animationData} loop autoplay />
            ) : (
              <div className="size-32 rounded-full border bg-muted/60" />
            )}
          </div>
        </div>

        <div className="absolute left-[20%] top-[50%] hidden h-px w-32 -translate-y-1/2 bg-gradient-to-r from-orange-400/70 to-transparent lg:block" />
        <div className="relative mt-6 grid grid-cols-3 place-items-center gap-x-1.5 gap-y-2 overflow-visible pb-12 sm:gap-x-3 sm:gap-y-3 lg:ml-[16rem] lg:mt-0 lg:h-[34rem] lg:max-w-[60rem] lg:grid-cols-none lg:pb-0 xl:ml-[18rem] xl:max-w-[66rem]">
          {skills.map(({ skill, groupIndex, index }, order) => (
            <FlyingSkill
              key={skill}
              groupIndex={groupIndex}
              index={index}
              isDesktop={isDesktop}
              order={order}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function FlyingSkill({
  groupIndex,
  index,
  isDesktop,
  order,
  skill,
}: {
  groupIndex: number
  index: number
  isDesktop: boolean
  order: number
  skill: SkillName
}) {
  const logo = devLogoFiles[skill]
  const layout = thrownLayouts[order % thrownLayouts.length]
  const desktopPosition =
    desktopSkillPositionOverrides[skill] ??
    desktopSkillPositions[order % desktopSkillPositions.length]
  const delay = (groupIndex * 0.42 + index * 0.13) % 1.9
  const floatDelay = (groupIndex * 0.31 + index * 0.17) % 2.4
  const baseRotate = isDesktop ? layout.rotate * 0.55 : 0
  const yDrift = isDesktop ? (order % 3 === 0 ? -2 : order % 3 === 1 ? 2 : -1) : 0
  const rotate = isDesktop ? baseRotate + (index % 2 === 0 ? 1 : -1) : 0

  return (
    <motion.div
      className={cn(
        "grid min-h-11 w-full max-w-[7.25rem] place-items-center justify-self-center min-[430px]:max-w-[8rem] sm:min-h-14 sm:max-w-[12rem] lg:min-h-16",
        isDesktop && "absolute max-w-none",
      )}
      initial={{
        opacity: isDesktop ? 0 : 1,
        x: isDesktop ? -170 : 0,
        y: isDesktop ? 24 : 0,
        rotate: isDesktop ? -24 : 0,
        scale: isDesktop ? 0.9 : 1,
      }}
      whileInView={{
        opacity: 1,
        x: isDesktop ? layout.x : 0,
        y: isDesktop ? layout.y : 0,
        rotate: baseRotate,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, delay, ease: "easeOut" }}
      style={
        isDesktop
          ? {
              left: `${desktopPosition.x}%`,
              top: `${desktopPosition.y}%`,
              transformOrigin: "center",
            }
          : { transformOrigin: "center" }
      }
    >
      <motion.div
        data-slot="skill-chip"
        className={cn(
          "flex min-w-0 items-center gap-1.5 rounded-xl border px-1.5 py-1.5 text-[0.68rem] shadow-sm backdrop-blur-sm min-[430px]:gap-2 min-[430px]:px-2 min-[430px]:text-xs sm:p-2.5 sm:text-sm",
          groupTints[groupIndex % groupTints.length],
        )}
        animate={{
          y: [0, yDrift, 0],
          rotate: [0, rotate - baseRotate, 0],
        }}
        transition={{
          duration: 3.4 + ((order % 5) * 0.35),
          delay: floatDelay,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {logo ? (
          <span className="grid size-6 shrink-0 place-items-center rounded-lg border bg-background/85 p-1.5 min-[430px]:size-7 sm:size-9 sm:p-2">
            <Image
              src={logo}
              alt=""
              width={26}
              height={26}
              className={cn(
                "size-4 object-contain min-[430px]:size-5 sm:size-6",
                skill === "Next.js" && "dark:invert",
                skill === "Vercel" && "dark:invert",
              )}
            />
          </span>
        ) : skill === "shadcn/ui" ? (
          <span className="grid size-6 shrink-0 place-items-center rounded-lg border bg-background/85 p-1.5 text-foreground min-[430px]:size-7 sm:size-9 sm:p-2">
            <ShadcnLogo />
          </span>
        ) : null}
        <span className="truncate text-[0.68rem] font-semibold min-[430px]:text-xs sm:text-sm">{skill}</span>
      </motion.div>
    </motion.div>
  )
}

function ShadcnLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="size-5"
      aria-hidden="true"
    >
      <path fill="none" d="M0 0h256v256H0z" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="25"
        strokeLinecap="round"
        d="M208 128l-80 80M192 40L40 192"
      />
    </svg>
  )
}
