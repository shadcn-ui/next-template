/* eslint-disable tailwindcss/classnames-order */

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const FixItems = () => {
  return (
    <div className="flex flex-col gap-32 pb-32">
      <div className="flex flex-col items-center gap-4 sm:px-24 xl:px-64">
        <h1 className="text-[32px] font-medium text-center">
          We (honestly) love bug tracking
        </h1>
        <p className="text-center">
          That’s why we’re consistently rated as one of the world’s leading bug
          tracking platforms.
        </p>
        <img
          src="/images/Bug-Tracking.webp"
          alt="Bug-Tracking"
          className="max-w-[1000px] w-full"
        />
        <h1 className="text-[32px] font-medium text-center">
          Get the complete context for every bug
        </h1>
        <p className="text-center">
          Most developers will tell you that fixing bugs is a pain in the butt.
          Too often they receive ambiguous and incomplete reports, which means
          they have to waste precious time and effort chasing up more
          information before they can get started.
        </p>
        <p className="text-center">
          With Userback developers have immediate access to all the information
          that they need to replicate and resolve issues because users can
          submit complete and actionable bug reports along with supporting
          information. All relevant console, system and user data is
          automatically captured in the background.
        </p>
      </div>
      <RowComponent imgUrl="/images/Bug-Tracking_1.webp">
        <TextCol
          header="Bug reports your developers will love"
          items={[
            "Annotated Screen Shots",
            "Screen Capture Videos",
            "Audio Recordings",
            "Session Replays",
            "Console Logs",
            "Session Replays",
          ]}
        >
          <p>
            Every bug report comes with user commentary and system information
            that shows developers exactly what was happening when an issue
            arose:
          </p>
        </TextCol>
      </RowComponent>
      <RowComponent imgUrl="/images/Bug-Tracking_2.webp">
        <TextCol
          header="Save time and work smarter together"
          items={[
            "Custom Workflows",
            "Email & Chat Notifications",
            "User Permissions",
            "Assign Tasks",
            "Team Collaboration",
            "Filter Bugs, Feedback & more",
          ]}
        >
          <p>
            Userback helps teams collaborate by seamlessly integrating bug
            reports into your existing workflows. When a user reports a bug, you
            receive a real-time notification and can reply immediately to
            confirm the report has been received and to ask any further
            questions.
          </p>
          <p>
            Once you have assessed the information you can collaborate with your
            team to create actionable tasks, prioritize action, assign
            resources, track progress and confirm closure.
          </p>
        </TextCol>
      </RowComponent>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-[32px] font-medium">
          Designed to work the way you work
        </h1>
        <ListItemWrapper>
          <ListItem
            icon="/icons/Github-integration.webp"
            text="Automatically send visual bug reports to your GitHub repository."
            title="From app to repository, instantly"
            hasLine={false}
          />
          <ListItem
            icon="/icons/Gitlab-integration.webp"
            text="Streamline bug tracking by instantly sending visual bug reports as new issues in GitLab."
            title="Visual reports direct to developers"
            hasLine={false}
          />
          <ListItem
            icon="/icons/Jira-integration.webp"
            text="Save money on licenses by allowing your entire team to send visual bug reports directly into Jira."
            title="Save money, fix faster"
            hasLine={false}
          />
        </ListItemWrapper>
      </div>
      <RowComponent imgUrl="/images/Bug-Tracking_3.webp">
        <TextCol
          header="Do you rely on disconnected tools for managing bug reports?"
          items={[
            "Dozens of Native Integrations",
            "Zapier Integration",
            "Advanced Targeting",
            "Webhooks",
            "Javascript API",
            "Browser Extension",
          ]}
        >
          <p>
            If you still use emails, phone calls and spreadsheets to manage
            bugs, it’s time to look for an all-in-one solution like Userback.
          </p>
          <p>
            You can centralize all your bug report information and tasks in one
            easy-to-manage workspace. The highly customizable user interface can
            easily be integrated with your other project management processes
            and tools using:
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default FixItems
