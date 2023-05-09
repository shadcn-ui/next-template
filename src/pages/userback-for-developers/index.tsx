import Page from "@/layout/Page"
import { NextPage } from "next"
import ForDevelopers from '@/container/ForDevelopers'

const Index: NextPage = () => {
  return (
    <Page title="Userback for Developers" className="bg-[#F8F8F8]">
      <ForDevelopers />
    </Page>
  )
}

export default Index
