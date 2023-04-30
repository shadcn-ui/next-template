/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "./ButtonComponent"
import Header from "./Header"

interface Props {
  text: string
  buttonText: string
  className?: string
  desktopSize: number
  mobileSize: number
  maxWidth: number
}

const TitleAndButton: React.FC<Props> = ({
  buttonText,
  text,
  className,
  desktopSize,
  maxWidth,
  mobileSize,
}) => {
  return (
    <div className={`flex flex-col items-center ${className ?? className}`}>
      <Header
        text={text}
        desktopSize={desktopSize}
        mobileSize={mobileSize}
        maxWidth={maxWidth}
      />
      <ButtonComponent text={buttonText} className="mt-8" />
    </div>
  )
}

export default TitleAndButton
