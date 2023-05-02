import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteSlider from "@/components/QuoteSlider"

import FeatureReqItems from "./FeatureReqItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start prioritizing features free"
        h1="Software Feature Requests"
        h2="Prioritize the features that users will love"
        text="Know what users need so you can build the features that add true value."
      />
      <FeatureReqItems />
      <QuoteSlider />
      <ContactUs />
    </div>
  )
}

export default index
