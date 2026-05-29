"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

import { cn } from "@/lib/utils"

type ShoreFooterProps = {
  className?: string
  full?: boolean
}

export function ShoreFooter({ className, full = false }: ShoreFooterProps) {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/shore.json")
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
        full
          ? "h-full w-full overflow-hidden [&_svg]:!h-full [&_svg]:!w-full"
          : "h-24 w-full overflow-hidden sm:h-28 lg:h-32",
        className
      )}
      aria-hidden="true"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        rendererSettings={{
          preserveAspectRatio: full ? "none" : "xMidYMid meet",
        }}
        style={{
          width: "100%",
          height: full ? "100%" : undefined,
          display: "block",
          transform: full ? undefined : "scale(1.04)",
          transformOrigin: full ? undefined : "top center",
        }}
      />
    </div>
  )
}
