import MarkerAlternativeItems from "@/container/MarkerAlternative/MarkerAlternativeItems"

import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start collecting, managing and actioning faster - Free for 14 days"
        h1="Userback vs Marker.io"
        h2="Userback – a better alternative to Marker.io"
        text="Looking for Marker.io alternatives? We’ve got your back."
      />
      <MarkerAlternativeItems />
      <QuoteComponent
        job="Vice President – Print Tracker"
        name="Clark McCauley"
        text="Userback is so much faster. We were literally up and running in under 5 minutes and that included integrating with our ClickUp ticketing system"
      />
      <ContactUs />
    </div>
  )
}

export default index
