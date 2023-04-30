import React from "react"
import { Divider } from "@chakra-ui/react"

interface Props {
  icon: string
  title: string
  text: string
  hasLine: boolean
}

const ListItem: React.FC<Props> = ({ icon, text, title, hasLine }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} alt="title" className={hasLine ? "w-16 lg:w-32" : "w-12 lg:w-24"} />
      <h2 className="text-[13px] lg:text-base lg:font-medium">{title}</h2>
      {hasLine && <Divider color="gray.300" className="my-4" />}
      <p className={`text-center ${!hasLine ? "max-w-[330px]":""}`}>{text}</p>
    </div>
  )
}

export default ListItem
