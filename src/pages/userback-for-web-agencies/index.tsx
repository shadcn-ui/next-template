import Page from "@/layout/Page"
import { NextPage } from "next"
import ForAgencies from '@/container/ForAgencies'

const Index: NextPage = () => {
  return (
    <Page title="User Feedback to Fix" className="bg-[#F8F8F8]">
      <ForAgencies />
    </Page>
  )
}

export default Index
