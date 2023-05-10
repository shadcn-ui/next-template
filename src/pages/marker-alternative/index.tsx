import Page from "@/layout/Page"
import { NextPage } from "next"
import MarkerAlternative from '@/container/MarkerAlternative'

const Index: NextPage = () => {
  return (
    <Page title="Marker.io Alternative" className="bg-[#F8F8F8]">
      <MarkerAlternative />
    </Page>
  )
}

export default Index
