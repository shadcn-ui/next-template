/* eslint-disable tailwindcss/classnames-order */

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Website-Feedback_1-1 (1).webp">
        <TextCol
          header="Increase clarity with video"
          items={[
            "No more email back-and-forth",
            "Get full context with supporting audio",
            "Complete with user information",
          ]}
          button="Learn more about Screen Annotations"
        >
          <p>
            Take the guesswork out of reviewing and interpreting user feedback
            and keep your developers focused on what counts! Streamline and
            simplify the feedback process and empower your users to tell you
            exactly what they want with video recording, supported by full
            audio.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/website-feedback-tool_1.webp"
          text="Instantly collect actionable feedback from your website."
          title="Get real-time feedback"
          hasLine={false}
        />
        <ListItem
          icon="/icons/website-feedback-tool_2.webp"
          text="Give every piece of feedback context with on-screen annotations."
          title="Add context"
          hasLine={false}
        />
        <ListItem
          icon="/icons/website-feedback-tool_3.webp"
          text="Respond to feedback and resolve issues fast."
          title="Accelerate development"
          hasLine={false}
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/UAT_1 (1).webp">
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
    </div>
  )
}

export default FixItems
