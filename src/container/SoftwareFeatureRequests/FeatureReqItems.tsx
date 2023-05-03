/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center max-w-[900px] mx-auto gap-8">
        <h1 className="text-[32px] font-medium text-center">
          Cut out the guesswork
        </h1>
        <p className="text-center">
          If your product is going to meet the needs of users, you have to know
          what they want. The best people to tell you this are your users
          themselves! Engage your customer base to get understand what features
          they actually want so you can drive adoption, improve satisfaction and
          reduce churn.
        </p>
      </div>
      <RowComponent imgUrl="/images/software-feature-request_1.webp">
        <TextCol header="Give every user a voice">
          <p>
            When you collect user feedback you often only hear from those people
            who are highly passionate about your product — they really love it
            or they’re really frustrated. But just because someone is ‘shouting’
            louder than others doesn’t mean their feedback is more valid
            (although you may need to manage them more carefully)!
          </p>
          <p>
            Collecting diverse 360° user feedback creates greater opportunity
            for developing a Product Roadmap that meets the needs of a wider
            range of people, while strengthening user community. The easier you
            make it for users to provide feedback, the more comments and
            suggestions you’ll get to validate product decisions. At the same
            time these interactions will help to grow your user community.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/software-feature-request_2.webp">
        <TextCol header="Put user feedback where it counts">
          <p>
            Create effective feedback cycles by choosing a software feature tool
            capable of centralizing feedback and managing it – from collection
            to closure. Let users submit software feature feedback in seconds,
            screen and prioritize it and have it delivered directly to where you
            work through powerful integrations.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Bug-Tracking_3 (1).webp">
        <TextCol header="Integrate with your favorite tools" button="Check out all the integrations">
          <p>
            Userback can be easily integrated with the tools you already use and
            love, putting user feedback right at the heart of your team’s
            workflows and product development lifecycle. If you need to a
            specific integration you can design custom workflows with webhooks.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
