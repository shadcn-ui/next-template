import Page from "@/layout/Page"
import { NextPage } from "next"
import ForProduct from '@/container/ForProduct'

const Index: NextPage = () => {
  return (
    <Page title="Userback for Product" className="bg-[#F8F8F8]">
      <ForProduct />
    </Page>
  )
}

export default Index
