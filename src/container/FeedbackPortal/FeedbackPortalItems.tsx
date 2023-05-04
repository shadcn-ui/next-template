/* eslint-disable tailwindcss/classnames-order */

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FeedbackPortalItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <RowComponent imgUrl="/images/feedback-portal_1.webp">
        <TextCol
          header="Provide a beautiful home for user suggestions and build trust with transparent product development"
          button="See Userback's own Feedback Portal"
        >
          <p>
            Building trust with your customers is essential to the success of
            any business. Earn that trust by being transparent in your product
            development process. Adopt user feedback and house it neatly in a
            public platform outlining your development process to build trust
            and create a thriving community willing to assist in your future
            product.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          icon="/icons/make-it-flow.png"
          text="Public, transparent product roadmaps and feature conversations build customer loyalty and reduce support burdens and churn."
          title="Build with your users at the center"
          hasLine
        />
        <ListItem
          icon="/icons/user-centered-development.png"
          text="Add custom branding, set up custom domains, and integrate with your existing workflows and tools."
          title="Make it your own. Make it your flow"
          hasLine
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/use-feedback-portal_1.png">
        <TextCol header="Turn feedback and product development into a conversation with your users">
          <p>
            Feedback is a two-way street. Userback’s Feedback Portal neatly
            houses feedback and turns submissions into conversations. Allow your
            user community to get involved, upvote your best user feedback
            suggestions and get engaged with your product beyond a monthly
            billing cycle. Gain valuable insights into how they use usage and
            perception of your product with ease.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FeedbackPortalItems
