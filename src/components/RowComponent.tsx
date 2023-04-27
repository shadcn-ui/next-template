import React from "react"

import { Children } from "@/types/general"

interface Props {
  imgUrl: string
  children: Children
}

const RowComponent: React.FC<Props> = ({ children, imgUrl }) => {
  return (
    <div className="flex flex-col items-center justify-between gap-8 children:flex-1 lg:flex-row lg:gap-12 lg:px-[10%]">
      {children}
      <div>
        <img src={imgUrl} alt="image" className="max-w-[550px] w-full" />
      </div>
    </div>
  )
}

export default RowComponent
