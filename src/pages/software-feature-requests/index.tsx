import Page from "@/layout/Page"
import { NextPage } from "next"
import SoftwareFeatureRequests from '@/container/SoftwareFeatureRequests'

const Index: NextPage = () => {
  return (
    <Page title="Software Feature Requests" className="bg-[#F8F8F8]">
      <SoftwareFeatureRequests />
    </Page>
  )
}

export default Index
