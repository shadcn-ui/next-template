/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import Header from "@/components/Header"
import QuoteComponent from "@/components/QuoteComponent"
import ShowCase from "@/components/ShowCase"

import ContactUs from "@/components/ContactUs"
import HomeItems from "./HomeItems"
import HomeLanding from "./HomeLanding"

const index = () => {
  return (
    <>
      <HomeLanding />
      <div className="container">
        <ShowCase />
        <HomeItems />
        <QuoteComponent
          job="President + Founder"
          name="Just S."
          text=" One of my best investments ever. I love the simplicity of the tool
            and the features have been generous and powerful. I love that I can
            embed the feedback tools anywhere I work across multiple CMS
            systems. The reliability has been great as well."
        />
        <div className="flex flex-col items-center mb-10">
          <Header
            text=" Bring Product Managers and Developers into alignment. No guesswork
            required."
            desktopSize={30}
            mobileSize={22}
            maxWidth={600}
          />
          <ButtonComponent
            text="Start your risk free trial - no credit card required"
            className="mt-8"
          />
        </div>
       <ContactUs />
      </div>
    </>
  )
}

export default index
