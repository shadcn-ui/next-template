import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import FeedbackPortalItems from "./FeedbackPortalItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start free trial and access your feedback portal"
        h1="Feedback Portal"
        h2="Keep users in the loop and build a more engaged product community"
        text="Centralize all aspects of user feedback in one place where you can share thoughts, validate ideas, assign tasks and track progress."
      />
      <FeedbackPortalItems />
      <ContactUs />
    </div>
  )
}

export default index
