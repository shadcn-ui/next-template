/* eslint-disable tailwindcss/classnames-order */

import ContactUs from "@/components/ContactUs"
import QuoteComponent from "@/components/QuoteComponent"
import ShowCase from "@/components/ShowCase"
import TitleAndButton from "@/components/TitleAndButton"

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
        <TitleAndButton
          buttonText="Start your risk free trial - no credit card required"
          className="mb-10"
          text="Bring Product Managers and Developers into alignment. No guesswork
            required."
          desktopSize={35}
          maxWidth={670}
          mobileSize={24}
        />
        <ContactUs />
      </div>
    </>
  )
}

export default index
