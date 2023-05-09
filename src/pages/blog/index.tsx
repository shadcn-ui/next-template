import { NextPage } from "next"
import Blog from "@/container/Blog"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Userback Blog" className="bg-[#F8F8F8]">
      <Blog />
    </Page>
  )
}

export default Index
