/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { Bugherd } from "@/container/BugherdAlternative/datamock"

import AlternativeCompression from "@/components/AlternativeCompression"

const BugherdAlternativeItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          Go with the real #1 for bug tracking according to real users
        </h1>
        <p className="text-center">
          The market has spoken, and voted Userback the #1 tool for bug tracking
          across web applications and web sites. Capture more, automate more and
          do more with the simplicity of Userback.
        </p>
        <img
          src="/images/Bug-Tracking.webp"
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
      </div>
      <div className="flex-col hidden gap-16 px-8 py-32 sm:flex lg:px-48">
        <AlternativeCompression list={Bugherd} />
      </div>
    </div>
  )
}

export default BugherdAlternativeItems
