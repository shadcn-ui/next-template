import Page from "@/layout/Page"
import { NextPage } from "next"
import FeedbackTool from '@/container/FeedbackTool'

const Index: NextPage = () => {
  return (
    <Page title="Website Feedback Tool" className="bg-[#F8F8F8]">
      <FeedbackTool />
    </Page>
  )
}

export default Index
