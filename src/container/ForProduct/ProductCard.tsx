/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"

const ProductCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#e7e8f6] justify-between children:flex-1 md:px-[5%] lg-px-[15%] items-center py-16 px-4 gap-16">
      <div className="flex flex-col items-center gap-6 text-center ">
        <h1 className="text-[26px] lg:text-[35px] leading-9 text-gray-700">
          Join the 1000’s of Product Managers already benefiting from Userback
        </h1>
        <p>
          Hear from Aviv Mizrahi, Tomorrow.io’s Product Manager and learn why
          after an extensive market review, Tomorrow.io chose Userback to
          capture real-time feedback from users.
        </p>
        <ButtonComponent text={`Read Aviv's story now`} className="mt-6" />
      </div>
      <div className="flex flex-col items-center">
        <img src="/images/Aviv.webp" alt="b" />
        <img src="/images/Tomorrow_white_2022.svg" alt="a" className="w-[386px] md:w-[520px] lg:w-[440px]" />
      </div>
    </div>
  )
}

export default ProductCard
