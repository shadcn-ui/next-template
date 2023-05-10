/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import React from "react"
import { Check, X } from "lucide-react"

interface Props {
  list: {
    text: string
    hasCheck?: boolean
  }[]
}

const AlternativeCompression: React.FC<Props> = ({ list }) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-4 my-2">
        <div className="flex-[2]"></div>
        <div className="flex justify-between ml-auto text-[22px] font-medium flex-1 items-center">
          <div>
            <img
              src="/images/Userback-Site-Logo.webp"
              alt="userback"
              className="w-16"
            />
          </div>
          <div className="translate-x-8">Alternative</div>
        </div>
      </div>
      {list.map((listItem) => {
        return (
          <div className="flex gap-4">
            <div className="flex-[2] text-gray-700 text-center">{listItem.text}</div>
            <div className="flex justify-between flex-1 ml-auto">
              <div className="ml-6">
                <Check
                  stroke-width="5"
                  color="#6042ec"
                  width="40"
                  height="40"
                />
              </div>
              <div>
                {listItem.hasCheck ? (
                  <Check
                    stroke-width="5"
                    color="#848384"
                    width="40"
                    height="40"
                  />
                ) : (
                  <X stroke-width="5" color="#000" width="40" height="40" />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AlternativeCompression
