import { NextPage } from "next"
import Terms from "@/container/Terms"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Terms and Conditions" className="bg-[#F8F8F8]">
      <Terms />
    </Page>
  )
}

export default Index
