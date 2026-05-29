"use client"

import { RefObject, useEffect, useState } from "react"

type UseLazyLottieDataOptions = {
  enabled?: boolean
  rootMargin?: string
  targetRef?: RefObject<Element | null>
}

export function useLazyLottieData(
  src: string,
  {
    enabled = true,
    rootMargin = "600px 0px",
    targetRef,
  }: UseLazyLottieDataOptions = {},
) {
  const [animationData, setAnimationData] = useState<unknown>(null)

  useEffect(() => {
    if (!enabled) {
      return
    }

    let isMounted = true
    let observer: IntersectionObserver | null = null
    const target = targetRef?.current

    const load = () => {
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
    }

    if (!target || typeof IntersectionObserver === "undefined") {
      load()
      return () => {
        isMounted = false
      }
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer?.disconnect()
          load()
        }
      },
      { rootMargin },
    )

    observer.observe(target)

    return () => {
      isMounted = false
      observer?.disconnect()
    }
  }, [enabled, rootMargin, src, targetRef])

  return animationData
}

