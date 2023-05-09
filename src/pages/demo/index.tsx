import Page from "@/layout/Page"
import { NextPage } from "next"
import Demo from '@/container/Demo'

const Index: NextPage = () => {
  return (
    <Page title="Demo center" className="bg-[#F8F8F8]">
      <Demo />
    </Page>
  )
}

export default Index
