import Page from "@/layout/Page"
import { NextPage } from "next"
import BugherdAlternative from '@/container/BugherdAlternative'

const Index: NextPage = () => {
  return (
    <Page title="Bugherd Alternative" className="bg-[#F8F8F8]">
      <BugherdAlternative />
    </Page>
  )
}

export default Index
