import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem2 from "@/components/ListItem2"
import RowComponent from "@/components/RowComponent"

const BuildItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/feedback-for-building_1.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">Get to market faster</h1>
          <p>
            Don’t get caught up with the back-and-forth emails, phone calls and
            additional meetings that slow down the product development
            lifecycle, from design to UAT. Cut out all the back and forth by
            allowing users to submit annotated screenshots, videos and full
            session replays with Userback.
          </p>
          <ButtonComponent
            text="Learn more about Screen Annotations"
            style={{ fontSize: 12 }}
            className="px-3 py-1"
          />
        </div>
      </RowComponent>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 children:flex-1">
        <ListItem2
          icon="/icons/back-and-forth.webp"
          text="Userback automatically collects the user’s system and browser information in the background, so you don’t have to through back and forth trying to chase it."
          title="Capture the details you need"
        />
        <ListItem2
          icon="/icons/Central.webp"
          text="Create separate projects in Userback, so you can securely store and manage every piece of feedback in one location for quick access, action and response."
          title="Centralize it all in one place"
        />
      </div>
      <RowComponent imgUrl="/images/Website-Feedback_1-1.webp">
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
      <RowComponent imgUrl="/images/UAT_2.webp">
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

export default BuildItems
