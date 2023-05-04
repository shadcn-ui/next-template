/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl="/images/feedback-for-building_1.webp">
        <TextCol
          header="Simple for users, powerful for teams"
          button="See Userback in action"
        >
          <p>
            Speed up your development lifecycle and product decisions with fast,
            simple, and robust tooling.
          </p>
          <p>
            Traditional surveys and interviews are time-consuming and hard to
            manage. Userback’s feedback tool is fast, simple, and robust whether
            you’re a small or large distributed team. Collect feedback directly
            within your app or website and make it easy to get the feedback you
            need to make informed product decisions.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Design-Feedback_1-1.png">
        <TextCol header="Install effortlessly">
          <p>
            Integrate the widget in under 5 minutes and instantly collect better
            user feedback with JavaScript API, React and Vue application
            options, or use the Browser Extension for the simplest setup
            experience possible.
          </p>
          <p>
            No specialist skills or steep learning curves required. Just a
            plug-and-play feedback platform capable of managing the entire
            feedback lifecycle.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
