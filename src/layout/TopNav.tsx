/* eslint-disable tailwindcss/classnames-order */

import { useState } from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react"

import RouteLink from "@/components/topnav/RouteLink"
import UsecaseMenu from "./UsecaseMenu"
import PlatformMenu from "./PlatformMenu"
import ResourcesMenu from "./ResourcesMenu"

interface Props {
  setIsMenuOpen: (val: boolean) => void
}

const TopNav: React.FC<Props> = ({ setIsMenuOpen }) => {
  const [useCaseMenu, setUseCaseMenu] = useState(false)
  const [platformMenu, setPlatformMenu] = useState(false)
  const [resourcesMenu, setResourcesMenu] = useState(false)
  return (
    <div className="bg-[#F8F8F8]  flex flex-col">
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
          <Link href={'/pricing'} className="flex items-center justify-center">Pricing</Link>
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
    </div>
  )
}

export default TopNav
