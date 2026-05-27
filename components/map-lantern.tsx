"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

export function MapLantern() {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/lantern.json")
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
      className="pointer-events-none mx-auto grid size-40 place-items-center sm:size-48 lg:size-56"
      aria-hidden="true"
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  )
}
