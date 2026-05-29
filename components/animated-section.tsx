"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  distance = 28,
}: AnimatedSectionProps) {
  return (
    <motion.div
      data-scroll-reveal=""
      className={className}
      initial={{ opacity: 0, y: distance, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -48px 0px" }}
      transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
