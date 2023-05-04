import React from "react"
import { Divider } from "@chakra-ui/react"

import ButtonComponent from "./ButtonComponent"

interface Props {
  icon: string
  title: string
  text: string
  hasLine: boolean
  button?: string
}

const ListItem: React.FC<Props> = ({ icon, text, title, hasLine, button }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={icon}
        alt="title"
        className={hasLine ? "w-16 lg:w-32" : "w-16 lg:w-20"}
      />
      <h2 className="text-[13px] lg:text-base lg:font-medium">{title}</h2>
      {hasLine && <Divider color="gray.300" className="my-4" />}
      <p className={`text-center pb-4 ${!hasLine ? "max-w-[330px]" : ""}`}>{text}</p>
      {button && (
        <ButtonComponent
          text={button}
          className="mt-auto"
          style={{ fontSize: 12, paddingBlock: 10, paddingInline: 15 }}
        />
      )}
    </div>
  )
}

export default ListItem
