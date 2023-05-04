/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FollowUpCloseItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Userback_Closure_1.png">
        <TextCol
          header="Test and validate"
          color="#ffc040"
          items={[
            "Upvote on existing submissions",
            "Add commentary to submissions",
            "Track status updates",
            "Provide total clarity to build trust",
          ]}
        >
          <p className="font-bold">
            Streamlined feedback channels mean quick testing and validation of
            fixes and feature builds.
          </p>
          <p>
            Whether it’s internal validation by testing and design teams, or
            external customer validation that a fix or feature hits the mark,
            having a frictionless feedback channel means this can happen rapidly
            to support product momentum and customer success.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Userback_Closure_2.png">
        <TextCol
          header="Share the status"
          button="Learn more about Feedback Portal"
          color="#ffc040"
        >
          <p className="font-bold">
            Don’t leave users hanging waiting for an update on their feedback or
            feature request.
          </p>
          <p>
            Automatically notify users of progress and resolution through the
            tools you already use daily. One less step for you, one more
            communication for your users.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FollowUpCloseItems
