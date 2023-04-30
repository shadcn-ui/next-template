import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import DesignFeedbackItems from "./DesignFeedbackItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Try Userback free for 14 days"
        h1="Design Feedback Tools"
        h2="Get feedback on your designs in an instant"
        text="Collect and incorporate real-time feedback from your clients."
      />
      <DesignFeedbackItems />
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
