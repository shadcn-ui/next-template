import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import BuildItems from "./BuildItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and build better"
        h1="User feedback for building web apps & websites"
        h2="Know what users need so you can build what users love"
        text="Understand what customers really need with with annotated visual and
        video-based feature requests and bug reports"
      />
      <BuildItems />
      <QuoteComponent
        job="Director, Big Budda Boom"
        name="Andy Pudmenzky"
        text={`Allowing clients to click on the designs and show us exactly what they're referring to has completely changed the way we gather client feedback. We've been so impressed with Userback. I'm not joking when I say it's saved us hours of time!`}
      />
      <ContactUs />
    </div>
  )
}

export default index
