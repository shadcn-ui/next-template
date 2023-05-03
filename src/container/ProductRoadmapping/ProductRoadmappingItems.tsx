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
      <RowComponent imgUrl="/images/roadmap_1.webp">
        <TextCol header="Collect and validate ideas">
          <p>
            Stack rank ideas, adopt ongoing user suggestions and build product
            features that users will actually use. Remove internal noise and
            guesswork around product decisions by using real data points to gain
            insight into what the market really wants.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/roadmap_2.webp">
        <TextCol
          header="Prioritize product roadmap decisions"
          button="Learn about the Feedback Portal"
        >
          <p>
            Track new feature requests, bug fixes and product improvements.
            Allow stakeholders and users to upvote and comment on existing user
            feedback so you can easily identify what matters most and skip
            one-off requests. Find the perfect product fit by focusing on the
            things that matter most, to the most users.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/connected-icons.webp"
          text="Keep in touch with users post-release and always understand what they really want."
          title="Stay connected to users"
          hasLine={false}
        />
        <ListItem
          icon="/icons/build-icon.webp"
          text="Have users screen and rank features and fixes and know you’re building products your users will love, guesswork free."
          title="Prioritize what you build"
          hasLine={false}
        />
        <ListItem
          icon="/icons/growth-icon.webp"
          text="Build a roadmap filled with features that the majority of users need to maximize fit, increase satisfaction, reduce churn and drive growth."
          title="Maximize product fit"
          hasLine={false}
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/roadmap_3.webp">
        <TextCol header="Have the data and evidence to defend your roadmap decisions">
          <p>
            Don’t just take direction from whoever has the loudest voice! Don’t
            take chances on half-baked assumptions! Collect meaningful user
            insights and directly centralize them within a single platform where
            you can review, validate and prioritize requests.
          </p>
        </TextCol>
      </RowComponent>
      <div className="flex flex-col items-center max-w-[700px] mx-auto my-16">
        <h1 className="text-[32px] font-medium text-center tracking-tighter">
          Bring Product Managers and Devs into alignment. No guesswork required
        </h1>
        <ButtonComponent
          text="Starting validating ideas for your roadmap- Free for 14 days"
          className="mt-8"
          style={{ fontSize: 15 }}
        />
      </div>
    </div>
  )
}

export default FixItems
