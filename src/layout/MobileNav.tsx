/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import { motion } from "framer-motion"

interface Props {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
}

const MobileNav: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.div
      initial={{ right: -320, zIndex: -1 }}
      animate={isOpen ? { right: 0, zIndex: 0 } : { right: -320, zIndex: -1 }}
      transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0] }}
      className={`fixed flex flex-col gap-10 text-white sm:w-[360px] py-14 sm:px-[60px] h-full justify-center w-[78vw] px-[50px] ${
        isOpen ? "right-0" : "right-[78vw] sm:right-[360px]"
      }`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className="flex items-center self-end justify-center w-12 h-12 rounded-full"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
      >
        <motion.div
          className="w-0.5 bg-white"
          initial={{ x: 0, rotate: 45 }}
          animate={isOpen ? { x: 0, rotate: 45, opacity: 1 , height : "26px" } : { opacity: 0 , height : 0 }}
          transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0], delay: 0.5 }}
        ></motion.div>
        <motion.div
          className="absolute w-0.5 bg-white"
          initial={{ x: 0, rotate: 135 }}
          animate={
            isOpen ? { x: 0, rotate: 135, opacity: 1 , height : "26px" } : { opacity: 0 , height : 0 }
          }
          transition={{ duration: 0.8, ease: [0.15, 0.2, 0.1, 0], delay: 0.5 }}
        ></motion.div>
      </div>
      <div
        className="p-4 mb-auto rounded"
        style={{ backgroundColor: "rgba(0,0,0,.1)" }}
      >
        Sign In
      </div>
      <ul className="flex flex-col flex-1 gap-12 text-2xl sm:text-4xl">
        <p>Use Case</p>
        <p>Platform</p>
        <p>Resources</p>
        <p>Pricing</p>
        <p>Get Started Free</p>
      </ul>
    </motion.div>
  )
}

export default MobileNav
