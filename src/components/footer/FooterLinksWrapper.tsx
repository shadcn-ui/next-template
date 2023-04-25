import React from "react"

interface Props {
  header: string
  links: string[]
}

const FooterLinksWrapper: React.FC<Props> = ({ header, links }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-bold">{header}</h3>
      {links.map((link) => {
        return <p>{link}</p>
      })}
    </div>
  )
}

export default FooterLinksWrapper
