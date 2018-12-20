import React from "react";

const VideoItem = ({video, onVideoSelect}) => {

  return (
    <div onClick={() => onVideoSelect(video)} className="list item video">
      <div className="ui small image">
        <img 
          alt={video.snippet.title} 
          src={video.snippet.thumbnails.high.url} />
      </div>
      <div className="middle aligned content">
        <p className="header"> {video.snippet.title}</p>
      </div>
    </div>

  );
};

export default VideoItem;
