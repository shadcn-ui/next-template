import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ExternalLink } from "@/functions/ExternalLinks"

interface Links {
  title: string
  link: string
}

interface Props {
  header: string
  isInTopNav?: boolean
  links: Links[]
}

const FooterLinksWrapper: React.FC<Props> = ({ header, links, isInTopNav }) => {
  const router = useRouter()
  return (
    <div className={`flex flex-col gap-2 ${isInTopNav ? "items-start" : ""}`}>
      <h3 className="font-bold">{header}</h3>
      {links.map((link) => {
        if (link.link) {
          return (
            <Link
              href={link.link}
              key={link.title}
              className={
                isInTopNav && router.pathname === link.link
                  ? "border-b border-b-[#000]"
                  : isInTopNav
                  ? "hover-underline-animation"
                  : ""
              }
            >
              {link.title}
            </Link>
          )
        } else {
          return (
            <div
              key={link.title}
              onClick={() => ExternalLink()}
              className={isInTopNav ? "hover-underline-animation cursor-pointer" : "cursor-pointer"}
            >
              {link.title}
            </div>
          )
        }
      })}
    </div>
  )
}

export default FooterLinksWrapper
