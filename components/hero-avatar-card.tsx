"use client"

import Image from "next/image"
import { motion } from "motion/react"

import { profile } from "@/lib/portfolio-data"

type HeroAvatarCardProps = {
  compact?: boolean
}

export function HeroAvatarCard({ compact = false }: HeroAvatarCardProps) {
  if (compact) {
    return (
      <motion.div
        className="relative z-10 grid place-items-center p-1"
        animate={{ y: [5, -8, 5] }}
        transition={{
          duration: 5.8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="hero-avatar-wobble relative size-32 overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-orange-400 p-0.25 shadow-[0_0_54px_rgba(249,115,22,0.52)] min-[430px]:size-36 md:size-44 md:shadow-[0_0_72px_rgba(249,115,22,0.55)]">
          <div className="relative size-full overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-muted">
            <Image
              src={profile.profileImage}
              alt="Portrait of John Jacob Muli"
              fill
              priority
              sizes="(min-width: 768px) 176px, 144px"
              className="object-cover object-[50%_42%]"
            />
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="relative mx-auto grid min-h-80 w-full max-w-96 place-items-start pt-0 sm:min-h-[34rem] sm:max-w-[44rem] sm:pt-2 lg:-translate-y-12">
      <motion.div
        className="relative z-10 grid place-items-center rounded-[2rem] p-3 sm:p-8"
        animate={{ y: [10, -18, 10] }}
        transition={{
          duration: 5.2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <div className="relative p-4 sm:p-8">
          <div className="hero-avatar-wobble relative size-56 overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-orange-400 p-0.25 shadow-[0_0_70px_rgba(249,115,22,0.55)] sm:size-80 sm:shadow-[0_0_90px_rgba(249,115,22,0.6)] lg:size-96">
            <div className="relative size-full overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-muted">
              <Image
                src={profile.profileImage}
                alt="Portrait of John Jacob Muli"
                fill
                priority
                sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
                className="object-cover object-[50%_42%]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
