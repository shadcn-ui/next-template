/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import CaptureCollectItems from "./CaptureCollectItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your trial now - free for 14 days"
        h1="Feedback Lifecycle Phase One"
        h2="Capture and collect feedback"
        text="Gather valuable, insightful and actionable user feedback with a consistent and efficient collection process."
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="Get all the information you need first time, every time"
        />
        <p>
          Userback ensures you get contextual and visual clarity every time a
          user submits bug reports, feature requests and other feedback, all
          easily viewed and managed in a dedicated portal. This allows you to
          make and prioritize product decisions based on real insights and
          evidence without having to rely on guesswork or gutfeel.
        </p>
      </div>
      <div className="md:px-[10%] pb-32">
        <img src="/images/Userback_Collect.webp" alt="a" />
      </div>
      <CaptureCollectItems />
      <QuoteComponent
        job=""
        name="G2 Review"
        text="The fact that I don't have to schedule multiple review meetings, go back and fort emails of emails and text just make sure I understand what the feed is before investing hours on changes that could be hit or miss."
      />
      <ContactUs />
    </div>
  )
}

export default index
