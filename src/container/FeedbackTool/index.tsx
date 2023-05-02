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
        job="Assistant Engineering Manager"
        name="Naveen D."
        text={`I love the software and the major selling point for us was that it natively integrated with Teamwork ( This is our project management tool which we use for 50+ employees ) The support is always amazing and had always had a positive reply. I had one requirement and they were able to implement it within a day which shows that they hear their customers.`}
      />
      <ContactUs />
    </div>
  )
}

export default index
