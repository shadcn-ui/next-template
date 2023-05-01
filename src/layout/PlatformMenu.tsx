/* eslint-disable tailwindcss/classnames-order */

import React, { useState } from "react"
import Link from "next/link"

import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"
import FeedbackLinkWrapper from "@/components/topnav/FeedbackLinkWrapper"

const PlatformMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
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
          header="DEMO CENTER"
          links={[{ link: "", title: "Hands-on Demo" }]}
          isInTopNav
        />
        <FooterLinksWrapper
          header="PLATFORM"
          links={[
            { link: "", title: "In App Feedback" },
            { link: "", title: "Screen Annotation" },
            { link: "", title: "Video Recording" },
            { link: "", title: "Session Replay" },
            { link: "", title: "User Insights" },
            { link: "", title: "Feedback Portal" },
            { link: "", title: "Integrations" },
          ]}
          isInTopNav
        />
        <FeedbackLinkWrapper
          header="FEEDBACK LIFECYCLE"
          links={[
            {
              link: "",
              title: "Capture & Collect",
              color: "mainBlue",
              iconUrl: "/icons/Collect-icon.webp",
            },
            {
              link: "",
              title: "Assess & Prioritize",
              color: "red",
              iconUrl: "/icons/Assess-icon.webp",
            },
            {
              link: "",
              title: "Assign & Action",
              color: "orange",
              iconUrl: "/icons/Assign-icon.webp",
            },
            {
              link: "",
              title: "Follow up & Close",
              color: "yellow",
              iconUrl: "/icons/Close-icon.webp",
            },
          ]}
        />
      </div>
      <Link
        href={"/"}
        className="relative flex w-1/4 text-white bg-no-repeat bg-cover"
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        style={{
          backgroundImage: "url(/images/platformImg.webp)",
        }}
      >
        <div className="z-10 flex flex-col flex-1 p-8 hover:last:opacity-50">
          <h1 className="text-[33px]">Demo</h1>
          <p className="leading-5 text-[12px]">
            Get hands-on with Userback with our interactive demo and learn how
            to manage all four phases of the feedback lifecycle. From collection
            to closure, we make it easy.
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

export default PlatformMenu
