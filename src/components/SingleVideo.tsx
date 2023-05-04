import React from "react"

const SingleVideo = () => {
  return (
    <div className="flex flex-col py-16">
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
  )
}

export default SingleVideo
