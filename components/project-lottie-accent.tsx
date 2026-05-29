"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

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
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch(src)
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
  }, [src])

  if (!animationData) {
    return null
  }

  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className={innerClassName}
      />
    </div>
  )
}
