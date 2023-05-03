/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

import ProductCard from "./ProductCard"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/user-feedback-for-product-managers_1 (1).webp">
        <TextCol
          header="Improve user satisfaction"
          items={[
            "Addresses user pain points directly",
            "Increase product relevancy",
            "Enhance usability and your product’s UX",
            "Build user trust",
            "Encourage loyalty",
          ]}
        >
          <p>
            Keep users happy and engaged by understanding what users like and
            dislike about product, need and want. Then make the right changes
            that to improve user satisfaction and reduce customer churn.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/roadmap_3 (1).webp">
        <TextCol
          header="Prioritize feature development"
          button="Learn more about Roadmapping"
        >
          <p>
            With limited resources, it’s important for Product Managers to
            prioritize which features to develop next. User feedback help’
            identify the features that are most important to your users,
            allowing you to focus development efforts with confidence.
          </p>
        </TextCol>
      </RowComponent>
      <ProductCard />
      <RowComponent imgUrl="/images/user-feedback-for-product-managers_2a.webp">
        <TextCol header="Increase user engagement">
          <p>
            Entice users back again and again, by delivering the features and
            functionality they need every time with validated product ideas.
            Build what they love and watch active users and session times
            skyrocket!
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/user-feedback-for-product-managers_2a.webp">
        <TextCol header="Nail that software accuracy KPI">
          <p>
            Find and fix more bugs faster through development, UAT, QA and
            post-release product phases. Improve accuracy with visual bug
            reports complete with system info and get straight to the heart of
            the problem.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/software-feature-request_1 (1).webp">
        <TextCol header="Never deprioritize feedback again">
          <p>
            Feedback has been a time-consuming and manual process for the
            longest time. Trying to continuously get user insights and feedback
            is often the first thing to go in favor of more pressing needs. Now
            you can maintain meaningful connections with your users with near
            zero effort.
          </p>
        </TextCol>
      </RowComponent>
      <ButtonComponent
        text="Make product management simpler - Start your free trial today"
        className="self-center"
      />
    </div>
  )
}

export default FixItems
