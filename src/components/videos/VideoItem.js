import React from "react";
import "./Videos.css";

const VideoItem = ({ video, selectedVideo }) => {
  return (
    <div className="video-item">
      <div className="row" onClick={() => selectedVideo(video)}>
        <div className="col-md-5">
          <img
            src={video.snippet.thumbnails.medium.url}
            className="img-fluid"
            alt={video.snippet.title}
          />
        </div>
        <div className="col-md-7">
          {video.snippet.title.substring(0, 30) + " ..."}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
