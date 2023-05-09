import Page from "@/layout/Page"
import { NextPage } from "next"
import DesignFeedback from '@/container/DesignFeedback'

const Index: NextPage = () => {
  return (
    <Page title="Design Feedback Tool" className="bg-[#F8F8F8]">
      <DesignFeedback />
    </Page>
  )
}

export default Index
