/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */


import AlternativeCompression from "@/components/AlternativeCompression"
import { Usersnap } from "@/container/UsersnapAlternative/datamock"

const UsersnapAlternativeItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          Chose faster implementation and get deeper insight for your user
          feedback
        </h1>
        <p className="text-center">
          G2 consistently rates Userback the simplest, fastest user feedback
          platform to implement. Once your up and going, collect more feedback
          and attach additional insights at a level unmatched in the industry.
        </p>
        <img
          src="/images/Bug-Tracking.webp"
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
      </div>
      <div className="flex-col hidden gap-16 px-8 py-32 sm:flex lg:px-48">
        <AlternativeCompression list={Usersnap} />
      </div>
    </div>
  )
}

export default UsersnapAlternativeItems
