/* eslint-disable tailwindcss/classnames-order */
import React from "react"

const HomeLanding = () => {
  return (
    <div
      style={{ background: "linear-gradient(45deg,#6042ec 0%,#ff4060 100%)" }}
    >
      <div className="container flex flex-col text-white lg:pl-[15%] py-[100px] px-[10%] lg:pr-0">
        <div>
          <img
            src="/images/home-landing.webp"
            alt="home landing"
            className="w-[80px] md:w-[280px]"
          />
        </div>
        <p className="mt-4 mb-10 font-bold">
          #1 USER FEEDBACK MANAGEMENT FOR WEB APPLICATIONS & WEBSITES
        </p>
        <h2 className="text-[35px] md:text-[50px] font-bold max-w-[1000px] leading-[1]">
          Know what users need, build what they love and deliver it faster.
        </h2>
        <p className="max-w-[900px] mt-4 leading-[1]">
          Supercharge your product growth by getting straight to what your users
          care about – bug reports, validated feature requests and much, much
          more.
        </p>
        <div className="flex items-center justify-center gap-8 md:justify-start">
          <div className="flex flex-col items-center self-center gap-3 mt-10 md:self-start">
            <p className="px-6 py-3 rounded-full bg-cyan-500">
              Start collecting risk free
            </p>
            <p className="text-sm">No credit card required</p>
          </div>
          <p className="hidden px-6 py-3 mt-[10px] border-2 rounded-full md:block">
            Start collecting risk free
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeLanding
