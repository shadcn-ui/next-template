import Page from "@/layout/Page"
import { NextPage } from "next"
import ForProduct from '@/container/ForProduct'

const Index: NextPage = () => {
  return (
    <Page title="User Feedback to Fix" className="bg-[#F8F8F8]">
      <ForProduct />
    </Page>
  )
}

export default Index
