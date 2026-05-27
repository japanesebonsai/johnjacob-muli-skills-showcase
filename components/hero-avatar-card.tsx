"use client"

import Image from "next/image"

import { profile } from "@/lib/portfolio-data"

export function HeroAvatarCard() {
  return (
    <div className="relative mx-auto grid min-h-[32rem] w-full max-w-80 place-items-start pt-2 sm:max-w-[42rem] lg:-translate-y-10">
      <div className="hero-avatar-float relative z-10 grid place-items-center rounded-[2rem] p-8">
        <div className="relative p-8">
          <div className="hero-avatar-wobble relative size-64 overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-orange-400 p-0.25 shadow-[0_0_70px_rgba(249,115,22,0.55)] sm:size-80">
            <div className="relative size-full overflow-hidden rounded-[38%_62%_46%_54%/48%_42%_58%_52%] bg-muted">
              <Image
                src={profile.profileImage}
                alt="Portrait of John Jacob Muli"
                fill
                priority
                sizes="(min-width: 640px) 320px, 256px"
                className="object-cover object-[50%_42%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
