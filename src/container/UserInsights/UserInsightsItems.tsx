/* eslint-disable tailwindcss/classnames-order */

import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const UserInsightsItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-24">
      <RowComponent imgUrl="/images/user-insights_1.webp">
        <TextCol header="Bolster feedback with user information">
          <p>
            When looking at feedback, it’s important to know who it’s coming
            from. Userback User Insights provides a seamless experience for your
            users so you can get the best feedback possible. Identify and append
            custom user data in existing feedback submissions by automatically
            attaching any data from your existing CRM tooling and attaching it
            to ticket submissions for deep insights and better action.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/User-Insights_1-1.png">
        <TextCol header="Simplify your collection process">
          <p>
            The more information you request, the less feedback you’ll receive.
            User Insights enriches data on the back end, so you only need to ask
            for the essential – Userback will automate everything else.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/User-Insights_2-1.png">
        <TextCol header="Make better product decisions with rich user insights">
          <p>
            Leverage your user data correctly to help you build better products.
            Group user feedback together by subscription tier and prioritize
            through user insights for maximum impact.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default UserInsightsItems
