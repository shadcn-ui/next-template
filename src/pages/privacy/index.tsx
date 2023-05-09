import { NextPage } from "next"
import Privacy from "@/container/Privacy"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Privacy Policy" className="bg-[#F8F8F8]">
      <Privacy />
    </Page>
  )
}

export default Index
