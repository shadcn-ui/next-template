import Page from "@/layout/Page"
import { NextPage } from "next"
import ProductRoadmapping from '@/container/ProductRoadmapping'

const Index: NextPage = () => {
  return (
    <Page title="Product Roadmapping" className="bg-[#F8F8F8]">
      <ProductRoadmapping />
    </Page>
  )
}

export default Index
