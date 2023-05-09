/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
import React from "react"

interface Props {
  hideText?: boolean
}

const ShowCase: React.FC<Props> = ({ hideText }) => {
  return (
    <div className="flex flex-col items-center mt-20">
      {!hideText && (
        <h2 className="max-w-[780px] text-[24px] leading-[1] md:text-[32px] text-center font-semibold">
          Helping 20,000+ software teams use Userback to understand what users need and
          create products that they love
        </h2>
      )}
      <div className="grid items-center self-stretch grid-cols-2 gap-2 mt-10 sm:grid-cols-3 lg:grid-cols-6 lg:px-[10%]">
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase1.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase2.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase3.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase4.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase5.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/showcase6.webp"
            alt="showcase"
            className="w-full max-w-[100px]"
          />
        </div>
      </div>
    </div>
  )
}

export default ShowCase
