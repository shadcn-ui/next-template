import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const BuildItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/feedback-for-building_1.webp">
        <TextCol
          header="Get to market faster"
          button="Learn more about Screen Annotations"
        >
          <p>
            Don’t get caught up with the back-and-forth emails, phone calls and
            additional meetings that slow down the product development
            lifecycle, from design to UAT. Cut out all the back and forth by
            allowing users to submit annotated screenshots, videos and full
            session replays with Userback.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/back-and-forth.webp"
          text="Userback automatically collects the user’s system and browser information in the background, so you don’t have to through back and forth trying to chase it."
          title="Capture the details you need"
          hasLine
        />
        <ListItem
          icon="/icons/Central.webp"
          text="Create separate projects in Userback, so you can securely store and manage every piece of feedback in one location for quick access, action and response."
          title="Centralize it all in one place"
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/Website-Feedback_1-1.webp">
        <TextCol header="Do User Acceptance Testing like never before">
          <p>
            Recreate issues throughout the UAT process with complete clarity of
            the contributing factors. If you’re relying on email and written
            communication, maybe it’s time to discover how Userback’s annotated
            screenshots, video recordings and full session replays (complete
            with automatically captured browser and system information) can get
            you to the heart of issues faster.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/UAT_2.webp">
        <TextCol header="Manage user feedback in one place">
          <p>
            With Userback you can centralize all your user feedback in one
            location for bug reports, feature requests and comments — along with
            supporting attachments, videos, screenshots and annotated insights —
            all easily searched and instantly actionable.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default BuildItems
