/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const ResourcesMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  return (
    <div
      className="absolute inset-x-8 top-full bg-indigo-300 !py-0"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      ResourcesMenu
    </div>
  )
}

export default ResourcesMenu
