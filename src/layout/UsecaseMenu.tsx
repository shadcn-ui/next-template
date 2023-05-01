/* eslint-disable tailwindcss/classnames-order */

import React, { useState } from "react"
import Link from "next/link"

import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const UsecaseMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  const [isHover, setisHover] = useState(false)
  return (
    <div
      className="absolute inset-x-8 top-full bg-white !py-0 flex justify-between pl-8 rounded-lg shadow-lg -translate-y-2 overflow-hidden h-[330px]"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="flex justify-between flex-1 py-6 children:flex-1">
        <FooterLinksWrapper
          header="USE CASE"
          links={[
            { title: "Bug Tracking", link: "/bug-tracking" },
            {
              title: "User Acceptance Testing",
              link: "/user-acceptance-testing",
            },
            { title: "Website Feedback Tool", link: "/website-feedback-tool" },
            { title: "Design Feedback Tool", link: "/design-feedback-tool" },

            {
              title: "Software Feature Requests",
              link: "/software-feature-requests",
            },
            { title: "Product Roadmapping", link: "/product-roadmapping" },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header="User Role"
          links={[
            {
              title: "Userback For Product Managers",
              link: "/userback-for-product-managers",
            },
            {
              title: "Userback For Developers",
              link: "/userback-for-developers",
            },
            {
              link: "/userback-for-web-agencies",
              title: "Userback For Web Agencies",
            },
          ]}
          isInTopNav
        />
        <FooterLinksWrapper
          header="I’M LOOKING TO"
          links={[
            {
              link: "/user-feedback-to-build",
              title: "Build Apps & Websites",
            },
            { link: "/user-feedback-to-fix", title: "Fix Apps & Websites" },
            {
              link: "/user-feedback-to-enhance",
              title: "Enhance Apps & Websites",
            },
          ]}
          isInTopNav
        />
      </div>
      <Link
        href={"/"}
        className="relative flex w-1/4 text-white bg-no-repeat bg-cover"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        style={{
          backgroundImage: "url(/images/usecaseimg.webp)",
        }}
      >
        <div className="z-10 flex flex-col flex-1 p-8">
          <h1 className="text-[33px] ">G2 Reviews</h1>
          <p className="leading-5 text-[12px]">
            You’re in good company with Userback. Check out what others are
            saying and buy with confidence.
          </p>
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isHover ? "opacity-70" : "opacity-100"
          }`}
          style={{
            backgroundImage: "linear-gradient(360deg,transparent,#6042ec)",
          }}
        ></div>
      </Link>
    </div>
  )
}

export default UsecaseMenu
