/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */

import { Marker } from "@/container/MarkerAlternative/datamock"

import AlternativeCompression from "@/components/AlternativeCompression"

const MarkerAlternativeItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          Faster implementation, deeper insights, better features
        </h1>
        <p className="text-center">
          Looking for a better Marker.io alternative? We’ve got your back. Don’t
          take our word from it. Check out and compare Userback on the world’s
          most trusted SaaS review site, G2.
        </p>
        <img
          src="/images/Bug-Tracking.webp"
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
      </div>
      <div className="flex-col hidden gap-16 px-8 py-32 sm:flex lg:px-48">
        <AlternativeCompression list={Marker} />
      </div>
    </div>
  )
}

export default MarkerAlternativeItems
