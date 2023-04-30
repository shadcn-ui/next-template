import React from "react"
import { ChevronDown } from "lucide-react"

const RouteLink: React.FC<{
  title: string
  setMenu: (value: boolean) => void
}> = ({ title, setMenu }) => {
  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={() => {
        setMenu(true)
      }}
      onMouseLeave={() => {
        setMenu(false)
      }}
    >
      <p>{title}</p>
      <ChevronDown size={16} className="mt-1" />
    </div>
  )
}

export default RouteLink
