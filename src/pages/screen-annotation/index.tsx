import Page from "@/layout/Page"
import { NextPage } from "next"
import ScreenAnnotation from '@/container/ScreenAnnotation'

const Index: NextPage = () => {
  return (
    <Page title="Screen Annotation" className="bg-[#F8F8F8]">
      <ScreenAnnotation />
    </Page>
  )
}

export default Index
