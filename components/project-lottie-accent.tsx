"use client"

import { useRef } from "react"
import Lottie from "lottie-react"

import { useLazyLottieData } from "@/components/use-lazy-lottie-data"
import { cn } from "@/lib/utils"

type ProjectLottieAccentProps = {
  src: string
  className?: string
  innerClassName?: string
}

export function ProjectLottieAccent({
  src,
  className,
  innerClassName,
}: ProjectLottieAccentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationData = useLazyLottieData(src, { targetRef: containerRef })

  if (!animationData) {
    return <div ref={containerRef} className={cn("absolute", className)} />
  }

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute", className)}
      aria-hidden
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className={innerClassName}
      />
    </div>
  )
}
