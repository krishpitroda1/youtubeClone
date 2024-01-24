import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const havePadding = isMenuOpen ? "pl-64" : "pl-8";
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log("data", json);
    setVideos(json.items);
  };
  return (
    <div
      className={`grid grid-cols-5 sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 flex-wrap mt-40 ${havePadding}`}
    >
      {videos.map((video, id) => (
        <Link key={id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} display="block" />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
