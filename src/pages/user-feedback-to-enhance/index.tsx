import Page from "@/layout/Page"
import { NextPage } from "next"
import UserEnhance from '@/container/UserEnhance'

const Index: NextPage = () => {
  return (
    <Page title="User Feedback to Enhance" className="bg-[#F8F8F8]">
      <UserEnhance />
    </Page>
  )
}

export default Index
