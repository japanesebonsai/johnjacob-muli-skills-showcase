"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

export function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    let isMounted = true

    fetch("/loader-cat.json")
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

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center bg-background/95 backdrop-blur-sm"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="grid size-32 place-items-center">
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="size-32"
            />
          ) : (
            <div className="size-10 animate-pulse rounded-full bg-foreground" />
          )}
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Loading playful things...
        </p>
      </div>
    </div>
  )
}
