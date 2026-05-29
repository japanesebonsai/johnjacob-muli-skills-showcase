"use client"

import Lottie from "lottie-react"

import error404Animation from "@/public/error-404.json"

export function NotFoundAnimation() {
  return (
    <div
      className="mx-auto aspect-square w-full max-w-[26rem]"
      aria-hidden="true"
    >
      <Lottie
        animationData={error404Animation}
        loop
        autoplay
        className="h-full w-full"
      />
    </div>
  )
}
