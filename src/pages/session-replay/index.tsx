import Page from "@/layout/Page"
import { NextPage } from "next"
import SessionReplay from '@/container/SessionReplay'

const Index: NextPage = () => {
  return (
    <Page title="Session Replay" className="bg-[#F8F8F8]">
      <SessionReplay />
    </Page>
  )
}

export default Index
