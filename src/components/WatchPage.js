import React, { useEffect, useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import { BsHandThumbsUp } from "react-icons/bs";
import { BsHandThumbsDown } from "react-icons/bs";
import { VideoContext } from "../App";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);
  const [videoData, setData] = useState([]);
  const [liked, setLiked] = useState(false);
  const { likedVideos, setLikedVideos } = useContext(VideoContext);
  const searchParam = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getVideos();
  }, []);
  useEffect(() => {
    setData(videos?.filter((item) => item.id === searchParams.get("v")));
  }, [searchParam]);
  useEffect(() => {
    if (
      likedVideos.filter((video) => video.id === videoData[0]?.id).length === 0
    )
      setLiked(false);
    else setLiked(true);
  });
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    const video = json.items.filter(
      (item) => item.id === searchParams.get("v")
    );
    setData(video);
    setVideos(json.items);
  };

  return (
    <>
      <div className="grid grid-cols-[8fr_4fr] md:grid-cols-1 sm:grid-cols-1">
        <div className="px-5 mt-32">
          <iframe
            className="py-5 rounded-lg flex"
            width="100%"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="flex">
            <div className="py-5 px-1">
              <button
                className={
                  liked
                    ? `flex h-10 py-1 border border-black-500 w-20 bg-red-400 rounded-full`
                    : `flex h-10 py-1 border border-black-500 w-20 bg-gray-200 rounded-full`
                }
                onClick={() => {
                  if (
                    likedVideos.filter((video) => video.id === videoData[0].id)
                      .length === 0
                  ) {
                    setLikedVideos((prev) => {
                      return [...prev, videoData[0]];
                    });
                    setLiked(true);
                  }
                  console.log("liked", likedVideos);
                }}
              >
                <p className="px-2">Like</p>
                <BsHandThumbsUp className="h-6 w-5" />
              </button>
            </div>
            <div className="py-5 px-1">
              <button className="flex h-10 py-1 border border-black-500 w-20 bg-gray-200 rounded-full">
                <p className="px-1">Dislike</p>
                <BsHandThumbsDown className="h-7 w-5" />
              </button>
            </div>
            <div></div>
          </div>
          <div className="px-2 shadow-lg py-5 bg-gray-300 rounded-lg">
            <h1 className="font-bold">{videoData[0]?.snippet.title}</h1>
            <h1 className="font-bold">
              Views: {videoData[0]?.statistics.viewCount}
            </h1>
            <h1 className="w-full">
              Description: {videoData[0]?.snippet.description}
            </h1>
          </div>
          <CommentContainer />
        </div>
        <div className="mt-32">
          {videos.map((video, idx) => (
            <Link to={"/watch?v=" + video.id} key={idx}>
              <VideoCard
                key={video.id}
                info={video}
                display="flex"
                isWatchPage={true}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WatchPage;
