/* eslint-disable tailwindcss/classnames-order */
import React, { useState } from "react"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { Pencil, PlayCircle, User, Users } from "lucide-react"

const VideosTabs: React.FC<{ type: 1 | 2 }> = ({ type }) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Tabs align="center" onChange={(index) => setTabIndex(index)} size={"md"}>
      <TabList borderBottom={type === 1 ? "0" : "1px solid #e1e1e1"}>
        <Tab
          borderBottom={"1px solid #e1e1e1"}
          mb={"-1px"}
          _selected={{ borderBottom: "3px solid #6042ec", color: "#6042ec" }}
        >
          <div className="flex flex-col items-center gap-2">
            {type === 1 ? <User /> : <PlayCircle />}
            <p>{type === 1 ? "User" : "Say it with video"}</p>
          </div>
        </Tab>
        <Tab
          borderBottom={"1px solid #e1e1e1"}
          mb={"-1px"}
          _selected={{ borderBottom: "3px solid #6042ec", color: "#6042ec" }}
        >
          <div className="flex flex-col items-center gap-2">
            {type === 1 ? <Users /> : <Pencil />}
            <p>{type === 1 ? "Team" : "Annotate on screen"}</p>
          </div>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel py={"16"}>
          <div className={`flex flex-col gap-10`}>
            {type === 2 && (
              <div className="flex flex-col items-center self-center gap-2 text-center max-w-[1280px]">
                <p className="font-medium text-[17px]">Launch faster with video feedback for UAT</p>
                <p>
                  Say goodbye to ambiguous, confusing feedback and say hello to
                  high-definition video feedback. Supported by full audio and
                  video screen capture, feedback has never been so fast, simple
                  or straightforward for developers to understand and action.
                  Let’s go video!
                </p>
              </div>
            )}
            <video
              width="1280"
              height="720"
              className="mx-auto"
              preload="auto"
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source
                src="https://userback.io/wp-content/uploads/2022/12/screen_annotation_u.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </TabPanel>
        <TabPanel py={"16"}>
          <div className="flex flex-col gap-10">
            {type === 2 && (
              <div className="flex flex-col items-center self-center gap-2 text-center max-w-[1280px]">
                <p className="font-medium text-[17px]">Speed up UAT cycles with screen annotation</p>
                <p>
                  Collect feedback with in-app or on-website screen capture and
                  annotation features. Deliver contextual images, supported by
                  written notes, directly to your UAT workflows for fast action
                  and approval.
                </p>
              </div>
            )}
            <video
              width="1280"
              height="720"
              className="mx-auto"
              preload="auto"
              loop={true}
              autoPlay={true}
              muted={true}
            >
              <source
                src="https://userback.io/wp-content/uploads/2022/12/screen_annotation_u.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default VideosTabs
