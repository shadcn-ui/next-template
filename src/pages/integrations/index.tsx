import { NextPage } from "next"
import Integrations from "@/container/Integrations"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Integrations" className="bg-[#F8F8F8]">
      <Integrations />
    </Page>
  )
}

export default Index
