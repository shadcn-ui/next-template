/* eslint-disable tailwindcss/classnames-order */

import { Menu, Search } from "lucide-react"

import RouteLink from "@/components/topnav/RouteLink"

interface Props {
  setIsMenuOpen: (val: boolean) => void
}

const TopNav: React.FC<Props> = ({ setIsMenuOpen }) => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container flex items-center justify-between h-16 py-3 ">
        <div>
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
        </div>
        <div className="hidden lg:flex gap-7">
          <RouteLink title="Use Case" />
          <RouteLink title="Platform" />
          <RouteLink title="Resources" />
          <div className="flex items-center justify-center">Pricing</div>
          <div className="px-4 py-2 text-white rounded-full bg-mainBlue">
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
      </div>
    </div>
  )
}

export default TopNav
