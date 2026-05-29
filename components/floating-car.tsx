"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import { motion } from "motion/react"

import { useLazyLottieData } from "@/components/use-lazy-lottie-data"

export function FloatingCar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)")
    const syncDesktop = () => setIsDesktop(mediaQuery.matches)

    syncDesktop()
    mediaQuery.addEventListener("change", syncDesktop)

    return () => {
      mediaQuery.removeEventListener("change", syncDesktop)
    }
  }, [])

  const animationData = useLazyLottieData("/car.json", {
    enabled: isDesktop,
    targetRef: containerRef,
  })

  if (!animationData) {
    return <div ref={containerRef} className="hidden lg:block" />
  }

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-x-0 -bottom-32 z-0 hidden h-[28rem] overflow-hidden opacity-70 lg:block"
      aria-hidden="true"
    >
      <motion.div
        data-slot="floating-car"
        className="absolute bottom-0 left-0 size-[28rem]"
        initial={{ x: "-35vw" }}
        animate={{ x: "105vw" }}
        transition={{
          duration: 42,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Lottie animationData={animationData} loop autoplay />
      </motion.div>
    </div>
  )
}
