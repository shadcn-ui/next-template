import Page from "@/layout/Page"
import { NextPage } from "next"
import AssignAction from '@/container/AssignAction'

const Index: NextPage = () => {
  return (
    <Page title="Assign & Action" className="bg-[#F8F8F8]">
      <AssignAction />
    </Page>
  )
}

export default Index
