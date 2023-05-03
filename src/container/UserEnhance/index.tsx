import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import EnhanceItems from "./EnhanceItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start free trial - risk free"
        h1="Userback for enhancing web apps & websites"
        h2="Compete and grow"
        text="Continuously improve and keep up with market demands by staying connected to your users"
      />
      <EnhanceItems />
      <QuoteComponent
        job="Product Manager"
        name="Lora K."
        text={`It is really easy to set the Userback widget on your product, customize how it looks, and link it with whatever other tool you like. It is also extremely straightforward from the end user's perspective - even non tech-savvy users take advantage of it to report issues or make suggestions for our platform.`}
      />
      <ContactUs />
    </div>
  )
}

export default index
