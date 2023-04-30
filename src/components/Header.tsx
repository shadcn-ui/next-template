/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import { useMediaQuery } from "@chakra-ui/react"

const Header: React.FC<{
  text: string
  mobileSize: number
  desktopSize: number
  maxWidth: number
}> = ({ text, desktopSize, mobileSize, maxWidth }) => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 768px)")

  return (
    <h3
      className={`text-${mobileSize}px font-medium leading-[1] text-center `}
      style={{
        maxWidth: maxWidth,
        fontSize: isLargerThan1280 ? desktopSize : mobileSize,
      }}
    >
      {text}
    </h3>
  )
}

export default Header
