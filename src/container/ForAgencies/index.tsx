import ContactUs from "@/components/ContactUs"
import PagesHeader from "@/components/PagesHeader"
import QuoteComponent from "@/components/QuoteComponent"
import ForAgenciesItems from "./ForAgenciesItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your free trial and manage client feedback with ease"
        h1="Userback for Web Agencies"
        h2="Streamline the client feedback and approval process"
        text="Give clients the power to show you exactly what they mean with annotated  video feedback and screenshots"
      />
      <ForAgenciesItems />
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
