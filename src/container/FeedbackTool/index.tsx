import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import FeedbackToolItems from "./FeedbackToolItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start using Userback free - No credit card required"
        h1="Website Feedback Tool"
        h2="Get visual feedback on-the-fly from any website"
        text="Allow your users to submit real-time bug reports, feature requests and general comments directly from your website with screenshots, notes, videos and even voice recordings."
      />
      <FeedbackToolItems />
      <QuoteComponent
        job="Lead Developer"
        name="Gustavo M."
        text="We love how Userback helps our team to be on top of their game regarding client feedback and team communication. We love how easy it is to use and the range of integrations it has available."
      />
      <ContactUs />
    </div>
  )
}

export default index
