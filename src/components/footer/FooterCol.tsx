/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import { Children } from "@/types/general"

interface Props {
  children: Children
}

const FooterCol: React.FC<Props> = (props) => {
  return <div className="flex flex-col gap-8 mb-6">{props.children}</div>
}

export default FooterCol
