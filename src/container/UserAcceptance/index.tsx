import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import UserAcceptanceItems from "./UserAcceptanceItems"
import VideosTabs from "@/components/VideosTabs"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Boost your UAT free for 14 days - no credit card needed"
        h1="User Acceptance Testing"
        h2="Nail your product flow like a pro with visual user feedback"
        text="ive your team the information and insights they need to launch a better product faster."
      />
      <VideosTabs type={1} />
      <UserAcceptanceItems />
      <QuoteComponent
        job="Assistant Engineering Manager"
        name="Naveen D."
        text={`I love the software and the major selling point for us was that it natively integrated with Teamwork ( This is our project management tool which we use for 50+ employees ) The support is always amazing and had always had a positive reply. I had one requirement and they were able to implement it within a day which shows that they hear their customers.`}
      />
      <ContactUs />
    </div>
  )
}

export default index
