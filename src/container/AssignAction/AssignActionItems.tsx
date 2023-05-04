/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/userback_action_1.webp">
        <TextCol
          header="Stop hunting, start fixing"
          button="Learn more about Session Replay"
          color="#ff8040"
        >
          <p className="font-bold">
            No more wasting time trying to reproduce or diagnose the root cause
            of issues with no context.
          </p>
          <p>
            Visual context means you can see exactly what users mean and where
            an issue occurred, including the user’s steps to get there through
            events and console logs. You no longer have to ask for rudimentary
            technical details such as browser version or device type, and it’s
            all there automatically so you can hit the ground running.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/assigning-feedback_1.webp">
        <TextCol
          header="Automated for more productive sprints"
          items={[
            "Session Information",
            "User Data",
            "Console Logs",
            "Event Tracking",
          ]}
          color="#ff8040"
        >
          <p className="font-bold">
            Reduce the effort of estimations and speed time to resolution.
          </p>
          <p>
            Userback removes any ambiguity and subjectivity from bug reports by
            automatically capturing contextual information in the background:
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/userback_action_3.webp">
        <TextCol header="Deliver feedback into your workflows ">
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
