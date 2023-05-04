/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import { Quote } from "lucide-react"

interface Props {
  text: string
  name: string
  job: string
  color?: string
}

const QuoteComponent: React.FC<Props> = ({ job, name, text, color }) => {
  return (
    <div className="flex flex-col items-center gap-8 my-20">
      <Quote
        size={20}
        color={color ? color : "#6042ec"}
        fill={color ? color : "#6042ec"}
      />
      <p className="max-w-[990px] text-center text-xl font-medium text-gray-800">
        {text}
      </p>
      <div className="flex flex-col items-center">
        <p>{name}</p>
        <p className="text-gray-500 text-[14px]">{job}</p>
      </div>
    </div>
  )
}

export default QuoteComponent
