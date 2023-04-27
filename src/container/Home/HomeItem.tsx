import React from "react"

import ButtonComponent from "@/components/ButtonComponent"

interface Props {
  title: string
  color: string
  icon: string
  header: string
  text: string
  buttonText: string
  quote: string
  person: string
}

const HomeItem: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col gap-6 max-w-[500px]">
      <div className="flex items-center gap-4">
        <img src={props.icon} alt="" className="w-9 h-9" />
        <h2 className="text-3xl font-bold" style={{ color: props.color }}>
          {props.title}
        </h2>
      </div>
      <h3 className="mt-2 -mb-2 text-lg font-medium">{props.header}</h3>
      <p>{props.text}</p>
      <ButtonComponent
        text={props.buttonText}
        style={{ backgroundColor: props.color , paddingBlock : "0.5rem" , paddingInline : "0.75rem" , fontSize : 12 }}
        className="self-start"
      />
      <p className="-mb-5 italic text-gray-500">{props.quote}</p>
      <p className="text-gray-500">{props.person}</p>
    </div>
  )
}

export default HomeItem
