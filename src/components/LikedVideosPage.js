import React, { useContext } from "react";
import { VideoContext } from "../App";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import Head from "./Head";
import Sidebar from "./Sidebar";
export default function LikedVideosPage() {
  const { likedVideos, setLikedVideos } = useContext(VideoContext);
  console.log("liked", likedVideos);
  return (
    <>
      <Head />
      <Sidebar className="h-screen" />
      <div className="mt-32">
        {likedVideos.map((video) => (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} display="block" />{" "}
          </Link>
        ))}
      </div>
    </>
  );
}
