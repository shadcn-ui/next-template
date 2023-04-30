import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import ForDevelopersItems from "./ForDevelopersItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and skip the back-and-forth"
        h1="Userback for Developers"
        h2="Spend less time fixing and more time building"
        text="Automatically get the user and system information you need to instantly understand issues and fix them faster."
      />
      <ForDevelopersItems />
      <ContactUs />
    </div>
  )
}

export default index
