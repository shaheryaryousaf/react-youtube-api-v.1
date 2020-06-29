import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, selectedVideo }) => {
  const list = videos.map((video) => {
    return (
      <VideoItem
        selectedVideo={selectedVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="videos-list">{list}</div>;
};

export default VideosList;
