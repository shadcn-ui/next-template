import Page from "@/layout/Page"
import { NextPage } from "next"
import Home from '@/container/Home'

const Index: NextPage = () => {
  return (
    <Page title="Home" className="bg-white">
      <Home />
    </Page>
  )
}

export default Index
