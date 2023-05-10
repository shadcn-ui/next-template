import UsersnapAlternativeItems from "@/container/UsersnapAlternative/UsersnapAlternativeItems"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Don't limit yourself - Start free trial and choose the better alternative"
        h1="Userback vs Usersnap"
        h2="Userback – a better alternative to Usersnap"
        text="Looking for Usersnap alternatives? We’ve got your back."
      />
      <UsersnapAlternativeItems />
      <QuoteComponent
        job="Owner, MRW Connected"
        name="Jeff Mackler"
        text="We moved to Userback from another tool Usersnap that we used for a few years. Userback is less expensive, has a better UI and UX, has better features, and more than anything actually responds to customer requests."
      />
      <ContactUs />
    </div>
  )
}

export default index
