import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import FixItems from "./FixItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and start fixing faster"
        h1="Userback for fixing web apps & websites"
        h2="Fix bugs faster and without the frustration"
        text="Streamline and automate your bug fixing workflows with contextual detail and visual feedback"
      />
      <FixItems />
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
