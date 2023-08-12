import Image from "next/image"
import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  logo: (props: LucideProps) => (
    <Image src={`/next.svg`} alt="logo" width={100} height={100} />
  ),
}
