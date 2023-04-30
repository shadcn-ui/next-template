/* eslint-disable tailwindcss/classnames-order */

import React from "react"

import FooterLinksWrapper from "@/components/footer/FooterLinksWrapper"

const UsecaseMenu: React.FC<{ setMenu: (value: boolean) => void }> = ({
  setMenu,
}) => {
  return (
    <div
      className="absolute inset-x-8 top-full bg-white !py-8 flex justify-between pl-8 rounded-lg shadow-lg"
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => setMenu(false)}
    >
      <div className="flex justify-between flex-1">
        <FooterLinksWrapper
          header="USE CASE"
          links={[
            { title: "Bug Tracking", link: "/bug-tracking" },
            { title: "Website Feedback", link: "/website-feedback-tool" },
            { title: "Design Feedback", link: "/design-feedback-tool" },
            {
              title: "User Acceptance Testing",
              link: "/user-acceptance-testing",
            },
            {
              title: "Software Feature Requests",
              link: "/software-feature-requests",
            },
            { title: "Product Roadmapping", link: "/product-roadmapping" },
          ]}
        />
        <FooterLinksWrapper
          header="USERBACK FOR"
          links={[
            {
              title: "Product Managers",
              link: "/userback-for-product-managers",
            },
            { title: "Developers", link: "/userback-for-developers" },
            { link: "/userback-for-web-agencies", title: "Web Agencies" },
          ]}
        />
        <FooterLinksWrapper
          header="I’M LOOKING TO"
          links={[
            { link: "/user-feedback-to-fix", title: "Fix Apps & Websites" },
            {
              link: "/user-feedback-to-build",
              title: "Build Apps & Websites",
            },
            {
              link: "/user-feedback-to-enhance",
              title: "Enhance Apps & Websites",
            },
          ]}
        />
      </div>
      <div className="w-1/5">image</div>
    </div>
  )
}

export default UsecaseMenu
