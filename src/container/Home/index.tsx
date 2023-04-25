/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import { Quote } from "lucide-react"

import HomeEmail from "./HomeEmail"
import HomeItems from "./HomeItems"
import HomeLanding from "./HomeLanding"
import ShowCase from "./ShowCase"

const index = () => {
  return (
    <>
      <HomeLanding />
      <div className="container">
        <ShowCase />
        <HomeItems />
        <div className="flex flex-col items-center my-20">
          <Quote size={20} color="#6042ec" />
          <p className="max-w-[990px] text-center text-lg font-medium">
            One of my best investments ever. I love the simplicity of the tool
            and the features have been generous and powerful. I love that I can
            embed the feedback tools anywhere I work across multiple CMS
            systems. The reliability has been great as well.
          </p>
          <div className="flex flex-col items-center mt-8">
            <p>Just S.</p>
            <p className="text-gray-500">President + Founder</p>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h3 className="max-w-[600px] text-[18px] font-medium leading-[1] md:text-[30px] text-center">
            Bring Product Managers and Developers into alignment. No guesswork
            required.
          </h3>
          <p className="px-6 py-3 mt-8 text-white rounded-full bg-mainBlue">
            Start your risk free trial - no credit card required
          </p>
        </div>
        <HomeEmail />
      </div>
    </>
  )
}

export default index
