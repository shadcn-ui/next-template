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
      <RowComponent imgUrl="/images/Design-Feedback_1-1.webp">
        <TextCol
          header="BuInteractive design feedback"
          items={[
            "No lengthy learning curve",
            "Set up in under 5 minutes",
            "Grow with your business",
          ]}
        >
          <p>
            Interactive feedback tools streamline and simplify the design
            feedback process for clients and designers alike. They’re so much
            easier and faster to use than sending disconnected and ambiguous
            emails! You can set up your own automated design feedback loop with
            Userback in under five minutes — no specialized skills required —
            and start collecting feedback right away.
          </p>
        </TextCol>
      </RowComponent>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-[32px] font-medium">
          Better design. Faster design
        </h1>
        <ListItemWrapper>
          <ListItem
            icon="/icons/upload.webp"
            text="Instantly upload images, videos, or PDF files."
            title="Upload designs"
            hasLine={false}
          />
          <ListItem
            icon="/icons/collab.webp"
            text="Share with clients so they can add their feedback."
            title="Collaborate with clients"
            hasLine={false}
          />
          <ListItem
            icon="/icons/complete.webp"
            text="Get detailed visual feedback without any ambiguity or confusion."
            title="Complete projects faster"
            hasLine={false}
          />
        </ListItemWrapper>
      </div>
      <RowComponent imgUrl="/images/Design-Feedback_2-1.webp">
        <TextCol
          header="Make feedback specific"
          items={[
            "Eliminate design back and forth",
            "Speed design cycles",
            "Remove client frustration",
          ]}
        >
          <p>
            Say goodbye to vague feedback! Empower clients to give specific
            feedback with comments as they say it with video and screenshot
            annotations to speed design windows and reach your goal faster so
            you can move on to what’s next.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/UAT_2.webp">
        <TextCol
          header="Manage feedback from collection to closure"
          items={[
            "Collect feedback directly",
            "Distribute feedback to design teams directly",
            "Keep clients in the loop with your feedback portal",
          ]}
        >
          <p>
            Don’t let design feedback get lost in the shuffle… Manage
            collection, prioritization and action with Userback and close the
            feedback loop with your personal feedback portal. Collect all
            feedback in a single location, and distribute projects and feedback
            to teams via powerful automation and API integrations.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
