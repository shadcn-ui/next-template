/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import AssessPrioritizeItems from "./AssessPrioritizeItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial"
        h1="Feedback Lifecycle Phase Three"
        h2="Assess and prioritize feedback"
        text="Prioritize the features and fixes your users want the most, so you can create products that they love."
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="Know which features and fixes you need to prioritize"
        />
        <p>
          With greater detail and insight you can make better informed product
          decisions, triage feedback faster and take the guesswork out of what
          to do next.
        </p>
      </div>
      <div className="md:px-[10%] pb-32">
        <img src="/images/Userback_Assess_1.png" alt="a" />
      </div>
      <AssessPrioritizeItems />
      <QuoteComponent
        job="Product Manager"
        name="JP S"
        text="I recently started a new position and needed to re-invigorate user feedback. After some research, I selected Userback, because it integrated well with everything I needed."
        color="#ff4060"
      />
      <ContactUs />
    </div>
  )
}

export default index
