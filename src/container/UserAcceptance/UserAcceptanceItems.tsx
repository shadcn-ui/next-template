/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/UAT_1.webp">
        <TextCol header="Validate, communicate and resolve">
          <p>
            Userback works perfectly on local hosts, so you can easily collect
            feedback before code goes live. Testers can give highly contextual
            feedback directly from your website or inside your web app with
            video and annotated screenshots.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/UAT_2 (1).webp">
      <TextCol header="Keep everyone on the same page">
          <p>
          Save time and manage bug reports and UAT in the same place. Organize all your user feedback with tags, categories and instant notifications so you can action UAT insights fast – all with the clarity provided with visual feedback tools to give your developers the information they need (where they need it) to resolve issues faster.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
