/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import { motion } from "framer-motion"

const ButtonComponent: React.FC<{
  text: string
  style?: React.CSSProperties
  className?: string
}> = ({ text, style, className }) => {
  return (
    <motion.div
      className={`${
        className ? className : ""
      } px-6 py-3 text-center text-white rounded-full cursor-pointer bg-mainBlue`}
      whileHover={{
        y: -3,
        boxShadow: "0 20px 38px rgba(0,0,0,.16)",
        opacity: 0.87,
      }}
      transition={{ ease: [0.25, 1, 0.33, 1], duration: 0.45 }}
      style={style}
    >
      {text}
    </motion.div>
  )
}

export default ButtonComponent
