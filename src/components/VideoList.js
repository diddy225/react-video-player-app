import React from "react";
import VideoItem from './VideoItem'

const VideoList = ({searchResults, onVideoSelect}) => {
  const videoList = searchResults.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} key={video.id.videoId} video={video}/>
  });  

  return (
    <div className="ui items">
      {videoList}
    </div>
  );
};

export default VideoList;
