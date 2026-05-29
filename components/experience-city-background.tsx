"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

import { cn } from "@/lib/utils"

type ExperienceCityBackgroundProps = {
  className?: string
}

export function ExperienceCityBackground({
  className,
}: ExperienceCityBackgroundProps) {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/city.json")
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

  if (!animationData) {
    return null
  }

  return (
    <div
      className={cn(
        "pointer-events-none relative min-h-[16rem] overflow-hidden rounded-2xl border border-foreground/10 bg-background/50 lg:min-h-[24rem] lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-[65%] h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 opacity-75 saturate-125 contrast-110 dark:opacity-55 dark:mix-blend-screen sm:top-[60%] sm:h-[34rem] sm:w-[34rem] lg:top-150 lg:h-[64rem] lg:w-[64rem] lg:opacity-95 dark:lg:opacity-75">
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="h-full w-full"
          rendererSettings={{
            preserveAspectRatio: "xMidYMid meet",
          }}
        />
      </div>
    </div>
  )
}
