/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const ScreenAnnotationItems = () => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl="/images/annotate_1.webp">
        <TextCol header="Accurate feedback now means less back-and-forth later">
          <p>
            Vague feedback is time-consuming to understand and resolve. Visual
            context provides a precise description to accelerate triage of
            software bugs. Screen annotations get clear feedback from your user
            to your developer team via Userback’s robust integrations with no
            additional effort… Add notes, highlights, and other visual cues to
            your screen and provide a more concrete and specific representation
            of your thoughts.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Feedback-for-agencies_1.webp">
        <TextCol
          header="Collect feedback simply"
          button="Learn more about video recording"
        >
          <p>
            Make it easy for your users to give you feedback. Make it easy for
            your team to interpret feedback. Userback Screen Annotation feature
            works across any device and any browser to give you and your users
            the ultimate flexibility to provide insightful feedback instantly.
            It’s the perfect companion to Video Recording.
          </p>
          <p>Say hello to improved feedback!</p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default ScreenAnnotationItems
