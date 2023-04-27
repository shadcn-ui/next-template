import React from "react"

import RowComponent from "@/components/RowComponent"

import HomeItem from "./HomeItem"

const HomeItems = () => {
  return (
    <div className="flex flex-col pt-60 gap-60">
      <RowComponent imgUrl="/images/Userback-home_1.webp">
        <HomeItem
          buttonText="Explore Feedback Collection"
          color="#6042ec"
          header="Get visual in-app feedback ‘on the fly’"
          icon="/icons/icon-_COLLECTION.svg"
          person="Felipe L. CTO"
          quote="“Getting customer feedback is hard. Our customers used to send us a word file with a lot of disorganized information. With Userback they enter the project and they do all the feedback in the section it belongs.”"
          text="Let users submit bug reports, feature requests and general comments without leaving your platform, along with supporting screenshots, notes, videos and session replays."
          title="CAPTURE & COLLECT"
        />
      </RowComponent>
      <RowComponent imgUrl="/images/userback-homepage_3.webp">
        <HomeItem
          buttonText="Explore Feedback Collection"
          color="#ff4060"
          header="Get visual in-app feedback ‘on the fly’"
          icon="/icons/icon-_PRIORITIZE.svg"
          person="Felipe L. CTO"
          quote="“Getting customer feedback is hard. Our customers used to send us a word file with a lot of disorganized information. With Userback they enter the project and they do all the feedback in the section it belongs.”"
          text="Let users submit bug reports, feature requests and general comments without leaving your platform, along with supporting screenshots, notes, videos and session replays."
          title="ASSESS & PRIORITIZE"
        />
      </RowComponent>
      <RowComponent imgUrl="/images/homeapge_3.png">
        <HomeItem
          buttonText="Explore Feedback Collection"
          color="#ff8040"
          header="Get visual in-app feedback ‘on the fly’"
          icon="/icons/icon-_ASSIGN.svg"
          person="Felipe L. CTO"
          quote="“Getting customer feedback is hard. Our customers used to send us a word file with a lot of disorganized information. With Userback they enter the project and they do all the feedback in the section it belongs.”"
          text="Let users submit bug reports, feature requests and general comments without leaving your platform, along with supporting screenshots, notes, videos and session replays."
          title="ASSIGN & ACTION"
        />
      </RowComponent>
      <RowComponent imgUrl="/images/userback_closing-feedback.png">
        <HomeItem
          buttonText="Explore Feedback Collection"
          color="#ffc040"
          header="Get visual in-app feedback ‘on the fly’"
          icon="/icons/icon-_CLOSE.svg"
          person="Felipe L. CTO"
          quote="“Getting customer feedback is hard. Our customers used to send us a word file with a lot of disorganized information. With Userback they enter the project and they do all the feedback in the section it belongs.”"
          text="Let users submit bug reports, feature requests and general comments without leaving your platform, along with supporting screenshots, notes, videos and session replays."
          title="FOLLOW UP & CLOSE"
        />
      </RowComponent>
    </div>
  )
}

export default HomeItems
