import { NextPage } from "next"
import Commitment from "@/container/Commitment"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="GDPR Commitment" className="bg-[#F8F8F8]">
      <Commitment />
    </Page>
  )
}

export default Index
