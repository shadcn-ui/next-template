import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import ForProductItems from "./ForProductItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Make product management simpler - Start your free trial today"
        h1="Userback for Product Managers"
        h2="Keep users at the center of UX design and feature builds"
        text="Stay connected to what users really need so you can build products and features that they really love"
      />
      <ForProductItems />
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
