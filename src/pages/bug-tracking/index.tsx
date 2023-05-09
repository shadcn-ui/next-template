import Page from "@/layout/Page"
import { NextPage } from "next"
import BugTracking from '@/container/BugTracking'

const Index: NextPage = () => {
  return (
    <Page title="Bug Tracking" className="bg-[#F8F8F8]">
      <BugTracking />
    </Page>
  )
}

export default Index
