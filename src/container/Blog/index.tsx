/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import BlogCard from "./BlogCard"
import { BlogData } from "./BlogData"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText=""
        h1="Userback blog"
        h2="Learn all about harnessing user feedback for better product builds"
        text="Master all four phases of the feedback lifecycle"
      />
      <div className="flex flex-wrap px-[12%] justify-between gap-y-8">
        {BlogData.map((blog) => {
          return (
            <BlogCard
              image={blog.image}
              keyWords={blog.keyWords}
              link={blog.link}
              text={blog.text}
              title={blog.title}
              key={blog.title}
            />
          )
        })}
      </div>
      <ContactUs />
    </div>
  )
}

export default index
