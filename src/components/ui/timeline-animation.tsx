"use client"

import React from "react"
import { motion, useInView, Variant } from "framer-motion"
import { cn } from "@/src/lib/utils"

interface TimelineContentProps {
  children: React.ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLElement | null>
  customVariants?: {
    visible: (i: number) => Variant
    hidden: Variant
  }
  className?: string
  as?: React.ElementType
  key?: string | number
}

export function TimelineContent({
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  as: Component = "div",
}: TimelineContentProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  const variants = customVariants || defaultVariants

  return (
    <Component
      ref={ref}
      className={className}
    >
      <motion.div
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    </Component>
  )
}
