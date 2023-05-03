/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Feedback-for-agencies_1.webp">
        <TextCol
          header="Collect real-time client feedback"
          button="Learn more about Screen Annotations"
        >
          <p>
            Get highly contextual feedback with video and annotated screenshots.
            Stop relying on email and let customers directly tell you what they
            want from your staging site build. With no guesswork or no
            interpretation required, your business can run efficiently.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/back-and-forth.webp"
          text="Attach client’s system and browser information to every piece of feedback, so you know all the detail without the extra email, phone call or meeting."
          title="Skip the back-and-forth"
          hasLine
        />
        <ListItem
          icon="/icons/Central.webp"
          text="Create separate projects for every client in Userback, and securely house every piece of feedback in one location for quick access, action and response."
          title="Centralize it all"
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/Feedback-for-agencies_2.webp">
        <TextCol header="Invite clients to see their feedback">
          <p>
            Give clients access to view and comment on the feedback from their
            web projects. Deliver it directly to your account manager and
            developer teams for action or closure in an instant. No more chasing
            up clients for revisions and approval!
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Feedback-for-agencies_3.webp">
        <TextCol header="Chronology captured">
          <p>
            Centralize all feedback and approvals in one location with
            timestamps and avoid that uncomfortable conversation as the
            inevitable scope change occurs. Protect your business and bring
            transparency to clients with minimal effort and zero fuss.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
