"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

export function HeroBubbleBackground() {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/hero-bubble-background.json")
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
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40"
      aria-hidden="true"
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
