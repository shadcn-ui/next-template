/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"

const EnhanceItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/feedback-for-building_1.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Capture bug reports in-app
          </h1>
          <p>
            Allow users to submit bug reports ‘on-the-fly’ in your app or
            website and collect the details and insights your teams need to
            action.
          </p>
        </div>
      </RowComponent>
      <RowComponent imgUrl="/images/Website-Feedback_1-1.webp">
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
      <RowComponent imgUrl="/images/UAT_2.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Manage user feedback in one place
          </h1>
          <p>
            With Userback you can centralize all your user feedback in one
            location for bug reports, feature requests and comments — along with
            supporting attachments, videos, screenshots and annotated insights —
            all easily searched and instantly actionable.
          </p>
          <ButtonComponent
            text="Discover product roadmapping with Userback"
            style={{ fontSize: 12 }}
            className="px-3 py-1"
          />
        </div>
      </RowComponent>
    </div>
  )
}

export default EnhanceItems
