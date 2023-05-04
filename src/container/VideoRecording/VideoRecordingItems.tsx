/* eslint-disable tailwindcss/classnames-order */

import ListItem from "@/components/ListItem"
import ListItemWrapper from "@/components/ListItemWrapper"
import RowComponent from "@/components/RowComponent"
import TextCol from "@/components/TextCol"

const VideoRecordingItems = () => {
  return (
    <div className="flex flex-col gap-32 py-32">
      <RowComponent imgUrl="/images/video-recording_2.webp">
        <TextCol header="Draw on the screen as you explain an issue">
          <p>
            Create and deliver feedback fast without sacrificing any detail.
            Provide full video, audio and written notes for any issue or request
            your clients and users have. Get to the heart of feedback instantly
            and skip the clarification step.
          </p>
        </TextCol>
      </RowComponent>
      <ListItemWrapper>
        <ListItem
          hasLine
          icon="/icons/video-recording-icon_1.webp"
          text="Use video recording to help reduce the back-and-forth between your teams and users."
          title="Explain in your own words"
        />
        <ListItem
          hasLine
          icon="/icons/video-recording-icon_2.png"
          text="Avoid the headache of writing emails to explain issues – just show them."
          title="More detail, less confusion"
        />
      </ListItemWrapper>
      <RowComponent imgUrl="/images/video-recording_3.webp">
        <TextCol header="Add timestamp bookmarks to save valuable time">
          <p>
            Stay productive and jump straight to the action in any video
            submission with timestamps. Capture clicks, zoom actions, resizing,
            focus areas, imputes and more so you can find exactly what you’re
            looking for.
          </p>
        </TextCol>
      </RowComponent>
    </div>
  )
}

export default VideoRecordingItems
