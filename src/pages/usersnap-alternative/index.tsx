import Page from "@/layout/Page"
import { NextPage } from "next"
import UsersnapAlternative from '@/container/UsersnapAlternative'

const Index: NextPage = () => {
  return (
    <Page title="Usersnap Alternative" className="bg-[#F8F8F8]">
      <UsersnapAlternative />
    </Page>
  )
}

export default Index
