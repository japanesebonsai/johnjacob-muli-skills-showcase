"use client"

import { useRef } from "react"
import Lottie from "lottie-react"

import { useLazyLottieData } from "@/components/use-lazy-lottie-data"
import { cn } from "@/lib/utils"

type ShoreFooterProps = {
  className?: string
  full?: boolean
}

export function ShoreFooter({ className, full = false }: ShoreFooterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationData = useLazyLottieData("/contact-shore-background.json", {
    rootMargin: "900px 0px",
    targetRef: containerRef,
  })

  if (!animationData) {
    return <div ref={containerRef} className={cn(full ? "h-full w-full" : "h-24 w-full", className)} />
  }

  return (
    <div
      ref={containerRef}
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
