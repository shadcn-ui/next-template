/* eslint-disable tailwindcss/classnames-order */
import ContactUs from "@/components/ContactUs"
import Header from "@/components/Header"
import PagesHeader from "@/components/PagesHeader"

import AssignActionItems from "./AssignActionItems"

const index = () => {
  return (
    <div className="container">
      <PagesHeader
        buttonText="Start your risk free 14 day trial"
        h1="Feedback Lifecycle Phase Three"
        h2="Assign and action feedback"
        text="Seamlessly integrate feedback tasks into your existing workflows and assign them to team members to ensure new features and fixes are delivered with maximum efficiency and minimal frustration."
      />
      <div className="flex flex-col items-center mx-auto text-center max-w-[700px] gap-4 pb-32">
        <Header
          desktopSize={35}
          maxWidth={700}
          mobileSize={24}
          text="Move with greater speed, move with greater insight"
        />
        <p>
          Automatically synchronize user feedback with your workflows and enable
          software teams and developers to immediately turn insight into action
          with all the contextual and visual information they need. With all the
          information at your fingertips, you and your team can stop wasting
          precious time chasing up information or trying to reproduce issues.
        </p>
      </div>
      <div className="md:px-[10%] pb-32">
        <img src="/images/userback_Action.png" alt="" />
      </div>
      <AssignActionItems />
      <ContactUs />
    </div>
  )
}

export default index
