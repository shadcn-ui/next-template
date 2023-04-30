import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import ForProductItems from "./ForProductItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Make product management simpler - Start your free trial today"
        h1="Userback for Product Managers"
        h2="Keep users at the center of UX design and feature builds"
        text="Stay connected to what users really need so you can build products and features that they really love"
      />
      <ForProductItems />
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
