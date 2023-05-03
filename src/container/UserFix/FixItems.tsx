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
      <RowComponent imgUrl="/images/feedback-for-fixing_1.webp">
        <TextCol
          header="Capture bug reports in-app"
          button="Discover in-app feedback"
        >
          <p>
            Allow users to submit bug reports ‘on-the-fly’ in your app or
            website and collect the details and insights your teams need to
            action.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/Bug-Fixes-1.webp"
          text="Get all the information you need first time, every time with full session replays, system data and browser information showing exactly what causes any bugs or issues."
          title="Recreate bugs precisely"
          hasLine
        />
        <ListItem
          icon="/icons/faster-bug-fix.png"
          text="Accelerate and automate resolution using a single management platform for all your user feedback and say goodbye to disconnected manual processes, emails, calls and surveys."
          title="Clarity and speed"
          hasLine
        />
        <ListItem
          icon="/icons/happy-developer.png"
          text="Automatically integrate user feedback into your existing workflows and give developers all the information they need to get to work on fixes and features right away."
          title="Happier developers"
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/feedback-to-fix-apps_2.webp">
        <TextCol
          header="Get full session replays"
          button="Learn more about Screen Annotations"
        >
          <p>
            Understand exactly what leads to an issue with timestamped session
            replay video and supercharge your time to resolution by giving your
            teams all the information they need to solve the problem from the
            start – without the extra email or call.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/feedback-for-fixing_2.webp">
        <TextCol header="Deliver feedback into your workflows">
          <p>
            Push user feedback directly into the places where your teams work
            and eliminate cumbersome silos of information. Automate with
            Userback and deliver alerts to Slack or bug fixes directly to the
            tools your developers use, like GitHub, GitLab and Jira and speed
            response times.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
