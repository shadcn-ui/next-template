import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import VideosTabs from "@/components/VideosTabs"

import ScreenAnnotationItems from "./ScreenAnnotationItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and get instant access to visual feedback"
        h1="Screen Annotation"
        h2="Get richer user insights for features and fixes"
        text="Let users enhance their feedback with notes and scribbles on visual and video screen grabs, so your product team has all the background detail they need for features and fixes."
      />
      <VideosTabs type={1} />
      <ScreenAnnotationItems />
      <ContactUs />
    </div>
  )
}

export default index
