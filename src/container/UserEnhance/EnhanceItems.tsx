/* eslint-disable tailwindcss/classnames-order */

import ButtonComponent from "@/components/ButtonComponent"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const EnhanceItems = () => {
  return (
    <div className="flex flex-col gap-32">
      <RowComponent imgUrl="/images/feedback-for-enhancing_1.webp">
        <TextCol header="Improve UX">
          <p>
            Gather general feedback from users on their experiences with your
            app or website. Identify what they struggle to use or understand and
            give your product teams and front-end developers a complete view of
            how to better meet user needs and expectations.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/feedback-for-enhancing_2.webp">
        <TextCol header="Build a community">
          <p>
            Foster and grow an engaged, committed product community by creating
            a central location for suggestions, commentary and voting. Give
            users a voice, a sense of ownership and build evangelists who can
            help to create new leads and sell.
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/roadmap_3 (2).webp">
        <TextCol
          header="Validate product ideas and decisions"
          button="Discover product roadmapping with Userback"
        >
          <p>
            Don’t rely on guesswork when making key product decisions — listen
            to the people who actually pay for your product and who are the best
            people to tell you what they actually want. Turn their feedback into
            actionable insights that you can add to your Product Roadmap to
            enhance and improve your product with total confidence.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default EnhanceItems
