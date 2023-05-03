import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import VideosTabs from "@/components/VideosTabs"

import UserAcceptanceItems from "./UserAcceptanceItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Boost your UAT free for 14 days - no credit card needed"
        h1="User Acceptance Testing"
        h2="Nail your product flow like a pro with visual user feedback"
        text="ive your team the information and insights they need to launch a better product faster."
      />
      <VideosTabs type={2} />
      <UserAcceptanceItems />
      <QuoteComponent
        job="Founder"
        name="Ralf L."
        text={`Saves time, improves communication. 
        Easy to install and easy to use by clients and colleagues (designer/developer). Communication via comments on the Userback site works well. Meanwhile I have used Userback for several years and am still happy with it.`}
      />
      <ContactUs />
    </div>
  )
}

export default index
