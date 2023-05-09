/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import Header from "@/components/Header"

interface Props {
  text: string
  h1: string
  h2: string
  buttonText: string
}

const PagesHeader: React.FC<Props> = ({ buttonText, h1, h2, text }) => {
  return (
    <div className="flex flex-col items-center gap-6 py-32">
      <p className="text-center text-[15px] font-medium text-[#92a6b7] lg:text-[17px]">
        {h1}
      </p>
      <Header text={h2} mobileSize={35} desktopSize={50} maxWidth={900} />
      <p className="font-medium text-center max-w-[650px] text-[14px] lg:text-[18px]">
        {text}
      </p>
      {buttonText && <ButtonComponent text={buttonText} />}
    </div>
  )
}

export default PagesHeader
