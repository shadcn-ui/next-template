import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import ProductRoadmappingItems from "./ProductRoadmappingItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial - No credit card required"
        h1="Product Roadmapping"
        h2="Place users at the center of your Product Roadmap"
        text="Take the guesswork out of product decisions with actionable insights based on better customer understanding."
      />
      <ProductRoadmappingItems />
      <ContactUs />
    </div>
  )
}

export default index
