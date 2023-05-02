/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import { Children } from "@/types/general"

const ListItemWrapper: React.FC<{ children: Children }> = ({ children }) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row children:flex-1 lg:px-[10%]">
      {children}
    </div>
  )
}

export default ListItemWrapper
