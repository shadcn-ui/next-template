import BugherdAlternativeItems from "@/container/BugherdAlternative/BugherdAlternativeItems"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Get started risk free - No credit card required"
        h1="Userback vs Bugherd"
        h2="Userback – a better alternative to Bugherd"
        text="Looking for Bugherd alternatives? We’ve got your back."
      />
      <BugherdAlternativeItems />
      <QuoteComponent
        job="Founder, Xenrion"
        name="Kaushal Sheth"
        text="Awesome tool to gather customer feedback and bugs! We use Userback daily to quickly get feedback from our clients on their website development projects. Our clients love it and the video feedback tool is a nice way to see the exact issue in their browser."
      />
      <ContactUs />
    </div>
  )
}

export default index
