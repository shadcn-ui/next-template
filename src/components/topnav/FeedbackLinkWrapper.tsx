/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import Link from "next/link"

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

const setColor =(color : string)=>{
  switch (color) {
    case "mainBlue":
      return "hover-underline-animation-blue"
      break;
    case "red":
      return "hover-underline-animation-red"
      break;
    case "yellow":
      return "hover-underline-animation-yellow"
      break;
    case "orange":
      return "hover-underline-animation-orange"
      break;
  
    default:
      break;
  }
}

const FeedbackLinkWrapper: React.FC<Props> = ({ header, links }) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="font-bold">{header}</h3>
      {links.map((link) => {

        return (
          <Link
            href={link.link}
            key={link.title}
            className={`flex gap-2 items-center  text-${link.color}`}
          >
            <img
              src={link.iconUrl}
              alt={link.title}
              className="w-[16px] h-[16px]"
            />
            <p
              className={`text-[16px] ${setColor(link.color)}`}
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
