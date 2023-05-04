import { NextPage } from "next"
import FeedbackPortal from "@/container/FeedbackPortal"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Feedback Portal" className="bg-[#F8F8F8]">
      <FeedbackPortal />
    </Page>
  )
}

export default Index
