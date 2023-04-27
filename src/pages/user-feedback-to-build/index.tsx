import Page from "@/layout/Page"
import { NextPage } from "next"
import UserBuild from '@/container/UserBuild'

const Index: NextPage = () => {
  return (
    <Page title="User Feedback to Build" className="bg-[#F8F8F8]">
      <UserBuild />
    </Page>
  )
}

export default Index
