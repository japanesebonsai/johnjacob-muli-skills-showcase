"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"

export function EducationBoy() {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    let isMounted = true

    fetch("/education-student-illustration.json")
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
      className="pointer-events-none h-52 w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
      aria-hidden="true"
    >
      <Lottie animationData={animationData} loop autoplay />
    </div>
  )
}
