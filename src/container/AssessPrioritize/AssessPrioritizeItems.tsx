/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Userback_Assess_2.png">
        <TextCol
          header="See through their eyes"
          button="Learn more about Video Recording"
          color="#ff4060"
        >
          <p className="font-bold">
            Get real-time contextual and visual clarity with annotated
            screenshots, video capture and session replays.
          </p>
          <p>
            Quickly understand what users mean and where issues are. See
            feedback through their eyes and with all the necessary visual and
            technical context automatically attached.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/assessing-feedback_1.png">
        <TextCol header="Collect more consistent feedback">
          <p>
            Use a single platform to collect multiple feedback types in the most
            consistent format possible. Categorize inbound visual feedback based
            on your preferred tags and prioritize action with ease.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Userback_Assess_4.png">
        <TextCol header="Know what’s important">
          <p className="font-bold">
            Get a more accurate representation of what your actual user base
            needs.
          </p>
          <p>
            Let your users provide input and ideas into your product, and show
            their priorities through upvoting. Collect it all in a dedicated
            portal where you can build loyalty and community at the same time.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
