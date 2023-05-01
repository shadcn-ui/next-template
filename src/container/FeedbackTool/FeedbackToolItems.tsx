/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import RowComponent from "@/components/RowComponent"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Website-Feedback_1-1 (1).webp">
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
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 children:flex-1">
        <ListItem
          icon="/icons/website-feedback-tool_1.webp"
          text="Userback automatically collects the user’s system and browser information in the background, so you don’t have to through back and forth trying to chase it."
          title="Capture the details you need"
          hasLine={false}
        />
        <ListItem
          icon="/icons/website-feedback-tool_2.webp"
          text="Create separate projects in Userback, so you can securely store and manage every piece of feedback in one location for quick access, action and response."
          title="Centralize it all in one place"
          hasLine={false}
        />
        <ListItem
          icon="/icons/website-feedback-tool_3.webp"
          text="Create separate projects in Userback, so you can securely store and manage every piece of feedback in one location for quick access, action and response."
          title="Centralize it all in one place"
          hasLine={false}
        />
      </div>
      <RowComponent imgUrl="/images/UAT_1 (1).webp">
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
    </div>
  )
}

export default FixItems
