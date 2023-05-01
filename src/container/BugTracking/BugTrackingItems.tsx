/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import RowComponent from "@/components/RowComponent"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          We (honestly) love bug tracking
        </h1>
        <p className="text-center">
          That’s why we’re consistently rated as one of the world’s leading bug
          tracking platforms.
        </p>
        <img
          src="/images/Bug-Tracking.webp"
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
        <h1 className="text-[32px] font-medium text-center">
          Get the complete context for every bug
        </h1>
        <p className="text-center">
          Most developers will tell you that fixing bugs is a pain in the butt.
          Too often they receive ambiguous and incomplete reports, which means
          they have to waste precious time and effort chasing up more
          information before they can get started.
        </p>
        <p className="text-center">
          With Userback developers have immediate access to all the information
          that they need to replicate and resolve issues because users can
          submit complete and actionable bug reports along with supporting
          information. All relevant console, system and user data is
          automatically captured in the background.
        </p>
      </div>
      <RowComponent imgUrl="/images/Bug-Tracking_1.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Capture bug reports in-app
          </h1>
          <p>
            Allow users to submit bug reports ‘on-the-fly’ in your app or
            website and collect the details and insights your teams need to
            action.
          </p>
          <ButtonComponent
            text="Discover in-app feedback"
            style={{ fontSize: 12 }}
            className="px-3 py-1"
          />
        </div>
      </RowComponent>
      <RowComponent imgUrl="/images/Bug-Tracking_2.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Do User Acceptance Testing like never before
          </h1>
          <p>
            Recreate issues throughout the UAT process with complete clarity of
            the contributing factors. If you’re relying on email and written
            communication, maybe it’s time to discover how Userback’s annotated
            screenshots, video recordings and full session replays (complete
            with automatically captured browser and system information) can get
            you to the heart of issues faster.
          </p>
        </div>
      </RowComponent>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-[32px] font-medium">
          Designed to work the way you work
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 children:flex-1">
          <ListItem
            icon="/icons/Github-integration.webp"
            text="Automatically send visual bug reports to your GitHub repository."
            title="Capture the details you need"
            hasLine={false}
          />
          <ListItem
            icon="/icons/Gitlab-integration.webp"
            text="Automatically send visual bug reports to your GitHub repository."
            title="Centralize it all in one place"
            hasLine={false}
          />
          <ListItem
            icon="/icons/Jira-integration.webp"
            text="Automatically send visual bug reports to your GitHub repository."
            title="Centralize it all in one place"
            hasLine={false}
          />
        </div>
      </div>
      <RowComponent imgUrl="/images/Bug-Tracking_3.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Manage user feedback in one place
          </h1>
          <p>
            With Userback you can centralize all your user feedback in one
            location for bug reports, feature requests and comments — along with
            supporting attachments, videos, screenshots and annotated insights —
            all easily searched and instantly actionable.
          </p>
        </div>
      </RowComponent>
    </div>
  )
}

export default FixItems
