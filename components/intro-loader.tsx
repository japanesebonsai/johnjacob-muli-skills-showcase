"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import type { LottieRefCurrentProps } from "lottie-react"
import { usePathname } from "next/navigation"

import runningBoyAnimation from "@/public/running-boy.json"

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
    runningBoyRef.current?.setSpeed(0.7)

    const hideTimer = window.setTimeout(() => setVisible(false), 3000)

    return () => window.clearTimeout(hideTimer)
  }, [])

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
