/* eslint-disable tailwindcss/classnames-order */
import React from "react"

import ButtonComponent from "@/components/ButtonComponent"
import ListItem from "@/components/ListItem"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"
import TitleAndButton from "@/components/TitleAndButton"
import ListItemWrapper from "@/components/ListItemWrapper"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/developer-feedback_1.webp">
        <TextCol header="Deep browser and system insights">
          <p>
            Get high-context video and annotated screenshots for feedback, not
            just confusing emails. Take it to the next level and enrich user
            feedback submissions with browser, system and existing customer
            information from your current toolsets, so you know exactly who and
            what’s happening.
          </p>
        </TextCol>
      </RowComponent>

      <RowComponent imgUrl="/images/feedback-for-developers_3.webp">
        <TextCol
          header="Delivered to your (virtual) door"
          button="Learn about Userback integrations"
        >
          <p>
            Get approved feedback delivered directly into your existing
            workflows for simplicity and wasting time searching. Move feedback
            from Userback direct to your favorite tools for action – be it Jira,
            GitLab, GitHub or another choice and have total freedom to work your
            way.
          </p>
        </TextCol>
      </RowComponent>

      <div className="flex flex-col items-center gap-4">
        <ListItemWrapper>
          <ListItem
            icon="/icons/Bug-Fixes-1.webp"
            text="Make ambiguity around bugs and issues a thing of the past with deep insight with every submission. Fix less and build more."
            title="Fix bugs faster"
            hasLine={false}
          />
          <ListItem
            icon="/icons/session-replay.webp"
            text="See the full experience leading to errors directly with video and get the guesswork out of developer expectations."
            title="See it all with Session Replay"
            hasLine={false}
          />
          <ListItem
            icon="/icons/build-software-features.webp"
            text="Spend less time building features that never get adopted and focus on building high-value features that users actually want."
            title="Build what counts"
            hasLine={false}
          />
        </ListItemWrapper>
        <ButtonComponent
          text="Learn more about Session Replay"
          style={{ fontSize: 12, paddingInline: 12, paddingBlock: 8 }}
        />
      </div>

      <RowComponent imgUrl="/images/Capture-Feedback.webp">
        <TextCol header="Eliminate inconsistent feedback">
          <p>
            Inconsistency is the enemy of quick bug fixes. Create regular,
            consistent feedback and eliminate the noise so you can skip that
            email, phone call or meeting. Fix fast, so you can focus more on
            building.
          </p>
        </TextCol>
      </RowComponent>
      <TitleAndButton
        buttonText="Start your free trial - No credit card required"
        text="Get to the heart of feedback fast - No guesswork or extra communications required"
        className="mb-32"
        desktopSize={35}
        maxWidth={910}
        mobileSize={26}
      />
    </div>
  )
}

export default FixItems
