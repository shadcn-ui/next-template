import { NextPage } from "next"
import AssessPrioritize from "@/container/AssessPrioritize"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Assess & Prioritize" className="bg-[#F8F8F8]">
      <AssessPrioritize />
    </Page>
  )
}

export default Index
