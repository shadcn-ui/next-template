import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import PricingItems from "./PricingItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText=""
        h1="Pricing"
        h2="Pricing plans designed for you"
        text=""
      />
      <PricingItems />
      <ContactUs />
    </div>
  )
}

export default index
