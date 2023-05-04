/* eslint-disable tailwindcss/classnames-order */

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const CaptureCollectItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/Capture-Feedback (1).webp">
        <TextCol
          header="Set the standard"
          button="Learn more about Screen Annotations"
        >
          <p className="font-bold">
            Let your users provide standardized bug reports, feature requests
            and general feedback ‘on the fly’ without leaving your app.
          </p>
          <p>
            Feedback types are consistent, predictably in one place, and with
            the visual and technical context you need to resolve bugs or action
            the feedback. Easy for users, easy for you.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Userback_Collect_1.webp">
        <TextCol header="Stop pushing">
          <p className="font-bold">
            Start ‘pulling in’ feedback rather than ‘pushing out’ or chasing
            surveys to collect it.
          </p>
          <p>
            Chasing user needs and feedback at the required pace for the speed
            of business today is a nearly impossible task. Flip feedback from
            outbound to inbound with a healthy feedback channel of ideas,
            priorities, screen grabs and videos of the user’s experience.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          hasLine
          icon="/images/collect_javascript_1.webp"
          text="Customize how users give you feedback from inside your web applications."
          title="Javascript API"
          button="Discover Javascript API"
        />
        <ListItem
          hasLine
          icon="/images/collect_browser-extension.webp"
          text="Capture lightning-fast feedback from any web page with annotated screenshots and video recordings."
          title="Browser Extensions"
          button="Learn about extensions"
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/feedback-portal_1 (1).webp">
        <TextCol header="Hear more from users">
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

export default CaptureCollectItems
