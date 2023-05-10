/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import VideosTabs from "@/components/VideosTabs"

import InAppFeedbackItems from "./InAppFeedbackItems"
import BlogCard from "@/container/Blog/BlogCard"
import { BlogData } from "@/container/Blog/BlogData"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Try Userback free for 14 days"
        h1="In-App Feedback"
        h2="Capture feedback at the source"
        text="Enable your users to provide real-time visual feedback ‘on-the-fly’ without leaving your site or web-app"
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="Collect bug reports, feature requests, and general feedback, together"
        />
        <p>
          Tired of sifting through emails, recalling phone conversations, or
          sorting notes and scribbles? Collect it all in a single location and
          get feedback from your users without them ever having to leave your
          app. Create the highest quality, with the lowest effort thanks to
          Userback’s in-app feedback capability.
        </p>
      </div>
      <VideosTabs type={1} />
      <QuoteComponent
        job="Senior Digital Designer – DigiStorm"
        name="Amy Waddell"
        text={`Userback has helped streamline our team's QA processes. We work with lots of clients and have many cross-team projects so it’s been a breath of fresh air having all QA in the one place. I particularly love how easy it is to check once feedback has been completed.`}
      />
      <InAppFeedbackItems />
      <div className="flex flex-wrap px-[12%] justify-between gap-y-8">
        {BlogData.slice(0,3).map((blog) => {
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
