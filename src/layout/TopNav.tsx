/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { motion } from "framer-motion"
import { Menu, Search } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

import RouteLink from "@/components/topnav/RouteLink"

import PlatformMenu from "./PlatformMenu"
import ResourcesMenu from "./ResourcesMenu"
import UsecaseMenu from "./UsecaseMenu"

interface Props {
  setIsMenuOpen: (val: boolean) => void
}

const TopNav: React.FC<Props> = ({ setIsMenuOpen }) => {
  const [useCaseMenu, setUseCaseMenu] = useState(false)
  const [platformMenu, setPlatformMenu] = useState(false)
  const [resourcesMenu, setResourcesMenu] = useState(false)

  const [isVisible, setIsVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.pageYOffset || document.documentElement.scrollTop
      const isVisible = prevScrollPos > currentScrollPos

      setIsVisible(isVisible)
      setPrevScrollPos(currentScrollPos)
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [prevScrollPos])
  return (
    <motion.nav
      className="bg-[rgba(248,248,248,0.98)] flex flex-col fixed inset-x-0 top-0 z-50"
      initial={{ y: 0 }}
      transition={{ delay: 0.2, bounce: 0 }}
      animate={{ y: !isVisible ? -100 : 0 }}
    >
      <div className="container relative flex items-center justify-between flex-1">
        <Link href={"/"} className="py-[25px]">
          <img
            src="/images/navbar-logo.svg"
            alt="navbar-logo"
            className="hidden w-44 lg:inline-block"
          />
          <img
            src="/images/mobile-navbar-logo.webp"
            alt="navbar-logo"
            className="w-6 lg:hidden"
          />
        </Link>
        <div className="self-stretch hidden lg:flex gap-7 ">
          <RouteLink title="Use Case" setMenu={setUseCaseMenu} />
          <RouteLink title="Platform" setMenu={setPlatformMenu} />
          <RouteLink title="Resources" setMenu={setResourcesMenu} />
          <Link href={"/pricing"} className="flex items-center justify-center">
            Pricing
          </Link>
          <div className="self-center px-4 py-2 text-white transition-all rounded-full cursor-pointer bg-mainBlue hover:text-yellow">
            Get Started Free
          </div>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="hidden lg:flex">Sign In</p>
          <Search size={20} />
          <Menu
            size={20}
            className="lg:hidden"
            onClick={() => {
              setIsMenuOpen(true)
            }}
          />
        </div>
        {useCaseMenu && <UsecaseMenu setMenu={setUseCaseMenu} />}
        {platformMenu && <PlatformMenu setMenu={setPlatformMenu} />}
        {resourcesMenu && <ResourcesMenu setMenu={setResourcesMenu} />}
      </div>
    </motion.nav>
  )
}

export default TopNav
