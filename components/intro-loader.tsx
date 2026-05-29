"use client"

import { useEffect, useRef, useState } from "react"
import Lottie from "lottie-react"
import type { LottieRefCurrentProps } from "lottie-react"
import { usePathname } from "next/navigation"

import { criticalHeroAssets, lowerSectionLotties } from "@/lib/asset-preloads"
import runningBoyAnimation from "@/public/running-boy.json"

const MIN_LOADER_MS = 1800
const MAX_LOADER_MS = 3000

function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new window.Image()

    image.onload = () => {
      const decode = image.decode?.()

      if (decode) {
        decode.catch(() => undefined).finally(resolve)
        return
      }

      resolve()
    }
    image.onerror = () => resolve()
    image.src = src
  })
}

function warmJson(src: string) {
  return fetch(src, { cache: "force-cache" })
    .then(() => undefined)
    .catch(() => undefined)
}

function wait(ms: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, ms))
}

export function IntroLoader() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const runningBoyRef = useRef<LottieRefCurrentProps>(null)
  const shouldShowLoader = pathname === "/"

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    if (visible && shouldShowLoader) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = previousOverflow
    }

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [shouldShowLoader, visible])

  useEffect(() => {
    runningBoyRef.current?.setSpeed(0.7)

    if (!shouldShowLoader) {
      return
    }

    const shouldPreloadDesktop = window.matchMedia("(min-width: 1024px)").matches
    const criticalJson = [
      ...criticalHeroAssets.lotties,
      ...(shouldPreloadDesktop ? criticalHeroAssets.desktopLotties : []),
    ]
    let isMounted = true

    lowerSectionLotties.forEach((src) => {
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => warmJson(src))
        return
      }

      globalThis.setTimeout(() => warmJson(src), MIN_LOADER_MS)
    })

    const ready = Promise.all([
      ...criticalHeroAssets.images.map(preloadImage),
      ...criticalJson.map(warmJson),
    ]).then(() => undefined)

    Promise.race([
      Promise.all([ready, wait(MIN_LOADER_MS)]),
      wait(MAX_LOADER_MS),
    ]).then(() => {
      if (isMounted) {
        setVisible(false)
      }
    })

    return () => {
      isMounted = false
    }
  }, [shouldShowLoader])

  if (!shouldShowLoader || !visible) {
    return null
  }

  return (
    <div
      data-loader="intro"
      className="fixed inset-0 z-[100] overflow-hidden bg-background/95 backdrop-blur-sm"
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="intro-running-boy absolute left-0 top-0 flex items-center gap-5"
          onAnimationEnd={() => setVisible(false)}
        >
          <div className="h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <Lottie
              lottieRef={runningBoyRef}
              animationData={runningBoyAnimation}
              loop
              autoplay
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
