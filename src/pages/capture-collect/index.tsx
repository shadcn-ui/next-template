import { NextPage } from "next"
import CaptureCollect from "@/container/CaptureCollect"
import Page from "@/layout/Page"

const Index: NextPage = () => {
  return (
    <Page title="Capture & CollectItems" className="bg-[#F8F8F8]">
      <CaptureCollect />
    </Page>
  )
}

export default Index
