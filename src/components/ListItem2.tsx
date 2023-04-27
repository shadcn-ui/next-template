import React from "react"
import { Divider } from "@chakra-ui/react"

interface Props {
  icon: string
  title: string
  text: string
}

const ListItem2: React.FC<Props> = ({ icon, text, title }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img src={icon} alt="title" className="w-16 lg:w-32" />
      <h2 className="text-[13px] lg:text-base lg:font-medium">{title}</h2>
      <Divider color="gray.300" className="my-4" />
      <p className="text-center">{text}</p>
    </div>
  )
}

export default ListItem2
