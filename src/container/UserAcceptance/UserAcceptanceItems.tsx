/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/UAT_1.webp">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[32px] font-medium">
            Capture bug reports in-app
          </h1>
          <p>
            Allow users to submit bug reports ‘on-the-fly’ in your app or
            website and collect the details and insights your teams need to
            action.
          </p>
          <ButtonComponent
            text="Discover in-app feedback"
            style={{ fontSize: 12 }}
            className="px-3 py-1"
          />
        </div>
      </RowComponent>
      <RowComponent imgUrl="/images/UAT_2 (1).webp">
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
        </div>
      </RowComponent>
    </div>
  )
}

export default FixItems
