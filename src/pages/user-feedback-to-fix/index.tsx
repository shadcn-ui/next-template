import Page from "@/layout/Page"
import { NextPage } from "next"
import UserFix from '@/container/UserFix'

const Index: NextPage = () => {
  return (
    <Page title="User Feedback to Fix" className="bg-[#F8F8F8]">
      <UserFix />
    </Page>
  )
}

export default Index
