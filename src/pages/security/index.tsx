import { NextPage } from "next"
import Security from "@/container/Security"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Userback Security Overview" className="bg-[#F8F8F8]">
      <Security />
    </Page>
  )
}

export default Index
