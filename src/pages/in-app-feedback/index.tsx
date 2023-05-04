import Page from "@/layout/Page"
import { NextPage } from "next"
import InAppFeedback from '@/container/InAppFeedback'

const Index: NextPage = () => {
  return (
    <Page title="In-App Feedback" className="bg-[#F8F8F8]">
      <InAppFeedback />
    </Page>
  )
}

export default Index
