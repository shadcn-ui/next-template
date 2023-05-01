import Link from "next/link"
import React from "react"

interface Links {
  title : string
  link : string
}

interface Props {
  header: string
  isInTopNav ?: boolean
  links: Links[]
}

const FooterLinksWrapper: React.FC<Props> = ({ header, links ,isInTopNav  }) => {
  return (
    <div className={`flex flex-col gap-2 ${isInTopNav ? "items-start" : ""}`}>
      <h3 className="font-bold">{header}</h3>
      {links.map((link) => {
        return <Link href={link.link} key={link.title} className={isInTopNav ? "hover-underline-animation" : ""} >{link.title}</Link>
      })}
    </div>
  )
}

export default FooterLinksWrapper
