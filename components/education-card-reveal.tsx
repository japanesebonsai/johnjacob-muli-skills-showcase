"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

import { MapLantern } from "@/components/map-lantern"

export function EducationCardReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hasEntered, setHasEntered] = useState(false)
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    const element = containerRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasEntered) {
      return
    }

    const timer = window.setTimeout(() => setShowCard(true), 2000)

    return () => window.clearTimeout(timer)
  }, [hasEntered])

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`transition-opacity duration-700 ${
          showCard ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
      <div
        className={`absolute inset-0 z-20 grid place-items-center rounded-xl border bg-card/95 transition-all duration-700 ${
          showCard
            ? "pointer-events-none translate-y-3 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
        aria-hidden={showCard}
      >
        <MapLantern />
      </div>
    </div>
  )
}
