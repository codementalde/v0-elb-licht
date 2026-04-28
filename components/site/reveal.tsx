"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: "div" | "section" | "article" | "li" | "header"
} & Omit<HTMLMotionProps<"div">, "children">

export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const Comp = motion[as] as typeof motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  )
}
