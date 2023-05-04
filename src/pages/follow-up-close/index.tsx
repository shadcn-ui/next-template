import { NextPage } from "next"
import FollowUpClose from "@/container/FollowUpClose"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Follow Up & Close" className="bg-[#F8F8F8]">
      <FollowUpClose />
    </Page>
  )
}

export default Index
