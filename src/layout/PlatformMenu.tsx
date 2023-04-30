/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const PlatformMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  return (
    <div
      className="absolute inset-x-8 top-full bg-rose-300 !py-0"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      PlatformMenu
    </div>
  )
}

export default PlatformMenu
