import Page from "@/layout/Page"
import { NextPage } from "next"
import Pricing from '@/container/Pricing'

const Index: NextPage = () => {
  return (
    <Page title="Pricing" className="bg-[#F8F8F8]">
      <Pricing />
    </Page>
  )
}

export default Index
