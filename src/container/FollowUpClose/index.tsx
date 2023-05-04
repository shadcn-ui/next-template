/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import FollowUpCloseItems from "./FollowUpCloseItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial for 14 days"
        h1="Feedback Lifecycle Phase Four"
        h2="Follow up and close feedback"
        text="Make sure you have addressed user feedback by looping them in to check that their expectations or suggestions have been met."
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="Close the loop"
        />
        <p>
          Follow-up and closure can be some of the hardest parts of managing
          user feedback. Userback’s feedback portal allows you to easily share
          progress and resolution with users and stakeholders to ensure that
          their feedback has been addressed.
        </p>
      </div>
      <div className="md:px-[10%] pb-32">
        <img src="/images/Userback_Closure.png" alt="a" />
      </div>
      <FollowUpCloseItems />
      <QuoteComponent
        job="Founder"
        name="Juan Manuel G."
        text="EGA Futura Software is in love with Userback. It's easy to use, and very intuitive for our support representatives and our end users."
        color="#ffc040"
      />
      <ContactUs />
    </div>
  )
}

export default index
