import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

import ForAgenciesItems from "./ForAgenciesItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and manage client feedback with ease"
        h1="Userback for Web Agencies"
        h2="Streamline the client feedback and approval process"
        text="Give clients the power to show you exactly what they mean with annotated  video feedback and screenshots"
      />
      <ForAgenciesItems />
      <QuoteComponent
        job="Founder"
        name="Shane B."
        text={`I've been a Userback customer for several years and it's by far the best tool out there for acquiring visual feedback on our clients websites. And as I'm always testing new tools to compare against those I've been using, I've tried them all, and Userback is by far, the best.`}
      />
      <ContactUs />
    </div>
  )
}

export default index
