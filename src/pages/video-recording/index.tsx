import Page from "@/layout/Page"
import { NextPage } from "next"
import VideoRecording from '@/container/VideoRecording'

const Index: NextPage = () => {
  return (
    <Page title="Video Recording" className="bg-[#F8F8F8]">
      <VideoRecording />
    </Page>
  )
}

export default Index
