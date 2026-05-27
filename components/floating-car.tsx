"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

export function FloatingCar() {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/car.json")
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
      className="pointer-events-none absolute -bottom-20 left-1/2 z-0 hidden size-72 -translate-x-1/2 opacity-70 sm:block md:-bottom-28 md:size-96 lg:-bottom-32 lg:size-[28rem]"
      aria-hidden="true"
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  )
}
