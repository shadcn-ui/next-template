import React from "react"

interface Props {
  title: string
  text: string
  image: JSX.Element
}

const OurValues: React.FC<Props> = ({ image, text, title }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      {image}
      <h2 className="text-[24px] font-medium">{title}</h2>
      <p>{text}</p>
    </div>
  )
}

export default OurValues
