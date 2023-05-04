/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const IntegrationsItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <RowComponent imgUrl="/images/Bug-Tracking_3.webp">
        <TextCol header="Designed to work with the tools you already use and love">
          <p>
            Siloed information is the enemy of effective processes. Connect
            Userback with your favorite tools where Product Managers, Designers
            and Developers are comfortable working. Automate feedback
            notifications to external teams for action and add contextual
            information for accurate flow up.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/user-feedback-integrations_1.webp">
        <TextCol header="Design custom workflows with webhooks" button="Learn more about Webhooks">
          <p>
            Need more flexibility? Create custom workflows with Userback and
            Webhooks, push the limits of your feedback loop, and create new ways
            to work.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default IntegrationsItems
