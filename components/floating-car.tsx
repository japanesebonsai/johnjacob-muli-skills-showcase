"use client"

import { useEffect, useState } from "react"
import Lottie from "lottie-react"
import { motion } from "motion/react"

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
      className="pointer-events-none absolute inset-x-0 -bottom-32 z-0 hidden h-[28rem] overflow-hidden opacity-70 lg:block"
      aria-hidden="true"
    >
      <motion.div
        data-slot="floating-car"
        className="absolute bottom-0 left-0 size-[28rem]"
        initial={{ x: "-35vw" }}
        animate={{ x: "105vw" }}
        transition={{
          duration: 42,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Lottie animationData={animationData} loop autoplay />
      </motion.div>
    </div>
  )
}
