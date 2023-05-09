import { NextPage } from "next"
import AboutUs from "@/container/AboutUs"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="About Us" className="bg-[#F8F8F8]">
      <AboutUs />
    </Page>
  )
}

export default Index
