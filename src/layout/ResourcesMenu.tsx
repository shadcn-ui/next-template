/* eslint-disable tailwindcss/classnames-order */

import React from "react"

import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const ResourcesMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  return (
    <div
      className="absolute inset-x-8 top-full bg-white !py-0 flex justify-between pl-8 rounded-lg shadow-lg -translate-y-2 overflow-hidden h-[176px]"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="flex justify-between flex-1 py-6 children:flex-1">
        <FooterLinksWrapper
          header="Learn More"
          links={[
            { link: "/about", title: "About Us" },
            { link: "/blog", title: "Blog" },
            { link: "", title: "Help Center" },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header="Documentation"
          links={[
            { link: "", title: "Platform Documentation" },
            { link: "", title: "API Refrence" },
            { link: "", title: "Browser Extension" },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header="Userback Userversity"
          links={[
            { link: "", title: "Resource Hub" },
          ]}
          isInTopNav
        />
      </div>
      <div className="flex w-1/4 "></div>
    </div>
  )
}

export default ResourcesMenu
