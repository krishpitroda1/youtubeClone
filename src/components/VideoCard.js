import React from "react";

const VideoCard = ({ info, display, isWatchPage }) => {
  // console.log(info)
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div
      className={`p-2 m-2 w-auto ${display} shadow-lg ${
        isWatchPage ? "" : "h-96"
      } rounded-lg `}
    >
      <img
        className="roundend-lg h-32 my-auto p-1"
        alt="video"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
