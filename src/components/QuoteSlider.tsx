/* eslint-disable tailwindcss/classnames-order */
import React from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"

// import Swiper and modules styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import { Navigation, Pagination } from "swiper"

const Slides = [
  {
    title:
      "Saves time, improves communication. It's by far the best tool out there for acquiring visual feedback on our websites.",
    rate: 4.5,
    name: "Shane B.",
    position: "Founder",
    id: 1,
  },
  {
    title:
      "Elegant, simple, and great value for money. UserBack is a must-look-at for anyone in need of a feedback tool.",
    rate: 4.5,
    name: "JP S",
    position: "Product Manager",
    id: 2,
  },
  {
    title:
      "Amazing for any SaaS or Software Development Company. I love the software... and the support is always amazing.",
    rate: 4.5,
    name: "Naveen D.",
    position: "Assistant Manager",
    id: 3,
  },
  {
    title:
      "Easy and practical to use tool for both bug tracking and customer feedback.",
    rate: 4.5,
    name: "Adrian C.",
    position: "QA Manager",
    id: 4,
  },
  {
    title: `The software is customizable. We use "status" for issue and bug tracking, moving tickets into sprints, beta and live, and the backlog.`,
    rate: 4.5,
    name: "Jess W.",
    position: "Digital Project Manager",
    id: 5,
  },
  {
    title:
      "Userback has quickly become a critical tool for external and internal users to provide feedback. Internal staff LOVE the ease of use and improved workflow.",
    rate: 4.5,
    name: "Kenton S.",
    position: "Technology Supervisor",
    id: 6,
  },
]

const QuoteSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      centeredSlides
      spaceBetween={10}
      grabCursor
      loop={true}
      navigation={{ nextEl: "#slider-next-btn", prevEl: "#slider-prev-btn" }}
      modules={[Pagination, Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
    >
      {Slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col items-center gap-8">
              <div className={`quote-wrapper`}>
                <div className="opacity-40">
                  <Quote
                    fill="rgba(156 ,163 ,175)"
                    color="rgba(156 ,163 ,175)"
                  />
                </div>
                <p className="text-[1.25rem]">{slide.title}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs">{slide.name}</p>
                <p className="text-sm text-gray-500">{slide.position}</p>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
      <div className="flex items-center justify-center gap-8 pt-8">
        <motion.div
          whileHover={{ scale: 1.16 }}
          className="p-4 bg-white rounded-full cursor-pointer"
          id="slider-prev-btn"
        >
          <ArrowLeft id="asdfg" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.16 }}
          className="p-4 bg-white rounded-full cursor-pointer"
          id=""
        >
          <ArrowRight id="slider-next-btn" />
        </motion.div>
      </div>
    </Swiper>
  )
}

export default QuoteSlider
