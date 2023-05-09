/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

interface Links {
  title: string
  link: string
  iconUrl: string
  color: string
}

interface Props {
  header: string
  links: Links[]
}

const setColor = (color: string) => {
  switch (color) {
    case "#6042ec":
      return "hover-underline-animation-blue"
      break
    case "#ff4060":
      return "hover-underline-animation-red"
      break
    case "#ffc040":
      return "hover-underline-animation-yellow"
      break
    case "#ff8040":
      return "hover-underline-animation-orange"
      break

    default:
      break
  }
}

const FeedbackLinkWrapper: React.FC<Props> = ({ header, links }) => {
  const router = useRouter()
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-bold">{header}</h3>
      {links.map((link) => {
        return (
          <Link
            href={link.link}
            key={link.title}
            className={`flex gap-2 items-center`}
            style={{ color: link.color }}
          >
            <img
              src={link.iconUrl}
              alt={link.title}
              className="w-[16px] h-[16px]"
            />
            <p
              className={`text-[16px] ${
                router.pathname === link.link
                  ? "border-b"
                  : setColor(link.color)
              }`}
              style={{borderBottomColor: link.color}}
            >
              {link.title}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default FeedbackLinkWrapper
