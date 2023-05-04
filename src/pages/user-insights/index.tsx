import Page from "@/layout/Page"
import { NextPage } from "next"
import UserInsights from '@/container/UserInsights'

const Index: NextPage = () => {
  return (
    <Page title="User Insights" className="bg-[#F8F8F8]">
      <UserInsights />
    </Page>
  )
}

export default Index
