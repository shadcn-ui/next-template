import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"

import AboutUsItems from "./AboutUsItem"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText=""
        h1="The Userback Story"
        h2="We're in it for those wanting to build better software"
        text="Feedback is not a loop. It’s a knot. Userback untangles it by putting the user back in the center of product development"
      />
      <AboutUsItems />
      <ContactUs />
    </div>
  )
}

export default index
