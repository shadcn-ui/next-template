import React from "react"

import { Children } from "@/types/general"

import ButtonComponent from "./ButtonComponent"
import { Check } from "lucide-react"

interface Props {
  header: string
  children: Children
  button?: string
  items?: string[]
}

const TextCol: React.FC<Props> = ({ children, header, button, items }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-[34px] font-medium leading-9">{header}</h1>
      <div className="flex flex-col gap-3 text-gray-700">{children}</div>
      {items && (
        <ul className="flex flex-col gap-1.5 text-gray-600">
          {items?.map((item) => {
            return (
              <li className="flex items-center gap-4">
                <Check size={16} color="#6042ec" />
                <p>{item}</p>
              </li>
            )
          })}
        </ul>
      )}
      {button && (
        <ButtonComponent
          text={button}
          style={{ fontSize: 12 , paddingBlock : 10 , paddingInline : 15 }}
        />
      )}
    </div>
  )
}

export default TextCol
