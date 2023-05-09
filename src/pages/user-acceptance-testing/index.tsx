import Page from "@/layout/Page"
import { NextPage } from "next"
import UserAcceptance from '@/container/UserAcceptance'

const Index: NextPage = () => {
  return (
    <Page title="User Acceptance Testing" className="bg-[#F8F8F8]">
      <UserAcceptance />
    </Page>
  )
}

export default Index
