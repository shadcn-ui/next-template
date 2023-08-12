"use client"

import { HtmlHTMLAttributes, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { Variants, motion } from "framer-motion"

import { defaultVariants } from "@/config/variants"
import { cn } from "@/lib/utils"

interface MotionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  variants?: Variants
}

const Component = forwardRef<HTMLDivElement, MotionProps>(
  ({ variants, asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return <Comp ref={ref} {...props} className={cn("transition-none", {})} />
  }
)

Component.displayName = "Motion"
const MotionComponent = motion(Component)

const withVariants =
  (Comp: typeof MotionComponent): typeof MotionComponent =>
  // @ts-ignore
  // eslint-disable-next-line react/display-name
  (props: any) =>
    <Comp variants={defaultVariants} {...props} />

const Motion = withVariants(MotionComponent)

export default Motion
