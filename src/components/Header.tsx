/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const Header: React.FC<{
  text: string
  mobileSize: number
  desktopSize: number
  maxWidth: number
}> = ({ text, desktopSize, mobileSize, maxWidth }) => {
  return (
    <h3
      className={`text-[${mobileSize}px] font-medium leading-[1] md:text-[${desktopSize}px] text-center`}
      style={{maxWidth : maxWidth}}
    >
      {text}
    </h3>
  )
}

export default Header
