/* eslint-disable @next/next/no-img-element */
import React from "react"

interface Props {
  title: string
  text: string
  image: string
}

const AboutItem: React.FC<Props> = ({ image, text, title }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-[24px] font-medium">{title}</h2>
      <p>{text}</p>
      <img src={image} alt={title} className="w-[120px] mt-auto" />
    </div>
  )
}

export default AboutItem
