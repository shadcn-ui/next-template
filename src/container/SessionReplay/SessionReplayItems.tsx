/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const SessionReplayItems = () => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl="/images/session-replay_1.webp">
        <TextCol
          header="Don’t take a stab in the dark"
          button="Check out User Insights"
        >
          <p>
            Re-creating issues is hard. Avoid the pain by viewing bugs as they
            occur with detailed insights into user behaviors and technology.
            Stop burning development cycles only to end with a ‘Close ticket:
            Cannot recreate’ finale.
          </p>
          <p>
            Session replay provides detailed insights into user behaviors that
            lead to the bug, captured with high clarify video and delivered to
            your developers’ digital doorstop. Perfectly paired with User
            Insights.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/session-replay_2.webp">
        <TextCol header="Privacy protection included">
          <p>
            Mask sensitive information with privacy protection controls. Stay
            compliant and minimize your business risk by removing sensitive
            information from your feedback collection process in a few simple,
            intuitive clicks that’ll have you and your users submitting and
            distributing feedback with total confidence.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default SessionReplayItems
