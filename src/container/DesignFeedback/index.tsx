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
        job="CMO, Vision6"
        name="Jess Pantalleresco"
        text="Userback is so amazing! We used to rely on spreadsheets and emails for managing internal feedback on our website improvements. With Userback though it is so much easier. It has saved us hours of work with our website re-design project!"
      />
      <ContactUs />
    </div>
  )
}

export default index
