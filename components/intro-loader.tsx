"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import type { LottieRefCurrentProps } from "lottie-react"
import { usePathname } from "next/navigation"

import runningBoyAnimation from "@/public/intro-running-student.json"

const LOADER_MS = 950
const REDUCED_MOTION_MS = 180

export function IntroLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const runningBoyRef = useRef<LottieRefCurrentProps>(null)
  const shouldShowLoader = pathname === "/"

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (visible && shouldShowLoader) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = previousOverflow
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [shouldShowLoader, visible])

  useEffect(() => {
    if (!shouldShowLoader) {
      return
    }

    runningBoyRef.current?.setSpeed(0.8)

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const timer = window.setTimeout(
      () => setVisible(false),
      prefersReducedMotion ? REDUCED_MOTION_MS : LOADER_MS,
    )

    return () => {
      window.clearTimeout(timer)
    }
  }, [shouldShowLoader])

  if (!shouldShowLoader || !visible) {
    return null
  }

  return (
    <div
      data-loader="intro"
      className="fixed inset-0 z-[100] overflow-hidden bg-background/95 backdrop-blur-sm"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="intro-running-boy absolute left-0 top-0 flex items-center gap-5"
          onAnimationEnd={() => setVisible(false)}
        >
          <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Lottie
              lottieRef={runningBoyRef}
              animationData={runningBoyAnimation}
              loop
              autoplay
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
