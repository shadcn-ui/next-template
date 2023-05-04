import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import IntegrationsItems from "./IntegrationsItems"
import IntegrationsList from "./IntegrationsList"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start free trial - No credit card required"
        h1="Integrations"
        h2="Seamlessly integrate feedback into every part of the product roadmap"
        text="Automate feedback distribution throughout the entire user feedback lifecycle and eliminate information silos"
      />
      <IntegrationsItems />
      <IntegrationsList />
      <ContactUs />
    </div>
  )
}

export default index
